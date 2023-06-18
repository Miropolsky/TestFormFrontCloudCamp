import styles from './CustomButton.module.scss';

type PropsType = {
    type?: 'submit' | 'button' | 'reset'
    disabled?: boolean,
    text?: string
    onClick?: () => void,
    background?: string,
    color?: string,
    width?: string,
    height?: string
    borderRadius?: string
    border?: string
    id?: string
    fontSize?: string
}

export default function CustomButton(props: PropsType) {
    const defaultStyle = {
        background: props.background ? props.background :'#5558FA',
        borderRadius: props.borderRadius ? props.borderRadius : '4px',
        color: props.color ? props.color :'white',
        width: props.width ? props.width :'80px',
        height: props.height ? props.height :'44px',
        border: props.border ? props.border :'none',
        fontSize: props.fontSize ? props.fontSize: '14px'
    }
    return (
        <button
            id={props.id}
            type={props.type ? props.type : 'button'}
            disabled={props.disabled}
            onClick={() => {
                if (props.onClick) {
                    props.onClick()
                }
            }}
            style={defaultStyle}
            className={styles.btn}
        >
            {props.text}
        </button>
    );
}