import React, { useState } from 'react';
import { User, Mail, Phone, MapPin, Building, Calendar, Edit2, Save, X, Camera } from 'lucide-react';
import "./AdminProfile.css"

export default function AdminProfile() {
  const [isEditing, setIsEditing] = useState(false);
  const [profile, setProfile] = useState({
    name: 'Kedar Bile',
    email: 'kbile@gmail.com',
    phone: '+91 98500 07092',
    role: 'Administrator',
    department: 'Operations',
    location: 'Pune',
    joinDate: 'January 15, 2023',
    bio: 'Experienced real estate administrator with over 10 years in property management and sales operations.'
  });

  const [tempProfile, setTempProfile] = useState(profile);

  const handleEdit = () => {
    setTempProfile(profile);
    setIsEditing(true);
  };

  const handleSave = () => {
    setProfile(tempProfile);
    setIsEditing(false);
  };

  const handleCancel = () => {
    setTempProfile(profile);
    setIsEditing(false);
  };

  const handleChange = (field, value) => {
    setTempProfile({ ...tempProfile, [field]: value });
  };

  return (
    <>
      <link 
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" 
        rel="stylesheet"
      />
      

      <div>
        {/* Main Content */}
        <main className="container my-5">
          <div className="profile-card">
            {/* Cover Section */}
            <div className="cover-section"></div>

            {/* Profile Header */}
            <div className="profile-header">
              <div className="row">
                <div className="col-lg-8">
                  <div className="d-flex flex-column flex-sm-row align-items-start gap-4">
                    <div className="profile-picture-wrapper">
                      <div className="profile-picture">
                        <User size={80} />
                      </div>
                      <button className="camera-btn">
                        <Camera size={20} color="#6c757d" />
                      </button>
                    </div>
                    <div className="profile-info flex-grow-1">
                      <h1 className="profile-name">{profile.name}</h1>
                      <p className="profile-role">{profile.role} • {profile.department}</p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 d-flex align-items-end justify-content-lg-end mt-3 mt-lg-0">
                  {!isEditing ? (
                    <button onClick={handleEdit} className="btn-edit">
                      <Edit2 size={16} />
                      <span>Edit Profile</span>
                    </button>
                  ) : (
                    <div className="d-flex gap-2">
                      <button onClick={handleSave} className="btn-edit">
                        <Save size={16} />
                        <span>Save</span>
                      </button>
                      <button onClick={handleCancel} className="btn-cancel">
                        <X size={16} />
                        <span>Cancel</span>
                      </button>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Profile Content */}
            <div className="profile-content">
              <div className="row">
                {/* Left Column */}
                <div className="col-lg-8">
                  <div className="mb-5">
                    <h2 className="section-title">Contact Information</h2>
                    
                    <div className="info-item">
                      <Mail className="info-icon" size={20} />
                      <div className="info-content">
                        <label className="info-label">Email</label>
                        {isEditing ? (
                          <input
                            type="email"
                            className="form-control"
                            value={tempProfile.email}
                            onChange={(e) => handleChange('email', e.target.value)}
                          />
                        ) : (
                          <p className="info-value">{profile.email}</p>
                        )}
                      </div>
                    </div>

                    <div className="info-item">
                      <Phone className="info-icon" size={20} />
                      <div className="info-content">
                        <label className="info-label">Phone</label>
                        {isEditing ? (
                          <input
                            type="tel"
                            className="form-control"
                            value={tempProfile.phone}
                            onChange={(e) => handleChange('phone', e.target.value)}
                          />
                        ) : (
                          <p className="info-value">{profile.phone}</p>
                        )}
                      </div>
                    </div>

                    <div className="info-item">
                      <MapPin className="info-icon" size={20} />
                      <div className="info-content">
                        <label className="info-label">Location</label>
                        {isEditing ? (
                          <input
                            type="text"
                            className="form-control"
                            value={tempProfile.location}
                            onChange={(e) => handleChange('location', e.target.value)}
                          />
                        ) : (
                          <p className="info-value">{profile.location}</p>
                        )}
                      </div>
                    </div>
                  </div>

                  <div>
                    <h2 className="section-title">About</h2>
                    {isEditing ? (
                      <textarea
                        className="form-control"
                        rows="4"
                        value={tempProfile.bio}
                        onChange={(e) => handleChange('bio', e.target.value)}
                      />
                    ) : (
                      <p className="info-value">{profile.bio}</p>
                    )}
                  </div>
                </div>

                {/* Right Column */}
                <div className="col-lg-4 mt-5 mt-lg-0">
                  <div className="mb-4">
                    <h2 className="section-title">Details</h2>
                    
                    <div className="info-item">
                      <Building className="info-icon" size={20} />
                      <div className="info-content">
                        <label className="info-label">Department</label>
                        <p className="info-value">{profile.department}</p>
                      </div>
                    </div>

                    <div className="info-item">
                      <User className="info-icon" size={20} />
                      <div className="info-content">
                        <label className="info-label">Role</label>
                        <p className="info-value">{profile.role}</p>
                      </div>
                    </div>

                    <div className="info-item">
                      <Calendar className="info-icon" size={20} />
                      <div className="info-content">
                        <label className="info-label">Join Date</label>
                        <p className="info-value">{profile.joinDate}</p>
                      </div>
                    </div>
                  </div>

                  <div className="stats-card">
                    <h3 className="stats-title">Account Statistics</h3>
                    <div className="stat-item">
                      <span className="stat-label">Properties Listed</span>
                      <span className="stat-value">142</span>
                    </div>
                    <div className="stat-item">
                      <span className="stat-label">Active Agents</span>
                      <span className="stat-value">28</span>
                    </div>
                    <div className="stat-item">
                      <span className="stat-label">Total Sales</span>
                      <span className="stat-value">₹12.4M</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}