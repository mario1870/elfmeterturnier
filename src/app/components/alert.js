


export default function Alert(props){
    return(
        <div className="w-screen flex justify-center fixed top-0 left-0 ">
            <div className="bg-red-100 border border-red-400 text-red-700 py-3 w-screen text-center" role="alert">
                <strong className="font-bold">Achtung!</strong>
                <span className="block sm:inline">{props.text}</span>
            </div>
        </div>
    )
}