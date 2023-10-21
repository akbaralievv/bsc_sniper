import stopIcon from '../assets/BOT icons/icons8-icons-ios-16/icons8-stop-50.png'
import { BotService } from '../services/bot.service'


export const StopButton = () => {

    function onButtonClick() {
        BotService.stopBot()
    }



    return (
        <button onClick={onButtonClick} className='flex justify-around mx-auto p-4 text-white w-[90%] rounded-[1.4rem] bg-gradient-to-r from-[#ff7956] to-[#bb51f5] font-bold'> <span><img className='w-6' src={stopIcon} alt="play" /></span> <span className='text-sm opacity-75'>STOP BOT </span><span className='font-bold'>&gt;</span></button>
    )

}