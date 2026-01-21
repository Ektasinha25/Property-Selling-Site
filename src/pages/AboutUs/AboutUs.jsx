import React from 'react';
import "./AboutUs.css"

export default function AboutUs() {
  const features = [
    {
      icon: "🏠",
      title: "Wide Range of Properties",
      description: "We offer expert legal help for all related property items in Delhi."
    },
    {
      icon: "💰",
      title: "Trusted by Thousands",
      description: "We offer you free consultancy to get a loan for your new property."
    },
    {
      icon: "🔒",
      title: "Secure & Safe",
      description: "We provide the best security features for your property transactions."
    },
    {
      icon: "✨",
      title: "Easy Process",
      description: "Buy or rent properties with our easy and streamlined process."
    }
  ];

  return (
    <div className="about-page">
      <link 
        href="https://cdnjs.cloudflare.com/ajax/libs/bootstrap/5.3.0/css/bootstrap.min.css" 
        rel="stylesheet"
      />
      
      {/* Hero Section */}
      <div className="hero-section">
        <div className="container">
          <div className="hero-content">
            <div className="hero-text">
              <div className="subtitle">About propEase</div>
              <h1>Easy way to find a perfect property</h1>
              <p>
                We provide a complete service for the sale, purchase or rental of real estate. 
                Our team of experts is ready to help you find your dream property.
              </p>
              <p>
                With years of experience in the industry, we understand what it takes to match 
                the right property with the right person. Your satisfaction is our priority.
              </p>
            </div>
            <div className="hero-image">
              <div className="image-placeholder">
                <div className="house-illustration">🏠</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="features-section">
        <div className="container">
          <div className="section-header">
            <h2>Why Choose Us</h2>
            <p>We provide the best services to make your property search easier and more reliable</p>
          </div>
          <div className="row">
            {features.map((feature, index) => (
              <div key={index} className="col-lg-3 col-md-6 mb-4">
                <div className="feature-card">
                  <span className="feature-icon">{feature.icon}</span>
                  <h4>{feature.title}</h4>
                  <p>{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Mission Section */}
      <div className="mission-section">
        <div className="container">
          <div className="mission-content">
            <div className="mission-image">
              <div className="mission-placeholder">
                🎯
              </div>
            </div>
            <div className="mission-text">
              <h2>Our Mission</h2>
              <p>
                Our mission is to revolutionize the real estate experience by providing 
                transparent, efficient, and customer-centric services. We believe everyone 
                deserves to find their perfect property without stress or complications.
              </p>
              <p>
                We leverage technology and expertise to simplify the property search process, 
                ensuring that you have all the information and support you need to make 
                confident decisions about your real estate investments.
              </p>
              <p>
                Trust, integrity, and excellence are the foundations of our business. We're 
                committed to building lasting relationships with our clients by delivering 
                exceptional results every single time.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="stats-section">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-6 col-6">
              <div className="stat-item">
                <div className="stat-number">500+</div>
                <div className="stat-label">Properties</div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-6">
              <div className="stat-item">
                <div className="stat-number">1000+</div>
                <div className="stat-label">Happy Clients</div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-6">
              <div className="stat-item">
                <div className="stat-number">15+</div>
                <div className="stat-label">Years Experience</div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-6">
              <div className="stat-item">
                <div className="stat-number">50+</div>
                <div className="stat-label">Team Members</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}