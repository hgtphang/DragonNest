import React from 'react';
import {Link} from 'react-router-dom';
import './Style.css';

function Button() {
    return (
        <Link>
          <button className='btn'>Sign up</button>
        </Link>
    )
}

export default Button;