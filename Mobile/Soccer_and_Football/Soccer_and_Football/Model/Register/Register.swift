//
//  Register.swift
//  Soccer_and_Football
//
//  Created by Alejandro on 19/6/23.
//

struct RegisterRequest: Codable {
    let username: String
    let avatar: String
    let password, firstName, lastName: String
    let phone: Int
    let email: String

    enum CodingKeys: String, CodingKey {
        case username, avatar, password
        case firstName = "first_name"
        case lastName = "last_name"
        case phone, email
    }
}

struct RegisterResponse: Codable {
    let userID: String
    let username: String
    let avatar: String
    let firstName, lastName, email: String
    let phone: Int
    let token: String
    let roles: [String]

    enum CodingKeys: String, CodingKey {
        case userID = "id"
        case username, avatar, firstName, lastName, email, phone, token, roles
    }
}
