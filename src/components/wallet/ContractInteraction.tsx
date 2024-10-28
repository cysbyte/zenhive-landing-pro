import  { useState } from 'react';
import { ethers } from 'ethers';
import MyNFT from '../../../artifacts/contracts/MyNFT.sol/MyNFT.json';

interface ContractInteractionProps {
    provider: ethers.BrowserProvider | null
    userAddress: string
}

const ContractInteraction = (props: ContractInteractionProps) => {
    const [tokenId, setTokenId] = useState<number>(0);
    const [receiver, setReceiver] = useState('')
    const contractAddress = "0xfdd718c3a06370eBB92650DD24caf3B84a2f5D67";

    const mintNFT = async () => {
        debugger
        const signer = await props.provider?.getSigner();
        const contract = new ethers.Contract(contractAddress, MyNFT.abi, signer);
        const transaction = await contract.mintTo(props.userAddress);
        await transaction.wait();
        console.log("NFT Minted!");
    };

    const transferNFT = async (newOwnerAddress: string) => {
        if (tokenId === null || !props.userAddress) return;

        const signer = await props.provider?.getSigner();
        const contract = new ethers.Contract(contractAddress, MyNFT.abi, signer);
        const transaction = await contract.transferNFT(props.userAddress, newOwnerAddress, tokenId);
        await transaction.wait();
        console.log(`NFT ${tokenId} transferred!`);
    };

    return (
        <div className='mt-4 flex flex-col items-center'>
            <button className='px-4 py-2 rounded-md bg-blue-500 text-white' onClick={mintNFT}>Mint NFT</button>
            <div className='flex items-center gap-4 mt-4 border-t border-b py-2'>
                <div>
                    <label htmlFor="tokenId">Token Id</label>
                    <input
                        className='ml-2'
                        id='tokenId'
                        name='tokenId'
                        type="number"
                        placeholder="Token ID"
                        value={tokenId ?? ""}
                        onChange={(e) => setTokenId(parseInt(e.target.value))}
                    />
                </div>
                <div>
                    <label htmlFor="receiver">Receiver</label>
                    <input
                        className='ml-2'
                        id='receiver'
                        name='receiver'
                        type="text"
                        placeholder="Receiver"
                        value={receiver ?? ""}
                        onChange={(e) => setReceiver(e.target.value.trim())}
                    />
                </div>

                <button className='px-4 py-2 rounded-md bg-blue-500 text-white' onClick={() => transferNFT(receiver)}>Transfer NFT</button>
            </div>
        </div>
    );
};

export default ContractInteraction;
