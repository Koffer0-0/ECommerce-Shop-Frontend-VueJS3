import {GetMyDetails, SignIn, SignUp} from "@/api/auth";
import {ref} from "vue";

export function useAuth(){
    const user = ref()
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

    const accountDetails = async () => {
        try {
            const user = await GetMyDetails()
        } catch (err) {
            console.log(err)
        }
    }
    return {
        user,
        handleRegister,
        handleLogin,
        accountDetails
    }
}