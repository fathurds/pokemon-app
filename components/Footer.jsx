import Link from "next/link"

function FooterComponent() {
    return (
        <div className='grid grid-cols-2 text-center border border-sky-400 bg-sky-400 text-slate-100 text-2xl cursor-pointer'>
            <Link href="/">
                <div className='py-3'>
                    <h3>Home</h3>
                </div>
            </Link>
            <Link href="/list">
                <div className='py-3'>
                    <h3>My Favorite</h3>
                </div>
            </Link>
        </div>
    )
}

export default FooterComponent