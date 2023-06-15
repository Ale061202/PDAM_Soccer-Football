//
//  User.swift
//  Soccer_and_Football
//
//  Created by Alejandro Fernandez Gomez-Caminero on 28/5/23.
//

import Foundation

// MARK: - User
struct User: Codable {
    let username: String?
    let avatar: String?
    let firstName, email, lastName, phone: String?
    let roles: [String]?
}
