import { Shapes } from "lucide-react";

interface Props {
    icone: React.ReactNode;
    texto: string;
    hasNotification?: boolean;
    notification?: number;
    size: '90%' | '45%'
}

export default function bigButton({size, icone, texto, hasNotification = false, notification}:Props) {
    return(
        <div 
        className={`w-[${size}] h-[2.5rem] p-2 flex flex-row items-center gap-2 bg-padraoCinzaSC rounded-md hover:bg-padraoCinzaE cursor-pointer transition-[0.1s]`}> 
            {icone}
            <h1 
            className="text-[white] font-bold">
                {texto}
            </h1>
            {
                hasNotification &&
            <h1 
            className="bg-[red] font-bold flex justify-center items-center rounded-xl text-[white] text-[0.8rem] w-[1.2rem]">
                {notification}
            </h1>
            }
        </div>
    )
}