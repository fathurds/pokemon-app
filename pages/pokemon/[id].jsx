import Layout from "../../components/Layout";

export default function PokemonDetail() {
    return (
        <Layout title="Detail">
            Pokemon Detail
        </Layout>
    )
}

// export async function getStaticPaths() {
//     const response = await fetch("https://pokeapi.co/api/v2/pokemon/");
//     const data = await response.json();

//     const paths = data.results.map((el) => {
//         return {
//             params: {
//                 id: String(el.id),
//             },
//         };
//     });

//     return {
//         paths,
//         fallback: false,
//     };
// }

// export async function getStaticProps(context) {
//     const { id } = context.params;
//     const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
//     const pokemonDetail = await response.json();

//     return {
//         props: {
//             pokemonDetail,
//         },
//     };
// }