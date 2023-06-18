import CustomProgressBar from '../CustomProgressBar/CustomProgressBar';
import styles from './CustomForm.module.scss';
import { useState } from 'react';
import { Formik, Form, Field, FieldInputProps, FormikProps } from 'formik';
import CustomInput from '../common/CustomInput/CustomInput';
import CustomButton from '../common/CustomButton/CustomButton';
import { CustomSelect } from '../common/CustomSelect/CustomSelect';
import { useNavigate } from 'react-router-dom';

type PropsTypeCustomForm = {
    sendForm: (Advantages: Array<string>, Nickname: string, Name: string, Surname: string, Sex: string, Checkbox: Array<string>,
        Radio: string, About: string) => void
}

export default function CustomForm(props: PropsTypeCustomForm) {
    const navigate = useNavigate();
    const [step, isStep] = useState(0);
    const [advantages, setIsAdvantages] = useState([
        { name: 'Advantages1', value: '', id: 1 },
        { name: 'Advantages2', value: '', id: 2 },
        { name: 'Advantages3', value: '', id: 3 },        
    ])
    const upStep = () => {
        isStep(step+1);
    }
    const downStep = () => {
        isStep(step-1);
    }
    if (step === -1) {
        navigate('/');
    }
    const addAdvantages = () => {
        let id = 1;
        if (advantages.length !== 0) {
            id = advantages[advantages.length - 1].id + 1;
        }
        if (advantages.length < 7) {
            setIsAdvantages([...advantages, {name: `fieldAdvantages${id}`, value: '', id: id}])
        }
    }
    const deleteAdvantages = (id: number) => {
        setIsAdvantages([...advantages.filter(el => el.id !== id)])
    }
    return <div className={styles.container}>
        <div className={styles.card}>
            <CustomProgressBar step={step}/>

            <div className={styles.form}>
            <Formik
                initialValues={
                    { nickname: "", name: "", sername: '', sex: '', advantages: advantages, checkbox: [], radio: '', about: ''}
                }
                onSubmit={(value: any) => {
                    let mas = [];
                    for (let i = 0; i < advantages.length; i++) {
                        if (`Advantages${advantages[i].id}` in value) {
                            mas.push(value[`Advantages${advantages[i].id}`])
                        }
                    }
                    const valueForm = {
                        advantages: mas,
                        nickname: value.nickname,
                        name: value.name,
                        surname: value.surname,
                        sex: value.sex,
                        checkbox: value.checkbox,
                        radio: value.radio,
                        about: value.about,
                    }
                    console.log(valueForm)
                    props.sendForm(mas, value.Nickname, value.Name, value.Surname, value.Sex, value.Checkbox, value.Radio, value.About)
                }}
            >
                <Form>
                {step === 0 && (<>
                    <div className={styles.titleInput}>
                        NickName
                    </div>
                    <CustomFieldInput name='Nickname' type='text' delete={0}/>
                    <div className={styles.titleInput}>
                        Name
                    </div>
                    <CustomFieldInput name='Surname' type='text' delete={0}/>
                    <div className={styles.titleInput}>
                        Surname
                    </div>
                    <CustomFieldInput name='Name' type='text' delete={0}/>
                    <div className={styles.titleInput}>
                        Sex
                    </div>
                    <CustomFieldSelect value={['man', 'woman']} name='Sex'/>
                </>)}

                {
                    step === 1 && (<>
                        <div className={styles.titleInput}>
                            Advantages
                        </div>
                        <div className={styles.advantages}>
                            {advantages.map((el, i) => {
                                return <CustomFieldInput name={el.name} key={i} value={el.value} type='text'
                                            placeholder='Placeholder' delete={1} onDel={deleteAdvantages} idfield={el.id}
                                        />
                            })}
                            <CustomButton type='button' width='44px' height='44px' onClick={addAdvantages} text='+'
                             border='2px solid #5558FA' background='white' color='#5558FA' fontSize='24px'/>
                        </div>
                        <div className={styles.titleInput}>
                            Checkbox group
                        </div>
                        <div role="group" aria-labelledby="checkbox-group" className={styles.checkbox}>
                            {['1','2','3'].map(el => {
                                return <label key={el}>
                                <Field type="checkbox" name="Checkbox" value={el} />
                                <span>{el}</span>
                              </label>
                            })}
                        </div>
                        
                        <div className={styles.titleInput}>
                            Radio group
                        </div>
                        <div role="group" aria-labelledby="my-radio-group" className={styles.radio}>
                            {['1','2','3'].map(el => {
                                return <label key={el}>
                                <Field type="radio" name="Radio" value={el} />
                                <span>{el}</span>
                              </label>
                            })}
                        </div>

                    </>)
                }

                { step === 2 && (<>
                    <div className={styles.titleInput}>
                            About
                    </div>
                    <CustomFieldTextArea name='About' placeholder='Placeholder'/>
                </>)}
                <div className={styles.btnNext}>
                    <CustomButton onClick={downStep} type='button' text='Назад' border='1px solid #5558FA' background='white' color='#5558FA'/>
                    {step === 2 ? <CustomButton type="submit" text='Отправить'/> : <CustomButton onClick={upStep} type='button' text='Далее' />}
                </div>
                </Form>
            </Formik>
            </div>
        </div>
    </div>
}

type PropsCustomFieldInput = {
    name: string,
    value?: string,
    type: string,
    // field: FieldInputProps<any>,
    disabled?: boolean,
    placeholder?: string,
    delete?: number,
    onDel?: undefined | ((id: number) => void)
    idfield?: number
}

const CustomFieldInput = (props: PropsCustomFieldInput) => {
    return <Field name={props.name} type={props.type} >
                {({
                    field,
                    }: {field: FieldInputProps<any>}) => (<div className={styles.advantagesItem}>
                            <CustomInput {...field} idfield={props.idfield} disabled={props.disabled}
                             delete={props.delete} placeholder={props.placeholder} onDel={props.onDel}/>
                        </div>

                )}
    </Field>
}

type PropsCustomFieldSelect = {
    name: string,
    value: string[],
    placeholder?: string,  
}

const CustomFieldSelect = (props: PropsCustomFieldSelect) => {
    return <Field name={props.name} type='select'>
                {({
                    field,
                    form
                    }: {field: FieldInputProps<any>, form: FormikProps<any>}) => (
                        <CustomSelect {...field} value={props.value} {...form}/>

                )}
    </Field>
}

type PropsCustomFieldTextArea = {
    name: string, 
    placeholder?: string
}

const CustomFieldTextArea = (props: PropsCustomFieldTextArea) => {
    return <Field name={props.name}>
                {({
                    field,
                    }: {field: FieldInputProps<any>}) => (
                        <div className={styles.textArea}>
                            <textarea {...field} placeholder={props.placeholder}/>
                        </div>

                )}
    </Field>
}
