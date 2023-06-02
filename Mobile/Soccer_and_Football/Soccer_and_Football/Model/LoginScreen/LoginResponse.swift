//
//  LoginResponse.swift
//  Soccer_and_Football
//
//  Created by Alejandro Fernandez Gomez-Caminero on 21/5/23.
//

import Foundation

struct LoginResponse: Codable {
    let token: String?
    let refreshToken: String?
    
    enum CodingKeys: String, CodingKey {
        case token, refreshToken
    }
}
