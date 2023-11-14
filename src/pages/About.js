import React from 'react';
import NavBar from '../components/NavBar';

function About() {
    return (
        <div className='about' id='about'>
            <h1 style = "font-family:Trebuchet MS; color:#FFC600">About</h1>

            // establishment
            <h2 style="font-family:Trebuchet MS; color:#07294D;">Who we are</h2>
                <p style = "font-family:Trebuchet MS;">
                DragonNest allows landlords to create accounts and post their houses for rent details, 
                including housing conditions, fees and contact information, following our required 
                template to ensure the reliability.
                </p>

            // what our websit can do
            <h2 style="font-family:Trebuchet MS;color:#07294D;">What we do</h2>  
                <p style = "font-family:Trebuchet MS;"> 
                DragonNest allows landlords to create accounts and post their houses for rent details, 
                including housing conditions, fees and contact information, following our required 
                template to ensure the reliability. 
                </p>

                <p style = "font-family:Trebuchet MS;">
                Future tenants can view information as guests or create 
                their user accounts to save rooms and units they are interested in. Users can also     
                write feedback on their experience living in or working with the landlords of specific 
                houses or units, which will be shown at the bottom of each unit’s information page.
                </p>

                <p style = "font-family:Trebuchet MS;">
                A reddit-like feed is available for users to create posts introducing themselves, 
                asking for room recommendations and advice and looking for roommates. Updates or 
                responses, such as changes in their saved housing’s status, comments on posts will pop 
                up while they are accessing the web and appear in their notification section.
                </p>

            // social media
            <h2 style="font-family:Trebuchet MS;color:#07294D;">Follow us</h2>
            // insert an IG/Facebook logo hear with our account ID/URL arfer making one
        </div>
    );
}

export default About;
