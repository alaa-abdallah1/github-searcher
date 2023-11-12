import styles from "./index.module.css"

const NotFound = () => {
  return (
    <div className={styles.notFoundContainer}>
      <h1 className={styles.heading}>404 - Not Found!</h1>
      <p className={styles.text}>
        The page you are looking for does not exist.
      </p>
    </div>
  )
}

export default NotFound
