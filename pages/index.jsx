import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import Layout from "../components/Layout";

export default function Home({ pokemon }) {
  const [offset, setOffset] = useState(0);
  const [newPokemon, setNewPokemon] = useState(pokemon);

  const nextData = async () => {
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon?offset=${offset + 20}&limit=20`); // (offset + 2) karena jika setOffset diatas line ini tidak akan terbaca karena asyncronous
    const dataPokemon = await res.json();

    const dataNewPokemon = dataPokemon.results.map((el, i) => {
      const image = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${i + 1 + offset + 20}.png`;
      return {
        ...el,
        image
      }
    })

    setOffset(offset + 20);
    setNewPokemon(dataNewPokemon);
  }
  const previousData = async () => {
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon?offset=${offset - 20}&limit=20`);
    const dataPokemon = await res.json();

    const dataNewPokemon = dataPokemon.results.map((el, i) => {
      const image = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${i + 1 + offset - 20}.png`;
      return {
        ...el,
        image
      }
    })

    setOffset(offset - 20);
    setNewPokemon(dataNewPokemon);
  }

  return (
    <Layout title="Home">
      <div className="grid gap-2 sm:grid-cols-2 sm:gap-2 lg:grid-cols-4 xl:grid-cols-5">
        {newPokemon.map((el, i) => ( // ganti dari pokemon ke newPokemon karena props pokemon tidak bisa diubah
          <div key={i}>
            {/* Mobile */}
            <Link href={`/pokemon/${i + 1 + offset}`}>
              <div className="border bg-slate-200 flex items-center justify-around lg:hidden cursor-pointer ">
                <div className='w-28 lg:justify-self-center'>
                  <Image src={el.image} width={112} height={112} alt={el.name} />
                </div>
                <h4 className='capitalize font-bold text-2xl text-slate-700'>{el.name}</h4>
              </div>
            </Link>

            {/* Dekstop */}
            <Link href={`/pokemon/${i + 1 + offset}`}>
              <div className="hidden border bg-slate-200 lg:block cursor-pointer hover:scale-150 hover:border-slate-300 transition-all duration-300">
                <div className='w-28 mx-auto'>
                  <Image src={el.image} width={112} height={112} alt={el.name} />
                </div>
                <h4 className='capitalize font-bold text-2xl text-slate-700 text-center'>{el.name}</h4>
              </div>
            </Link>
          </div>
        ))}
      </div>
      <div className="flex justify-end mb-5">
        <button className="border border-sky-400 bg-sky-400 disabled:bg-sky-300 py-2 px-3 mt-3 mx-2 rounded-lg text-slate-100" onClick={() => {
          previousData();
        }} disabled={offset === 0 ? true : false}>Previous</button>

        <button className="border border-sky-400 bg-sky-400 disabled:bg-sky-300 py-2 px-3 mt-3 mx-2 rounded-lg text-slate-100" onClick={() => {
          nextData();
        }} disabled={offset > 885 ? true : false}>Next</button>
      </div>
    </Layout>
  )
}

export async function getServerSideProps() {
  const res = await fetch(`https://pokeapi.co/api/v2/pokemon?offset=0&limit=20`);
  const dataPokemon = await res.json();

  const pokemon = dataPokemon.results.map((el, i) => {
    const image = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${i + 1}.png`;
    return {
      ...el,
      image
    }
  })

  return {
    props: {
      pokemon
    }
  }
}
