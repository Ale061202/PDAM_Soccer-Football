//
//  Post.swift
//  Soccer_and_Football
//
//  Created by Alejandro Fernandez Gomez-Caminero on 1/6/23.
//

struct PostsResponse: Codable {
    let content: [Post]
}

struct Post: Codable {
    let id: Int
    let image: String
    let title: String
    let author: String
    let upload: String
    let comments: [Comment]
}

struct Comment: Codable {
    let id: Int
    let content: String
    let author: String
    let upload: String
}
