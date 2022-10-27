import { createContext, useEffect, useState } from "react";
import { getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup} from "firebase/auth";
import app from '../../firebase/FirebaseInit';


export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);

    // Google Login
   const googleSignIn = (provider )=>{
        return signInWithPopup(auth, provider)
   }

   // GitHub Login
   const gitHubSignIn = (provider )=>{
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


    const signIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    }
    // const user = {displayName : "mzhdipu"}

    const authInfo = {user, googleSignIn, gitHubSignIn, signIn}

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;