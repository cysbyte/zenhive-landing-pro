import Container from '../container/Container'
import Din from './latest/Din'
import Infura from './latest/Infura'
import Recap from './latest/Recap'
import latest1 from '../../assets/home/latest/latest1.png'
import latest2 from '../../assets/home/latest/latest2.png'
import latest3 from '../../assets/home/latest/latest3.png'
import arrow from '../../assets/home/latest/arrow.svg'

const GetLatest = () => {
  const data = [
    {
      id: 1,
      title: 'Open Telemetry Is Shaping The Future of API Monitoring',
      desc: 'Lorem Ipsum is simply dummy text of the printing and typesettinger',
      component: <Recap />,
      image: latest1
    },
    {
      id: 2,
      title: 'Open Telemetry Is Shaping TheFuture of API Monitoring',
      desc: 'Lorem Ipsum is simply dummy text of the printing and typesettinger',
      component: <Infura />,
      image: latest2
    },
    {
      id: 3,
      title: 'Open Telemetry Is Shaping The Future of API Monitoring',
      desc: 'Lorem Ipsum is simply dummy text of the printing and typesettinger',
      component: <Din />,
      image: latest3,
    },

  ]
  return (
    <Container>
      <div className='mt-4 px-2 md:px-20 py-10 md:py-20 mx-auto'>
        <h2 className='font-montserratBold font-[600] text-[#4AFF86] text-[30px] lg:text-[48px] leading-[58px] text-center tracking-wider'>Get the latest</h2>
        <div className="flex flex-col  md:flex-row gap-10 md:gap-6 items-center md:items-start justify-between mt-14 ">
          {
            data.map((item) => (
              <div key={item.id} className="flex-1 flex-col p-5 bg-[#0D0D0D] rounded-2xl items-center justify-center">
                {/* {item.component} */}
                <img className='rounded-[1px] w-full md:max-w-[22rem]' src={item.image} alt='' />
                <h2 className='font-montserrat text-xl text-[#FFFFFF] font-semibold mt-2 tracking-wider'>{item.title}</h2>
                <p className='font-montserrat text-[14px] leading-[20px] text-[#B3B3B3] font-normal mt-2'>{item.desc}</p>
                <div className='mt-4 flex items-center justify-end gap-2'>
                  <a className=" uppercase no-underline text-white text-sm" href="">Read more</a>
                  <img src={arrow} alt='' />
                </div>
              </div>
            ))
          }
        </div>
        <div className='w-full flex items-center justify-center mt-7'>
          <div className='mx-auto rounded-full p-[2px] bg-gradient-to-r from-[#4AFF86] to-[#006F25] inline-block'>
            <button className='font-montserrat text-[20px] leading-[24px] rounded-full px-7 py-5 bg-black text-white'>More Articles</button>
          </div>
        </div>
      </div>
    </Container>
  )
}

export default GetLatest