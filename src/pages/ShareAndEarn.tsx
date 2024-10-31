import Container from '../components/container/Container'
import Header from '../components/home/Header'
import Subscribe from '../components/home/Subscribe'
import Both from '../components/share-and-earn/Both'
import Delegator from '../components/share-and-earn/Delegator'
import Empty from '../components/share-and-earn/Empty'
import Operator from '../components/share-and-earn/Operator'
import { useWalletContext } from '../providers/WalletProvider'

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