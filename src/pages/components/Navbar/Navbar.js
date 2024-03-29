import styles from '@/styles/Navbar.module.css'
import { Poppins } from 'next/font/google';

const poppins = Poppins({ subsets: ['latin'], weight: ['200', '400', '600', '700', '800'] });

const Navbar = () => {
  return (
    <div className={`${styles.navbar} ${poppins.className}`}>
        <div className={styles.navbar_left}>
            <div className={styles.wrapper_logo}>
                <div className={styles.logo}/>
                <b>wamtech</b>
            </div>
        </div>
        <div className={styles.navbar_right}>
        <ul>
            <li>ABOUT US</li>
            <li>PRODUCTS</li>
            <li>PRESS</li>
            <li>CAREERS</li>
            <li>CONTACT US</li>
        </ul>
        </div>
    </div>
  )
}

export default Navbar