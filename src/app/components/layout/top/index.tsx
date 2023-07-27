import SearchInput from "./searchInput"
import LinkButton from "./linkButton"
import Button from "./buttons"

export default function index() {
    return(
    <div className="w-full h-[10%] py-4 px-20 flex flex-row justify-between bg-padraoCinzaC">
        <section className="h-full flex flex-row gap-2">
            <SearchInput/>
            <LinkButton/>
        </section>
        <section>
            <Button texto="Register" color="orangeButton"/>
            <Button texto="Register" color="blueButton"/>
        </section>
    </div>
    )
}