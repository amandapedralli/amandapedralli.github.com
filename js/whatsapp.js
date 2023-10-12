const { urlencoded } = require("express")

function send_message() {
    let name = document.getElementById('name').value
    let email = document.getElementById('email').value
    let message = document.getElementById('message').value
    let contacts = ['5551992755221', '5551996067031']
    let randomContact = contacts[Math.floor(Math.random() * contacts.length)] 
    let baseUrl = `https://wa.me/${randomContact}?text=Olá, eu me chamo ${name}!\nEstou enviando a seguinte mensagem através do site da Hipérbole:\n${message}\nCaso precise, meu e-amil para contato é ${email}. Obrigado!`
    let urlEncodedUri = encodeURI(baseUrl)

    window.open(urlEncodedUri, '_blank')
}