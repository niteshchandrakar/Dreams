import { Route, Routes } from "react-router-dom"
import { Signup } from "./Signup"
import { Login } from "./Login"
import { Posts } from "./Posts"
import { Patch } from "./Patch"
import { Adddreams } from "./Adddreams"


export const Allroutes=()=>{
    return(
        <Routes>
        <Route path="/" element={<Posts/>}/>
        <Route path="/add" element={<Adddreams/>}/>
        <Route path="/signup" element={<Signup/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/update/:postid" element={<Patch/>}/>
    </Routes>
    )
}