import AnimationTexts from './AnimationTexts'
import './Hero.css'

const Hero = () => {
  return (
    <div className="z-10 mt-4 bg-[url('assets/home/bg-hero.svg')] w-full bg-cover bg-no-repeat flex flex-col items-center justify-center gap-4 md:gap-7 py-[200px] lg:py-[200px] text-center">
      <h1 className='hidden md:block z-10 break-words mt-4 w-auto text-white font-montserrat font-[600] text-[44px] leading-[54px] tracking-[2px]'>Pioneering Mass  <span className='font-montserratBold font-[700] text-[#1ED760] tracking-[1px]'>Commercial Innovation</span></h1>
      <h1 className='block md:hidden z-10 break-words mt-4 w-auto text-white font-montserrat font-[500]  text-[22px] leading-[27px] tracking-[2px]'>The Future of <br/><span className='font-montserratBold font-[800] text-[#1ED760] tracking-[1px] leading-[25px]'>Decentralized Infrastructure</span></h1>
 
      <p className='z-10 hidden md:flex gap-2 text-white font-inter w-auto font-[300] text-[20px] leading-[33px] tracking-wider items-center'>A Device built on aZen Protocol for Universal Computing Enabling <AnimationTexts/></p>
      <button className='w-auto bg-gradient-to-r from-[#3AE071] to-[#006F25] px-8 py-3 md:py-5 rounded-full text-white font-montserrat text-[14px] md:text-[18px] leading-[22px] cursor-pointer'>Get NFT</button>
      
      <div className='z-10 block md:hidden text-white font-inter w-[90%] font-[400] text-[14px] leading-[20px] tracking-[1px]'><p>A Device built on aZen Protocol for Universal</p> 
      <div className='flex justify-center items-center gap-1 mx-auto'>
        <p>Computing Enabling</p> 
        <AnimationTexts/>
      </div>
      </div>
    </div>

  )
}

export default Hero