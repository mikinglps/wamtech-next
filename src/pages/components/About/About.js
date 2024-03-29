import styles from '@/styles/About.module.css'
import Button from '../Button/Button'

const About = () => {
  return (
    <div className={styles.about_wrapper}>
        <div className={styles.about_left}>
            <div className={`${styles.row} ${styles.row_top}`}>
                <div className={styles.content}>
                    <h3>ABOUT US</h3>
                </div>
                <div className={styles.content}>

                </div>
            </div>
            <div className={`${styles.row} ${styles.row_bottom}`}>
                <div className={styles.content}>

                </div>
            </div>
        </div>
        <div className={styles.about_right}>
            <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam vestibulum ultrices tellus sed ultricies.</h3>
            <p>Phasellus eleifend congue purus, et aliquam risus placerat elementum. Praesent eleifend semper lectus non eleifend. Morbi pretium pretium enim, quis faucibus sem ultricies ut. Ut ullamcorper dapibus felis, at blandit massa sodales a. Sed in fringilla ligula, scelerisque semper orci.</p>
            <Button text='Read More' width='150px'/>
        </div>
    </div>
  )
}

export default About