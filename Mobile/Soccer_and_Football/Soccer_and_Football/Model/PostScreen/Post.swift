//
//  Post.swift
//  Soccer_and_Football
//
//  Created by Alejandro Fernandez Gomez-Caminero on 1/6/23.
//

// MARK: - Post
struct Post: Codable {
    let id: Int
    let image, title, author, upload: String
    let comments: [Comment]
}

// MARK: - Comment
struct Comment: Codable {
    let id: Int
    let content, author, upload: String
}
