import Link from "next/link";

export default function PokedexLayout({
 children
}: {
 children: React.ReactNode;
}) {
  return (
    <>
    
          {children}
    </>
  );
}