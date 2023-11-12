import {Fragment} from "react"
import styles from "./index.module.css"

interface SkeletonCardProps {
  length?: number
}

export const SkeletonCard: React.FC<SkeletonCardProps> = ({length = 18}) => {
  const renderSkeleton = () => (
    <div className={`${styles.card} ${styles.skeleton}`}>
      <div className={`${styles.avatar} ${styles.skeleton}`} />
      <div className={styles.info}>
        <div
          style={{width: "60%", height: "1rem"}}
          className={`${styles.name} ${styles.skeleton}`}
        />
        <div
          className={`${styles.location} ${styles.skeleton}`}
          style={{width: "50%", height: "1rem", marginTop: "0.5rem"}}
        />
        <div
          className={`${styles.profileLink} ${styles.skeleton}`}
          style={{width: "40%", height: "1rem", marginTop: "0.5rem"}}
        />
      </div>
    </div>
  )

  return (
    <Fragment>
      {Array.from({length}, (_, index) => (
        <Fragment key={index}>{renderSkeleton()}</Fragment>
      ))}
    </Fragment>
  )
}

export default SkeletonCard
