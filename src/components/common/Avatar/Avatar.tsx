import styles from './Avatar.module.scss'

type PropsType = {
    text: string
}

export default function Avatar(props: PropsType) {
    return <div className={styles.container}>
        {props.text}
    </div>
}