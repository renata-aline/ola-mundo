import styles from "./Banner.module.css";
import circuloColorido from "assets/circulo_colorido.png";
import minhaFoto from "assets/minha_foto.png";
export default function banner() {
  return (
    <div className={styles.banner}>
      <div className={styles.apresentaco}>
        <h1 className={styles.titulo}>olá, mundo!</h1>
        <p className={styles.paragrafo}>
          Oi ,bem vindo ao meu espaço! Eu sou desenvolvedor Front- end e estou
          pronta para trocar experiência e aprender muito.
        </p>
      </div>
      <div className={styles.imagens}>
        <img
          className={styles.circuloColorido}
          src={circuloColorido}
          aria-hidden={true}
        />
        <img className={styles.minhaFoto} src={minhaFoto} alt="" />
      </div>
    </div>
  );
}
