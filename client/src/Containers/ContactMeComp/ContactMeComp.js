import React, { useState } from 'react';
import axios from 'axios';

import ContactMeStyle from './ComtactMeComp.css';

const ContactMeComp = () => {

    const [state, setState] = useState({
        name: '',
        email: '',
        message: ''
    })

    const onHandleChnage = (event) => {
        const value = event.target.value;
        setState({
          ...state,
          [event.target.name]: value
        });
        
    }

    const handleSubmit = (event) => {
        event.preventDefault();

        axios({
            method: "POST", 
            url:"/send", 
            data:  state
          }).then((response)=>{
            if (response.data === 'success'){
              alert("Message Sent."); 
              setState({name: "", email: "", message: ""})
            }else if(response.data === 'fail'){
              alert("Message failed to send.")
            }
          })
    }
    
    return (
        <ContactMeStyle id="Contact">
            <h1 className="lg-heading">
                Contact { } Me
            </h1>
            <h2 className="sm-heading"> 
                Send me a message &#128513;
            </h2>

            <div className="boxes">
                <div>
                    <span className="text-secondary">Email: </span>
                    alfredguan9@gmail.com
                </div>
                <div>
                    <span className="text-secondary">Phone: </span>
                    (415) 680-8781
                </div>
            </div>

            {/* <div className="container">
                <form id="contact-form" onSubmit={handleSubmit} method="POST">
                    <div className="form-group">
                        <label htmlFor="name">Name</label>
                        <input type="text" className="form-control" name="name" onChange={onHandleChnage}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputEmail1">Email address</label>
                        <input type="text" className="form-control" name="email" aria-describedby="emailHelp" onChange={onHandleChnage}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="message">Message</label>
                        <textarea className="form-control" rows="10" name="message" onChange={onHandleChnage}></textarea>
                    </div>
                    <button type="submit" disabled={!state.email || !state.name || !state.message} className="btn btn-primary">Submit</button>
                </form>
            </div> */}
        </ContactMeStyle>
    )
}

export default ContactMeComp;