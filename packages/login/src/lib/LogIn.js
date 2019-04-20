import React, { Component } from 'react';
import {
  Container,
  Col,
  Form,
  FormGroup,
  Label,
  Input,
  Button
} from 'reactstrap';
import './LogIn.css';

export default class LogIn extends Component {
  state = { email: '' };

  render() {
    return (
      <Container className="App">
        <h2>Log In</h2>
        <Form
          className="form"
          onSubmit={e => {
            e.preventDefault();
            localStorage.setItem('loggedIn', this.state.email);
            this.props.onLogIn();
          }}
        >
          <Col>
            <FormGroup>
              <Label>Email</Label>
              <Input
                type="email"
                name="email"
                id="exampleEmail"
                placeholder="myemail@email.com"
                value={this.state.email}
                onChange={e => this.setState({ email: e.target.value })}
              />
            </FormGroup>
          </Col>
          <Col>
            <FormGroup>
              <Label for="examplePassword">Password</Label>
              <Input
                type="password"
                name="password"
                id="examplePassword"
                placeholder="********"
              />
            </FormGroup>
          </Col>
          <Button type="submit">Submit</Button>
        </Form>
      </Container>
    );
  }
}
