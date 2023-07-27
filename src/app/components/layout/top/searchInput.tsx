import { Search } from "lucide-react"

export default function serchInput() {
    return(
        <div className="bg-padraoCinzaSC overflow-hidden rounded-md w-[15rem] text-[white] px-4 flex flex-row justify-center items-center">
            <div 
                contentEditable 
                className="w-full h-full outline-none"
                >
            </div>
            <Search color='white' className="w-4 h-4 cursor-pointer"/>
        </div>
    )
}