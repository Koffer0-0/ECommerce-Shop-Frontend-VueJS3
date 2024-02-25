import { getUserInfoByEmail, SignIn, SignUp} from "@/api/auth";
import {ref} from "vue";
import router from "@/router";

export function useAuth(){
    const user = ref()
    const handleLogin = async (payload) => {
        try {
            return await SignIn(payload)
        } catch (err) {
            return err.response.data
        }
    }
    const handleRegister = async (payload) => {
        try {
            return await SignUp(payload)
        } catch (err) {
            return err.response.data
        }
    }

    const accountDetails = async (email) => {
        try {
            return await getUserInfoByEmail(email)
        } catch (err) {
            console.log(err)
        }
    }

    const logout = () => {
        if (localStorage.getItem('access_token') !== null) {
            localStorage.removeItem('access_token')
        }
        router.push({path: '/'})
        location.reload()
    }

    return {
        user,
        logout,
        handleRegister,
        handleLogin,
        accountDetails,
    }
}