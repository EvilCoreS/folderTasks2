import fetch from "node-fetch";

function returnIp(data: {ip: string}){
    return data.ip
}

async function getIp(output: (ip: string) => void){
    let response: Response = await fetch("https://api.ipify.org?format=json")
    let data: {ip: string} = await response.json()
    output(returnIp(data))
    return data;
}
getIp((ip => console.log(ip)))

async function nameResp(){
    let resp: Response = await fetch('https://random-data-api.com/api/name/random_name')
    let data: {name: string} = await resp.json()
    return data;
}

let arrResp = [nameResp(), nameResp(), nameResp()]

Promise.all(arrResp).then(obj => { obj.forEach(item => console.log(item.name) ) })

async function outputNamesAsync(array: Promise<{ name: string }>[]){
    for (let i = 0; i < array.length; i++){
        let temp = await array[i]
        console.log(temp.name)
    }
}
outputNamesAsync(arrResp)

arrResp.forEach(resp => resp.then(item => console.log(item.name)))


function userInfo(attempts: number){
    fetch('https://random-data-api.com/api/users/random_user').then((resp: Response) => resp.json().then((item: {gender: string}) => {
        if (item.gender === 'Female'){
            console.log(`Gender: ${item.gender}\nAttempts: ${attempts}\nMethod: wo async/await`)
        }
        else{
            userInfo(++attempts)
        }
    }))
}
userInfo(1)

async function asyncUserInfo(attempts: number){
    let resp: Response = await fetch('https://random-data-api.com/api/users/random_user')
    let data: {gender: string} = await resp.json()
    if (data.gender === "Female"){
        console.log(`Gender: ${data.gender}\nAttempts: ${attempts}\nMethod: with async/await`)
    }
    else{
        asyncUserInfo(++attempts)
    }
}
asyncUserInfo(1)

function func1 (ip: string, callback: (ip: string) => void){
    callback(ip)
    return ip;
}

async function func2() {
    let response: Response = await fetch("https://api.ipify.org?format=json")
    let data: {ip: string} = await response.json()
    func1(data.ip, (ip => console.log(ip)))
}
func2()

async function returnString(){
    let response: Response = await fetch("https://api.ipify.org?format=json")
    let data: {ip: string} = await response.json()
    return data.ip;
}

function getStringIp(callback: (ip: string) => void) {
    returnString().then(ip => {callback(ip)}).catch(function (reason) {
        console.log(`Данные не были загружены.\nПричина: ${reason}`)
    })
}
getStringIp(ip => console.log(ip))