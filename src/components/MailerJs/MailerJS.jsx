import React from 'react';
import emailjs from 'emailjs-com';

export const MailerJS = () => {

  const sendEmail = (e) => {
    e.preventDefault();
    console.log(e.target);
    emailjs.sendForm('service_yx1ennh','template_7hxi21k',e.target,'Zjo6mNYvNam9PYTZC')
    .then(response => console.log(response))
    .catch( error => console.log(error))
  }

  return (
    <div className='div-form'>
      <h1 className='title-form'>Send Email</h1>
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
    </div>
  )
}
