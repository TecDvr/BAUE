import React from 'react';

//check input types, email etc

function Login(props) {
    return (
        <div>
            <form>
                <input type="text" name="email" placeholder="Email"/>
                <input type="text" name="password" placeholder="Password"/> 
                <input type="submit" value="Submit" />
            </form>
        </div>
    );
}

export default Login;