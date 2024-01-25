import styles from './TitleText.module.css'

interface TitleProps {
    title: string
}

const TitleText = ({title}:TitleProps) => {
  return (
    <h1
      className={styles.text_title}
    >
      {title}
    </h1>
  )
}

export default TitleText