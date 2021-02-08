import {UsersAPI} from "../api/api";
import {updateObjectInArray} from "../components/utils/validators/objects helpers";

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'
const SET_USERS_TOTAL_COUNT = 'SET_USERS_TOTAL_COUNT'
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING'
const TOGGLE_IS_FOLLOWING_PROGRESS = 'TOGGLE_IS_FOLLOWING_PROGRESS'


let initialState = {
    users: [],
    pageSize: 6,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false,
    followingInProgress: []
}

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: updateObjectInArray(state.users, action.userId, 'id', {followed: true})
            }
        case UNFOLLOW:
            return {
                ...state,
                users: updateObjectInArray(state.users, action.userId, 'id', {followed: false})
            }
        case SET_USERS:
            return {...state, users: action.users}
        case SET_CURRENT_PAGE:
            return {...state, currentPage: action.currentPage}
        case SET_USERS_TOTAL_COUNT:
            return {...state, totalUsersCount: action.count}
        case TOGGLE_IS_FETCHING:
            return {...state, isFetching: action.isFetching}
        case TOGGLE_IS_FOLLOWING_PROGRESS:
            return {
                ...state,
                followingInProgress: action.isFetching
                    ? [...state.followingInProgress, action.userId]
                    : state.followingInProgress.filter(id => id !== action.userId)
            }
        default:
            return state
    }
}

export const followSuccess = (userId) => ({type: FOLLOW, userId}) //диспатч на подписку
export const unFollowSuccess = (userId) => ({type: UNFOLLOW, userId})//диспатч на отписку
export const setUsers = (users) => ({type: SET_USERS, users})//диспатч на пользователей
export const setCurrentPage = (currentPage) => ({type: SET_CURRENT_PAGE, currentPage})//диспатч на используемую страничку
export const setTotalCount = (totalUsersCount) => ({type: SET_USERS_TOTAL_COUNT, count: totalUsersCount}) //диспатч на колиство пользователей на страничке
export const toggleIsFetching = (isFetching) => ({type: TOGGLE_IS_FETCHING, isFetching})//диспатч проходит ли загрузка
export const toggleIsFollowingProgress = (isFetching, userId) => ({
    type: TOGGLE_IS_FOLLOWING_PROGRESS,
    isFetching,
    userId
})

export const requestUsers = (page, pageSize) => {
    return async (dispatch) => {

        dispatch(toggleIsFetching(true))
        dispatch(setCurrentPage(page))

        let data = await UsersAPI.getUsers(page, pageSize)
        dispatch(toggleIsFetching(false))
        dispatch(setUsers(data.items))
        dispatch(setTotalCount(data.totalCount))
    }
} //санки на пользователей

const followUnfollowFlow = async (dispatch, userId, apiMethod, actionCreator) => {

    dispatch(toggleIsFollowingProgress((true, userId)))
    let response = await apiMethod(userId)

    if (response.resultCode === 0) {
        dispatch(actionCreator(userId))
    }
    dispatch(toggleIsFollowingProgress(false, userId))
}


export const unFollow = (userId) => {
    return async (dispatch) => {
        await followUnfollowFlow(dispatch, userId, UsersAPI.unFollow.bind(UsersAPI), unFollowSuccess)
    }
} //санки на отписку
export const follow = (userId) => {
    return async (dispatch) => {
        await followUnfollowFlow(dispatch, userId, UsersAPI.follow.bind(UsersAPI), followSuccess)
    }
}//санки на подписку
export default usersReducer;
