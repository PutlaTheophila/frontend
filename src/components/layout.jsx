import Navbar from "./navbar"
import Footer from "./footer"
import { Outlet } from "react-router-dom"

export default function Layout (){
    return(
    <div class='flex-col'>
        <Navbar/>
        <Outlet/>
        <Footer />
    </div>
    )

}