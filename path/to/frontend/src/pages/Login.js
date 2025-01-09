import React, { useState } from 'react';
import axios from 'axios';

function Login({ history }) {
    const [formData, setFormData] = useState({ email: '', password: '' });

    const { email, password } = formData;

    const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

    const onSubmit = async e => {
        e.preventDefault();
        try {
            const res = await axios.post('/api/auth/login', { email, password });
            localStorage.setItem('token', res.data.token);
            history.push('/dashboard');
        } catch (err) {
            console.error(err.response.data);
            // Handle errors
        }
    };

    return (
        <div className="login-container">
            <form onSubmit={onSubmit}>
                <input type="email" name="email" value={email} onChange={onChange} required placeholder="Email" />
                <input type="password" name="password" value={password} onChange={onChange} required placeholder="Password" />
                <button type="submit">Login</button>
            </form>
        </div>
    );
}

export default Login; 