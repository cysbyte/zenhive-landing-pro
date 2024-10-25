import featureIcon1 from '../../../assets/home/features/feature-icon1.svg'
import featureIcon2 from '../../../assets/home/features/feature-icon2.svg'
import featureIcon3 from '../../../assets/home/features/feature-icon3.svg'
import shop from '../../../assets/home/features/shop.svg'

const Features = () => {

    const data = [
        {
            id: 1,
            icon: featureIcon1,
            title: 'Entertainment',
            desc: 'Enables direct-to-consumer content delivery by bypassing traditional channels. It enables geo-targeted promotions and tokenized experiences, allowing creators to engage directly with fans through NFTs and interactive content.'
        },
        {
            id: 2,
            icon: featureIcon2,
            title: 'Gaming',
            desc: 'Accelerates distribution with game launchpad to promote discovery through tokens and tracking user engagement. It integrates NFTs to ensure decentralized ownership of in-game assets, creating new economic models for the gaming industry.'
        },
        {
            id: 3,
            icon: featureIcon3,
            title: 'eCommerce',
            desc: 'Empowers merchants with real-time consumer data analytics for personalized marketing. Its location-based services optimize targeted ads, improve customer engagement, and provide insights that boost conversions.'
        },
    ]
    return (
        <div className='flex flex-col gap-10 lg:gap-[1.4rem] lg:flex-row w-full justify-between items-center mt-8 md:mt-11'>
            {
                data.map((item) => (
                    <div className='flex-1 bg-gradient-to-r from-[#4AFF86AF] to-[#00CD44B2] rounded-2xl p-[1px]'>
                        <div className='bg-black rounded-2xl'>
                            <div key={item.id} className='bg-white bg-opacity-5 flex-1 min-h-[390px] min-w-[335px] md:min-w-[384px] px-5 py-4 md:px-8 md:py-8 w-full rounded-2xl'>
                                {
                                    item.id < 3 ? 
                                    <img src={item.icon} alt='' /> :
                                    <div className="rounded-full bg-cover w-[62px] h-[62px] md:w-[74px] md:h-[74px] bg-[url('assets/home/features/feature-icon3.svg')] flex items-center justify-center">
                                        <img src={shop} alt=''/>
                                    </div>
                                }
                                <h5 className='text-left font-montserratBold font-[600] text-[20px] md:text-[22px] leading-[32px] text-[#FFFFFF] my-2 md:my-5'>{item.title}</h5>
                                <p className='text-left font-inter font-[300] text-[14px] md:text-[16px] leading-[26px] text-[#FFFFFF] opacity-60 tracking-wide md:tracking-wider'>{item.desc}</p>
                            </div>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}

export default Features