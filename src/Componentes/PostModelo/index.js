import styles from "./PostModelo.module.css";

export default function PostModelo({children, fotoCapa, titulo}) {
  return (
    <article className={styles.PostModeloContainer}>
      <div
        className={styles.fotoCapa}
        style={{ backgroundImage: `url(${fotoCapa})` }}
      ></div>

      <h2 className={styles.titulo}>{titulo}</h2>
      <div className={styles.PostModeloConteudoContainer}>{children}</div>
    </article>
  );
}
