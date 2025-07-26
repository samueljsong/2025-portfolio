import { useNavigate } from "react-router-dom"
import arrow from '../assets/whitearrow.svg'

export const Button = ({destination, text}) => {

    const navigate = useNavigate()
    
    const onButtonClick = () => {
        navigate(destination)
    }

    return(
        <div onClick={onButtonClick} 
        className=" 
            flex
            mt-4 py-3 px-4 
            bg-primary 
            text-white 
            rounded-4xl 
            w-[200px] 
            font-light 
            text-center 
            font-secondary 
            text-[0.75rem] 
            cursor-pointer
            align-items-center
            gap-2
            justify-center">
            <p>{text}</p>
            <img src={arrow} alt="" className=" h-4 fill-white"/>
        </div>
    )
}