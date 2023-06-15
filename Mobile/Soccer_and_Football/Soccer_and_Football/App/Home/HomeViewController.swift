//
//  HomeViewController.swift
//  Soccer_and_Football
//
//  Created by Alejandro Fernandez Gomez-Caminero on 31/5/23.
//

import UIKit

class HomeViewController: UIViewController {
    
    @IBOutlet weak var tableView: UITableView!
    
    var all: [Post] = []
    var posts: [Post] = []
    
    var post: Post?
    
    override func viewDidLoad() {
        super.viewDidLoad()
        
        getPosts(with: Defaults.get(key: Constants.Defaults.token))
        
        
        tableView.dataSource = self
        tableView.delegate = self
        tableView.register(UINib(nibName: "HomeTableViewCell", bundle: nil), forCellReuseIdentifier: "HomeTableViewCell")
        
    }
    
}

extension HomeViewController {
    
    func getPosts(with token: String) {
        guard let url = URL(string: Constants.URLs.post) else {
            print("URL no encontrada")
            return
        }
        
        var request = URLRequest(url: url)
        request.addValue("Bearer \(token)", forHTTPHeaderField: "Authorization")
        
        URLSession.shared.dataTask(with: request) { data, response, error in
            if let error = error {
                print("Error al realizar la solicitud: \(error)")
                return
            }
            
            guard let data = data else {
                print("No se han recibido datos en la respuesta.")
                return
            }
            
            do {
                let decoder = JSONDecoder()
                let response = try decoder.decode(PostsResponse.self, from: data)
                let posts = response.content
                self.posts = posts
                self.all.append(contentsOf: self.posts)
                DispatchQueue.main.async {
                    self.updateTableView()
                }
            } catch {
                print("Error al analizar los datos de respuesta: \(error)")
            }
        }.resume()
    }
    
    /*func getImage(with token: String, imageURLString: String, completion: @escaping (UIImage?) -> Void) {
        guard let imageURL = URL(string: Constants.URLs.getImage + "/\(imageURLString)") else {
            print("URL no válida")
            completion(nil)
            return
        }
        
        var request = URLRequest(url: imageURL)
        request.addValue("Bearer \(token)", forHTTPHeaderField: "Authorization")
        request.httpMethod = "GET"
        
        URLSession.shared.dataTask(with: request) { data, response, error in
            if let error = error {
                print("Error al realizar la solicitud: \(error)")
                completion(nil)
                return
            }
            
            guard let response = response as? HTTPURLResponse, response.statusCode == 200 else {
                print("Respuesta de solicitud no válida")
                completion(nil)
                return
            }
            
            guard let data = data else {
                print("No se han recibido datos en la respuesta.")
                completion(nil)
                return
            }
            
            if let image = UIImage(data: data) {
                completion(image)
            } else {
                print("No se pudo crear la imagen desde los datos descargados")
                completion(nil)
            }
        }.resume()
    }*/
    
}

extension HomeViewController: UITableViewDelegate, UITableViewDataSource {
    func tableView(_ tableView: UITableView, numberOfRowsInSection section: Int) -> Int {
        return all.count
    }
    
    func tableView(_ tableView: UITableView, cellForRowAt indexPath: IndexPath) -> UITableViewCell {
        guard let cell = tableView.dequeueReusableCell(withIdentifier: "HomeTableViewCell", for: indexPath) as? HomeTableViewCell else { return UITableViewCell() }
        
        let post = self.all[indexPath.row]
        cell.commentHomeView.text = post.title
        cell.usernameHomeView.text = post.author
        
        return cell
    }
    
    
    func updateTableView() {
        tableView.reloadData()
    }
}

