import { Shapes } from "lucide-react";

interface Props {
    icone?: React.ReactNode;
    texto: string;
    hasNotification?: boolean;
    notification?: number;
}

export default function bigButton({icone, texto, hasNotification = false, notification}:Props) {
    const classe = `w-[90%] h-[2.5rem]  p-2 gap-4 flex flex-row items-center  bg-padraoCinzaSC rounded-md hover:bg-padraoCinzaE cursor-pointer transition-[0.1s]`
    return(
        <div
     className={classe}> 
            {icone}
            <h1 
            className={`text-[white] font-bold text-sm`}>
                {texto}
            </h1>
            {
                hasNotification &&
            <h1 
            className="bg-[red] font-bold flex justify-center items-center rounded-xl text-[white] text-sm w-[1.2rem]">
                {notification}
            </h1>
            }
        </div>
    )
}