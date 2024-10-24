
import './Hero.css'
const AnimationTexts = () => {
    
    const textList = [
        {
            id: 1,
            text: 'Decentralized Storage',
        },
        {
            id: 2,
            text: 'AI Inferencing',
        },
        {
            id: 3,
            text: 'Edge Computing',
        },
        {
            id: 4,
            text: 'IoT Solutions',
        },
    ];

    return (
        <ol className='text-white z-10 inline-block text-left list-none h-[33px] leading-[33px] overflow-hidden'>
            {
                textList.map((item)=>(
                    <li className="animate-text" key={item.id}><span className='font-inter font-[400] md:font-[600] text-[14px] md:text-[20px] leading-[33px] inline-block'>{item.text}</span></li>
                ))
            }
        </ol>
    )
  
}

export default AnimationTexts