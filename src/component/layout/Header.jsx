import React from 'react';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../provider/AuthProvider';

const Header = () => {

    const {user,logOut} = useContext(AuthContext);
    const handleLogOut = () =>{
        logOut()
        .then (() =>{})
        .catch (error => console.error (error) )
    }



    return (
       <div>
        <div className="navbar bg-primary text-primary-content gap-8 text-center" >
            
        <Link to ='/'>Home</Link>
        <Link to ='/login'>Login</Link>
        <Link to ='/register'>Register</Link>
        { user &&<Link to ='/orders'>Orders</Link>}
        <Link to ='/profile'>Profile</Link>

        {
            user?
            <>
            <span>{user.email}</span>
            <button onClick={handleLogOut} className='btn btn-xs'>Sign Out</button>
           
            </>:
             <Link to ="/login">Login</Link>
        }
       

        </div>
        </div>
    );
};

export default Header;