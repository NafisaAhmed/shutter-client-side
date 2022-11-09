import React, { useContext } from 'react';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import useTitle from '../../hooks/useTitle';
import Header from '../Shared/Header/Header';

const SignUp = () => {
    useTitle('Sign Up');
    const { createUser } = useContext(AuthContext);
    const handleSignUp = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        form.reset();
        createUser(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
            })
            .catch(err => console.error(err))
    }
    return (
        <div className='bg-gray-400 mb-0'>
            <Header></Header>
            <div className="w-full max-w-md p-4 rounded-md shadow sm:p-8 bg-gray-50 text-gray-800 mx-auto mt-24">
                <h2 className="mb-3 text-3xl font-semibold text-center">Create an account</h2>
                <p className="text-sm text-center text-gray-600">Already have an account?
                    <a href="/login" rel="noopener noreferrer" className="focus:underline hover:underline"> Login here</a>
                </p>

                <form onSubmit={handleSignUp} className="space-y-8 ng-untouched ng-pristine ng-valid">
                    <div className="space-y-4">
                        <div className="space-y-2">
                            <label htmlFor="name" className="block text-sm">Your Name</label>
                            <input type="text" name="name" id="name" placeholder="name" className="w-full px-3 py-2 border rounded-md border-gray-300 bg-gray-50 text-gray-800 focus:border-teal-600" required />
                        </div>
                        <div className="space-y-2">
                            <label htmlFor="email" className="block text-sm">Email address</label>
                            <input type="email" name="email" id="email" placeholder="example@gmail.com" className="w-full px-3 py-2 border rounded-md border-gray-300 bg-gray-50 text-gray-800 focus:border-teal-600" required />
                        </div>
                        <div className="space-y-2">
                            <div className="flex justify-between">
                                <label htmlFor="password" className="text-sm">Password</label>
                            </div>
                            <input type="password" name="password" id="password" placeholder="*****" className="w-full px-3 py-2 border rounded-md border-gray-300 bg-gray-50 text-gray-800 focus:border-teal-600" required />
                        </div>
                    </div>

                    <div className="form-control mt-6">
                        <input className="btn w-full px-8 py-3 font-semibold rounded-md bg-teal-600 text-gray-50" type="submit" value="Sign Up" />
                    </div>
                </form>
            </div>
        </div>
    );
};

export default SignUp;