import React, {useState, useEffect} from "react";
import './SignUpForm.css';
import PhoneInput from "./PhoneInput";


function SignUpForm() {

const [email, setEmail] = useState("");
const [password1, setPassword1] = useState("");
const [password2, setPassword2] = useState("");
const [emailDirty, setEmailDirty] = useState(false); 
const [passwordDirty, setPasswordDirty] = useState(false);
const [emailError, setEmailError] = useState("Адрес электронной почты не может быть пуст");
const [passwordError, setPasswordError] = useState("Пароль не может быть пуст");
const [formValid, setFormValid] = useState(false);

useEffect(() => {
    if (emailError || passwordError)
        setFormValid(false);
    else 
    setFormValid(true);
}, [emailError, passwordError]);

    const emailHandler = e => {
        const validEmail = /^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/;
        if (!validEmail.test(String(e.target.value).toLowerCase())) {
            setEmailError("Некорректный email");
        } else 
            setEmailError("");
        setEmail(e.target.value);
    }

    const passwordHandler = (e, index) => {
        if (index === 1) {
            setPassword1(e.target.value);
                if (e.target.value.length < 3 || e.target.value.length > 12) 
                    setPasswordError("Пароль должен быть длиннее 3 и меньше 12 символов");
                else if (!e.target.value) 
                    setPasswordError("Пароль не может быть пуст");
                else if (password2 != e.target.value) 
                    setPasswordError("Пароли не совпадают");
                else 
                    setPasswordError("");
        } else {
            setPassword2(e.target.value);
                if (e.target.value.length < 3 || e.target.value.length > 12)
                    setPasswordError("Пароль должен быть длиннее 3 и меньше 12 символов");
                else if (!e.target.value) 
                    setPasswordError("Пароль не может быть пуст");
                else if (password1 != e.target.value) 
                    setPasswordError("Пароли не совпадают");
                else 
                    setPasswordError("");
            }
    }

    const blurHandler = (e) => {
        switch (e.target.name) {
            case "email":
                setEmailDirty(true);
                break;
            case "password1":
                setPasswordDirty(true);
                break;
                case "password2":
                setPasswordDirty(true);
                break;
        }
    }

    return (
        <form>
            <h1>Регистрация</h1>
            {(emailDirty && emailError) && <div style={{color:"red"}}>{emailError}</div>}
            <input onChange={e => emailHandler(e)} value={email} onBlur={e => blurHandler(e)} name="email" type="email" placeholder="Введите email"/>
            {(passwordDirty && passwordError) && <div style={{color:"red"}}>{passwordError}</div>}
            <input onChange={e => passwordHandler(e, 1)} value={password1} onBlur={e => blurHandler(e)} name="password1" type="password" placeholder="Введите пароль"/>
            <input onChange={e => passwordHandler(e, 2)} value={password2} onBlur={e => blurHandler(e)} name="password2" type="password" placeholder="Введите пароль"/>
            <input name="lastName" type="text" placeholder="Введите Фамилию"/>
            <input name="Name" type="text" placeholder="Введите Имя"/>
            <input name="middleName" type="text" placeholder="Введите Отчество"/>
            <label for="sex1"><input name="sex" id="sex1" type="radio"/>Мужской</label>
            <label for="sex2"><input name="sex" id="sex2" type="radio"/>Женский</label>
            <input name="birthdate" type="date"/>
            <PhoneInput/>
            <input name="submit" disabled={!formValid} type="submit"/>
        </form>
    )
}

export default SignUpForm;