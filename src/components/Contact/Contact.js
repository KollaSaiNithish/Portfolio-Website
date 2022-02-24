import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import myImg from "../../Assets/contact.jpeg";
import emailjs from "emailjs-com";

function Contact() {
    const [successMsg, setSuccessMessage] = useState(false);

    function sendEmail(e) {
        e.preventDefault();

    emailjs.sendForm('service_dxak4pa', 'template_wf2w078', e.target, 'user_asX0vSZzQ1mAn6OD1HNsg')
        .then((result) => {
            setSuccessMessage(true);
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
        e.target.reset()
    }

    return (
        <div>
        <Container fluid className="resume-section">
        <Particle />
        <Container style={{paddingBottom: 88}}>
        <Row style={{ paddingTop: "72px", paddingRight: 24 }}>
          <Col md={6} >
            <img src={myImg}  alt="avatar" style={{height: 500, width: 720, paddingRight: 84}} />
            </Col>
            <Col md={6}>
            <h2>
            Contact 
            </h2>
            <form onSubmit={sendEmail}>
                    <div className="row pt-5 mx-auto">
                        <div className="col-8 form-group mx-auto">
                            <input type="text" className="form-control" placeholder="Name" name="name"/>
                        </div>
                        <div className="col-8 form-group pt-2 mx-auto">
                            <input type="email" className="form-control" placeholder="Email Address" name="email"/>
                        </div>
                        <div className="col-8 form-group pt-2 mx-auto">
                            <input type="text" className="form-control" placeholder="Subject" name="subject"/>
                        </div>
                        <div className="col-8 form-group pt-2 mx-auto">
                            <textarea className="form-control" id="" cols="30" rows="8" placeholder="Your message" name="message"></textarea>
                        </div>
                        <div className="col-8 pt-3 mx-auto">
                            <input type="submit" className="btn btn-info" value="Send Message"></input>
                        </div>
                        {
                            successMsg && 
                            <div className="col-8 pt-3 mx-auto">
                                <p style={{fontSize: 18}}> Email sent successfully!</p>
                            </div>
                        }
                    </div>
                </form>
            </Col>
            </Row>
        </Container>
        </Container>
        </div>
    );
}

export default Contact;