import bcrypt from 'bcryptjs'

let ok = '\u2713'
let wrong = '\u2717'
let green = '#18e23a'
let red = '#e81728'

const checkValidMail = (inputValue, listMails) => {
    let validMailChecked = {
        sign: wrong,
        color: red
    }
    let regExMail = new RegExp(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)

    if (!inputValue) {
        validMailChecked.sign = null
        return validMailChecked
    }
    else if (!regExMail.test(inputValue)) {
        validMailChecked.value = 'invalidMail'
        return validMailChecked
    }
    else {
        let mailsChecked = []
        for (let i = 0; i < listMails.length; i++) {
            mailsChecked.push((bcrypt.compareSync(inputValue, listMails[i])))
        }
        
        if (mailsChecked.find(elem => { return elem === true})) {
            validMailChecked.value = 'mailUsed'
            return validMailChecked
        }
        else {
            validMailChecked.sign = ok
            validMailChecked.color = green
            return validMailChecked
        }
    }
}

const checkValidUsername = (inputValue) => {
    let validUsernameChecked = {
        sign: wrong,
        color: red
    }     

    if (!inputValue) {
        validUsernameChecked.sign = null
        return validUsernameChecked
    }
    else if (inputValue.length < 3) {
        validUsernameChecked.value = 'usernameTooShort'
        return validUsernameChecked
    }
    else if (inputValue.length > 12) {
        validUsernameChecked.value = 'usernameTooLong'
        return validUsernameChecked
    }
    else {
        validUsernameChecked.sign = ok
        validUsernameChecked.color = green
        return validUsernameChecked
    }
}

const checkValidFirstName = (inputValue) => {
    let validFirstNameChecked = {
        sign: wrong,
        color: red
    }

    if (!inputValue) {
        validFirstNameChecked.sign = null
        return validFirstNameChecked
    }
    else if (inputValue.length > 12) {
        validFirstNameChecked.value = 'firstNameTooLong'
        return validFirstNameChecked
    }
    else {
        validFirstNameChecked.sign = ok
        validFirstNameChecked.color = green
        return validFirstNameChecked
    }
}

const checkValidSecondName = (inputValue) => {
    let validSecondNameChecked = {
        sign: wrong,
        color: red
    }

    if (!inputValue) {
        validSecondNameChecked.sign = null
        return validSecondNameChecked
    }
    else if (inputValue.length > 12) {
        validSecondNameChecked.value = 'secondNameTooLong'
        return validSecondNameChecked
    }
    else {
        validSecondNameChecked.sign = ok
        validSecondNameChecked.color = green
        return validSecondNameChecked
    }
}

const checkValidPwd = (inputValue) => {
    let validPwdChecked = {
        sign: wrong,
        color: red
    }

    if (!inputValue) {
        validPwdChecked.sign = null
        return validPwdChecked
    }
    else if (!/[a-z]/.test(inputValue)) {
        validPwdChecked.value = 'lowercase'
        return validPwdChecked
    }
    else if (!/[A-Z]/.test(inputValue)) {
        validPwdChecked.value = 'uppercase'
        return validPwdChecked
    }
    else if (!/[0-9]/.test(inputValue)) {
        validPwdChecked.value = 'number'
        return validPwdChecked
    }
    else if (inputValue.length < 8) {
        validPwdChecked.value = 'pwdTooSHort'
        return validPwdChecked
    }
    else {
        validPwdChecked.sign = ok
        validPwdChecked.color = green
        return validPwdChecked
    }
}

const checkValidConfirmPwd = (inputValue, pwdValue) => {
    let validConfirmPwdChecked = {
        sign: wrong,
        color: red
    }

    if (!inputValue) {
        validConfirmPwdChecked.sign = null
        return validConfirmPwdChecked
    }
    else if (inputValue !== pwdValue) {
        return validConfirmPwdChecked
    }
    else {
        validConfirmPwdChecked.sign = ok
        validConfirmPwdChecked.color = green
        return validConfirmPwdChecked
    }
}

export default {
    mail: checkValidMail,
    username: checkValidUsername,
    firstName: checkValidFirstName,
    secondName: checkValidSecondName,
    pwd: checkValidPwd,
    confirmPwd: checkValidConfirmPwd
}