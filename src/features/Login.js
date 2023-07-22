import React from 'react' ;
import './Login.css';
import { Button } from '@mui/material';
import { auth, provider } from '../api/firebase';
import { actionTypes } from '../reducer';
import { useStateValue } from '../StateProvider';

function Login() {
const signIn = () => {
// sign In.
auth
.signInWithPopup(provider)
.then((result) => {
console.log (result);
})
.catch ((error) => alert(error.message));
};
return (
<div className='login'>
<div className='login__logo'> 
<img src='https://1000logos.net/w-content/uploads/2021/04/Facebook-logo.png' alt=''/>
<img src='https://logohistory.net/wp-content/uploads/2022/10/Facebook-Logo.png' alt=''/>
</div>
<Button type="submit" onClick={signIn}>Sign In</Button>
</div>
 )
}
export default Login;