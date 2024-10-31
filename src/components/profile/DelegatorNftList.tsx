import { Suspense, useState } from 'react';
import delegatorNft from '../../assets/profile/nft/delegator-nft.svg'
import PrimaryButton from '../button/PrimaryButton'
import NftDetailDialog from './NftDetailDialog';
import NftListDialog from './NftListDialog';

const DelegatorNftList = () => {
    const [showDetailDialog, setShowDetailDialog] = useState(false);
    const [showListDialog, setShowListDialog] = useState(false);
    return (
        <div className='px-10 md:px-24 py-10 bg-[#0A0A0A] rounded-xl flex flex-col gap-4 items-start justify-center '>
            <div className='w-full border-b border-white border-opacity-20'>
                <div className='inline-flex items-center border-b-2 w-auto pb-2 -mb-[1.5px]'>
                    <p className='text-white text-[16px] leading-[22px] font-montserrat'>Owned</p>
                    <p className='font-montserrat rounded-sm w-4 bg-white text-black border-b border-[1px] border-white text-center leading-4'> 1 </p>
                </div>
            </div>
            <div>
                <div className='p-2 rounded-lg border-[1px] border-[#2D2D2D]'>
                    <img
                        onClick={() => setShowDetailDialog(true)}
                        className='cursor-pointer' src={delegatorNft} width={187} alt="" />
                    <p className='font-montserrat text-[16px] mt-2 leading-[22px] text-white'>Delegator NFT</p>
                </div>
            </div>
            <div className='mt-12 ml-1'>
                <PrimaryButton text="Get More NFTs" onClick={() => setShowListDialog(true)} />
            </div>
            {
                showDetailDialog &&
                <Suspense fallback={<div>Loading...</div>}>
                    <NftDetailDialog
                        onClose={() => setShowDetailDialog(false)}
                        onOk={() => setShowDetailDialog(false)}
                    />
                </Suspense>
            }
            {
                showListDialog &&
                <Suspense fallback={<div>Loading...</div>}>
                    <NftListDialog
                        onClose={() => setShowListDialog(false)}
                        onOk={() => setShowListDialog(false)}
                    />
                </Suspense>
            }
        </div>
    )
}

export default DelegatorNftList