import { useState } from 'react';
import './contact.css';

function Contact() {
  const [form, setForm] = useState({ email: '', subject: '', message: '' });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const mailtoLink = `mailto:adridev@gmail.com?subject=${encodeURIComponent(form.subject)}&body=${encodeURIComponent(form.message)}`;
    window.location.href = mailtoLink;
  };

  return (
    <div id='contact' className="contact blur-card-form">
      <h3 className="contact-title">Devis / Contact</h3>
      <form action="#" className="contact-form" onSubmit={handleSubmit}>
        <div className='contact-email'>
          <label htmlFor="email" className="email-label">Votre adresse mail</label>
          <input type="email" id="email" className="email-input" placeholder="" required value={form.email} onChange={handleChange} />
        </div>
        <div className='contact-name'>
          <label htmlFor="subject" className="name-label">Nom</label>
          <input type="text" id="subject" className="name-input" placeholder="" required value={form.subject} onChange={handleChange} />
        </div>
        <div className='contact-msg'>
          <label htmlFor="message" className="msg-label">Message</label>
          <textarea id="message" rows="6" className="msg-input" placeholder="Description du besoin..." value={form.message} onChange={handleChange}></textarea>
        </div>
        <button type="submit" className="contact-button uiverse">
          <div className="wrapper">
            <span>Envoyer</span>
            <div className="circle circle-12"></div>
            <div className="circle circle-11"></div>
            <div className="circle circle-10"></div>
            <div className="circle circle-9"></div>
            <div className="circle circle-8"></div>
            <div className="circle circle-7"></div>
            <div className="circle circle-6"></div>
            <div className="circle circle-5"></div>
            <div className="circle circle-4"></div>
            <div className="circle circle-3"></div>
            <div className="circle circle-2"></div>
            <div className="circle circle-1"></div>
          </div>
        </button>
      </form>
    </div>
  );
}

export default Contact;