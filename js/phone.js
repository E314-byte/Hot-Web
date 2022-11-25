const formMethods = () => {
    const phoneInput = document.querySelector('#phone')
    const form = document.querySelector('#form')

    phoneInput.addEventListener('input', (event) => {
        event.target.value = event.target.value.replace(/\D/g, '')
    })

    form.addEventListener('submit', (event) => {
        event.preventDefault()
        const data = new FormData(event.target)
        const { phone, email } = Object.fromEntries(data)

        alert(`Номер телефона: ${phone};\nEmail: ${email};`)
    })
}

// let phone = document.getElementById('phone').value; // Получаем значение input
// let regex = /^(\+7|7|8)?[\s\-]?\(?[489][0-9]{2}\)?[\s\-]?[0-9]{3}[\s\-]?[0-9]{2}[\s\-]?[0-9]{2}$/;
// if (!regex.test(phone)) {
//     console.log('Не соответствует');
// } else {
//     console.log('Соответствует');
// }