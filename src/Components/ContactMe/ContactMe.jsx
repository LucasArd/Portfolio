import React, { Fragment, useRef } from "react";
import "./ContactMe.css";
import emailjs from '@emailjs/browser';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';


const ContactMe = () => {

    const refForm = useRef();

    const handleSubmit = (event) => {

        event.preventDefault();
        
        const serviceId = "service_41k81sc";
        const templateId = "template_w2imx6r";
        const apikey = "jgJg7cTgsk_zqljWg";

        emailjs.sendForm(serviceId, templateId, refForm.current, apikey)
            .then(result => console.log(result.text))
            .catch(error => console.log(error))
        alert("Se ha enviado el mail correctamente");

        event.target.reset();
    }




    return (
        <Fragment>
            <div className="contactForm" id="contact-me">
                <h2 className="titleProyects">Contact Me</h2>

                <form ref={refForm} action="" onSubmit={handleSubmit} >
                    <div className="header-contact">
                        <p>Please fill this form</p>
                    </div>

                    <fieldset>
                        <FloatingLabel controlId="floatingPassword" label="Name" className="floatingLabel" >
                            <Form.Control type="text" placeholder="Name" name='username' required />
                        </FloatingLabel>
                    </fieldset>

                    <fieldset>
                        <FloatingLabel
                            label="Email address"
                            className="mb-3 floatingLabel"
                        >
                            <Form.Control type="email" placeholder="name@example.com" name='email' id="email" required />
                        </FloatingLabel>
                    </fieldset>

                    <fieldset>
                        <FloatingLabel controlId="floatingTextarea2" label="Message" className="floatingLabel">
                            <Form.Control
                                as="textarea"
                                placeholder="Leave a comment here"
                                style={{ height: '200px' }}
                                name="message"
                                id=''
                                cols="30"
                                rows="10"
                            />
                        </FloatingLabel>
                    </fieldset>

                    <button variant="success" className="send-button">SEND</button>
                
                </form>
            </div>
        </Fragment>
    )
};

export default ContactMe;