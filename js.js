
const regMail = new RegExp(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)
const mail = 'dai.fudo@mail.ku'
console.log(regMail.test(mail))

const regName = new RegExp(/^[a-z ,.'-]+$/i)
const name = 'Vasa pup';
console.log(regName.test(name));

const regNickname = new RegExp(/^[^0-9]\w+$/)
const nicknames = 'dai_fudo'
console.log(regNickname.test(nicknames));

const regIp = new RegExp(/^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/)
const ip = '185.94.189.202'
console.log(regIp.test(ip));

/* const regPhone = new RegExp(/^[7-9][0-9]{9}$/)
const phone = '+7 988 3308058'
console.log(regPhone.test(phone)); */