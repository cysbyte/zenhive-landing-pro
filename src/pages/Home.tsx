import Feature from '../components/home/Feature'
import Header from '../components/home/Header'
import Hero from '../components/home/Hero'
import Subscribe from '../components/home/Subscribe'
import Container from '../components/container/Container'

const Home1 = () => {
    return (
        <main className='overflow-x-hidden bg-black'>
            <Container>
                <div className='w-full h-full'>
                    <Header />
                    <Hero />
                </div>
            </Container>
            {/* <ClientLogos /> */}
            <Feature />
            {/* <NftLaunch/> */}
            {/* <JoinList />
            <GetLatest /> */}
            <Subscribe />

        </main>
    )
}

export default Home1