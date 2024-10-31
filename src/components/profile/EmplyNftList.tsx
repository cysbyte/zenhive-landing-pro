import { Suspense, useState } from 'react';
import cup from '../../assets/profile/cup.svg'
import NftListDialog from './NftListDialog';
import PrimaryButton from '../button/PrimaryButton';

const EmplyNftList = () => {
    const [showDialog, setShowDialog] = useState(false);
    return (
        <div className='px-10 md:px-24 py-10 bg-[#0A0A0A] rounded-xl flex flex-col gap-4 items-center justify-center '>
            <img className='my-10' src={cup} alt='' />
            <h5 className='text-center font-montserrat text-[26px] text-white'>It looks like you don't own any NFTs yet.</h5>
            <p className='text-center font-montserrat text-[20px] leading-[24px] text-white opacity-70'>Owning an NFT lets you earn commissions through ZenHive<br />
                operation and referral program.</p>

            <PrimaryButton text='Get NFT' onClick={() => setShowDialog(true)}/>
            {
                showDialog &&
                <Suspense fallback={<div>Loading...</div>}>
                    <NftListDialog
                        onClose={() => setShowDialog(false)}
                        onOk={() => setShowDialog(false)}
                    />
                </Suspense>
            }
        </div>
    )
}

export default EmplyNftList