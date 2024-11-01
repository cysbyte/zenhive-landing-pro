import React from 'react'
import Container from '../components/container/Container'
import Header from '../components/home/Header'
import Subscribe from '../components/home/Subscribe'
import { useWalletContext } from '../providers/WalletProvider'
const Empty = React.lazy(() => import('../components/share-and-earn/Empty'));
const Delegator = React.lazy(() => import('../components/share-and-earn/Delegator'));
const Operator = React.lazy(() => import('../components/share-and-earn/Operator'));
const Both = React.lazy(() => import('../components/share-and-earn/Both'));

const ShareAndEarn = () => {
    const { userType } = useWalletContext();
    return (
        <main className='overflow-x-hidden bg-black'>
            <Container>
                <Header />
                {
                    userType === 1 && <Empty />
                }
                {
                    userType === 2 && <Delegator />
                }
                {
                    userType === 3 && <Operator />
                }
                {
                    userType === 4 && <Both />
                }
                <Subscribe />
            </Container>
        </main>
    )
}

export default ShareAndEarn