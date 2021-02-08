import {getAuthUserData} from "./auth-reducer";


const INITIALIZED_SUCCESS = 'SET_INITIALIZED';

let initialState = {
    initialized: false,
    globalError:null
}

const appReducer = (state = initialState, action:any) => {
    switch (action.type) {
        case INITIALIZED_SUCCESS:
            return {
                ...state,
                initialized: true,
            }
        default:
            return state
    }
}
export const initializedSuccess = () => ({type: INITIALIZED_SUCCESS})


export const initializedApp = () => (dispatch:any) => {
    let promise = dispatch(getAuthUserData())
    Promise.all([promise])
        .then(()=>{
        dispatch(initializedSuccess())
    })
}


export default appReducer;
