import Image from "next/image";
import Link from "next/link";
import { FC } from "react";

export const NFTImage: React.FC = (image: String) => {
  return (
    <div className="justify-center flex flex-row my-2">
      <Image
        src="/novice.png"
        alt="Solana Logo"
        width={200}
        height={200}
        border-radius={50}
        border-color="white"
      />
      <Image
        src="/normal.png"
        alt="Solana Logo"
        width={200}
        height={200}
        border-radius={100}
        border-color="white"
      />
      <Image
        src="/advanced.png"
        alt="Solana Logo"
        width={200}
        height={200}
        border-radius={50}
        border-color="white"
      />
    </div>
  );
};
