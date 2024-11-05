
const JoinList = () => {
  return (
    <div className='flex flex-col mt-1 md:flex-row gap-8 md:gap-8 w-full md:w-[43%] md:min-w-[37rem] justify-start items-start md:items-end'>
        <div className='flex flex-col gap-8 mt-5 w-full'>
            <input className='text-[20px] font-dmsans border-[2px] rounded-full px-6 py-[0.7rem] md:py-[0.9rem] placeholder:text-[18px] md:placeholder:text-[20px] placeholder:font-dmsans placeholder:text-[#15143966] placeholder:font-normal appearance-none focus:outline-none'
            type='text'
            id='email'
            placeholder={`Full Name`}
            />
             <input className='text-[20px] font-dmsans border-[2px] rounded-full px-6 py-[0.7rem] md:py-[0.9rem] placeholder:text-[18px] md:placeholder:text-[20px] placeholder:font-dmsans placeholder:text-[#15143966] placeholder:font-normal appearance-none focus:outline-none'
            type='text'
            id='email'
            placeholder={`Email`}
            />
        </div>
        <button className='bg-[#25DAC5] font-[500] text-[20px] font-dmsans leading-[26px] text-white rounded-full px-8 py-[0.92rem] md:py-[1.1rem] w-auto md:w-auto text-nowrap'>Sign Up</button>
    </div>
  )
}

export default JoinList