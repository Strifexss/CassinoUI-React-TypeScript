"use client"
import { ChevronLeft } from "lucide-react"

interface Props {
    ClickArrow: () => void;
}

export default function logo({ClickArrow}:Props) {
    return(
        <div className="w-full h-[10%] flex flex-row justify-around items-center">
            <h1 className="text-dourado font-bold text-[2rem]">
               Dove<span className="text-[white] text-[1rem]">Bet</span>
            </h1>
            <ChevronLeft color="white" onClick={ClickArrow}
            className="bg-padraoCinzaSC cursor-pointer rounded:xl"
            />
        </div>
    )
}