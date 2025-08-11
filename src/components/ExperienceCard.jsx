import aldergrove from '../assets/alder.png'
import ra from '../assets/ra-tertiary.png'

export const ExperienceCard = ({title, position, startDate, endDate, image}) => {

    return(
        <div className=" flex w-[100%] gap-4">
            <div className=' w-14 h-14 flex justify-center items-center rounded-xl bg-background shadow-md'>
                <img className='w-[90%] h-[90%] rounded-xl' src={image} alt="" />
            </div>
            <div>
                <h3 className='font-medium text-xl text-primary squish'>{title}</h3>
                <h4 className=' font-extralight text-[1.1rem] text-primary squish'>{position}</h4>
                <div className=' flex gap-3 mt-4 items-center'>
                    <h5 className=' font-mono text-[0.9rem] text-tertiary'>{startDate}</h5>
                    <img className=' w-[1.3rem] h-[1rem]' src={ra} alt="" />
                    <h5 className=' font-mono text-[0.9rem] text-tertiary'>{endDate}</h5>
                </div>
            </div>

        </div>
    )
}