import Link from "next/link";

export default function PokedexLayout({
 children
}: {
 children: React.ReactNode;
}) {
  return (
    <>
    <div className="flex min-w-full justify-center items-center h-20 bg-red-700">
          <Link href={"/"}>
            Pokedex
          </Link>
    </div>
          {children}
    </>
  );
}