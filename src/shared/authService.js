
// this hook use for get and set token from localStorage.
// if you called useToken, this will return currenttoken or undefiend

class AuthService {
    static getToken() {
        console.log("get token.");
        return localStorage.getItem("x-access-token");
    }

    static setToken(tokenString) {
        console.log("set token.");
        localStorage.setItem("x-access-token", tokenString);
    }

    static removeToken() {
        console.log("remove token.");
        localStorage.removeItem("x-access-token");
    }

    static getUserId() {
        return localStorage.getItem("x-user-id");
    }

    static setUserId(tokenString) {
        console.log("set token.");
        localStorage.setItem("x-user-id", tokenString);
    }

    static removeUserId() {
        console.log("remove token.");
        localStorage.removeItem("x-user-id");
    }

    static getUserEmail() {
        return localStorage.getItem("x-user-email");
    }

    static setUserEmail(tokenString) {
        console.log("set token.");
        localStorage.setItem("x-user-email", tokenString);
    }

    static removeUserEmail() {
        console.log("remove token.");
        localStorage.removeItem("x-access-email");
    }

    static getCredential() {
        const token = AuthService.getToken();
        const userId = AuthService.getUserId();
        const userEmail = AuthService.getUserEmail();
        return { token, userId, userEmail };
    }

    static clearAll() {
        console.log("clear all.");
        localStorage.clear();
    }
}


export { AuthService };