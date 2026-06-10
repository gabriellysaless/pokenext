import Image from 'next/image'
import { notFound } from 'next/navigation'
import styles from './page.module.css'

export async function generateStaticParams() {
    const maxPokemons = 251
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/?limit=${maxPokemons}`)
    const data = await res.json()

    return data.results.map((_, index) => ({
        pokemonId: (index + 1).toString(),
    }))
}

export default async function Pokemon({ params }) { /* params: objeto que o Next.js cria automaticamente com base no nome da pasta dinâmica ex: 1*/
    const { pokemonId } = await params /* meu pokemonId vai ser o mesmo valor de params.pokemonId */

    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`)

    if (!res.ok) {
        notFound()
    }

    const pokemon = await res.json()

    return (
        <div className={styles.pokemon_container}>
            <h1 className={styles.title}>{pokemon.name}</h1>
            <Image
                src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.id}.png`} /* precisa das chaves pq é um template literal (com ${}) */
                width={200}
                height={200}
                alt={pokemon.name}
            />
            <div>
                <h3>Número:</h3>
                <p>#{pokemon.id}</p>
            </div>
            <div>
                <h3>Tipo:</h3>
                <div className={styles.types_container}>
                    {pokemon.types.map((item, index) => (
                        <span key={index} className={`${styles.type} ${styles['type_' + item.type.name]}`}>{item.type.name}</span>
                    ))}
                </div>
            </div>
            <div className={styles.data_container}>
                <div className={styles.data_height}>
                    <h4>Altura:</h4>
                    <p>{pokemon.height * 10} cm</p>
                </div>
                <div className={styles.data_weight}>
                    <h4>Peso:</h4>
                    <p>{pokemon.weight / 10} kg</p>
                </div>
            </div>
        </div>
    )
}