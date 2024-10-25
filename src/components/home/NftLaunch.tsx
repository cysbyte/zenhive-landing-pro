import nftLaunch from '../../assets/home/nft-launch/nft-launch.svg'
import bg1 from '../../assets/home/nft-launch/bg1-md.svg'
import bg2 from '../../assets/home/nft-launch/bg2-md.svg'

const NftLaunch = () => {
  return (
    <section className='w-full my-4 md:my-20 '>
        <img className='hidden md:block mx-auto' src={nftLaunch} alt=''/>
        <div className='block md:hidden relative w-full mx-auto'>
            <img className='absolute w-full top-0 left-0' src={bg2} alt=''/>
            <img className='absolute w-full top-0 left-0' src={bg1} alt=''/>
        </div>
    </section>
  )
}

export default NftLaunch