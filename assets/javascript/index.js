import app from "./FireBase/Config.js"
import subscribeToHellfire from './FireBase/hellfire-club.js'


const btnSubscribe = document.getElementById("btnSubscribe");
const txtName = document.getElementById("txtName");
const txtEmail = document.getElementById("txtEmail");
const txtLevel = document.getElementById("txtLevel");
const txtCharacter = document.getElementById("txtCharacter");

let i = 0;
btnSubscribe.addEventListener('click', async ()=>{
    const subscription = {
        name: txtName.value,
        email: txtEmail.value,
        level: txtLevel.value,
        character: txtCharacter.value
    };
    const subscriptionId = subscribeToHellfire(subscription);
    console.log(subscriptionId)

})