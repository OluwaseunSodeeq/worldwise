import styles from "./Button.module.css";

function Button({ childen, onClick, type }) {
  return (
    <button onClick={onClick} className={`${styles.btn} ${styles[type]}`}>
      {childen}
    </button>
  );
}

export default Button;
