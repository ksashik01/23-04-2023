import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
       <div>
        <div className="navbar bg-primary text-primary-content gap-8 text-center" >
            
        <Link to ='/'>Home</Link>
        <Link to ='/login'>Login</Link>
        <Link to ='/register'>Register</Link>
       

        </div>
        </div>
    );
};

export default Header;