import styles from './Card.module.css'

const Card = ({children})=>{
    //console.log(props)
    return(
        <div className={styles.container}>
            {children}
        </div>
    )
}

export default Card