import styles from './LinkItem.module.scss';
import folder from '../../../assets/img/folder.svg'
import { Link } from 'react-router-dom';

type PropsType = {
    path: string,
    text: string
    target?: string
}

export default function LinkItem(props: PropsType) {
    return <Link to={props.path} target={props.target} className={styles.container}>
        <img src={folder} alt='folder' />
        <span>{props.text}</span>
    </Link>
}