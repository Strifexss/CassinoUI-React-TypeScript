interface Props {
    texto: string;
    icone: React.ReactNode
}

export default function links({icone, texto}:Props) {
    return(
        <div className="w-[90%] flex flex-row items-center gap-2 p-2 cursor-pointer rounded-md transition-[0.1s] hover:bg-padraoCinzaE"> 
            {icone}
            <h1 className="text-[white] text-[0.8rem] font-bold">{texto}</h1>
        </div>
    )
}