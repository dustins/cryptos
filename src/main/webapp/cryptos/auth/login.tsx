import React, {Component} from 'react';
import {Redirect} from 'react-router-dom';
import {Form, Text} from 'react-form';

export default class LoginComponent extends Component<any, any> {
    constructor(props: any) {
        super(props);
        
        this.state = {
            redirectToReferrer: this.props.authenticated
        }
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    
    handleSubmit(submittedValues: any) {
        console.log(submittedValues);
        this.props.onLogin();
        // this.setState({redirectToReferrer: true});
    }

    render() {
        console.log(this.props);
        const from = /*this.props.location.state || */ {'from': { pathname: "/" }};
        console.log(from);
        if (this.state.redirectToReferrer) {
            return <Redirect to="/" />
        }
        
        return <Form onSubmit={this.handleSubmit}>
        { formApi => (
        <form onSubmit={formApi.submitForm} className="col-4">
            <div className="form-group">
                <label htmlFor="username">Username:</label>
                <Text className="form-control" field="username" id="username" />
            </div>
            
            <div className="form-group">
                <label htmlFor="password">Password:</label>
                <Text className="form-control" type="password" field="password" id="password" />
            </div>
            
            <button type="submit" className="mb-4 btn btn-primary">Submit!</button>   
        </form>
        )}
        </Form>
    }
}