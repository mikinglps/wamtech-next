import styles from '@/styles/Partners.module.css'
import Image from 'next/image'

const Partners = () => {
  return (
    <div className={styles.partners}>
        <img src='/citrix.png' alt="citrix"/>
        <img src='/github.png' alt='github'/>
        <img src='/napster.png' alt='napster'/>
        <img src='/instagram.png' alt='instagram'/>
        <img src='/microsoft.png' alt='microsoft'/>
    </div>
  )
}

export default Partners