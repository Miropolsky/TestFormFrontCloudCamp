import { Formik, Form, Field, FieldInputProps } from 'formik';
import Avatar from '../common/Avatar/Avatar';
import LinkItem from './LinkItem/LinkItem';
import styles from './Main.module.scss';
import CustomInput from '../common/CustomInput/CustomInput';
import CustomButton from '../common/CustomButton/CustomButton';
import { useNavigate } from 'react-router-dom';


export default function Main() {
    const navigate = useNavigate();
    return <div className={styles.container}>
        <div className={styles.card}>
            <div className={styles.contacts}>
                <Avatar text='СМ'/>
                <div className={styles.contactsInformation}>
                    <div className={styles.name}>
                        Сергей Миропольский
                    </div>
                    <div className={styles.links}>
                        <LinkItem text='Telegram'target="_blank" path='https://t.me/SeregaShow'/>
                        <LinkItem text='GitHub' target="_blank" path='https://github.com/Miropolsky' />
                        <LinkItem text='Resume'target="_blank" path='/'/>
                    </div>
                </div>
            </div>
            <div className={styles.lineGray}></div>
            <div className={styles.form}>
            <Formik
                initialValues={{ tel: "+7922187150", email: "Miropolskysk@yandex.ru" }}
                onSubmit={() => navigate('/create')}
            >
                <Form>
                <div className={styles.titleInput}>
                    Номер телефона
                </div>
                <Field name="tel" type="tel" >
                {({
                    field,

                    }: {field: FieldInputProps<any>}) => (
                        <CustomInput {...field} disabled={true}/>

                )}
                </Field>
                <div className={styles.titleInput}>
                    Email
                </div>
                <Field name="email" type="email" >
                {({
                    field,

                    }: {field: FieldInputProps<any>}) => (
                        <CustomInput {...field} disabled={true}/>

                )}
                </Field>
                <div className={styles.btn}>
                    <CustomButton id='button-start' type='submit' text='Начать'/>
                </div>
                </Form>
            </Formik>
      </div>

        </div>
    </div>
}