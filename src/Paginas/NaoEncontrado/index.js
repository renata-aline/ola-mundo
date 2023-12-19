import styles from "./NaoEncontrado.module.css";
import erro404 from "assets/erro_404.png";

export default function NaoEncontrado() {
  return (
    <>
      <div className={styles.conteudoContainer}>
        <span className={styles.texto404}>404</span>
        <h1 className={styles.titulo}>Ops! página não encontrada.</h1>
        <p className={styles.paragrafo}>
          Tem certeza que era isso que você tava procurando?
        </p>
        <p className={styles.paragrafo}>Volte para para página inicial.</p>
        <div className={styles.botaocontainer}>
          <button>Voltar</button>
        </div>

        <img
          className={styles.imagemCachorro}
          src={erro404}
          alt="cachorro de óculos e vestido de humano"
        />
      </div>
      <div className={styles.espacoEmBranco}></div>
    </>
  );
}
