//
//  LoginRequest.swift
//  Soccer_and_Football
//
//  Created by Alejandro Fernandez Gomez-Caminero on 21/5/23.
//

import Foundation

// MARK: - LoginRequest
struct LoginRequest: Codable {
    let username, password: String?
}
