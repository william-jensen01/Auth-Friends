import React,{ useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Input,Button,Form,Label } from 'reactstrap';
import axiosWithAuth from '../utils/axiosWithAuth';

function Login(){
    const history = useHistory();
    const [loginData,setLoginData] = useState({
        username:'',
        password:''
    });

    const handleChanges = (e) =>{
       setLoginData({
           ...loginData,
           [e.target.name] : e.target.value
       })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        postLoginData();
    }

    const postLoginData = () => {
        axiosWithAuth()
        .post('/api/login',loginData)
        .then(res => {
            localStorage.setItem('token',res.data.payload);
            history.push('/friends');
        })
        .catch(err => {
            console.log('err:',err)
        })
    }

    return (

        <div >
            <Form className="login"
            onSubmit={handleSubmit}>
               <h4>Please Login</h4>
               <Label htmlFor="username">Username
               <Input 
               id="username"
               name="username"
               value= {loginData.username}
               placeholder="Enter Username"
               onChange={handleChanges}
               /></Label>

               <Label htmlFor="password">Password
               <Input
               id="password"
               type="password"
               name="password"
               value={loginData.password}
               placeholder="password please"
               onChange={handleChanges}/></Label> 
               <Button color="primary">Submit!</Button> 
            </Form>
        </div>
    )
}
export default Login; 