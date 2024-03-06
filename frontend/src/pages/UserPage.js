import { FaMailBulk } from "react-icons/fa";
import { FaAddressCard } from "react-icons/fa";
import { FaPagelines } from "react-icons/fa6";
import React, { useEffect, useState } from 'react';
import '../components/Login.css'; 

const Information = ({ userData }) => {
    return (
        <>
        <h1>Welcome {userData.name}</h1>
        <br/>
        <p> <FaMailBulk /> Email: {userData.email}</p>
        <br/>
        <p> <FaAddressCard /> Username: {userData.username}</p>
        <br/>
        <h2>Something about me</h2>
        <br/>
        <p> <FaPagelines /> I am a passionate computer science student at Drexel University, driven by curiosity and a desire to excel in technology</p>
        </>
        
        // <Table>
        //     <thead>
        //     <tr>
        //         <th>Username</th>
        //         <th>Email</th>
        //     </tr>
        //     </thead>
        //     <tbody>
        //     <tr>
        //         <td>{userData.username}</td>
        //         <td>{userData.email}</td>
        //     </tr>
        //     </tbody>
        // </Table>

        // <table className='table'>
        //     <tr>
        //         <td>Username</td>
        //         <td>Email</td>
        //     </tr>
        //     <tr>
        //         <td>{userData.username}</td>
        //         <td>{userData.email}</td>
        //     </tr>
        // </table>
    );
};
const Lists = () => {
    return (
        <>
        <h2>House Listings</h2>
        <p>House 1</p>
        <p>House 2</p>
        </>

        // <Card style={{ width: '18rem' }}>
        // <Card.Img variant="top" src="holder.js/100px180" />
        // <Card.Body>
        //     <Card.Title>Card Title</Card.Title>
        //     <Card.Text>
        //     Some quick example text to build on the card title and make up the
        //     bulk of the card's content.
        //     </Card.Text>
        //     <Button variant="primary">Go somewhere</Button>
        // </Card.Body>
        // </Card>
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