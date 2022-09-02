import React from 'react'
import "./blog.css"

const Navbar = ()=>{
    return(
        <nav className='nav'>
            <a href='/' className='site-title'>My Blog</a>
            <ul>
                <li className='active'>
                    <a href='/recents'>Recents</a>
                </li>
                <li>
                    <a href='/subscribe'>Subscribe</a>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar