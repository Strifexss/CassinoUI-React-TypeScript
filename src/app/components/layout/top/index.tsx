import SearchInput from "./searchInput"
import LinkButton from "./linkButton"
export default function index() {
    return(
    <div className="w-full h-[10%] py-4 px-20 flex flex-row justify-between bg-padraoCinzaC">
        <section className="h-full flex flex-row gap-2">
            <SearchInput/>
            <LinkButton/>
        </section>
        <section className="h-full flex flex-row gap-2">
            <SearchInput/>
            <LinkButton/>
        </section>
    </div>
    )
}