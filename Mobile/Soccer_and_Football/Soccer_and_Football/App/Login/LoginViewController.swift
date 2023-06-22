//
//  LoginViewController.swift
//  Soccer_and_Football
//
//  Created by Alejandro Fernandez Gomez-Caminero on 21/5/23.
//

import UIKit

enum Roles: String, Codable {
    case admin = "ADMIN"
    case user = "USER"
}

class LoginViewController: UIViewController {
    
    @IBOutlet weak var loginButton: UIButton!
    @IBOutlet weak var passwordTextField: UITextField!
    @IBOutlet weak var usernameTextField: UITextField!
    
    override func viewDidLoad() {
        super.viewDidLoad()
        
        usernameTextField.leftView = UIView(frame: CGRect(x: 0, y: 0, width: 18, height: usernameTextField.frame.height))
        usernameTextField.leftViewMode = .always
        passwordTextField.leftView = UIView(frame: CGRect(x: 0, y: 0, width: 18, height: passwordTextField.frame.height))
        passwordTextField.leftViewMode = .always
        usernameTextField.layer.cornerRadius = 12
        passwordTextField.layer.cornerRadius = 12
    }
    
    @IBAction func registerButtonTapped(_ sender: Any) {
        if let registerVc = self.navigationController?.viewControllers.first(where: { $0 is RegisterViewController }) {
            self.navigationController?.popToViewController(registerVc, animated: true)
        } else {
            guard let signUpVc = self.storyboard?.instantiateViewController(withIdentifier: "RegisterViewController") as? RegisterViewController else { return }
            self.navigationController?.pushViewController(signUpVc, animated: true)
        }
    }
    
    @IBAction func loginButtonTapped(_ sender: Any) {
        guard let username = usernameTextField.text,let password = passwordTextField.text else {
            return
        }
        self.login(username: username, password: password) { result in
            switch result {
            case .success(let loginResponse):
                guard let token = loginResponse.token else {
                    DispatchQueue.main.async {
                        let alert = UIAlertController(title: "Error de inicio de sesión", message: "La contraseña o el username no son correctos.", preferredStyle: .alert)
                        alert.addAction(UIAlertAction(title: "Cerrar", style: .default, handler: nil))
                        self.present(alert, animated: true, completion: nil)
                    }
                    return
                }
                Defaults.save(key: Constants.Defaults.token, value: token)
                self.getUser(with: token) { result in
                    switch result {
                    case .success(let user):
                        if let roles = user.roles, roles.contains(where: { $0 == Roles.user.rawValue }) {
                            Defaults.saveJson(user: user)
                            
                            DispatchQueue.main.async {
                                guard let mainViewController = UIStoryboard(name: "Main", bundle: nil).instantiateInitialViewController() else { return }
                                
                                self.navigationController?.setViewControllers([mainViewController], animated: true)                            }
                        } else {
                            DispatchQueue.main.async {
                                let alert = UIAlertController(title: "Error de inicio de sesión", message: "No existe ningún usuario con el rol de USER", preferredStyle: .alert)
                                alert.addAction(UIAlertAction(title: "Cerrar", style: .default, handler: nil))
                                self.present(alert, animated: true, completion: nil)
                            }
                        }
                    case .failure(let error):
                        DispatchQueue.main.async {
                            let alert = UIAlertController(title: "Error", message: "Vaya!! Ha habido un error vuelva a intentarlo más tarde.", preferredStyle: .alert)
                            alert.addAction(UIAlertAction(title: "Cerrar", style: .default, handler: nil))
                            self.present(alert, animated: true, completion: nil)
                        }
                        print("Error: \(error)")
                    }
                }
            case .failure(_):
                DispatchQueue.main.async {
                    let alert = UIAlertController(title: "Error", message: "Vaya!! Ha habido un error vuelva a intentarlo más tarde.", preferredStyle: .alert)
                    alert.addAction(UIAlertAction(title: "Cerrar", style: .default, handler: nil))
                    self.present(alert, animated: true, completion: nil)
                }
            }
        }
    }
}

extension LoginViewController{
    //MARK - Login function
    func login(username: String, password: String, completion: @escaping (Result<LoginResponse, Error>) -> Void) {
        let loginRequest = LoginRequest(username: username, password: password)
        guard let url = URL(string: Constants.URLs.login) else {
            return
        }
        
        var request = URLRequest(url: url)
        request.httpMethod = "POST"
        request.setValue("application/json", forHTTPHeaderField: "Content-Type")
        
        guard let requestData = try? JSONEncoder().encode(loginRequest) else {
            return
        }
        
        request.httpBody = requestData
        
        URLSession.shared.dataTask(with: request) { (data, response, error) in
            if let error = error {
                completion(.failure(error))
                return
            }
            
            guard let responseData = data else {
                return
            }
            
            do {
                let loginResponse = try JSONDecoder().decode(LoginResponse.self, from: responseData)
                completion(.success(loginResponse))
            } catch {
                completion(.failure(error))
            }
        }.resume()
    }
    
    func getUser(with token: String, completion: @escaping (Result<User, Error>) -> Void) {
        guard let url = URL(string: Constants.URLs.user) else {
            return
        }
        
        var request = URLRequest(url: url)
        request.addValue("Bearer \(token)", forHTTPHeaderField: "Authorization")
        
        URLSession.shared.dataTask(with: request) { data, response, error in
            if let error = error {
                completion(.failure(error))
                return
            }
            
            guard let responseData = data else {
                return
            }
            
            do {
                let userResponse = try JSONDecoder().decode(User.self, from: responseData)
                completion(.success(userResponse))
            } catch {
                completion(.failure(error))
            }
        }.resume()
    }
}
