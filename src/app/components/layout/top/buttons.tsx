interface Props {
    texto: string;
    color:  "orangeButton" | "blueButton" 
}

export default function Button({texto, color}:Props) {
    return(
        <div className={`w-[5rem] h-full ${
            color === "orangeButton" ? "bg-orangeButton" : "bg-blueButton"
          } rounded-md flex justify-center items-center`}>
            <h1 className="text-[white] font-bold cursor-pointer">
                {texto}
            </h1>
        </div>
    )
}