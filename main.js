const password = document.querySelector('#userPassword')
const passwordConfirm = document.querySelector('#userPasswordCheck')
const errorMessage = document.querySelector('.error')

const button = document.querySelector('#formButton')


passwordConfirm.addEventListener('blur', (e)=>{
  if(password.value === passwordConfirm.value){
    errorMessage.textContent = ''}
    else if(password.value !== passwordConfirm){
    errorMessage.textContent = '* Password do not match'
  }
  
})

// passwordConfirm.addEventListener('input', (e)=>{
//   while (password.value !== passwordConfirm) {
//     errorMessage.textContent = '* Password do not match'
//   }
//   })