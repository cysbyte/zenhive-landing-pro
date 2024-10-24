import Container from '../container/Container'
import Features from './feature/Features'
import JoinDepin from './feature/JoinDepin'
import KeyFeatures from './feature/KeyFeatures'
import milky1 from '../../assets/home/milky1.svg'
import milky2 from '../../assets/home/milky2.svg'

const Feature = () => {
  return (
    <Container>
      <div className='px-5 lg:px-24 py-10 md:py-14 text-center relative'>
        <img className='absolute -left-[1rem] top-[38rem] ' src={milky1} alt=''/>
        <img className='absolute left-2 top-[66rem] ' src={milky2} alt=''/>
        <h2 className='hidden md:block font-montserratBold font-[550] mt-6 text-[30px] md:text-[48px] leading-[52px] tracking-[-0.6px] text-[#1ED760]'>ZenHive Commercial Adoption</h2>
        <h2 className='block md:hidden text-left font-montserratBold font-[550] mt-6 text-[22px] leading-[28px] tracking-[-0.6px] text-[#1ED760]'>ZenHive <br/>Commercial Adoption</h2>
        <Features />
        <h2 className='hidden md:block mt-40 font-montserratBold font-[550] text-[30px] md:text-[48px] leading-[52px] tracking-[-0.6px] text-[#1ED760]'>ZenHive’s Key Features</h2>
        <h2 className='block md:hidden text-left mt-10 font-montserratBold font-[550] text-[22px] leading-[28px] tracking-[-0.6px] text-[#1ED760]'>ZenHive’s <br/>Key Features</h2>
        <KeyFeatures />
        <h2 className='hidden md:block mt-20 md:mt-20 font-montserratBold font-[500] text-[27px] md:text-[48px] leading-[55px] tracking-[-0.4px] text-[#1ED760]'>Join the DePIN Revolution:<br/> Select Your ZenHive Role Now!</h2>
        <h2 className='block md:hidden text-left mt-10 md:mt-20 font-montserratBold font-[500] text-[22px] leading-[28px] tracking-[-0.4px] text-[#1ED760]'>Join the DePIN Revolution:<br/> Select Your ZenHive <br/>Role Now!</h2>
        <JoinDepin />
      </div>
    </Container>
  )
}

export default Feature