import Image from "next/image";
import styles from "./About.module.css";

export default function About() {
    return(
        <div className={styles.about}>
            <h1>Sobre o Projeto</h1>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium impedit dicta cumque molestiae adipisci consequuntur officiis perferendis temporibus molestias ab repellendus reprehenderit, sapiente commodi architecto error eveniet delectus, enim culpa.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor eum commodi, iusto perspiciatis adipisci consectetur delectus provident omnis soluta quidem unde dolores quia optio eaque magni doloremque nemo exercitationem minus.</p>
            <Image
                src="/images/charizard.png"
                width={300}
                height={300}
                alt="Charizard"
            />
        </div>
    )
}