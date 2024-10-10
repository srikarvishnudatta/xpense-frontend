import { createContext, useContext, useState } from "react";

export interface AuthContextType{
    userId:string;
    setId: (userId: string) => void;
}
const AuthContext = createContext<AuthContextType>({
    userId:'',
    setId: () => {}
});

export const AuthContextProvider = ({children} : {children: React.ReactNode}) => {
    const [userId, setUserId] = useState<string>(localStorage.getItem("userId") || '');
    function setId(userId: string){
        localStorage.setItem("userId", userId)
        setUserId(userId)
    }
    return <AuthContext.Provider value={{userId,setId }}>
        {children}
    </AuthContext.Provider>
}
const useAuth = () =>{
    return useContext(AuthContext)
}
export default useAuth;