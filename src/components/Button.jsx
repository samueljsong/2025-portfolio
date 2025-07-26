import { useNavigate } from "react-router-dom"

export const Button = ({destination, text}) => {

    const navigate = useNavigate()
    
    const onButtonClick = () => {
        navigate(destination)
    }

    return(
        <div onClick={onButtonClick} 
        className=" 
            mt-4 py-3 px-4 
            bg-primary 
            text-white 
            rounded-4xl 
            w-[200px] 
            font-light 
            text-center 
            font-secondary 
            text-[0.75rem] 
            cursor-pointer">
            {text}
        </div>
    )
}