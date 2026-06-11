import Image from "next/image";
import styles from "./page.module.css";
import Card from "@/components/Card";

export async function getPokemons() {
  const maxPokemons = 251
  const api = 'https://pokeapi.co/api/v2/pokemon/'

  const res = await fetch(`${api}/?limit=${maxPokemons}`)
  const data = await res.json()

  // add pokemon index
  data.results.forEach((item, index) => {
    item.id = index + 1
  })
  
  return data.results
}

export default async function Home() {

  const pokemons = await getPokemons()

  return (
    <>
      <div className={styles.title_container}>
        <h1 className={styles.title}>Poke<span>Next</span></h1>
        <Image
          width={50}
          height={50}
          src="/images/pokeball.png"
          alt="Pokebola"
        />
      </div>

      <div className={styles.pokemon_container}>
        {pokemons.map((pokemon, index) => (
          <Card key={pokemon.id} pokemon={pokemon} index={index}/>
        ))}
      </div>

    </>
  );
}
