import Button from '../Button/Button'
import styles from '@/styles/Press.module.css'

const Press = () => {
  return (
    <div className={styles.press_wrapper}>
        <div className={styles.press_left}>
            <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam vestibulum ultrices tellus sed ultricies.</h3>
            <p>Phasellus eleifend congue purus, et aliquam risus placerat elementum. Praesent eleifend semper lectus non eleifend. Morbi pretium pretium enim, quis faucibus sem ultricies ut. Ut ullamcorper dapibus felis, at blandit massa sodales a. Sed in fringilla ligula, scelerisque semper orci.</p>
            <Button text='Read More' width='150px'/>
        </div>
        <div className={styles.press_right}>
            <div className={`${styles.row} ${styles.row_top}`}>
                <div className={styles.content}>
                    <h3>PRESS</h3>
                </div>
                <div className={styles.content}>

                </div>
            </div>
            <div className={`${styles.row} ${styles.row_bottom}`}>
                <div className={styles.content}>

                </div>
            </div>
        </div>
    </div>
  )
}

export default Press