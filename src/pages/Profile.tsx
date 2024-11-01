import React from 'react'
import avatar from '../assets/profile/avatar.svg'
import bgProfile from '../assets/profile/bg-profile.svg'
import Container from '../components/container/Container'
import Header from '../components/home/Header'
import { useWalletContext } from '../providers/WalletProvider'

const EmplyNftList = React.lazy(() => import('../components/profile/EmplyNftList'));
const DelegatorNftList = React.lazy(() => import('../components/profile/DelegatorNftList'));
const OperatorNftList = React.lazy(() => import('../components/profile/OperatorNftList'));
const BothNftList = React.lazy(() => import('../components/profile/BothNftList'));

const Profile = () => {
    const { account, userType } = useWalletContext();

    return (
        <main className='overflow-x-hidden bg-black'>
            <Container>
                <Header />
                <img className='w-full' src={bgProfile} alt='' />
                <div className='px-10 md:px-24'>
                    <img className='-mt-[3.5rem]' src={avatar} alt='' />
                    <h4 className='font-montserrat my-8 text-white text-[30px] leading-[36px]'>{account}</h4>
                    {
                        userType === 1 && <EmplyNftList />
                    }
                    {
                        userType === 2 && <DelegatorNftList />
                    }
                    {
                        userType === 3 && <OperatorNftList />
                    }
                    {
                        userType === 4 && <BothNftList />
                    }
                </div>
            </Container>
        </main>
    )
}

export default Profile