import Layout from "../../components/Layout";
import Link from "next/link";
import { useRouter } from "next/router";
import Swal from "sweetalert2";
import Image from "next/image"

export default function PokemonDetail({ pokemonDetail }) {
    const router = useRouter();
    const { id } = router.query;

    const pokemonName = pokemonDetail.name.charAt(0).toUpperCase() + pokemonDetail.name.slice(1);
    
    const catchPokemon = () => {
        const randomCatch = Math.random() * 10;
        if (randomCatch >= 5) {
            Swal.fire({
                title: 'Submit nickname',
                input: 'text',
                inputAttributes: {
                    autocapitalize: 'off'
                },
                showCancelButton: true,
                confirmButtonText: 'Submit',
                showLoaderOnConfirm: true,
                allowOutsideClick: () => !Swal.isLoading()
            }).then((result) => {
                if (result.isConfirmed) {
                    let localPokemon = [];
                    if (localStorage.getItem("dataPokemon")) {
                        localPokemon = JSON.parse(localStorage.getItem("dataPokemon"));
                    }
                    const arr = pokemonDetail;

                    arr["nickname"] = result.value;

                    localPokemon.push(arr);
                    localStorage.setItem("dataPokemon", JSON.stringify(localPokemon));

                    Swal.fire(
                        'Good job!',
                        result.value + " is your pokemon",
                        'success'
                    )
                } 
            })

        } else {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Anda tidak Beruntung'
            })
        }
    }

    return (
        <Layout title={pokemonName}>
            <h1 className="capitalize text-4xl text-center">{pokemonDetail.name}</h1>
            <div className="flex justify-around">
                {/* <img src={pokemonDetail.image} alt={pokemonDetail.name} className="w-60" /> */}
                <Image src={pokemonDetail.image} alt={pokemonDetail.name} width={240} height={240} />
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
                        {pokemonDetail.types.map((el) => el.type.name).join(", ")}
                    </h4>

                </div>
            </div>
            <div className="flex justify-center">
                <button className="border bg-rose-600 py-2 px-3 mt-3 rounded-lg text-slate-100 hover:opacity-80 transition duration-200" onClick={() => {
                    catchPokemon();
                }}>Catch</button><br />

            </div>
            <Link href={`/pokemon/${pokemonDetail.id - 1}`}>
                <button className="border py-2 px-3 mt-3 rounded-lg text-slate-100 hover:opacity-80 border-sky-400 bg-sky-400 transition duration-200 disabled:bg-sky-300 disabled:border-sky-300 disabled:hover:bg-sky-300 disabled:hover:opacity-100" disabled={id == 1 ? true : false} >Previous</button>
            </Link>
            <Link href={`/pokemon/${pokemonDetail.id + 1}`}>
                <button className="border border-sky-400 bg-sky-400 py-2 px-3 mt-3 rounded-lg float-right text-slate-100 hover:opacity-80 transition duration-200 disabled:bg-sky-300 disabled:border-sky-300 disabled:hover:bg-sky-300 disabled:hover:opacity-100" disabled={id == 898 ? true : false}>Next</button>
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