
import icon1 from '../../../assets/home/join-depin/icon1.svg'
import icon2 from '../../../assets/home/join-depin/icon2.svg'

const JoinDepin = () => {
    const data = [
        {
            id: 1,
            icon: icon1,
            title: 'Become A Operator',
            desc: 'Own and run a full ZenHive device, and earn more by actively managing it. Operators get higher rewards for keeping the device online and contributing to the network.'
        },
        {
            id: 2,
            icon: icon2,
            title: 'Become A Delegator',
            desc: 'Gain passive earnings by purchasing fractional ownership via NFT or staking tokens. No need to manage a device - Operators handle the work.'
        },
    ]
    return (
        <div className="w-full mt-5 md:mt-0 flex flex-col md:flex-row justify-start gap-5 md:gap-17">
            {
                data.map((item) => (
                    <div className='flex-1 mt-0 md:mt-10 border-[1px] border-[#262626] px-5 md:px-12 rounded-[14px] text-start' key={item.id}>
                        <div className='flex w-full justify-between items-center border-[#262626] border-b py-1 md:py-4'>
                            <h3 className='font-montserrat font-[450] text-white text-[18px] md:text-[22px] leading-[22px] md:leading-[32px] tracking-wider'>{item.title}</h3>
                            {
                                item.id === 1 ?
                                    <img src={item.icon} alt='' /> :
                                    <div className="rounded-full bg-cover w-[74px] h-[74px] bg-[url('assets/home/key-features/feature-icon2.svg')] flex items-center justify-center">
                                        <img src={item.icon} alt='' />
                                    </div>
                            }
                        </div>
                        <p className='font-montserrat py-4 md:py-10 font-[400] text-[#B3B3B3] text-[18px] md:text-[20px] leading-[30px] tracking-normal'>{item.desc}
                        </p>
                    </div>
                ))
            }

        </div>
    )
}

export default JoinDepin