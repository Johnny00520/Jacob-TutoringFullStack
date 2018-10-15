import React, { Component } from 'react';
import axios from 'axios';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

import homepage from '../images/homePage.jpg';
import './Contact.css';

class Contact extends Component {
    constructor() {
        super();
    
        this.state = {
          name: '',
          email: '',
          subject: '',
          message: '',
          visible: false
        };

        this.onHandleSubmit = this.onHandleSubmit.bind(this);
        this.onHandleChangeEmail = this.onHandleChangeEmail.bind(this);
        this.onReset = this.onReset.bind(this);
    }

    onHandleChangeEmail = event => {
        // this.setState({ [event.target.name]: event.target.value })
        this.setState({
            email: event.target.value
        })
    }

    onReset = (e) => {
        e.preventDefault();
        
        this.setState({
            name: '',
            email: '',
            subject: '',
            message: ''
        })
    }

    async onHandleSubmit(e) {
        e.preventDefault();

        const { subject, name, email, message } = this.state

        window.confirm("Thank you!! I will get back to you ASAP")
        window.location.reload();


        const form = await axios.post('/api/form', {
            subject,
            name,
            email,
            message
        })
        .then(response => {
            console.log('response: ', response)
        })
        .catch(error => {
            console.log('error: ', error.response)
        });

        
    }
    
    render() {
        return (
            <div className="contact-page">
                <div className="contact-page-header">
                    <h2 className="contact-page-title">Contact me</h2>
                    <div className="contact-page-header-title">
                        <p>Please contact me with any questions or comments about services, prices, availability, resources, or any other general inquires</p>
                    </div>
                </div>
                <div className="row">
                    <div className="row-input">
                        <Form onSubmit={this.onHandleSubmit}
                            style={{ width: '65%' }}
                        >
                            <div className="Contact-container">
                                <div className='col-md-8 push-md-2 col-lg-6 push-lg-3'
                                    style={{ width: '100%' }}
                                >
                                    <FormGroup row>
                                        <div className='row form-group'>
                                            <div className='col-6'>
                                                <Label style={{ float: 'left'}}>Name</Label>
                                                <Input
                                                    type="text"
                                                    name="name"
                                                    id="exampleName" 
                                                    placeholder="Your name"
                                                    title="Provide your name"
                                                    value={this.state.name}
                                                    onChange={(event) => this.setState({name: event.target.value})}
                                                    style={{ height: '40px'}}
                                                />
                                            </div>
                                            <div className='col-6'>
                                                <Label for="exampleEmail" style={{ float: 'left'}}>Email</Label>
                                                <Input 
                                                    // className='form-control' 
                                                    type="email" 
                                                    name="email" 
                                                    id="exampleEmail" 
                                                    placeholder="Your email address"
                                                    title="Please provide your email address"
                                                    value={this.state.email}
                                                    onChange={this.onHandleChangeEmail}
                                                    style={{ height: '40px'}}
                                                />
                                            </div>
                                            <div className='col-6'>
                                                <Label style={{ float: 'left'}}>Subject</Label>
                                                <Input
                                                    className='form-control' 
                                                    type="text"
                                                    name="subject"
                                                    placeholder="Subject"
                                                    title="Provide your subject"
                                                    value={this.state.subject}
                                                    onChange={(event) => this.setState({subject: event.target.value})}
                                                    style={{ height: '40px'}}
                                                />
                                            </div>
                                        </div>
                                    </FormGroup>

                                    <FormGroup 
                                        row
                                        style={{ margin: '0', width: '100%' }}
                                    >
                                        <Label 
                                            for="exampleText" 

                                            style={{ float: 'left'}}
                                        >Message
                                        </Label>
                                        <Input 
                                            type="textarea" 
                                            name="text" 
                                            id="exampleText"
                                            value={this.state.message}
                                            placeholder='Anything interesting for me?'
                                            onChange={(event) => this.setState({message: event.target.value})}
                                            style={{ minHeight: '10vw', maxHeight: '15vw'}}
                                        />
                                    </FormGroup>

                                    <div className="submit-btn"
                                        style={{ textAlign: 'right', margin: '2%' }}
                                    >
                                        <FormGroup check row>
                                            <Button color="primary" style={{ marginRight: '2%' }} onClick={this.onReset}>Reset</Button>
                                            <Button color="primary" >Submit</Button>
                                        </FormGroup>
                                    </div>
                                </div>
                            </div>
                        </Form>
                        <div className="contact-image" style={{ width: '35%', paddingTop: '10%' }} >
                            <img src={homepage} alt="Contact me!!" style={{ width: '100%', height: '50%'}} />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}


export default Contact