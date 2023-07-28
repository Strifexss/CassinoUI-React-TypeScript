import SearchInput from "./searchInput"
import LinkButton from "./linkButton"
import Button from "./buttons"
import Icons from "./icons"
import { MessageSquare, Flag } from "lucide-react"

export default function index() {
    return(
    <div className="w-full h-[10%] py-4 px-20 flex flex-row justify-between bg-padraoCinzaC">
        <section className="h-full flex flex-row gap-2">
            <SearchInput/>
            <LinkButton/>
        </section>
        <section className="flex h-full items-center justify-center gap-6">
            <section className="flex h-full items-center justify-center gap-2">
                <Button texto="Register" color="orangeButton"/>
                <Button texto="Login " color="blueButton"/>
            </section>
            <section className="flex h-full items-center justify-center gap-2">
                <Icons icone={<MessageSquare color="white"/>}/>
                <Icons icone={<Flag color="white"/>}/>
            </section>
        </section>
    </div>
    )
}