import React, { useState } from 'react';
import axios from 'axios';

import ContactMeStyle from './ComtactMeComp.css';

const ContactMeComp = (props) => {
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
              setState({name: " ", email: " ", message: " "})
            }else if(response.data === 'fail'){
              alert("Message failed to send.")
            }
          })
    }

    return (
        <ContactMeStyle id="Contacting"> 
            <div className={props.match.path == "/Contact_Me" ? "wrapper" + "-show" : "wrapper"  }>
                <div className="company-info">
                    <h3>Contact { } Me &#128513;</h3>
                    <h5>
                        <span className="text-secondary"><i className="fa fa-mail"></i>: </span>
                        alfredguan9@gmail.com
                    </h5>
                </div>
                <div className="contact">
                    <form method="POST" onSubmit={handleSubmit}>
                        <p>
                            <label>Name</label>
                            <input type="text" name="name" onChange={onHandleChnage}/>
                        </p>
                        <p>
                            <label>Email Address</label>
                            <input type="email" name="email"  onChange={onHandleChnage}/>
                        </p>
                        <p className="full">
                            <label>Message</label>
                            <textarea name="message" rows="10"  onChange={onHandleChnage}></textarea>
                        </p>
                        <p className="full">
                            <button type="submit" disabled={!state.email || !state.name || !state.message} className="btn btn-primary">Submit</button>
                        </p>
                    </form>
                </div>
            </div>
        </ContactMeStyle>
    )
}

export default ContactMeComp;




