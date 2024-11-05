import Container from '../container/Container'
import Features from './feature/Features'
import JoinDepin from './feature/JoinDepin'
import KeyFeatures from './feature/KeyFeatures'
import milky1 from '../../assets/home/milky1.svg'
import milky2 from '../../assets/home/milky2.svg'
import PoweredBy from './PoweredBy'

const Feature = () => {
  return (
    <Container>
      <div className='px-5 lg:px-24 py-10 md:py-14 text-center relative'>
        <img className='absolute left-0 top-[38rem] ' src={milky1} alt=''/>
        <img className='absolute left-2 top-[66rem] ' src={milky2} alt=''/>
        <h2 className='hidden md:block font-montserratBold font-[550] mt-16 text-[30px] md:text-[48px] leading-[52px] tracking-[-0.6px] text-[#1ED760]'>ZenHive Mass Commercial Adoption</h2>
        <h2 className='block md:hidden text-left font-montserratBold font-[550] mt-6 text-[22px] leading-[28px] tracking-[-0.6px] text-[#1ED760]'>ZenHive Mass <br/>Commercial Adoption</h2>
        <Features />
        <h2 className='hidden md:block mt-40 font-montserratBold font-[550] text-[30px] md:text-[48px] leading-[52px] tracking-[-0.6px] text-[#1ED760]'>ZenHive’s Key Features</h2>
        <h2 className='block md:hidden text-left mt-10 font-montserratBold font-[550] text-[22px] leading-[28px] tracking-[-0.6px] text-[#1ED760]'>ZenHive’s <br/>Key Features</h2>
        <KeyFeatures />
        <PoweredBy/>
        <div id="section_nft">
        <h2 className='hidden md:block mt-20 md:mt-24 '><span className='text-white font-[500] text-[38px] leading-[48px] tracking-[-0.4px] font-montserrat'>Join the DePIN Revolution</span><span className='block font-montserratBold font-[500] text-[48px] leading-[65px] tracking-[-0.4px] text-[#1ED760]'>Select Your ZenHive Role Now!</span> </h2>
        </div>
        <h2 className='block md:hidden text-left mt-10 md:mt-20 font-montserratBold font-[500] text-[22px] leading-[28px] tracking-[-0.4px] text-[#1ED760]'>Join the DePIN Revolution:<br/> Select Your ZenHive <br/>Role Now!</h2>
        <JoinDepin />
      </div>
    </Container>
  )
}

export default Feature