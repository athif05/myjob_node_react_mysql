import React, { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Nav=()=>{

    const navigate = useNavigate();

    //get item from local storage
    const auth = localStorage.getItem('user');

    //logout function
    const logout = () => {
        console.warn("logout");
        localStorage.clear();
        navigate('/');
    }


    return(
        <div>

            <img src='../images/logo.jpg' alt='logo' className='custom-logo'/>

            { auth ?
            <ul className='nav-ul'>
                <li><Link to="/dashboard"></Link></li>
                
            </ul>
            :
            <ul className='nav-ul'>
                <li><Link to="/">Sign Up</Link></li>
            </ul>
            }  
        </div>
    )
}

export default Nav;