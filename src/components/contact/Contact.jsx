import React,{ useRef }  from 'react'
import './contact.css'
import emailjs from 'emailjs-com'

const Contact = () => {
  const form = useRef();
 // using EmailJS for contact me component
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_7pdze1c', 'template_z2bsojw', form.current, 'BFPXs-25sKMz7JRiE')
      
    e.target.reset()
  };


  return (
    <section id="contact">
      <h5> Get In Touch</h5>
      <h2> Contact Me</h2>

<div className="container contact_container">
  <div class="form">
  <form ref={form} onSubmit={sendEmail}>
    <input type="text" name='name' placeholder='Enter Full Name' required></input>
<input type="email" name='email' placeholder='Enter Your Email' required></input>
<textarea name="message" rows="5" placeholder="Enter Your Message" required></textarea>
<button type='submit' className='btn btn-primary'>Send Message</button>
  </form>
  </div>
</div>
    </section>
  )
}

export default Contact