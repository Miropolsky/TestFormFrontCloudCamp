import axios from 'axios'

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://api.sbercloud.ru',
});

const formApi = {
    sendForm(Advantages: Array<string>, Nickname: string, Name: string, Surname: string, Sex: string, Checkbox: Array<string>,
        Radio: string, About: string) {
        return instance.post('/content/v1/bootcamp/frontend', {
            Advantages,
            Nickname,
            Name,
            Surname,
            Sex,
            Checkbox,
            Radio,
            About
        })
    }
}

export {formApi};