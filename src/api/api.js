import * as axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API-KEY": "0f89c708-8615-4b82-93cb-b0cd1481ac9a"
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
    getProfile(userId) {
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
    login(email, password, rememberMe = false, captcha = null) {
        return instance.post(`auth/login`, {email, password, rememberMe, captcha})
    },
    logout() {
        return instance.delete(`auth/login`)
    },
}

export const securityAPI = {
    getCaptchaUrl() {
        return instance.get('security/get-captcha-url')
    }
}

export const profileAPI = {

    getProfile(userId) {
        return instance.get(`profile/` + userId)
    },
    getUserStatus(userId) {
        return instance.get(`profile/status/` + userId)
    },
    updateStatus(status) {
        return instance.put(`profile/status/`, {status})
    },
    savePhoto(photoFile) {
        let formData = new FormData()
        formData.append('image', photoFile)
        return instance.put(`/profile/photo/`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
    },
    saveProfile(profile) {
        return instance.put(`profile`, profile)
    }
}
