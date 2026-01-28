var User = /** @class */ (function () {
    function User(username, password) {
        this.username = username;
        this.password = password;
    }
    return User;
}());
var user1 = new User("Porchelvi", "12245");
console.log("Username:", user1.username);
console.log("Password:", user1.password);
