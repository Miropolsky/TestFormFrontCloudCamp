import styles from './CustomProgressBar.module.scss';
import CustomItem from './CustomItem/CustomItem';

type PropsType = {
    step: number
}

export default function CustomProgressBar(props: PropsType) {
    
    return <div className={styles.container}>
        <div className={styles.defaultProgress}>
                <CustomItem active={props.step === 0} passed={props.step > 0} number={1}/>
                <CustomItem active={props.step === 1} passed={props.step > 1} number={2}/>
                <CustomItem active={props.step === 2} passed={false} number={3}/>
            <span style={{width: `${props.step*50}%`}} className={styles.progress}>
            </span>
        </div>
    </div>
}