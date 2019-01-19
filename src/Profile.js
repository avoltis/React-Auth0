import React, { Component } from 'react';

class Profile extends Component {
    state = {
        profile: null,
        error: ''
    }

    componentDidMount() {
        this.loadUserProfile();
    }

    loadUserProfile() {
        this.props.auth.getProfile((profile, error) =>
            this.setState({ profile, error })
        );
    }

    render() {
        const { profile } = this.state;
        if (!profile) return null;

        return (
            <React.Fragment>
                <h1>Profile</h1>
                <p>{profile.nickname}</p>
                <img style={{ maxWidth: 50, maxHeight: 50 }} src={profile.picture} alt="profile pic" />
                <pre>{JSON.stringify(profile, null, 2)}</pre>
            </React.Fragment>
        );
    }
}

export default Profile;