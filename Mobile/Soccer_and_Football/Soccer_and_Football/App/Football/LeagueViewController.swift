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
    var menuTeam: [Team] = []
    var menuLeague: [League] = []
    
    var league: League?
    var selectedTeam: Team?
    
    @IBOutlet weak var menuLeagues: UIButton!
    @IBOutlet weak var menuTeams: UIButton!
    @IBOutlet weak var tableView: UITableView!
    
    override func viewDidLoad() {
        super.viewDidLoad()
        
        getPlayers(with: Defaults.get(key: Constants.Defaults.token))
        getLeagues(with: Defaults.get(key: Constants.Defaults.token))
        getTeams(with: Defaults.get(key: Constants.Defaults.token), leagueID: league?.id ?? 0)
        
        tableView.dataSource = self
        tableView.delegate = self
        tableView.register(UINib(nibName: "PlayerTableViewCell", bundle: nil), forCellReuseIdentifier: "PlayerTableViewCell")
        
        menuTeams.isEnabled = false
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
    
    func configureLeaguesMenu() {
        var menuActions: [UIAction] = []
        menuLeague.forEach { item in
            if let name = item.leagueName, let leagueID = item.id {
                menuActions.append(UIAction(title: name, handler: { (_) in
                    self.menuLeagues.setTitle(name, for: .normal)
                    
                    self.menuTeams.isEnabled = true
                    self.menuTeams.setTitle("Equipos", for: .normal)
                    self.menuTeam.removeAll()
                    self.getTeams(with: Defaults.get(key: Constants.Defaults.token), leagueID: leagueID)
                    self.configureTeamsMenu()
                }))
            }
        }
        let menu: UIMenu = UIMenu(title: "", identifier: nil, options: [], children: menuActions)
        
        menuLeagues.menu = menu
        menuLeagues.showsMenuAsPrimaryAction = true
    }

    func configureTeamsMenu() {
        var menuActions: [UIAction] = []
        menuTeam.forEach { item in
            if let name = item.teamName, let _ = item.id {
                menuActions.append(UIAction(title: name, handler: { (_) in
                    self.menuTeams.setTitle(name, for: .normal)
                    self.selectedTeam = item
                    self.getPlayers(with: Defaults.get(key: Constants.Defaults.token))
                }))
            }
        }
        let menu: UIMenu = UIMenu(title: "", identifier: nil, options: [], children: menuActions)
        
        menuTeams.menu = menu
        menuTeams.showsMenuAsPrimaryAction = true
    }
    
    func updateTableView() {
        configureLeaguesMenu()
        configureTeamsMenu()
        tableView.reloadData()
    }
    
    func getTeams(with token: String, leagueID: Int) {
        guard let url = URL(string: Constants.URLs.team) else {
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
                let response = try JSONDecoder().decode(TeamResponse.self, from: data)
                self.menuTeam = response.content.filter { $0.league?.id == leagueID }
                DispatchQueue.main.async {
                    self.updateTableView()
                }
            } catch {
                print("Error al analizar los datos de respuesta: \(error)")
            }
        }.resume()
    }
    
    func getLeagues(with token: String) {
        guard let url = URL(string: Constants.URLs.league) else {
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
                let response = try JSONDecoder().decode(LeagueResponse.self, from: data)
                self.menuLeague = response.content
                DispatchQueue.main.async {
                    self.updateTableView()
                }
            } catch {
                print("Error al analizar los datos de respuesta: \(error)")
            }
        }.resume()
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
                let response = try JSONDecoder().decode(PlayerResponse.self, from: data)
                
                if let teamID = self.selectedTeam?.id {
                    self.player = response.content.filter { $0.team?.id == teamID }
                } else {
                    self.player = response.content
                }
                
                self.all = self.player
                DispatchQueue.main.async {
                    self.updateTableView()
                }
            } catch {
                print("Error al analizar los datos de respuesta: \(error)")
            }
        }.resume()
    }
}



