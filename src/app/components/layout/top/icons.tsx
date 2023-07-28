"use client"

interface Props {
    icone: React.ReactNode
}

export default function Icons({icone}:Props) {
    return(
        <div className="bg-padraoCinzaE rounded-full h-full flex justify-center items-center p-4 cursor-pointer">
            {icone}
        </div>
    )
}