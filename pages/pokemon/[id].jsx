import Layout from "../../components/Layout";
import Link from "next/link";
import { useRouter } from "next/router";

export default function PokemonDetail({ pokemonDetail }) {
    const router = useRouter();
    const { id } = router.query;

    const pokemonName = pokemonDetail.name.charAt(0).toUpperCase() + pokemonDetail.name.slice(1);

    return (
        <Layout title={pokemonName}>
            <h1 className="capitalize text-4xl text-center">{pokemonDetail.name}</h1>
            <div className="flex justify-around">
                <img src={pokemonDetail.image} alt={pokemonDetail.name} className="w-60" />
                <div className="my-auto px-10">
                    <h4>HP: </h4>
                    <progress id="health" value={pokemonDetail.stats[0].base_stat} max="150"></progress><br />

                    <h4>Atack: </h4>
                    <progress id="health" value={pokemonDetail.stats[1].base_stat} max="150"></progress><br />

                    <h4>Defence: </h4>
                    <progress id="health" value={pokemonDetail.stats[2].base_stat} max="150"></progress><br />

                    <h4>Special Attack: </h4>
                    <progress id="health" value={pokemonDetail.stats[3].base_stat} max="150"></progress><br />

                    <h4>Special Defence: </h4>
                    <progress id="health" value={pokemonDetail.stats[4].base_stat} max="150"></progress><br />

                    <h4>Speed: </h4>
                    <progress id="health" value={pokemonDetail.stats[5].base_stat} max="150"></progress><br />


                </div>
            </div>
            <div className="bg-sky-400 rounded-xl flex justify-center gap-10 w-10/12 mx-auto py-3">
                <div>
                    <h4 className="text-slate-100 font-semibold">Height</h4>
                    <h4 className="font-semibold text-slate-700 text-center">{pokemonDetail.height} cm</h4>
                </div>
                <div>
                    <h4 className="text-slate-100 font-semibold">Weight</h4>
                    <h4 className="font-semibold text-slate-700 text-center">{pokemonDetail.weight} kg</h4>
                </div>
                <div>
                    <h4 className="text-slate-100 font-semibold text-center">Type</h4>
                    <h4 className="capitalize font-semibold text-slate-700 text-center">
                        {pokemonDetail.types.map((el, i) => {
                            return " " + pokemonDetail.types[i].type.name;
                        })}
                    </h4>

                </div>
            </div>
            <Link href={`/pokemon/${pokemonDetail.id - 1}`}>
                <button className="border bg-slate-400 py-2 px-3 mt-3 rounded-lg" disabled={id == 1 ? true : false} >Previous</button>
            </Link>
            <Link href={`/pokemon/${pokemonDetail.id + 1}`}>
                <button className="border bg-slate-400 py-2 px-3 mt-3 rounded-lg float-right" disabled={id == 898 ? true : false}>Next</button>
            </Link>


        </Layout>
    )
}

export async function getServerSideProps({ query }) {
    const id = query.id;

    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
    const pokemonDetail = await res.json();
    const image = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`;
    pokemonDetail.image = image;

    return {
        props: {
            pokemonDetail,
        }
    }
}