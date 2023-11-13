import {SignIn, SignUp} from "@/api/auth";

export function useAuth(){

    const handleLogin = async (payload) => {
        try {
            return await SignIn(payload)
        } catch (err) {
            if (process.env.NODE_ENV === 'development') {
                console.log(err);
            }
        }
    }
    const handleRegister = async (payload) => {
        try {
            return await SignUp(payload)
        } catch (err) {
            if (process.env.NODE_ENV === 'development') {
                console.log(err);
            }
        }
    }

    return {
        handleRegister,
        handleLogin
    }
}