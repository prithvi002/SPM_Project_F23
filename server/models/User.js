export default class User {
    constructor(userID, username, password, email, firstName, lastName, registrationDate, lastLoginDate, userRole) {
        this.userID = userID;
        this.username = username;
        this.password = password;
        this.email = email;
        this.firstName = firstName;
        this.lastName = lastName;
        this.registrationDate = registrationDate;
        this.lastLoginDate = lastLoginDate;
        this.userRole = userRole;
    }
}
