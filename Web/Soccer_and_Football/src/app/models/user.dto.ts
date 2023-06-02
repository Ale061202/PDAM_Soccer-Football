export class UserResponse {
    username: string;
    avatar: string;
    firstName: string;
    email: string;
    lastName: string;
    phone: string;
    roles: string[];
    constructor(username: string, avatar: string, firstName: string,lastName: string, email: string, phone: string, roles: string[]){
        this.username = username;
        this.avatar = avatar;
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.phone = phone;
        this.roles = roles;
    }
}