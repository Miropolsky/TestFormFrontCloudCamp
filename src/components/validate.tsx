import * as Yup from 'yup';

const nickNameReg = /^[a-zA-Z0-9]+$/
const nameReg = /^[a-zA-Z]+$/
const SignupSchema = Yup.object().shape({
    nickname: Yup.string()
        .min(2, 'Минимум 2 буквы')
        .max(30, 'Максимум 30 символов')
        .required('Обязательное поле')
        .matches(nickNameReg, 'Используйте только буквы и цифры'),
    name: Yup.string()
        .min(2, 'Минимум 2 буквы')
        .max(50, 'Максимум 50 символов')
        .required('Обязательное поле')
        .matches(nameReg, 'Используйте только буквы'),
    sername: Yup.string()
        .min(2, 'Минимум 2 буквы')
        .max(50, 'Максимум 50 символов')
        .required('Обязательное поле')
        .matches(nameReg, 'Используйте только буквы'),
    sex: Yup.string()
        .required('Обязательное поле'),
    checkbox: Yup.array()
        .required('Обязательное поле'),
    radio: Yup.string()
        .required('Обязательное поле'),
    about: Yup.string()
        .max(200, 'Максимум 200 символов')
        .required('Обязательное поле'),
});

export { SignupSchema}