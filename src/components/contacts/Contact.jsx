import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import './contact.css';

// Icons
import { MdEmail } from 'react-icons/md';
import { FaWhatsapp, FaLinkedin, FaMapMarkerAlt, FaPaperPlane } from 'react-icons/fa';
import { HiSparkles } from 'react-icons/hi2';

function Contact() {
  const form = useRef();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [feedback, setFeedback] = useState({ type: '', message: '' });

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setFeedback({ type: '', message: '' });

    emailjs
      .sendForm(
        'service_8475ynq',
        'template_jrqx7ih',
        form.current,
        'TIbVRU3YdZTcq8PJ-'
      )
      .then(() => {
        setIsSubmitting(false);
        setFeedback({
          type: 'success',
          message: 'Message sent successfully! I will reply to you promptly.'
        });
        form.current.reset();
        setTimeout(() => setFeedback({ type: '', message: '' }), 6000);
      })
      .catch((error) => {
        setIsSubmitting(false);
        setFeedback({
          type: 'error',
          message: 'Failed to send message: ' + (error.text || error.message || 'Please reach out via email or WhatsApp.')
        });
      });
  };

  return (
    <section id="contact">
      <div className="section_header">
        <span className="section_tag">08 // REACH OUT</span>
        <h2 className="section_title">
          Contact <span>Me</span>
        </h2>
        <p className="section_subtitle">
          Have an open role, an internship opportunity, or a collaborative project? Let's build something remarkable.
        </p>
      </div>

      <div className="container contact_container">
        {/* Left Column: Direct Reach-out Channels */}
        <div className="contact_options">
          {/* Email */}
          <article className="contact_option glass-card">
            <div className="contact_icon_wrap">
              <MdEmail className="contact_icon" />
            </div>
            <h4>Email</h4>
            <h5>harshkush15sep@gmail.com</h5>
            <a
              href="mailto:harshkush15sep@gmail.com"
              target="_blank"
              rel="noreferrer"
              className="contact_link"
            >
              Send an Email &rarr;
            </a>
          </article>

          {/* WhatsApp */}
          <article className="contact_option glass-card">
            <div className="contact_icon_wrap">
              <FaWhatsapp className="contact_icon whatsapp_icon" />
            </div>
            <h4>WhatsApp</h4>
            <h5>+91-7398464400</h5>
            <a
              href="https://wa.me/917398464400"
              target="_blank"
              rel="noreferrer"
              className="contact_link"
            >
              Chat on WhatsApp &rarr;
            </a>
          </article>

          {/* LinkedIn */}
          <article className="contact_option glass-card">
            <div className="contact_icon_wrap">
              <FaLinkedin className="contact_icon linkedin_icon" />
            </div>
            <h4>LinkedIn</h4>
            <h5>linkedin.com/in/maharshi027</h5>
            <a
              href="https://linkedin.com/in/maharshi027"
              target="_blank"
              rel="noreferrer"
              className="contact_link"
            >
              Connect on LinkedIn &rarr;
            </a>
          </article>
        </div>

        {/* Right Column: Contact Message Form */}
        <div className="contact_form_wrapper glass-card">
          <div className="form_header">
            <h3>Send a Direct Message</h3>
            <p>Fill out the form below and I'll receive an instant notification.</p>
          </div>

          {feedback.message && (
            <div className={`feedback_alert ${feedback.type}`}>
              {feedback.message}
            </div>
          )}

          <form ref={form} onSubmit={sendEmail} className="contact_form">
            <div className="form_group">
              <label htmlFor="user_name">Your Name</label>
              <input
                id="user_name"
                type="text"
                name="name"
                placeholder="e.g. Alex Johnson"
                required
              />
            </div>

            <div className="form_group">
              <label htmlFor="user_email">Your Email Address</label>
              <input
                id="user_email"
                type="email"
                name="email"
                placeholder="e.g. alex@company.com"
                required
              />
            </div>

            <div className="form_group">
              <label htmlFor="user_message">Your Message</label>
              <textarea
                id="user_message"
                name="message"
                rows="5"
                placeholder="Describe your project, team opportunity, or inquiry..."
                required
              ></textarea>
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="btn btn-primary form_submit_btn"
            >
              {isSubmitting ? (
                'Transmitting Message...'
              ) : (
                <>
                  <FaPaperPlane /> Send Message
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
