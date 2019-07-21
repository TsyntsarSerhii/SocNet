import *as axios from 'axios';


const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API-KEY": "529938aa-57d9-4972-8931-3e0ff8a9c218"
    },
});

export const usersAPI = {
    getUsers(currentPage, pageSize) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => {
                return response.data;
            })
    },
    follow(userId) {
        return instance.post(`follow/${userId}`, {}, {
        })
    },
    unfollow(userId) {
        return instance.delete(`follow/${userId}`, {
        })
    }
}

export const profileAPI = {
    getUsers(userId) {
        return (
            instance.get(`profile/` + userId)
                .then(response => {
                    return response.data;
                })
        )
    }
}
/*export const authAPI = {
    getUsers() {
        return (
            instance.get(`auth/me`)
                .then(response => {
                    return response.data;
                })
        )
    }
}*/



