const password = document.querySelector('#userPassword')
const passwordConfirm = document.querySelector('#userPasswordCheck')
const errorMessage = document.querySelector('.error')

const button = document.querySelector('#formButton')


passwordConfirm.addEventListener('blur', (e)=>{
  if(password.value === passwordConfirm.value){
    errorMessage.textContent = ''
    password.classList.remove('passwordError')
    passwordConfirm.classList.remove('passwordError')}

    else if(password.value !== passwordConfirm){
    errorMessage.textContent = '* Password do not match'
    password.classList.add('passwordError')
    passwordConfirm.classList.add('passwordError')
  }
  
})

// passwordConfirm.addEventListener('input', (e)=>{
//   while (password.value !== passwordConfirm) {
//     errorMessage.textContent = '* Password do not match'
//   }
//   })