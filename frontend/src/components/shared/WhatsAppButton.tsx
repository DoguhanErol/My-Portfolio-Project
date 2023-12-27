import 'animate.css'
//Images
import whatsappIcon from '../../assets/shared/whatsapp.png';
//Types
import { IWhatsappLink } from "./../../types";



const WhatsAppButton:React.FC<IWhatsappLink> = (props:IWhatsappLink) => {
  //Design
  return (
    <>
    <div className=''>
        <a href={props.wpLink} target='blank' className='fixed transition-all active:outline-offset-8 hover:scale-105 hover:animate-0 hover:border-green-50 shadow-green-500 shadow-2xl rounded-full border-2 border-green-500 outline-double  right-2 bottom-28 z-[9999] animate-[pulse_2s_infinite]'>
            <img src={whatsappIcon} alt="Whatsapp Button" />
        </a>
    </div>
    </>
  )
}

export default WhatsAppButton