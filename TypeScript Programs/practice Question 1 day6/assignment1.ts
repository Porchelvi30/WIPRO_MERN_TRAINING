class User {
    username: string;
    password: string;

    constructor(username: string, password: string) {
        this.username = username;
        this.password = password;
    }
}

let user1 = new User("Porchelvi", "12245");

console.log("Username:", user1.username);
console.log("Password:", user1.password);