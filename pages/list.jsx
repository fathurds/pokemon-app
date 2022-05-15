import Layout from '../components/Layout'
import Link from "next/link"
import { useEffect, useState } from 'react';

function List() {
    const [data, setData] = useState([]);

    useEffect(() => {
        setData(JSON.parse(localStorage.getItem("dataPokemon")));
    }, [])
    return (
        <Layout title="My Pokemon">
            <div className="grid gap-2 sm:grid-cols-2 sm:gap-2 lg:grid-cols-4 xl:grid-cols-5">
                {console.log(data)}
                {data !== null ? data.map((el, i) => (
                    <div>
                        <div key={i} className="border bg-slate-200 flex items-center justify-around lg:hidden cursor-pointer">
                            <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${el.id}.png`} className='w-28 lg:justify-self-center' alt={el.name} />
                            <h4 className='capitalize font-bold text-2xl text-slate-700'>{el.name}</h4>
                        </div>
                        <div className="hidden border bg-slate-200 lg:block cursor-pointer hover:scale-150 hover:border-slate-300 transition-all duration-300">
                            <img src={el.image} className='w-28 mx-auto' alt={el.name} />
                            <h4 className='capitalize font-bold text-2xl text-slate-700 text-center'>{el.name}</h4>
                        </div>
                    </div>
                )) :
                    <>
                    </>
                }
            </div>
            {data == null ? <div>
                <h1 className='text-center text-4xl font-bold mt-32 text-slate-800'>Pokemon tidak ada.</h1>
            </div> : <></>}
        </Layout>
    )
}

export default List