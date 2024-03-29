import Button from '../Button/Button'
import { Poppins } from 'next/font/google';
import styles from '@/styles/Footer.module.css'

const poppins = Poppins({ subsets: ['latin'], weight: ['200', '400', '600', '700', '800'] });

const Footer = () => {
  return (
    <div className={styles.footer}>
    <div className={styles.footer_wrapper}>
        <div className={styles.footer_left}>
            <h4>CONTACT US</h4>
        </div>
        <div className={styles.footer_right}>
            <div className={styles.footer_right__left}>
            <h2>Support</h2>
            <p>Icon <span>11 99999-9999</span> </p>
            <p>Icon <span>contato@wamtech.com.br</span></p>

            <h2>Sales</h2>
            <p>Icon <span>11 88888-8888</span></p>
            <p>Icon <span>sales@wamtech.com.br</span></p>

            <Button text='Entre em contato' width='200px'/>
            </div>
            <div className={styles.footer_right__right}>
                Mapa
            </div>
        </div>
    </div>
    <div className={`${styles.footer_navbar} ${poppins.className}`}>
        <div className={styles.footer_navbar_left}>
            <div className={styles.footer_wrapper_logo}>
                <div className={styles.footer_logo}/>
                <b>wamtech</b>
            </div>
        </div>
        <div className={styles.footer_navbar_right}>
            <ul>
                <li>ABOUT US</li>
                <li>PRODUCTS</li>
                <li>PRESS</li>
                <li>CAREERS</li>
                <li>CONTACT US</li>
            </ul>
        </div>
        </div>
    </div>
  )
}

export default Footer