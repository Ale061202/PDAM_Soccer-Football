//
//  Player.swift
//  Soccer_and_Football
//
//  Created by Alejandro on 15/6/23.
//

struct PlayerResponse: Codable {
    let content: [Player]
}
struct TeamResponse: Codable {
    let content: [Team]
}
struct LeagueResponse: Codable {
    let content: [League]
}

struct Player: Codable {
    let id: Int?
    let name: String?
    let age: String?
    let position: String?
    let jerseyNumber: Int?
    let height: Int?
    let weight: Double?
    let team: Team?
    let country: String?
}

// MARK: - Team
struct Team: Codable {
    let id: Int?
    let teamName: String?
    let league: League?
}

// MARK: - League
struct League: Codable {
    let id: Int?
    let leagueName: String?

    enum CodingKeys: String, CodingKey {
        case id
        case leagueName = "league_name"
    }
}
