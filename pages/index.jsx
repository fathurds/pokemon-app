import Link from "next/link";
import Layout from "../components/Layout";

export default function Home({ pokemon }) {
  return (
    <Layout title="Home">
      <div className="grid gap-2 sm:grid-cols-2 sm:gap-2 lg:grid-cols-4 xl:grid-cols-5">
        {pokemon.map((el, i) => (
          <div key={i}>
            {/* Mobile */}
            <Link href={`/pokemon/${i + 1}`}>
              <div className="border bg-slate-200 flex items-center justify-around lg:hidden cursor-pointer ">
                <img src={el.image} className='w-28 lg:justify-self-center' alt={el.name} />
                <h4 className='capitalize font-bold text-2xl text-slate-700'>{el.name}</h4>
              </div>
            </Link>

            {/* Dekstop */}
            <Link href={`/pokemon/${i + 1}`}>
              <div className="hidden border bg-slate-200 lg:block cursor-pointer hover:scale-150 hover:border-slate-300 transition-all duration-300">
                <img src={el.image} className='w-28 mx-auto' alt={el.name} />
                <h4 className='capitalize font-bold text-2xl text-slate-700 text-center'>{el.name}</h4>
              </div>
            </Link>
          </div>
        ))}
        <div>
          <button>Previous</button>
          <button>Next</button>
        </div>
      </div>
    </Layout>
  )
}

export async function getStaticProps() {
  const res = await fetch('https://pokeapi.co/api/v2/pokemon');
  const dataPokemon = await res.json();
  const dataNext = dataPokemon.next;
  const dataPrevious = dataPokemon.previous;

  const pokemon = dataPokemon.results.map((el, i) => {
    const image = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${i + 1}.png`;
    return {
      ...el,
      image
    }
  })

  return {
    props: {
      dataNext,
      dataPrevious,
      pokemon
    }
  }
}
