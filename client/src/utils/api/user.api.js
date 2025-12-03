import api from ".";

export default {
    async getMe() {
        try {
            const response = await api.get('/users/getme');
            const { user } = response.data;

            if (response.status == 404) {
                return null;
            }

            return user;
        } catch (error) {
            console.error(error)
        }
       
    }
}
