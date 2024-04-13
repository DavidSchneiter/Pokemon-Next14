import Link from "next/link";
import Image from 'next/image';

export default function PokedexLayout({children}:{children: React.ReactNode;}) 
{
  return (
    <>
      <div className="flex  min-w-full justify-center items-center h-20 bg-red-700">
        <Link className="flex items-center" href={"/"}>
          <Image
            src={'/pokedex.png'}
            width={50}
            height={50}
            alt="logo pokedex"
          />
          <Image 
            src={'/pokemon.png'}
            width={150}
            height={150}
            alt="logo pokemon"
          />
        </Link>
      </div>
      {children}
    </>
  );
}