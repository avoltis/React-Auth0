import React, { Component } from 'react';

class Callback extends Component {
    componentDidMount() {
        // handle auth if expected values are in url

        if (/access_token|id_token|error/.test(this.props.location.hash)) {
            this.props.auth.handleAuthentication();
        } else {
            throw new Error('Onvalid callback url.');
        }
    }

    render() {
        return (
            <h1>
                Loading
            </h1>
        );
    }
}

export default Callback;