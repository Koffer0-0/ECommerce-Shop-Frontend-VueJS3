import {SignIn} from "@/api/auth";

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
    const handleRegister = async (userId) => {
        try {
            return await SignIn()
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