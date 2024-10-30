import Feature from '../components/home/Feature'
import Header from '../components/home/Header'
import Hero from '../components/home/Hero'
import Subscribe from '../components/home/Subscribe'
import Container from '../components/container/Container'

const Home1 = () => {
    return (
        <main className='overflow-x-hidden bg-black'>
            <Container>
                <div className="bg-[url('assets/home/bg-hero.png')] bg-gradient-radial from-[#000000E5] to-[#00000000] w-full bg-cover bg-center bg-no-repeat">
                    <div className='w-full h-full relative'>
                        <div className='w-full h-full absolute left-0 top-0 bg-gradient-to-b from-[#00000000] to-[#000000BD]'></div>
                        <Header />
                        <Hero />
                    </div>
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