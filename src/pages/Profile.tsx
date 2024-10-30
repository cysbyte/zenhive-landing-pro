import Header from '../components/home/Header'
import Subscribe from '../components/home/Subscribe'
import bgProfile from '../assets/profile/bg-profile.svg'
import avatar from '../assets/profile/avatar.svg'
import cup from '../assets/profile/cup.svg'
import Container from '../components/container/Container'
import { useWalletContext } from '../providers/WalletProvider'


const Profile = () => {
    const { account,  } = useWalletContext();
    return (
        <main className='overflow-x-hidden bg-black'>
            <Container>
                <Header />
                <img className='w-full' src={bgProfile} alt='' />
                <div className='px-10 md:px-24'>
                    <img className='-mt-12' src={avatar} alt='' />
                    <h4 className='font-montserrat my-8 text-white text-[30px] leading-[36px]'>{account}</h4>
                    <div className='px-10 md:px-24 py-10 bg-[#0A0A0A] rounded-xl flex flex-col gap-4 items-center justify-center '>
                        <img className='my-10' src={cup} alt=''/>
                        <h5 className='text-center font-montserrat text-[26px] text-white'>It looks like you don't own any NFTs yet.</h5>
                        <p className='text-center font-montserrat text-[20px] leading-[24px] text-white opacity-70'>Owning an NFT lets you earn commissions through ZenHive<br/>
                        operation and referral program.</p>
                        <button className='w-full mt-6 md:w-auto bg-gradient-to-r from-[#3AE071] to-[#006F25] px-8 py-5 rounded-full text-white font-montserrat text-[14px] md:text-[18px] leading-[22px] cursor-pointer'>Get NFT</button>
                    </div>
                </div>
                <Subscribe />
            </Container>


        </main>
    )
}

export default Profile