const UNFOLLOW = 'UN-FOLLOW';
const FOLLOW = 'FOLLOW';
const SET_USERS = 'SET-USERS';

let initialState = {
    users: []
}

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW: {
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        debugger;
                        return {...u, followed: true}//копируем только тот объект с id и у него изменяем followed
                    }
                    return u; //если ничего не изменилось возвращаем просто копию
                })
            };
        }
        case UNFOLLOW: {
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: false} //копируем только тот объект с id и у него изменяем followed
                    }
                    return u; //если ничего не изменилось возвращаем просто копию
                })
            };
        }
        case SET_USERS: {
            debugger;
            return {...state, users: [...state.users, ...action.users]} // делаем копию друзей и дополняем их из action
        }
        default:
            return state;
    }
}
export const FollowCreateAction = (userId) => {
    return {type: FOLLOW, userId}
}
export const UnFollowCreateAction = (userId) => {
    return {type: UNFOLLOW, userId}
}
export const setUsersCreateAction = (users) => {
    return {type: SET_USERS, users}
}


export default usersReducer;
