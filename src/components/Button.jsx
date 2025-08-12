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
            group
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
            justify-center
            hover:bg-secondary
            transition-colors
            duration-200">
            <p>{text}</p>
            <img src={arrow} alt="" className=" h-4 fill-white group-hover:translate-x-1.5 duration-200"/>
        </div>
    )
}