import copy from '../../assets/copy.svg'
import PrimaryButton from '../button/PrimaryButton'
import nft2 from '../../assets/profile/nft/nft2.svg'
import nft3 from '../../assets/profile/nft/nft3.svg'

const Delegator = () => {
    return (
        <>
            <div className='mx-10 md:mx-24 bg-[#0B0B0B] p-8 mt-10 border-[#0E9A3D] border-[1px] rounded-xl'>
                <div className=''>
                    <h1 className='font-montserratSemiBold mx-auto text-left text-white text-[30px] leading-[40px]'>Current Level: Delegator</h1>
                    <div className='flex justify-between px-4 py-[0.35rem] rounded-full bg-[#212020] text-white font-montserrat text-[24px] w-[90%] my-5'>
                        <p className=''><span className='text-[#1ED760] font-montserratSemiBold'>Your Referral Link:</span> www.zenhive.com/link/XXdghdbeyu</p>
                        <div className='flex items-center'>
                            <img src={copy} alt="" />
                            <p>Copy link</p>
                        </div>
                    </div>
                    <p className='font-montserrat text-[20px] text-white leading-[20px] opacity-80'>Share your referral link to earn rewards on successful referrals!</p>
                </div>

                <div className='flex items-center justify-between py-7 mt-6 border-opacity-10 border-t border-b border-white'>
                    <div className='font-montserratSemiBold text-[30px] leading-[38px]'>
                        <p className='text-[#1ED760]'>Total Earning: 1000 USDT</p>
                        <p className='text-white mt-4'>Withdrawn: 600 USDT   Available: 400 USDT</p>
                    </div>
                    <PrimaryButton text='Withdraw' onClick={() => { }} />
                </div>


                <div className='flex items-start mt-8 gap-8 font-[22px] leading-[44px]'>
                    <img src={nft2} alt="" />
                    <div className='text-white font-montserratRegular text-[22px]'>
                        <p className='font-montserratSemiBold'>As a Delegator, you enjoy :</p>
                        <ul className='list-disc ml-8 opacity-80'>
                            <li>Enjoy fractional ownership in ZenHive devices with passive earnings.</li>
                            <li>Earn referral commissions on Delegator NFT sales.</li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className='mx-10 md:mx-24 bg-[#0B0B0B] p-8 mt-10 rounded-xl'>
                <h2 className='text-white font-montserratSemiBold text-[30px] leading-[33px]'>Become an Operator NFT to unlock greater benefits:</h2>
                <div className='flex items-start mt-8 gap-8 font-[22px] leading-[44px]'>
                    <img src={nft3} alt="" />
                    <div className='flex flex-col justify-between text-white font-montserratRegular text-[22px] h-[212px]'>
                        <ul className='list-disc ml-8 opacity-80'>
                            <li>
                                Take full control of ZenHive devices and earn higher rewards for active operation.
                            </li>
                            <li>Earn commissions on every referral, including both Operator and Delegator
                                NFT sales.
                            </li>
                        </ul>
                        <div className='flex justify-between items-center mt-auto'>
                            <p className='font-montserrat text-[30px] leading-[36px] text-white'>Price: <span className='font-montserratSemiBold'>599.95 USDT</span></p>
                            <PrimaryButton text='Buy Now' onClick={() => { }} />
                        </div>
                    </div>
                </div>

            </div>

        </>
    )
}

export default Delegator