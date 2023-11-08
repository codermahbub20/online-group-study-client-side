import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import app from "../Firebase/firebase.config";
import axios from "axios";


export const AuthContext = createContext(null)
const auth = getAuth(app)

const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null)
    const [loading,setLoading] = useState(true)

    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const logIn = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password);
    }

    const logOut = () => {
        setLoading(true)
        return signOut(auth)
    }
    
    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {

            // const userEmail = currentUser?.email || user.email;
            // const loggedUser = {email: userEmail}

            setUser(currentUser)
            setLoading(false)

            // if(currentUser){
            //     axios.post('https://online-group-study-server-two.vercel.app/jwt',loggedUser,{withCredentials: true})
            //     .then(res =>{
            //         console.log(res.data)
            //     })
            // }else{
            //     axios.post('https://online-group-study-server-two.vercel.app/signnnout',loggedUser,{withCredentials: true})
            //     .then(res=>{
            //         console.log(res.data)
            //     })
            // }
        });
        return () => {
            unSubscribe();
        }
    }, [])


    const userInfo = {
        user,
        loading,
        createUser,
        logIn,
        logOut
    }

    return (
        <AuthContext.Provider value={userInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;