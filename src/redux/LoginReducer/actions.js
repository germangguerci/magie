export const SIGN_IN = "signIn"

export const loginSignIn = payload => {
    return{
        type: SIGN_IN,
        payload
    } 
}