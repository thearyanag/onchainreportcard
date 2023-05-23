// Next, React
import { FC, useEffect, useState } from 'react';
import Link from 'next/link';

// Wallet
import { useWallet, useConnection } from '@solana/wallet-adapter-react';

// Components
import { MintCard } from '../../components/MintCard';
import { NFTImage } from '../../components/NFTImage';
import pkg from '../../../package.json';

// Store

export const HomeView: FC = ({ }) => {
  const wallet = useWallet();
  const { connection } = useConnection();


  return (

    <div className="md:hero mx-auto p-4">
      <div className="md:hero-content flex flex-col">
        <div className='mt-6'>
        <div className='text-sm font-normal align-bottom text-right text-slate-600 mt-4'>v{pkg.version}</div>
        <h1 className="text-center text-5xl md:pl-12 font-bold text-transparent bg-clip-text bg-gradient-to-br from-indigo-500 to-fuchsia-500 mb-4">
          My Solana Report Card
        </h1>
        </div>
        <div className="relative group">
          {/* <div className="absolute -inset-0.5 bg-gradient-to-r from-indigo-500 to-indigo-500 rounded-lg blur opacity-40 animate-tilt"></div> */}
          <div className="max-w-md mx-auto mockup bg-primary border-2 border-[#5252529f] p-6 px-10 my-2">
            Get your dynamic Solana report card in 1 click
          </div>
        </div>
        <div className="flex flex-col mt-2">
          <MintCard />
          <NFTImage />
          <h4 className="md:w-full text-2xl text-slate-300 my-2">
          {wallet &&
          <div className="flex flex-row justify-center">

          </div>
          }
          </h4>
        </div>
      </div>
    </div>
  );
};
