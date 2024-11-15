import JoinDepin from '../home/feature/JoinDepin'

const Empty = () => {
    return (
        <>
            <div className='mx-10 md:mx-24 bg-[#0B0B0B] py-10 mt-10 border-[#0E9A3D] border-[1px] rounded-xl'>
                <h1 className='font-montserratSemiBold mx-auto text-center text-white text-[32px] leading-[40px]'>You don't own any NFTs yet.</h1>
            </div>
            <h3 className='font-montserrat mx-10 md:mx-24 my-8 text-white text-[22px] leading-[44px]'>Get NFT to start earning.</h3>
            <div className='mx-10 md:mx-24'>
                <JoinDepin />
            </div>
        </>
    )
}

export default Empty