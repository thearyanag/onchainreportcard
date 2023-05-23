import { useWallet } from '@solana/wallet-adapter-react';
import { LAMPORTS_PER_SOL, TransactionSignature } from '@solana/web3.js';
import { FC, useCallback } from 'react';
import { notify } from "../utils/notifications";
import axios from 'axios';

export const MintCard: FC = () => {
    const { publicKey } = useWallet();

    const onClick = useCallback(async () => {

        if (!publicKey) {
            notify({ type: 'error', message: 'Wallet not connected!' });
            return;
        }

        notify({ type: 'loading', message: 'Minting your report card' });

        let res = await axios.get('/api/createNFT' , {
            params : {
                receiverAddress : publicKey.toString()
            }
        });

        notify({ type: 'success', message: 'Report card minted successfully' , txid : `${publicKey.toString()}`});



        console.log(res.data);
        
    }, [publicKey]);

    return (

        <div className="flex flex-row justify-center">
                <div className="relative group items-center">
                    <div className="m-1 absolute -inset-0.5 bg-gradient-to-r from-indigo-500 to-fuchsia-500 
                    rounded-lg blur opacity-20 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
            
                        <button
                            className="px-8 m-2 btn animate-pulse bg-gradient-to-br from-blue-500 to-green-500 hover:from-white hover:to-purple-300 text-black"
                            onClick={onClick}
                            >
                                <span>Mint my report card</span>
                
                        </button>
                </div>
        </div>

        
    );
};

