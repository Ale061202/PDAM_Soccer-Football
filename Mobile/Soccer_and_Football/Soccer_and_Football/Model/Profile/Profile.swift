//
//  Profile.swift
//  Soccer_and_Football
//
//  Created by Alejandro on 22/6/23.
//

struct ChangePasswordRequest: Codable {
    let oldPassword, newPassword, verifyPassword: String
}


