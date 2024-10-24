// import { useEffect, useRef, useState } from 'react';
import logo1 from '../../assets/client-logos/logo1.svg';
import logo2 from '../../assets/client-logos/logo2.svg';
import logo3 from '../../assets/client-logos/logo3.svg';
import logo4 from '../../assets/client-logos/logo4.svg';
import logo5 from '../../assets/client-logos/logo5.svg';
import logo6 from '../../assets/client-logos/logo6.svg';

const ClientLogos = () => {

  // const containerRef = useRef<HTMLDivElement>(null);
  // const [hasOverflow, setHasOverflow] = useState(false);

  // // Detect if the container has horizontal overflow
  // useEffect(() => {
  //   updateHasOverflow()
  // }, []);

  // const updateHasOverflow = () => {
  //   const container = containerRef.current;
  //   if (container) {
  //     const isOverflowing = container.scrollWidth > container.clientWidth;
  //     setHasOverflow(isOverflowing)
  //   }
  // }

  // useEffect(() => {
  //   const handleResize = () => {
  //     updateHasOverflow()
  //   }

  //   window.addEventListener('resize', handleResize);

  //   return () => {
  //     window.removeEventListener('resize', handleResize);
  //   };
  // }, []);

  // const logos = [
  //   {
  //     id: 1,
  //     src: logo1
  //   },
  //   {
  //     id: 2,
  //     src: logo2
  //   },
  //   {
  //     id: 3,
  //     src: logo3
  //   },
  //   {
  //     id: 4,
  //     src: logo4
  //   },
  //   {
  //     id: 5,
  //     src: logo5
  //   },
  //   {
  //     id: 6,
  //     src: logo6
  //   },
  // ]

  return (
    <div>
      <div className={`mask-gradient whitespace-nowrap overflow-hidden w-full border-b border-t border-gray-800 p-0 m-2 hide-scrollbar`}>
        <div className={`relative mx-auto w-[100%] md:w-[80%] py-10 my-4 px-20 border-hidden whitespace-normal`}
        >
          <img className='absolute top-[50%] -translate-y-1/2 logo-animation delay1' src={logo1} alt='' />
          <img className='absolute top-[50%] -translate-y-1/2 logo-animation delay2' src={logo2} alt='' />
          <img className='absolute top-[50%] -translate-y-1/2 logo-animation delay3' src={logo3} alt='' />
          <img className='absolute top-[50%] -translate-y-1/2 logo-animation delay4' src={logo4} alt='' />
          <img className='absolute top-[50%] -translate-y-1/2 logo-animation delay5' src={logo5} alt='' />
          <img className='absolute top-[50%] -translate-y-1/2 logo-animation delay6' src={logo6} alt='' />
        </div>
      </div>
    </div>
  )
}



export default ClientLogos