//
//  Constants.swift
//  Soccer_and_Football
//
//  Created by Alejandro Fernandez Gomez-Caminero on 21/5/23.
//

struct Constants {
    
    struct URLs {
        static let baseUrl: String = "http://localhost:8080"
        static let login: String = "\(baseUrl)/auth/login"
        static let user: String = "\(baseUrl)/user/me"
        static let post: String = "\(baseUrl)/post/"
        static let getImage: String = "\(baseUrl)/download"
    }
    
    struct Defaults {
        static let token: String = "token"
        static let user: String = "user"
    }
    
}
