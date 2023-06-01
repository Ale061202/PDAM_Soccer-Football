//
//  Defaults.swift
//  Soccer_and_Football
//
//  Created by Alejandro Fernandez Gomez-Caminero on 22/5/23.
//

import Foundation

class Defaults {
    
    static func save(key: String, value: String) {
        UserDefaults.standard.set(value, forKey: key)
    }
    
    static func save(key: String, value: Bool) {
        UserDefaults.standard.set(value, forKey: key)
    }
    
    static func save(key: String, value: Int) {
        UserDefaults.standard.set(value, forKey: key)
    }
    
    static func save(key: String, value: Double) {
        UserDefaults.standard.set(value, forKey: key)
    }
    
    static func saveJson(user: User) {
        if let encodedData = try? JSONEncoder().encode(user) {
            UserDefaults.standard.set(encodedData, forKey: "user")
        }
    }
    
    static func get(key: String) -> String {
        if let value = UserDefaults.standard.value(forKey: key) as? String {
            return value
        }
        return ""
    }
    
    static func getUser() -> User? {
        if let data = UserDefaults.standard.data(forKey: Constants.Defaults.user) {
            if let user = try? JSONDecoder().decode(User.self, from: data) {
                return user
            }
        }
        return nil
    }
    
    static func get(key: String) -> Bool {
        if let value = UserDefaults.standard.value(forKey: key) as? Bool {
            return value
        }
        return false
    }
    
    static func get(key: String) -> Int {
        if let value = UserDefaults.standard.value(forKey: key) as? Int {
            return value
        }
        return 0
    }
    
    static func get(key: String) -> Double {
        if let value = UserDefaults.standard.value(forKey: key) as? Double {
            return value
        }
        return 0
    }
    
    static func remove(key: String) {
        UserDefaults.standard.removeObject(forKey: key)
    }
    
    static func removeAll () {
        UserDefaults.standard.dictionaryRepresentation().keys.forEach({ key in
            remove(key: key)
        })
    }
}
