import React from "react"
import styles from "./index.module.css"

interface ExternalLinkProps {
  url: string
  label?: string
  target?: string
  className?: string
}

export const ExternalLink: React.FC<ExternalLinkProps> = ({
  url,
  className,
  label = "Link",
  target = "_blank",
}) => {
  return (
    <a
      href={url}
      target={target}
      rel="noopener noreferrer"
      className={`${styles.ExternalLink} ${className}`}
    >
      {label}
    </a>
  )
}

export default ExternalLink
