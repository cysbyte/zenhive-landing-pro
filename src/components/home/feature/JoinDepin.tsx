
import nft1 from '../../../assets/home/join-depin/nft1.svg'
import nft2 from '../../../assets/home/join-depin/nft2.svg'
import sign from '../../../assets/home/join-depin/sign.svg'

const JoinDepin = () => {
    const data = [
        {
            id: 1,
            nftImage: nft1,
            title: 'Operator NFT',
            price: 599.95,
            desc: 'Take full ownership of a ZenHive device for greater rewards from actively running the ZenHive and higher referral commissions on Operator and Delegator NFT sales.'
        },
        {
            id: 2,
            nftImage: nft2,
            title: 'Delegator NFT',
            price: 29.95,
            desc: 'Gain fractional ownership in ZenHive for passive rewards and referral commissions on Delegator NFT sales. Start small and watch your earnings increase over time.'
        },
    ]

    const getPriceElement = (price: number) => {
        const arr = price.toString().split('.')
        return <div className=''>
            <span className='font-montserrat text-white text-[18px] md:text-[20px] leading-[36px]'>{arr[0]}.</span>
            {arr.length > 1 && <span className='font-montserrat text-white text-[14px] md:text-[16px] leading-[36px]'>{arr[1]}</span>}
            <span className='font-montserrat text-white text-[18px] md:text-[20px] leading-[36px'> USDT</span>
        </div>
    }

    return (
        <div className="w-full mt-5 md:mt-8 flex flex-col md:flex-row justify-start gap-8 md:gap-17">
            {
                data.map((item) => (
                    <div className='flex-1 flex flex-col gap-4 border-[1px] border-[#262626] px-4 py-4 rounded-2xl' key={item.id}>
                        <img src={item.nftImage} alt="" />
                        <h3 className='text-left font-montserratSemiBold font-[600] text-[20px] md:text-[24px] leading-[36px] text-white'>{item.title}</h3>
                        <div className='flex items-center justify-start gap-2'>
                            <h6 className='text-[#26B957] text-[16px] leading-[36px]'>-50%</h6>
                            <p className='inline-block'>{getPriceElement(item.price)}</p>
                        </div>
                        <p className='text-[#B3B3B3] text-left font-montserrat text-[14px] md:text-[18px] leading-[27px] border-b pb-4 border-[#262626]'>{item.desc}</p>
                        <div className='flex flex-col md:flex-row items-center gap-6'>
                            <button className='w-full md:w-auto bg-gradient-to-r from-[#3AE071] to-[#006F25] px-8 py-5 rounded-full text-white font-montserrat text-[14px] md:text-[18px] leading-[22px] cursor-pointer'>Buy Now</button>
                            {/* <button className='w-full md:w-auto bg-gradient-to-r from-[#3AE071] to-[#006F25] rounded-full text-white font-montserrat text-[14px] md:text-[18px] leading-[22px] tracking-wide cursor-pointer p-[2px]'
                            ><p className='bg-black px-8 py-5 rounded-full'>NFT Details</p></button> */}
                        </div>
                    </div>
                )
                )
            }

        </div>
    )
}

export default JoinDepin