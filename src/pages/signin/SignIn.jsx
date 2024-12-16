import Lottie from 'lottie-react';
import React, { useContext } from 'react';
import loginLottieJSON from '../../assets/lottei/signin.json'
import AuthContext from '../../context/Authcontext';
import GoogleLogin from '../shared/GoogleLogin';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';
const SignIn = () => {
    const {signInUser} = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();
    console.log('in signin page', location)
    const form = location.state || '/';

    const handleSignIn = e => {
        e.preventDefault()
        const email = e.target.email.value
        const password = e.target.password.value
        console.log(email, password)

        signInUser(email, password)
        .then(result => {
            console.log('sign in', result.user.email)
            const user = {email: email}
            axios.post('http://localhost:5000/jwt', user, {
                withCredentials: true
            })
            .then(res => {
                console.log(res.data);
            })
            // navigate(form)
        })
        .catch(error => {
            console.log(error.message);
        })
    }
    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left w-[500px]">
                    <Lottie animationData={loginLottieJSON}></Lottie>
                </div>
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <h1 className="text-3xl font-medium text-center mt-4">LogIn Now!</h1>
                    <form onSubmit={handleSignIn} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name='password' placeholder="password" className="input input-bordered" required />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Login</button>
                        </div>
                    </form>
                    <div className="divider">OR</div>
                    <div className='m-4 flex justify-center items-center'><GoogleLogin/></div>
                </div>
            </div>
        </div>
    );
};

export default SignIn;