import Navbar from '../Navbar/Navbar';
import styles from '@/styles/Hero.module.css'

export default function Hero() {
    return (
        <div>
            <Navbar/>
            <div className={styles.hero_wrapper}>
                <div className={styles.hero_left}>
                    <h2>CREATE SOFTWARE SOLUTION</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </div>
                <div className={styles.hero_right}>
                    
                </div>
            </div>
        </div>
    )
}