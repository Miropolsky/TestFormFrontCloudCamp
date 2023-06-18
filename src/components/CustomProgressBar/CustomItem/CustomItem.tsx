import styles from './CustomItem.module.scss'
import cricleForm from '../../../assets/img/circleForm.svg';
import cricleFormActive from '../../../assets/img/cricleFormActive.svg';
import cricleFormPassed from '../../../assets/img/cricleFormPassed.svg';

type PropsType={
    number: number,
    active: boolean,
    passed: boolean
}


export default function CustomItem(props: PropsType){
    return <div className={styles.container}>
        
        <img src={props.active ? cricleFormActive : props.passed ? cricleFormPassed : cricleForm} alt='cricleForm'/>
        <div className={styles.number}>
            {props.number}
        </div>
    </div>
}