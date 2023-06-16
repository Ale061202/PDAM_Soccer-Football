//
//  Player.swift
//  Soccer_and_Football
//
//  Created by Alejandro on 15/6/23.
//

struct PlayerResponse: Codable {
    let content: [Player]
}

struct Player: Codable {
    let id: Int
    let name: String
    let age: String
    let position: String
    let jerseyNumber: Int
    let height: Int
    let weight: Double
    let team: String
}
