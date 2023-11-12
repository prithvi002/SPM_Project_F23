// ContactForm.js
import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import axios from 'axios';
import "./Contact.css"
const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            // The Email.js template ID, user ID, and access token
            const templateParams = {
                to_email: 'gamershaunj@gmail.com',
                from_name: formData.name,
                from_email: formData.email,
                message: formData.message,
            };

            console.log(templateParams)

            // Replace 'YOUR_EMAILJS_SERVICE_ID', 'YOUR_EMAILJS_TEMPLATE_ID', and 'YOUR_EMAILJS_USER_ID'
            await emailjs.send(
                'service_gwpairi',
                'template_nwrdu1v',
                templateParams,
                'DSphWtX5HQZTvYwnG'
            );

            alert('Message sent successfully!');
            setFormData({ name: '', email: '', message: '' });
        } catch (error) {
            console.error('Error sending message:', error);
            alert('Error sending message. Please try again later.');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <div className='contact-details'>
                <p>Contact Details:</p>
                <p>Email: Support@infinitytravel.com</p>
                <p>Phone: 800-555-5555</p>
                <p>Hours: M-F 8:00AM - 5:00 PM EST</p>
            </div>
            <div className="form-group">
                <label>
                    Name:
                    <input type="text" name="name" value={formData.name} onChange={handleChange} required />
                </label>
            </div>
            {/*<div className="form-group">*/}
            {/*    <label>*/}
            {/*        Email:*/}
            {/*        <input type="email" name="email" value={formData.email} onChange={handleChange} required />*/}
            {/*    </label>*/}
            {/*</div>*/}
            <div className="form-group">
                <label>
                    Message:
                    <textarea name="message" value={formData.message} onChange={handleChange} required />
                </label>
            </div>
            <div className="form-group">
                <button type="submit">Submit</button>
            </div>
        </form>
    );
};

export default ContactForm;
