//
//  PhotoViewController.swift
//  Soccer_and_Football
//
//  Created by Alejandro Fernandez Gomez-Caminero on 28/5/23.
//

import UIKit

class PhotoViewController: UIViewController, UIImagePickerControllerDelegate, UINavigationControllerDelegate {
    
    
    @IBOutlet weak var titleLabel: UITextField!
    @IBOutlet weak var imageView: UIImageView!
    
    override func viewDidLoad() {
        super.viewDidLoad()
        
        titleLabel.backgroundColor = UIColor(named: "LightGrey")
    }

    @IBAction func postPhoto(_ sender: Any) {
        let image = imageView.image
        let title = titleLabel.text


    }
    
    @IBAction func chooseImage(_ sender: Any) {
        let picker = UIImagePickerController()
        
        picker.allowsEditing = true
        
        picker.delegate = self
        
        present(picker, animated: true)
    }
    
    func imagePickerController(_ picker: UIImagePickerController, didFinishPickingMediaWithInfo info: [UIImagePickerController.InfoKey : Any]) {
        
        guard let image = info[.editedImage] as? UIImage else { return }
        
        imageView.image = image
        
        dismiss(animated: true)
    }
    
}

extension PhotoViewController {
    
    /*func doPost(image: UIImage?, title: String?, completion: @escaping (Result<Post, Error>) -> Void) {
        guard let url = URL(string: Constants.URLs.post) else {
            print("URL inválida")
            return
        }
        
        var request = URLRequest(url: url)
        request.httpMethod = "POST"
        request.addValue("Bearer \(Constants.Defaults.token)", forHTTPHeaderField: "Authorization")

        if let image = image {
            let imageData = image.pngData()
            request.httpBody = imageData
        }
        
        if let title = title {
            let titleData = title.data(using: .utf8)
            request.httpBody = titleData
        }
        
        URLSession.shared.dataTask(with: request) { (data, response, error) in
            if let error = error {
                print("Error en la solicitud POST: \(error)")
                return
            }
            
            guard let responseData = data else {
                return
            }
            
            do {
                let postResponse = try JSONDecoder().decode(Post.self, from: responseData)
                completion(.success(postResponse))
            } catch {
                completion(.failure(error))
            }
        }.resume()
    }*/
}
