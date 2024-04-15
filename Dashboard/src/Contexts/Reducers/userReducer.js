export default function userReducer(userState , action){
    // this function acts upon action type and returns object would be assigned to state by dispatch
    switch (action.type){
        case "Login_Success" :{
            return {
                ...action.payload
            }
        }
    }
}