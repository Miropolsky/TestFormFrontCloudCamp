import axios from 'axios'

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://api.sbercloud.ru',
});

const formApi = {
    sendForm(advantages: Array<string>, nickname: string, name: string, sername: string, sex: string, checkbox: Array<string>,
        radio: string, about: string) {
        return instance.post('/content/v1/bootcamp/frontend', {
            advantages,
            nickname,
            name,
            sername,
            sex,
            checkbox,
            radio,
            about
        }).catch(res => alert('Ошибка'))
    }
}

export {formApi};