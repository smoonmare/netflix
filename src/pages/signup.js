import React, {useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { FirebaseContext } from '../context/firebase';
import { HeaderContainer } from '../containers/header';
import { FooterContainer } from '../containers/footer';
import { Form } from '../components';
import * as ROUTES from '../constants/routes';

export default function Signup() {
    const history = useHistory();
    const { firebase } = useContext(FirebaseContext);
    const [fullName, setFullName] = useState('');
    const [emailAddress, setEmailAddress] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const isInvalid = fullName === '' || password === '' || emailAddress === '';
    const handeSignup = (event) => {
        event.preventDefault();

        // Firebase is working...
        firebase
          .auth()
          .createUserWithEmailAndPassword(emailAddress, password)
          .then((result) =>
            result.user
              .updateProfile({
                  displayName: fullName,
                  photoURL: Math.floor(Math.random() *5) + 1,
              }).then(() => {
                  history.push(ROUTES.BROWSE);
              })
          )
          .catch((error) => {
              setFullName('');
              setEmailAddress('');
              setPassword('');
              setError(error.message);
          })
    };


    return (
        <>
        <HeaderContainer>
            <Form>
                <Form.Title>Sign Up</Form.Title>
                {error && <Form.Error>{error}</Form.Error>}
                <Form.Base onSubmit={handeSignup} method="POST">
                    <Form.Input
                      placeholder="Full Name"
                      value={fullName}
                      onChange={({ target }) => setFullName(target.value)}
                    />
                    <Form.Input
                      placeholder="Email Address"
                      value={emailAddress}
                      onChange={({ target }) => setEmailAddress(target.value)}
                    />
                    <Form.Input
                      type="password"
                      autoComplete="off"
                      placeholder="Password"
                      value={password}
                      onChange={({ target }) => setPassword(target.value)}
                    />
                    <Form.Submit disabled={isInvalid} type="submit">
                        Submit
                    </Form.Submit>
                    <Form.Text>
                        Already a user? <Form.Link to="/signin">Sign in now!</Form.Link>
                    </Form.Text>
                </Form.Base>
            </Form>
        </HeaderContainer>
        <FooterContainer />
        </>
    );
}