import React, { useState, useEffect } from 'react';
import axios from 'axios';

function ProfileSettings() {
    const [profile, setProfile] = useState({ avatar: '', status: '' });

    useEffect(() => {
        // Fetch user profile
        const fetchProfile = async () => {
            try {
                const res = await axios.get('/api/users/me', {
                    headers: { 'Authorization': `Bearer ${localStorage.getItem('token')}` }
                });
                setProfile(res.data.profile);
            } catch (err) {
                console.error(err.response.data);
            }
        };
        fetchProfile();
    }, []);

    const onChange = e => setProfile({ ...profile, [e.target.name]: e.target.value });

    const onSubmit = async e => {
        e.preventDefault();
        try {
            await axios.put('/api/users/me', profile, {
                headers: { 'Authorization': `Bearer ${localStorage.getItem('token')}` }
            });
            // Handle success
        } catch (err) {
            console.error(err.response.data);
        }
    };

    return (
        <div className="profile-settings">
            <form onSubmit={onSubmit}>
                <input type="text" name="avatar" value={profile.avatar} onChange={onChange} placeholder="Avatar URL" />
                <input type="text" name="status" value={profile.status} onChange={onChange} placeholder="Status" />
                <button type="submit">Save Changes</button>
            </form>
        </div>
    );
}

export default ProfileSettings; 