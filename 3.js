//SHOW MENU 
const showMenu =(toggleId,navId) => {
    const toggle =document.getElementById(toggleId),
    nav=document.getElementById(navId)
if(toggle && nav){
    toggle.addEventListener('click', () =>{
        nav.classList.toggle('show')
    });
}
}
showMenu('nav_toggle','nav_menu')

//ACTIVE &REMOVE ACTIVE
const navLink =document.querySelectorAll('.nav_link')
navLink.forEach(n=>n.classList.remove('active'))

function linkAction(){
    navLink.forEach(n=>n.classList.remove('active'))
    this.classList.add('active')

    const navMenu =document.getElementById('nav_menu')
    navMenu.classList.remove('show')
}

navLink.forEach(n => n.addEventListener('click', linkAction))


 const contactForm = document.getElementById('contact-form') ,
       contactName = document.getElementById('contact-name') ,
       contactEmail = document.getElementById('contact-email') ,
       contactInfo = document.getElementById('contact-info') ,
       contactMessage = document.getElementById('contact-message') 

    const sendEmail =(e) =>{
e.preventDefault()
// check if the field has value
if(contactName.value === '' ||contactEmail.value ===''|| contactInfo.value===''){
// Add and remove color
contactMessage.classList.remove('color-blue')
contactMessage.classList.add('color-red')

//show message
contactMessage.textContent = 'Write all the input fields 🧐'

}
else{
    //serviceID - template -#form-publickey
    emailjs.sendForm('service_g047w5f','template_uj2he6n','#contact-form','WQnJGcmgSkZqoTti-')
    .then(() =>{
        //show message and add color
        contactMessage.classList.add('color-blue')
        contactMessage.textContent='Message sent sucessfully!✅'
        //Remove message aftr seconds
        setTimeout(() =>{
            contactMessage.textContent=''
        } , 5000)
    })
}
    }
    contactForm.addEventListener('submit',sendEmail)

