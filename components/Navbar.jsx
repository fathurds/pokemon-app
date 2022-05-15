import Link from "next/link";

function NavbarComponent() {
  return (
    <div>
      <Link href="/">
        <h1 className="text-5xl font-bold text-center py-5 text-slate-700 cursor-pointer">Fath Pokedex</h1>
      </Link>
    </div>
  )
}

export default NavbarComponent