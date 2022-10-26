import { createContext, useEffect, useState } from "react";
import { getAuth, onAuthStateChanged, signInWithPopup} from "firebase/auth";
import app from '../../firebase/FirebaseInit';


export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);

    // Google Login
   const googleSignIn = (provider )=>{
        return signInWithPopup(auth, provider)
   }

   useEffect(()=>{
        const unsubcribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser)
        });
        return ()=>{
            unsubcribe();
        }
    },[])

    // const user = {displayName : "mzhdipu"}

    const authInfo = {user, googleSignIn}

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;