import { Spade, Joystick } from "lucide-react"
export default function LinkButton() {
    return(
        <div className="w-[12rem] rounded-md flex flex-row justify-center items-center bg-padraoCinzaSC">
            <section 
            className="w-[50%] cursor-pointer text-[white] rounded-md h-full flex gap-2 justify-center items-center hover:bg-padraoCinzaE">
                <Spade color="white" className="w-4 h-4"/>
                <h1>Cassino</h1>
            </section>
            <section 
            className="w-[50%] cursor-pointer text-[white] rounded-md h-full flex gap-2 justify-center items-center hover:bg-padraoCinzaE">
                <Joystick color="white" className="w-4 h-4"/>
                <h1>Games</h1>
            </section>
        </div>
    )
}