import React, { useState } from 'react';
import emailjs from '@emailjs/browser';

export const MailerJS = () => {

  const [style, setStyle] = useState("modal-submit-ok");

  const sendEmail = (e) => {

    e.preventDefault();
    console.log(e.target);
    emailjs.sendForm('service_yx1ennh','template_7hxi21k',e.target,'Zjo6mNYvNam9PYTZC')
    .then(response => {
          setStyle("visible");
          console.log(response);
          setTimeout(() => {
            setStyle("modal-submit-ok")
          }, 1500);                          
    })
    .catch( error => console.log(error))
  }

  return (
    <div className='div-form'>
      <h1 className='title-form'>Contact Us</h1>
      <form className='form-mail' onSubmit={sendEmail}>
        <label>Name</label>
        <input type="text" name='user_name' />
        <hr />

        <label>Email</label>
        <input type="email" name='user_email' />
        <hr />

        <label>Message</label>
        <textarea name="user_message" id="" cols="30" rows="10"></textarea>
        <hr />
        <button>Send</button>
      </form>
      <div id='modal' className={style}>
        <div className="icon">
          <h2 id='h2-msj'>Sent!</h2>      
        </div>
      </div>
    </div>
  )
}
