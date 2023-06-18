import styles from './CustomInput.module.scss'
import deleteItem from '../../../assets/img/delete.svg'

type PropsType = {
    name: string,
    multiple? : boolean | undefined,
    value: string | number,
    disabled?: boolean
    placeholder?: string
    delete?: number,
    idfield?: number,
    onDel?: undefined | ((id: number) => void)
}

export default function CustomInput(props: PropsType) {
    return <div className={styles.container}>
        <input className={styles.inpt} {...props} disabled={props.disabled} placeholder={props.placeholder}/>
        {props.delete === 1 && props.onDel && props.idfield &&  
            <span className={styles.imgDelete}>
                <img onClick={()=> {
                    if (props.onDel && props.idfield) {
                        props.onDel(props.idfield)
                    }
                }} src={deleteItem} alt='deleteItem' />
            </span>
        }
    </div>
}


