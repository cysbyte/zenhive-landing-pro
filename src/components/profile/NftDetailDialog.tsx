import { useRef, useEffect } from "react";
import delegatorNft from '../../assets/profile/nft/delegator-nft.svg'
import close from '../../assets/profile/close.svg'

interface NftDetailDialogProps {
    onClose: () => void;
    onOk: () => void;
}

export default function NftDetailDialog(props: NftDetailDialogProps) {
    const dialogRef = useRef<null | HTMLDialogElement>(null);
    useEffect(() => {
        dialogRef.current?.showModal();
    }, []);

    const closeDialog = () => {
        dialogRef.current?.close();
        props.onClose();
    };

    // const clickOk = () => {
    //   props.onOk();
    //   closeDialog();
    // };

    const data = [
        {
            name: 'Chain',
            value: 'Arbitrum'
        },
        {
            name: 'Contract Name',
            value: '0x255dbhffu1f.....cAD8'
        },
        {
            name: 'Token ID',
            value: '845123641277128844...'
        },
        {
            name: 'Standard',
            value: 'ARB-721'
        },
    ]
    return (
        <dialog
            ref={dialogRef}
            className="bg-[#0D0D0D] fixed w-[1066px] top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] z-10 rounded-xl backdrop:bg-black/80 p-12"
        >

            <div className="flex gap-8 relative">
                <img onClick={closeDialog}
                className="absolute top-0 right-0 cursor-pointer" src={close} alt="" />
                <img width={354} src={delegatorNft} alt="" />
                <div className="text-white flex flex-col items-stretch flex-1">
                    <div className="">
                        <h1 className="font-montserratSemiBold text-[26px] leading-[32px]">Delegator NFT</h1>
                        <p className="mt-4 font-montserrat text-[#B3B3B3] text-[18px] leading-[27px]">Fractional ownership in ZenHive for passive rewards and referral commissions on Delegator NFT sales.</p>
                    </div>
                    <div className="mt-6 flex flex-col h-full">
                        <h1 className="font-montserratSemiBold text-[28px] leading-[42px]">NFT Details</h1>
                        <div className="font-montserrat flex flex-col justify-between h-full mt-4">
                            {
                                data.map((item) => (
                                    <div className="flex justify-between items-center">
                                        <p>{item.name}</p>
                                        <p className={`${item.name==='Contract Name'||item.name==='Token ID' ? 'text-[#20AE4F]':'text-white'}`}>{item.value}</p>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </div>
            </div>

        </dialog>
    );
}
