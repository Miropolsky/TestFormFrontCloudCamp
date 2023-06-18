import { useState } from 'react';
import styles from './CustomSelect.module.scss'
import arrowSelect from '../../../assets/img/arrowSelect.svg';

type PropsType = {
    name: string,
    value: string[],
    placeholder?: string, 
    onChange: (text: string) => void; 
    setFieldValue: (name: string, e: string) => void
}

export function CustomSelect(props: PropsType) {
  const [selectedOption, setSelectedOption] = useState("");
  const [isOption, setIsOption] = useState(false);

  const handleOptionSelect = (option: string) => {
    setSelectedOption(option);
    setIsOption(false);
    props.onChange(option)
    props.setFieldValue('Sex', option)
  };

  const renderOptions = () => {
    return props.value.map((option) => (
      <div
        key={option}
        className={`${styles.option} ${selectedOption === option ? "selected" : ""}`}
        onClick={() => handleOptionSelect(option)}
      >
        {option}
      </div>
    ));
  };

  return (
    <div className={styles.customSelect}>
      <div className={isOption ? `${styles.selectedOption} ${styles.selectedOptionActive}`
        : styles.selectedOption} onClick={()=> setIsOption(!isOption)}>
        {selectedOption || <span className={styles.defaultOption}>Не выбрано</span>}
        <div className={styles.arrow}>
            <img src={arrowSelect} alt='arrowSelect' />
        </div>
      </div>
      {isOption && <div className={styles.options}>{renderOptions()}</div>}
    </div>
  );
}

// export default function CustomSelect(props: PropsType) {
//     return <select className={styles.select} name={props.name} placeholder='Sex'>
//         <option value="" disabled selected hidden>Не выбрано</option>
//         {props.value.map(el => {
//             return <option value={el}>{el}</option>
//         })}
//     </select>
// }