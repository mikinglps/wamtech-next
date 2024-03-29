import Button from '../Button/Button';
import styles from '@/styles/ProductSingle.module.css'

const ProductSingle = ({logo, title, description}) => {
  return (
    <div className={styles.products_single}>
            <div className={styles.image_holder}>
                <img src={logo} alt='logo'/>
           </div>
           <h4>{title}</h4>
           <p>{description}</p>
           <Button text='Book your product' width='200px'/>

    </div>
  )
}

export default ProductSingle