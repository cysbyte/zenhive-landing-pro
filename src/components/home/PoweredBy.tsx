import intel from '../../assets/home/powered-by/intel.svg'
import qualcomm from '../../assets/home/powered-by/qualcomm.svg'
import microsoft from '../../assets/home/powered-by/microsoft.svg'
import linux from '../../assets/home/powered-by/linux.svg'

const PoweredBy = () => {
    return (
        <div className='w-full flex mx-auto py-4 border-[1px] border-[#262626] rounded-xl'>
            <div className='flex-1 flex justify-start items-center py-4 border-r border-[#262626]'>
                <div className='flex ml-16 gap-8'>
                    <h3 className='font-montserrat font-[500] text-[28px] leadign-[52px] text-white'>Powered by :</h3>
                    <div className='flex gap-8'>
                        <img src={intel} width={56} alt="" />
                        <img src={qualcomm} width={145} alt="" />
                    </div>
                </div>
            </div>
            <div className='flex-1 flex justify-start items-center py-4'>
                <div className='flex ml-20 gap-12'>
                    <h3 className='font-montserrat font-[500] text-[28px] leadign-[52px] text-white'>Platform :</h3>
                    <div className='flex gap-12'>
                        <img src={microsoft} alt="" />
                        <img src={linux} alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PoweredBy