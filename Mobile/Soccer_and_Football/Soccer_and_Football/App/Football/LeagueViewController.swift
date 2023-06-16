//
//  LeagueViewController.swift
//  Soccer_and_Football
//
//  Created by Alejandro Fernandez Gomez-Caminero on 28/5/23.
//

import UIKit

class LeagueViewController: UIViewController {
    
    var all: [Player] = []
    var player: [Player] = []

    @IBOutlet weak var tableView: UITableView!
    
    override func viewDidLoad() {
        super.viewDidLoad()
        
        getPlayers(with: Defaults.get(key: Constants.Defaults.token))

        tableView.dataSource = self
        tableView.delegate = self
        tableView.register(UINib(nibName: "PlayerTableViewCell", bundle: nil), forCellReuseIdentifier: "PlayerTableViewCell")
    }
}

extension LeagueViewController: UITableViewDelegate, UITableViewDataSource {
    func tableView(_ tableView: UITableView, numberOfRowsInSection section: Int) -> Int {
        return all.count
    }
    
    func tableView(_ tableView: UITableView, cellForRowAt indexPath: IndexPath) -> UITableViewCell {
        guard let cell = tableView.dequeueReusableCell(withIdentifier: "PlayerTableViewCell", for: indexPath) as? PlayerTableViewCell else { return UITableViewCell() }
        
        let player = self.all[indexPath.row]
        cell.namePlayer.text = player.name
        cell.positionPlayer.text = player.position
        
        return cell
    }
    
    func updateTableView() {
        tableView.reloadData()
    }
    
    func getPlayers(with token: String) {
        guard let url = URL(string: Constants.URLs.player) else {
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
                let response = try decoder.decode(PlayerResponse.self, from: data)
                let players = response.content
                self.player = players
                self.all.append(contentsOf: self.player)
                DispatchQueue.main.async {
                    self.updateTableView()
                }
                /*// Aquí puedes usar los valores del jugador decodificado
                print("ID: \(player.id ?? 0)")
                print("Nombre: \(player.name ?? "")")
                print("Edad: \(player.age ?? "")")
                print("Posición: \(player.position ?? "")")
                print("Número de camiseta: \(player.jerseyNumber ?? 0)")
                print("Altura: \(player.height ?? 0)")
                print("Peso: \(player.weight ?? 0)")
                print("Equipo: \(player.team ?? "")")*/
                
            } catch {
                print("Error al analizar los datos de respuesta: \(error)")
            }
        }.resume()
    }


}

