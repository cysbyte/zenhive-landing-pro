import { useRef, useEffect } from "react";
import NftList from "./NftList";
import close from '../../assets/profile/close.svg'

interface NftListDialogProps {
  onClose: ()=>void;
  onOk: ()=>void;
}

export default function NftListDialog(props: NftListDialogProps) {
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

  return (
      <dialog
        ref={dialogRef}
        className="bg-[#0D0D0D] fixed w-[1126px] top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] z-10 rounded-xl backdrop:bg-black/80 overflow-auto hide-scrollbar px-12 py-8 -mt-4"
      >
        <div className='flex items-center justify-between'>
          <h2 className='font-montserrat text-[26px] leading-[48px] text-[#1ED760]'>Select an NFT to Start Earning!</h2>
          <img onClick={closeDialog}
          className="cursor-pointer" src={close} alt='' />
        </div>
        <NftList />

      </dialog>
    ) ;
}
