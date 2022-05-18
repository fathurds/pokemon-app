import Layout from '../components/Layout'
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Swal from "sweetalert2";
import Image from 'next/image';

function List() {
    const [data, setData] = useState([]);

    const router = useRouter();

    useEffect(() => {
        setData(JSON.parse(localStorage.getItem("dataPokemon")));
    }, []);

    const releaseClick = (idx) => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#5F78FF',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                let temp = data;
                temp.splice(idx, 1);
                console.log(temp);
                localStorage.setItem("dataPokemon", JSON.stringify(temp));
                Swal.fire(
                    'Deleted!',
                    'Your file has been deleted.',
                    'success'
                )
                router.push("/list");
            }
        })
    }

    return (
        <Layout title="My Pokemon">
            <div className="grid gap-2 sm:grid-cols-2 sm:gap-2 lg:grid-cols-4 xl:grid-cols-5 mb-5">
                {data !== null ? data.map((el, i) => (
                    <div>
                        <div key={i} className="border bg-slate-200 flex items-center justify-around">
                            <Image src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${el.id}.png`} width={112} height={112} className='w-36 lg:justify-self-center' alt={el.name} />
                            <div className='text-center'>
                                <h4 className='capitalize font-bold text-2xl text-slate-700'>{el.name}</h4>
                                <h4 className='capitalize font-bold text-2xl text-slate-700'>({el.nickname})</h4>
                                <button className='border bg-slate-600 text-slate-200 rounded-xl px-3 py-1 mt-2 mb-2' onClick={() => releaseClick(i)}>Release</button>
                            </div>
                        </div>
                        {/* <div className="hidden border bg-slate-200 lg:block hover:scale-150 hover:border-slate-300 transition-all duration-300">
                            <img src={el.image} className='w-28 mx-auto' alt={el.name} />
                            <div className='text-center'>
                                <h4 className='capitalize font-bold text-2xl text-slate-700'>{el.name}</h4>
                                <h4 className='capitalize font-bold text-2xl text-slate-700'>({el.nickname})</h4>
                                <button className='border bg-slate-600 text-slate-200 rounded-xl px-3 py-1 mt-2 mb-2' onClick={() => releaseClick(i)}>Release</button>
                            </div>
                        </div> */}
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