import * as axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API-KEY": "3bcb71df-359e-4275-b430-f7cbe2c6b7fb"
    }
})


export const UsersAPI = {
    getUsers(currentPage = 1, pageSize = 10) {      //запрос на пользователей
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => {
                    return response.data
                }
            )
    },
    getProfile(userId){
        // console.warn('Obsolote method.Please use profileAPI.getProfile(userId)')
        return profileAPI.getProfile(userId)
     },

    unFollow(userId = 1) {                     //запрос на отписку
        return instance.delete(`follow/ ` + userId,)
            .then(response => {
                return response.data
            })
    },
    follow(userId) {                                 //запрос на подписку
        return instance.post(`follow/` + userId,)
            .then(response => {
                return response.data
            })
    }
}
export const authAPI = {
    me() {                                            //запрос на авторизацию
        return instance.get(`auth/me`)
    },
    login(email, password, rememberMe = false) {
        return instance.post(`auth/login`,{email, password, rememberMe})
        },
    logout() {
        return instance.delete(`auth/login`)
    },
}
export const profileAPI = {

    getProfile(userId) {
        return instance.get(`profile/` + userId)
    },
    getUserStatus(userId){
        return instance.get(`profile/status/` + userId)
    },
    updateStatus(status){
        return instance.put(`profile/status/`,{status})
    },
    updatePhoto(image){
        return instance.put(`/profile/photo/`,{image})
    }
}
