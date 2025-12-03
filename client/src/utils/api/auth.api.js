import api from ".";

export default {
    async login(username, password) {
        try {
            const response = api.post("/auth/login", {
                username,
                password
            });

            return response;
        } catch (error) {
            console.error(error)
        }

    },

    async logout() {
        try {
            api.post("/auth/logout", {
                username,
                password
            });
        } catch(error) {
            console.error(error)
        }
        
    }
}