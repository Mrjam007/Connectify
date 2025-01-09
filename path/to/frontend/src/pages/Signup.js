import React, { useState } from 'react';
import axios from 'axios';

function Signup({ history }) {
    const [formData, setFormData] = useState({ username: '', email: '', password: '' });

    const { username, email, password } = formData;

    const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

    const onSubmit = async e => {
        e.preventDefault();
        try {
            const res = await axios.post('/api/auth/signup', { username, email, password });
            localStorage.setItem('token', res.data.token);
            history.push('/dashboard');
        } catch (err) {
            console.error(err.response.data);
            // Handle errors
        }
    };

    return (
        <div className="signup-container">
            <form onSubmit={onSubmit}>
                <input type="text" name="username" value={username} onChange={onChange} required placeholder="Username" />
                <input type="email" name="email" value={email} onChange={onChange} required placeholder="Email" />
                <input type="password" name="password" value={password} onChange={onChange} required placeholder="Password" />
                <button type="submit">Sign Up</button>
            </form>
        </div>
    );
}

export default Signup; 