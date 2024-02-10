import {useState} from 'react';
import '../components/Login.css'; 

const Information = () => {
    return (
        <>
        <h2>Information</h2>
        <p>Username:</p>
        <p>Email:</p>
        </>
        
    )
}

const Lists = () => {
    return (
        <>
        <h2>House Listings</h2>
        <p>House 1</p>
        <p>House 2</p>
        </>
    )
}

const Tabs = ({config}) => {
    const [activeTab, setActiveTab] = useState(0);
    
    return (
        <div className="tab">
            <div className="tab-headers">
                {
                    config.map((entry, index)=>(
                        <div 
                            className={`tab-header ${activeTab === index ? "active" : ""}`}
                            onClick={()=>setActiveTab(index)}
                        > 
                            {entry.header}
                        </div>
                    ))
                }
            </div>
            <div className="tab-body">
                {config[activeTab].component}
            </div>
        </div>
    )
}

const UserPage = () => {
    return (
        <Tabs
            config={[
                {header:"Information", component:<Information/>},
                {header:"Lists", component:<Lists/>},
            ]}
        />
    )
}

export default UserPage;