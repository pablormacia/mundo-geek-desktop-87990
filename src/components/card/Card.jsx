import styles from './Card.module.css'

const Card = ({children})=>{
    return(
        <div className={styles.container}>
            {children}
        </div>
    )
}

export default Card