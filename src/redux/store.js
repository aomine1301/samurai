import profileReducer from "./profile-reducer";
import messagesReducer from "./messages-reducer";
import sidebarReducer from "./sidebar-reducer";


let store = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: 'You have car?', likeCounts: 0},
                {id: 2, message: "It's impossible, i dont have car", likeCounts: 28},
                {id: 3, message: "I have very good computer", likeCounts: 17},
                {id: 4, message: "You are stupid", likeCounts: 15},
            ],
            newPostText: 'Введите значение'
        },
        messagesPage: {
            dialogs: [
                {id: 1, name: 'Sergey Zabara'},
                {id: 2, name: 'Sergey Tumanov'},
                {id: 3, name: 'Oleksandr Chugay'},
                {id: 4, name: 'Sergey Bulgakov'},
                {id: 5, name: 'Sergey Chernyh'},
                {id: 6, name: 'Oleksandr Davydov'},
                {id: 7, name: 'Maksym Matvienko'},
                {id: 8, name: 'Yuriy Bondarenko'},
                {id: 9, name: 'Grygoriy Grytcyna'},
            ],
            messages: [
                {id: 1, message: 'Hello, how are you?'},
                {id: 2, message: 'Where have you disappeared?'},
                {id: 3, message: 'Is everything okay with the wallpaper?'},
                {id: 4, message: 'By'},
                {id: 5, message: 'By'},
                {id: 6, message: 'By'},
            ],
            newMessages: 'Введите значение',
            avatarMessage: ['https://cs9.pikabu.ru/post_img/big/2020/03/30/6/1585562132190522557.jpg',
                'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQBxwhSu4_z0Cwonle76gSUvEYCMSeq2COK6w&usqp=CAU',
                'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ4J5wYNonZcA8gE2ttD5wOIxOCDNOX7o8stQ&usqp=CAU',
                'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQWtgDF6uNiJn4XE5QAt2fcZwoApJPGFxyEZw&usqp=CAU',
                'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTzQQ5PyYmb7d1qCGTjaJBgjMCXv4wZ6dVKeA&usqp=CAU']

        },
        newsPage: {},
        musicPage: {},
        settingsPage: {},
        sidebar: {

        }


    },
    _callSubscriber() {
        console.log('State changed')
    },

    getState() {
        return this._state
    },
    subscribe(observer) {
        this._callSubscriber = observer
    },

    dispatch(action) {

        this._state.profilePage = profileReducer(this._state.profilePage, action)
        this._state.messagesPage = messagesReducer(this._state.messagesPage, action)
        this._state.sidebar = sidebarReducer(this._state.sidebar, action)

        this._callSubscriber(this._state)

    },
}



export default store

/*window.store = store*/




