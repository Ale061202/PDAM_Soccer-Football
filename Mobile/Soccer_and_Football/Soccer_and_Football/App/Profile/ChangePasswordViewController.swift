//
//  ChangePasswordViewController.swift
//  Soccer_and_Football
//
//  Created by Alejandro on 21/6/23.
//

import UIKit

enum NetworkError: Error {
    case invalidURL
    case invalidRequestBody
    case invalidResponseData
    // Add more error cases as needed
}

class ChangePasswordViewController: UIViewController {

    @IBOutlet weak var confirmPassword: UITextField!
    @IBOutlet weak var newPassword: UITextField!
    @IBOutlet weak var oldPassword: UITextField!
    override func viewDidLoad() {
        super.viewDidLoad()

    }

    @IBAction func confirmButtonTapped(_ sender: Any) {
            guard let oldPassword = oldPassword.text, let newPassword = newPassword.text, let verifyPassword = confirmPassword.text else {
                return
            }
            
            if newPassword != verifyPassword {
                print("Las contraseñas no coinciden.")
                return
            }
            
        self.changePassword(with: Defaults.get(key: Constants.Defaults.token),oldPassword: oldPassword, newPassword: newPassword, verifyPassword: verifyPassword) { result in
                switch result {
                case .success(let userResponse):
                    Defaults.removeAll()
                    DispatchQueue.main.async {
                        let loginViewController = UIStoryboard(name: "Login", bundle: nil).instantiateViewController(withIdentifier: "LoginViewController")
                        self.navigationController?.setViewControllers([loginViewController], animated: true)
                    }
                case .failure(let error):
                    print("No se ha cambiado la contraseña")
                    print("Error: \(error)")
                }
            }
        }
}

extension ChangePasswordViewController {
    
    func changePassword(with token: String, oldPassword: String, newPassword: String, verifyPassword: String, completion: @escaping (Result<User, Error>) -> Void) {
        let changePasswordRequest = ChangePasswordRequest(oldPassword: oldPassword, newPassword: newPassword, verifyPassword: verifyPassword)
        guard let url = URL(string: Constants.URLs.changePassword) else {
            completion(.failure(NetworkError.invalidURL))
            return
        }
        
        var request = URLRequest(url: url)
        request.httpMethod = "PUT"
        request.setValue("application/json", forHTTPHeaderField: "Content-Type")
        
        guard let requestData = try? JSONEncoder().encode(changePasswordRequest) else {
            completion(.failure(NetworkError.invalidRequestBody))
            return
        }
        
        request.httpBody = requestData
        
        URLSession.shared.dataTask(with: request) { (data, response, error) in
            if let error = error {
                completion(.failure(error))
                return
            }
            
            guard let responseData = data else {
                completion(.failure(NetworkError.invalidResponseData))
                return
            }
            
            do {
                let user = try JSONDecoder().decode(User.self, from: responseData)
                completion(.success(user))
            } catch {
                completion(.failure(error))
            }
        }.resume()
    }
}
