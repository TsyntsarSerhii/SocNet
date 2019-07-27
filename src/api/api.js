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
    getProfile(userId) {
        return instance.get(`profile/` + userId)
    },
    getUserStatus(userId) {
        return instance.get(`profile/status/` + userId)
    },
    updateUserStatus(status) {
        return instance.put(`profile/status`, { status: status })
    }
}

export const authAPI = {
    me() {
        return instance.get(`auth/me`)
    }
}




