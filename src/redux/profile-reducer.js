import {profileAPI, UsersAPI} from "../api/api";

const ADD_POST = 'ADD-POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_STATUS = 'SET_STATUS';
const DELETE_POST = 'DELETE_POST';
const SET_PHOTO = 'SET_PHOTO'
const SAVE_PHOTO_SUCCESS = 'SAVE_PHOTO_SUCCESS'


let initialState = {
    posts: [
        {id: 1, message: 'You have car?', likeCounts: 0},
        {id: 2, message: "It's impossible, i dont have car", likeCounts: 28},
        {id: 3, message: "I have very good computer", likeCounts: 17},
        {id: 4, message: "You are stupid", likeCounts: 15},
    ],
    newPostBody: 'Введите значение',
    profile: null,
    status: "",
    // image: 'https://picjumbo.com/wp-content/uploads/alone-with-his-thoughts-1080x720.jpg',
    // image: 'http://i.mycdn.me/i?r=AzEPZsRbOZEKgBhR0XGMT1Rk808INxK2jCfqbGu1zdWuWKaKTM5SRkZCeTgDn6uOyic',
    large: '',
}

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            return {
                ...state,
                posts: [...state.posts, ({id: 5, message: action.newPostBody, likeCounts: 0})]
            }
        case DELETE_POST:
            return {
                ...state,
                posts: [...state.posts].filter(p => p.id !== action.idPost)
            }
        case SET_USER_PROFILE:
            return {...state, profile: action.profile}
        case SET_STATUS:
            return {
                ...state,
                status: action.status
            }
        case SET_PHOTO:
            return {
                ...state,
                image: action.image
            }
        case SAVE_PHOTO_SUCCESS:
            return {...state, profile: {...state.profile, photos: action.photos}}
        default:
            return state
    }
}

export const addPostCreator = (newPostBody) => ({type: ADD_POST, newPostBody})
export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile})
export const setStatus = (status) => ({type: SET_STATUS, status})
export const setPhoto = (image) => ({type: SET_PHOTO, image})
export const deletePost = (idPost) => ({type: DELETE_POST, idPost})
export const savePhotoSuccess = (photos) => ({type: SAVE_PHOTO_SUCCESS, photos})

export const getUserProfile = (userId) => async (dispatch) => {
    let response = await UsersAPI.getProfile(userId)
    dispatch(setUserProfile(response.data))
}
export const getStatus = (userId) => async (dispatch) => {
    let response = await profileAPI.getUserStatus(userId)
    dispatch(setStatus(response.data))
}
// export const getPhoto = (photo) => async (dispatch) => {
//     let response = await profileAPI.get(userId)
//     dispatch(setStatus(response.data))
// }
export const updateStatus = (status) => async (dispatch) => {
    let response = await profileAPI.updateStatus(status)
    if (response.data.resultCode === 0) {
        dispatch(setStatus(status))
    }
}
export const savePhoto = (file) => async (dispatch) => {
    let response = await profileAPI.savePhoto(file)
    if (response.data.resultCode === 0) {
        dispatch(savePhotoSuccess(response.data.data.photos))
    }
}


export default profileReducer;
