import emailjs from 'emailjs-com';
import{ init } from 'emailjs-com';
init("user_bmd04T6skv03GYujwqnD7");


var templateParams = {
    name: 'Anas',
    send_to: 'anaskail2737@gmail.com'
       
};
export const sendEmail = () =>{
        emailjs.send('service_4z3opar', 'template_8qhx8w3', templateParams)
            .then(function(response) {
            console.log('SUCCESS!', response.status, response.text);
            }, function(error) {
            console.log('FAILED...', error);
            });

}