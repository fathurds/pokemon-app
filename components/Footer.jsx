import Link from "next/link"

function FooterComponent() {
    return (
        <div className='grid grid-cols-2 text-center border text-slate-100 text-2xl cursor-pointer fixed bottom-0 left-0 w-full'>
            <Link href="/">
                <div className='py-3 border-sky-200 bg-sky-400 hover:opacity-80 border-r-2 transition duration-200'>
                    <h3>Home</h3>
                </div>
            </Link>
            <Link href="/list">
                <div className='py-3 border-sky-400 bg-sky-400 hover:opacity-80 transition duration-200'>
                    <h3>My Favorite</h3>
                </div>
            </Link>
        </div>
    )
}

export default FooterComponent