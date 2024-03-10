import { FaMailBulk } from "react-icons/fa";
import { FaAddressCard } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import { FaLanguage } from "react-icons/fa";
import React, { useEffect, useState } from 'react';
import '../components/Profile.css'; 

const Information = ({ userData }) => {
    return (
        <>
        <div class="wrapper">
            <div class="left">
                <img src="https://static.vecteezy.com/system/resources/thumbnails/004/815/102/small/cute-astronaut-working-as-a-programmer-free-vector.jpg"></img>
                <h4>{userData.name}</h4>
                <p>Developer</p>
            </div>
            <div className="right">
                <div class='info'>
                    <h3>Information</h3>
                    <div className="info_data">
                        <div class="data">
                            <h4><FaMailBulk /> Email</h4>
                            <p>{userData.email}</p>
                        </div>
                        <div class="data">
                            <h4><FaAddressCard /> Username</h4>
                            <p>{userData.username}</p>
                        </div>
                    </div>

                    <div className="info_data">
                        <div class="data">
                            <h4><FaPhoneAlt /> Phone</h4>
                            <p>267-123-5678</p>
                        </div>
                        <div class="data">
                            <h4><FaLanguage /> Languages</h4>
                            <p>English, Vietnamese</p>
                        </div>
                    </div>

                    <h3>Social Media</h3>
                    <div className="social_media">
                        <ul>
                            <li><a href="#"><FaFacebookF /></a></li>
                            <li><a href="#"><FaInstagram /></a></li>
                            <li><a href="#"><FaTwitter /></a></li>
                        </ul>
                    </div>

                </div>
            </div>
        </div>
        </>
    );
};
const Lists = () => {
    return (
        <>
        <h2>House Listings</h2>
        <p>House 1</p>
        <p>House 2</p>
        </>
    )
}

const Tabs = ({ config }) => {
    const [activeTab, setActiveTab] = useState(0);
  
    return (
      <div className="tab">
        <div className="tab-headers">
          {config.map((entry, index) => (
            <div 
              key={entry.header} 
              className={`tab-header ${activeTab === index ? "active" : ""}`}
              onClick={() => setActiveTab(index)}
            > 
              {entry.header}
            </div>
          ))}
        </div>
        <div className="tab-body">
          {config[activeTab].component}
        </div>
      </div>
    );
  };

  const UserPage = () => {
    const [userInfo, setUserInfo] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchUserInfo = async () => {
            const token = localStorage.getItem('token');
            if (token) {
                setIsLoading(true);
                try {
                    const response = await fetch('http://localhost:5001/api/userinfo', {
                        headers: {
                            'Authorization': `Bearer ${token}`
                        }
                    });

                    if (!response.ok) {
                        throw new Error(`Error: ${response.status}`);
                    }

                    const userData = await response.json();
                    setUserInfo(userData);
                } catch (error) {
                    setError(error.message);
                } finally {
                    setIsLoading(false);
                }
            } else {
                setError('No token found in local storage.');
                setIsLoading(false);
            }
        };

        fetchUserInfo();
    }, []);

    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    return (
        <Tabs
            config={[
                { header: "Account Info", component: <Information userData={userInfo} /> },
                { header: "Wishlists", component: <Lists /> },
            ]}
        />
    );
};

export default UserPage;