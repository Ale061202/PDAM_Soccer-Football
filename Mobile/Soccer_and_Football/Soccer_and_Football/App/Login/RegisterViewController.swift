//
//  RegisterViewController.swift
//  Soccer_and_Football
//
//  Created by Alejandro on 18/6/23.
//

import UIKit

class RegisterViewController: UIViewController {
    
    
    @IBOutlet weak var avatarTextField: UITextField!
    @IBOutlet weak var phoneTextField: UITextField!
    @IBOutlet weak var passwordTextField: UITextField!
    @IBOutlet weak var emailTextField: UITextField!
    @IBOutlet weak var lastNameTextField: UITextField!
    @IBOutlet weak var firstNameTextField: UITextField!
    @IBOutlet weak var usernameTextField: UITextField!
    
    override func viewDidLoad() {
        super.viewDidLoad()
        
        emailTextField.keyboardType = .emailAddress
        
        phoneTextField.delegate = self
        
        self.navigationItem.setHidesBackButton(true, animated: true)
    }
    
    @IBAction func loginButtonTapped(_ sender: Any) {
        if let loginViewController = navigationController?.viewControllers.first(where: { $0 is LoginViewController }) {
            navigationController?.popToViewController(loginViewController, animated: true)
        }
    }
    
    @IBAction func registerButtonTapped(_ sender: Any) {
        guard let username = usernameTextField.text,let password = passwordTextField.text,let avatar = avatarTextField.text, let phoneText = phoneTextField.text, let phone = Int(phoneText),let firstName = firstNameTextField.text,let lastName = lastNameTextField.text,let email = emailTextField.text else {
            return
        }
        register(username: username, firstName: firstName, lastName: lastName, password: password, email: email, phone: phone, avatar: avatar) { result in
            switch result {
            case .success:
                DispatchQueue.main.async {
                    if let loginViewController = self.navigationController?.viewControllers.first(where: { $0 is LoginViewController }) {
                        self.navigationController?.popToViewController(loginViewController, animated: true)
                    }
                }
            case .failure(let error):
                DispatchQueue.main.async {
                    if let loginViewController = self.navigationController?.viewControllers.first(where: { $0 is LoginViewController }) {
                        self.navigationController?.popToViewController(loginViewController, animated: true)
                    }
                }
            }
        }
    }
}

extension RegisterViewController: UITextFieldDelegate {
    
    func textField(_ textField: UITextField, shouldChangeCharactersIn range: NSRange, replacementString string: String) -> Bool {
        if textField == phoneTextField {
            guard let text = textField.text else { return true }
            
            let newString = (text as NSString).replacingCharacters(in: range, with: string)
            let filteredText = newString.filter { $0.isNumber }
            
            let phoneNumberLengthLimit = 10
            if filteredText.count > phoneNumberLengthLimit {
                return false
            }
            
            textField.text = filteredText
            
            return false
        }
        
        return true
    }

    
    
    func register(username: String, firstName: String, lastName: String, password: String, email: String, phone: Int, avatar: String, completion: @escaping (Result<RegisterResponse, Error>) -> Void) {
        
        let registerRequest = RegisterRequest(username: username, avatar: avatar, password: password, firstName: firstName, lastName: lastName, phone: phone, email: email)
        guard let url = URL(string: Constants.URLs.register) else {
            return
        }
        
        var request = URLRequest(url: url)
        request.httpMethod = "POST"
        request.setValue("application/json", forHTTPHeaderField: "Content-Type")
        
        guard let requestData = try? JSONEncoder().encode(registerRequest) else {
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
                let registerResponse = try JSONDecoder().decode(RegisterResponse.self, from: responseData)
                completion(.success(registerResponse))
            } catch {
                completion(.failure(error))
            }
        }.resume()
    }
}
