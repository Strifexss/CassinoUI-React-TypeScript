"use client"
import Logo from "./logo"
import Links from "./links"
import BigButton from "./bigButton"
import { Shapes, CircleDollarSign, Gamepad, Tv, Circle, Star, Redo2, Headphones, Instagram, Send } from "lucide-react"


export default function index() {
    return( 
        <aside className="hidden md:flex md:flex-col md:items-center w-[17vw] h-full bg-padraoCinzaC p-4">
           <Logo ClickArrow={() => console.log("Funcionou")}/>
           <section className="w-full mt-4 flex flex-row flex-wrap gap-4 justify-center">
                <BigButton icone={<Shapes color="white"/>} texto="TaskHub" hasNotification notification={5}/>
                <BigButton icone={<CircleDollarSign color="white"/>} texto="CashBack"/>
            </section>
            <section className="m-6 w-full flex flex-col items-center gap-2 flex-wrap">
                <Links icone={<Gamepad color="white"/>} texto="All Games"/>
                <Links icone={<Tv color="white"/>} texto="Tv Games"/>
                <Links icone={<Circle color="white"/>} texto="Live Dealers"/>
                <Links icone={<Star color="white"/>} texto="Favourites"/>
                <Links icone={<Redo2 color="white"/>} texto="Last Games"/>
            </section>
            <section className="w-full h-full flex flex-col justify-end">
                <BigButton icone={<Headphones color="white"/>} texto="Live Support"/>
            </section>
        </aside>
    )
}