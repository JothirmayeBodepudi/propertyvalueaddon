import React from 'react';
import { useNavigate } from 'react-router-dom';
import Sidebar from './Sidebar'; // Import Sidebar component
import './Homepage.css'; // Import CSS for styling

const HomePage = () => {
  const navigate = useNavigate(); // Initialize useNavigate

  // Navigation function
  const handleNavigation = (path) => {
    navigate(path); // Navigate to the specified path
  };

  return (
    <div className="homepage">
      <Sidebar />
      <div className="main-content">
        <h1>Welcome to Add on Value to Indian Middle Class Residential Property</h1>
        <p>
          The primary goal is to enhance the value of middle-class residential properties by introducing key upgrades and modern amenities that appeal to contemporary homebuyers. By focusing on improving both functionality and aesthetics, we aim to elevate the living experience without compromising affordability.
        </p>

        {/* Image Grid Section */}
        <div className="image-grid">
          {/* Each image card */}
          <div className="image-card">
            <img src="https://images.squarespace-cdn.com/content/v1/5b9b82d45cfd79547b211818/1666955606885-M97Z4ZLQTGPG4EI6ZBEM/Zayn+%26+Nidal+Master+Ensuite+HD+Render.jpg" alt="Modern Bathroom" />
            <p>Modern Bathroom with Smart Amenities</p>
            <button onClick={() => handleNavigation('/modern-bathroom')} className="button">Visit Now</button>
          </div>

          <div className="image-card">
            <img src="https://img.freepik.com/premium-photo/illustration-living-room-interior_252025-224121.jpg" alt="Spacious Living Room" />
            <p>Spacious Living Room with Lighting</p>
            <button onClick={() => handleNavigation('/living-room')} className="button">Visit Now</button>
          </div>

          <div className="image-card">
            <img src="https://media.istockphoto.com/id/157194514/photo/executive-home-theater.jpg?s=612x612&w=0&k=20&c=zjwWyENbIfh6GV0NHdS3_3xAB2cwPEZy-t4AighFNvA=" alt="Home Theater" />
            <p>Home Theater </p>
            <button onClick={() => handleNavigation('/home-theater')} className="button">Visit Now</button>
          </div>

          <div className="image-card">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSi83ymBJeFe2m6c3EvAfJkqgRF5lTIHYwCKg&s" alt="Puja Mandiram" />
            <p>Puja Mandiram  </p>
            <button onClick={() => handleNavigation('/puja-mandiram')} className="button">Visit Now</button>
          </div>

          <div className="image-card">
            <img src="https://www.shutterstock.com/image-photo/childrens-playroom-plastic-colorful-educational-260nw-1342776056.jpg" alt="Children's Playroom" />
            <p>Children's Playroom </p>
            <button onClick={() => handleNavigation('/playroom')} className="button">Visit Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
