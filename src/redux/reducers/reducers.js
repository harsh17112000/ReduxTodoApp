const Initial_State = {
    User_data: []
};

export const todoreducers = (state = Initial_State, action) => {
    switch (action.type) {
        case "ADD_DATA":
            return {
                ...state,
                User_data: [...state.User_data, action.payload]
            }

        case "RMV_DATA":
        const data = state.User_data.filter((e,k)=> k !== action.payload)
            return {
                ...state,
                User_data:data
            }
        
        case "UPDATE_DATA":
        const updatedata = state.User_data.map((e,k)=> k == action.d ? action.payload : e)
            return {
                ...state,
                User_data:updatedata
            }
        default :
            return state
    }
}