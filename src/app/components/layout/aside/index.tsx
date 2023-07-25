"use client"
import Logo from "./logo"
import BigButton from "./bigButton"
import { Shapes } from "lucide-react"

export default function index() {
    return( 
        <aside className="hidden md:flex md:flex-col md:items-center w-[17vw] h-full bg-padraoCinzaC p-4">
           <Logo ClickArrow={() => console.log("Funcionou")}/>
           <BigButton icone={<Shapes color="white"/>} size="90%" texto="Task Hub" hasNotification notification={5}/>
        </aside>
    )
}