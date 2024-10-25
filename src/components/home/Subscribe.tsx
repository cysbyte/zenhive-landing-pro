import azen from '../../assets/home/azen.svg'
import Container from '../container/Container'
import SocialLinks from './SocialLinks'

const Subscribe = () => {

    return (
        <Container>
            <div className='w-full px-6 md:px-24 md:py-[1.4rem] mt-44 md:mt-32 flex flex-col  gap-10 md:gap-1 items-center md:items-end'>
                <div className='rounded-[22px] w-full flex flex-col xl:flex-row items-center gap-4 md:gap-16 px-3 py-5 md:px-8 md:py-12 bg-[#0D0D0D]'>
                    <h6 className='font-montserratSemiBold font-medium text-white text-[20px] md:text-[46px] leading-[26px] md:leading-[61px] text-nowrap tracking-wider'>Subsribe For Update</h6>
                    <div className=' bg-[#1D1D1D] flex flex-row items-center justify-between w-full gap-5 md:gap-2 rounded-full px-2 py-2 md:py-3 md:px-3 focus-within:border-[1px] focus-within:border-[#4AFF86]'>
                        <input className='w-full bg-transparent text-white text-[12px] md:text-[18px] font-montserrat rounded-full px-3 py-[0.5rem] placeholder:text-[12px] md:placeholder:text-[18px] placeholder:font-montserrat placeholder:text-[#8A8A8A] placeholder:tracking-wider placeholder:font-thin appearance-none focus:outline-none '
                            type="text"
                            id='email'
                            placeholder={`Enter your email address`}
                        />
                        <div className='w-auto rounded-full p-[1px] md:p-[2px] bg-gradient-to-r from-[#4AFF86] to-[#006F25]'>
                            <button className='font-montserrat text-[14px] md:text-[20px] leading-[17px] md:leading-[24px] rounded-full px-3 py-2 md:px-7 md:py-5 bg-[#1D1D1D] text-white'>Subscribe</button>
                        </div>
                    </div>
                </div>

            </div>
            <div className='w-full py-6 md:border-t border-b mt-6 md:mt-2 border-[#262626]'>
                <div className='px-6 md:px-24 w-full flex flex-col md:flex-row items-start md:items-center gap-5 md:gap-3 justify-between'>
                    <div className='w-full'>
                        <h6 className='text-left mb-3 font-montserrat text-[#E6E6E6] text-[16px] md:text-[20px] leading-[24px] md:leading-[30px]'>Powered by</h6>
                        <img className='w-[175px] md:w-auto' src={azen} alt='' />
                    </div>
                    <div>
                       <SocialLinks /> 
                    </div>
                    
                </div>

            </div>
            <div className='w-full px-6 md:px-24 py-3 flex flex-row justify-between items-center text-[#E6E6E6] text-[12px] md:text-[18px] leading-[18px] md:leading-[27px] md:gap-8 md:pb-12 mb-4 md:mb-0'>
                <p className='font-montserrat'>© 2024 aZen Protcol</p>
                <div>
                    <a className='font-montserrat underline mr-2 md:mr-2' href="">White Paper</a>
                    <a className='font-montserrat underline' href="">Privacy Policy</a>
                </div>
            </div>
        </Container>
    )
}

export default Subscribe