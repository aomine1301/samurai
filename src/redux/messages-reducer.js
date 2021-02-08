const ADD_MESSAGES = 'ADD-MESSAGES';


let initialState = {
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
        {id: 4, message: 'By my cow'},
        {id: 5, message: 'By you stupid'},
        {id: 6, message: 'By my friend'},
    ],
    avatarMessage: ['https://cs9.pikabu.ru/post_img/big/2020/03/30/6/1585562132190522557.jpg',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQBxwhSu4_z0Cwonle76gSUvEYCMSeq2COK6w&usqp=CAU',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ4J5wYNonZcA8gE2ttD5wOIxOCDNOX7o8stQ&usqp=CAU',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQWtgDF6uNiJn4XE5QAt2fcZwoApJPGFxyEZw&usqp=CAU',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTzQQ5PyYmb7d1qCGTjaJBgjMCXv4wZ6dVKeA&usqp=CAU']
}

const messagesReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_MESSAGES:
            let text = action.newMessageBody
            return  {
                ...state,
                messages: [...state.messages, {id: 7,message: text}]
            }
        default:
            return state
    }
}

export const addMessagesCreator = (newMessageBody) => ({type: ADD_MESSAGES,newMessageBody})

export default messagesReducer;
