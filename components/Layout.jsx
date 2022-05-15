import Head from 'next/Head'
import React from 'react'

function Layout({ title, children }) {
    return (
        <div className="bg-slate-300">
            <Head>
                <title>{title} | Fath Pokedex</title>
                {/* <meta name="description" content="Generated by create next app" /> */}
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main className='container mx-auto min-h-screen'>
                {children}
            </main>
        </div>
    )
}

export default Layout