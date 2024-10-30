import computer from '../../../assets/home/key-features/computer.svg'
import icon1 from '../../../assets/home/key-features/icons/icon1.svg'
import icon2 from '../../../assets/home/key-features/icons/icon2.svg'
import icon3 from '../../../assets/home/key-features/icons/icon3.svg'
import icon4 from '../../../assets/home/key-features/icons/icon4.svg'
import icon5 from '../../../assets/home/key-features/icons/icon5.svg'
import icon6 from '../../../assets/home/key-features/icons/icon6.svg'

const KeyFeatures = () => {
    const data = [
        {
            id: 1,
            icon: icon1,
            title: 'Swarm Node Ready',
            desc: 'Scale seamlessly with Swarm nodes for fast, decentralized data handling',
        },
        {
            id: 2,
            icon: icon2,
            title: 'Peaq DID',
            desc: "Enable secure, self-sovereign digital identities with Peaq's decentralized ID.",
        },
        {
            id: 3,
            icon: icon3,
            title: 'AI Optimization',
            desc: 'Boost efficiency with AI-driven insights and performance enhancements',
        },
        {
            id: 4,
            icon: icon4,
            title: 'IPFS',
            desc: 'Store and retrieve data without central servers using IPFS.',
        },
        {
            id: 5,
            icon: icon5,
            title: 'Universal Chain Delegation',
            desc: 'Delegate Seamlessly across multiple blockchains without barriers.',
        },
        {
            id: 6,
            icon: icon6,
            title: 'Energy-Efficient',
            desc: 'Reduce energy use and cut operational costs with efficient processing.',
        },
    ]
    return (
        <div className='flex flex-col gap-10 -mt-4 md:-mt-20 lg:gap-0 lg:flex-row justify-between items-center'>
            {/* <div className="hidden md:block bg-[url('assets/home/key-features/whatsapp2.svg')] bg-center w-[43rem] ml-60 lg:ml-0 h-auto mt-28">
                <img className='w-[43rem] -ml-[3rem] md:-ml-[7rem] mt-0' src={whatsapp1} alt='' />
            </div> */}
            <img className='hidden md:block -ml-24 mt-24' src={computer} alt='' />
            <div className='flex-1 ml-0 lg:-ml-[20rem] w-full grid grid-cols-1 md:grid-cols-2 grid-rows-3 gap-x-16 gap-y-6 md:gap-y-9 mt-7 text-left font-dmsans tracking-wide'>
                {
                    data.map((item) => (
                        <div key={item.id}>
                            {
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