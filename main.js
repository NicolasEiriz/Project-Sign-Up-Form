const password = document.querySelector('#userPassword')
const passwordConfirm = document.querySelector('#userPasswordCheck')
const errorMessage = document.querySelector('.error')

const button = document.querySelector('#formButton')


button.addEventListener('click', (e)=>{
  if(password.value !== passwordConfirm.value){
    errorMessage.textContent = '* Password do not match'
  }
})