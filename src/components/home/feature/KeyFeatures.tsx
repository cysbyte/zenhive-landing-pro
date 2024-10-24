import whatsapp1 from '../../../assets/home/key-features/whatsapp1.svg'
import featureIcon1 from '../../../assets/home/key-features/feature-icon1.svg'
// import featureIcon2 from '../../../assets/home/key-features/feature-icon2.svg'
import featureIcon3 from '../../../assets/home/key-features/feature-icon3.svg'
// import featureIcon4 from '../../../assets/home/key-features/feature-icon4.svg'
// import featureIcon5 from '../../../assets/home/key-features/feature-icon5.svg'
// import featureIcon6 from '../../../assets/home/key-features/feature-icon6.svg'
import icon2 from '../../../assets/home/key-features/icon2.svg'
import icon4 from '../../../assets/home/key-features/icon4.svg'
import icon5 from '../../../assets/home/key-features/icon5.svg'
import icon6 from '../../../assets/home/key-features/icon6.svg'

const KeyFeatures = () => {
    const data = [
        {
            id: 1,
            icon: featureIcon1,
            title: 'Heterogeneous Computing',
            desc: 'Dual processors deliver enhanced multi-tasking and real-time AI computation.',
        },
        {
            id: 2,
            icon: icon2,
            title: 'AI-Enhanced Efficiency',
            desc: 'Optimize AI tasks, improving speed and intelligence across multiple processes.',
        },
        {
            id: 3,
            icon: featureIcon3,
            title: 'Edge-Optimized Performance',
            desc: 'Accelerate real-time data handling, ideal for IoT and AI-powered systems.',
        },
        {
            id: 4,
            icon: icon4,
            title: 'Scalable Decentralization',
            desc: 'Easily scale to meet growing data storage and computational needs without limits.',
        },
        {
            id: 5,
            icon: icon5,
            title: 'Advanced Data Security',
            desc: 'Protect operations with encryption algorithms and secure data handling.',
        },
        {
            id: 6,
            icon: icon6,
            title: 'Energy-Efficient Processing',
            desc: 'Reduce energy use and cut operational costs with efficient processing.',
        },
    ]
    return (
        <div className='flex flex-col gap-10 -mt-2 md:mt-0 lg:gap-0 lg:flex-row justify-between items-center'>
            <div className="hidden md:block bg-[url('assets/home/key-features/whatsapp2.svg')] bg-center w-[43rem] ml-60 lg:ml-0 h-auto mt-28">
                <img className='w-[43rem] -ml-[3rem] md:-ml-[7rem] mt-0' src={whatsapp1} alt='' />
            </div>
            <div className='flex-1 ml-0 lg:-ml-[13rem] w-full grid grid-cols-1 md:grid-cols-2 grid-rows-3 gap-x-16 gap-y-6 md:gap-y-9 mt-7 text-left font-dmsans tracking-wide'>
                {
                    data.map((item) => (
                        <div key={item.id}>
                            {
                                item.id === 1 || item.id === 3 ?
                                    <img src={item.icon} alt='' /> :
                                    <div className="rounded-full bg-cover w-[74px] h-[74px] bg-[url('assets/home/key-features/feature-icon2.svg')] flex items-center justify-center">
                                        <img src={item.icon} alt='' />
                                    </div>
                            }
                            <h3 className='my-1 md:my-3 font-montserratSemiBold font-[600] text-white text-[18px] leading-[26px]'>{item.title}</h3>
                            <p className='font-inter font-light text-[#B3B3B3] text-base leading-[26px]'>{item.desc}</p>
                        </div>
                    ))
                }
            </div>

        </div>

    )
}

export default KeyFeatures