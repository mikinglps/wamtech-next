
import styles from '@/styles/Button.module.css'

const Button = ({text, width}) => {
  return (
    <div className={styles.button_edit} style={{width: width}}>
      {text}
      <div className={styles.arrow}> &rarr;</div>
    </div>
  )
}

export default Button