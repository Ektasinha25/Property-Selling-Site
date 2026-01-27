import React, { useState } from 'react';
import { Upload, X, MapPin, Home, Bed, Bath, Square, DollarSign } from 'lucide-react';
import "./AddProperty.css"

export default function AddProperty() {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    price: '',
    location: '',
    propertyType: 'house',
    bedrooms: '',
    bathrooms: '',
    area: '',
    amenities: [],
    images: [],
    featured: false
  });

  const [imagePreview, setImagePreview] = useState([]);

  const propertyTypes = ['House', 'Apartment', 'Villa', 'Condo', 'Townhouse'];
  const amenitiesList = ['WiFi', 'Parking', 'Pool', 'Gym', 'Security', 'Garden', 'Balcony', 'Air Conditioning'];

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value
    });
  };

  const handleImageUpload = (e) => {
    const files = Array.from(e.target.files);
    files.forEach(file => {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(prev => [...prev, reader.result]);
        setFormData(prev => ({
          ...prev,
          images: [...prev.images, file]
        }));
      };
      reader.readAsDataURL(file);
    });
  };

  const removeImage = (index) => {
    setImagePreview(prev => prev.filter((_, i) => i !== index));
    setFormData(prev => ({
      ...prev,
      images: prev.images.filter((_, i) => i !== index)
    }));
  };

  const toggleAmenity = (amenity) => {
    setFormData(prev => ({
      ...prev,
      amenities: prev.amenities.includes(amenity)
        ? prev.amenities.filter(a => a !== amenity)
        : [...prev.amenities, amenity]
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Data:', formData);
    alert('Property added successfully!');
    // Reset form
    setFormData({
      title: '',
      description: '',
      price: '',
      location: '',
      propertyType: 'house',
      bedrooms: '',
      bathrooms: '',
      area: '',
      amenities: [],
      images: [],
      featured: false
    });
    setImagePreview([]);
  };

  return (
    <>
      <style>{`
        
      `}</style>

      <div className="add-property-page">
        <div className="page-header">
          <h1 className="page-title">Add New Property</h1>
          <p className="page-subtitle">List your property on PropEase and reach potential buyers</p>
        </div>

        <div className="form-container">
          <form onSubmit={handleSubmit}>
            {/* Basic Information */}
            <div className="form-section">
              <h2 className="section-title">Basic Information</h2>
              
              <div className="form-row full">
                <div className="form-group">
                  <label className="form-label">
                    Property Title <span className="required">*</span>
                  </label>
                  <div className="input-wrapper">
                    <Home size={18} className="form-input-icon" />
                    <input
                      type="text"
                      name="title"
                      placeholder="e.g., Modern 3BHK House in Downtown"
                      className="form-input"
                      value={formData.title}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                </div>
              </div>

              <div className="form-row full">
                <div className="form-group">
                  <label className="form-label">
                    Description <span className="required">*</span>
                  </label>
                  <div className="input-wrapper">
                    <textarea
                      name="description"
                      placeholder="Describe your property in detail..."
                      className="form-textarea"
                      value={formData.description}
                      onChange={handleInputChange}
                      required
                      style={{ paddingLeft: '1rem' }}
                    />
                  </div>
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label className="form-label">
                    Price <span className="required">*</span>
                  </label>
                  <div className="input-wrapper">
                    <DollarSign size={18} className="form-input-icon" />
                    <input
                      type="number"
                      name="price"
                      placeholder="Enter price"
                      className="form-input"
                      value={formData.price}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label className="form-label">
                    Location <span className="required">*</span>
                  </label>
                  <div className="input-wrapper">
                    <MapPin size={18} className="form-input-icon" />
                    <input
                      type="text"
                      name="location"
                      placeholder="e.g., Sydney, NSW"
                      className="form-input"
                      value={formData.location}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Property Details */}
            <div className="form-section">
              <h2 className="section-title">Property Details</h2>

              <div className="form-row">
                <div className="form-group">
                  <label className="form-label">
                    Property Type <span className="required">*</span>
                  </label>
                  <div className="input-wrapper">
                    <Home size={18} className="form-input-icon" />
                    <select
                      name="propertyType"
                      className="form-select"
                      value={formData.propertyType}
                      onChange={handleInputChange}
                      required
                    >
                      {propertyTypes.map(type => (
                        <option key={type} value={type.toLowerCase()}>
                          {type}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="form-group">
                  <label className="form-label">
                    Bedrooms <span className="required">*</span>
                  </label>
                  <div className="input-wrapper">
                    <Bed size={18} className="form-input-icon" />
                    <input
                      type="number"
                      name="bedrooms"
                      placeholder="Number of bedrooms"
                      className="form-input"
                      value={formData.bedrooms}
                      onChange={handleInputChange}
                      min="0"
                      required
                    />
                  </div>
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label className="form-label">
                    Bathrooms <span className="required">*</span>
                  </label>
                  <div className="input-wrapper">
                    <Bath size={18} className="form-input-icon" />
                    <input
                      type="number"
                      name="bathrooms"
                      placeholder="Number of bathrooms"
                      className="form-input"
                      value={formData.bathrooms}
                      onChange={handleInputChange}
                      min="0"
                      required
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label className="form-label">
                    Area (Sq. Meters) <span className="required">*</span>
                  </label>
                  <div className="input-wrapper">
                    <Square size={18} className="form-input-icon" />
                    <input
                      type="number"
                      name="area"
                      placeholder="Property area"
                      className="form-input"
                      value={formData.area}
                      onChange={handleInputChange}
                      min="0"
                      required
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Amenities */}
            <div className="form-section">
              <h2 className="section-title">Amenities</h2>
              <div className="amenities-grid">
                {amenitiesList.map(amenity => (
                  <div key={amenity} className="amenity-item">
                    <input
                      type="checkbox"
                      id={amenity}
                      className="amenity-checkbox"
                      checked={formData.amenities.includes(amenity)}
                      onChange={() => toggleAmenity(amenity)}
                    />
                    <label htmlFor={amenity} className="amenity-label">
                      {amenity}
                    </label>
                  </div>
                ))}
              </div>
            </div>

            {/* Images */}
            <div className="form-section">
              <h2 className="section-title">Property Images</h2>
              <label htmlFor="image-input">
                <div className="image-upload-area">
                  <Upload size={32} className="upload-icon" />
                  <div className="upload-text">Click to upload images</div>
                  <div className="upload-subtext">PNG, JPG, GIF up to 10MB</div>
                </div>
              </label>
              <input
                id="image-input"
                type="file"
                multiple
                accept="image/*"
                className="image-input"
                onChange={handleImageUpload}
              />
              {imagePreview.length > 0 && (
                <div className="image-preview-grid">
                  {imagePreview.map((preview, index) => (
                    <div key={index} className="image-preview-item">
                      <img src={preview} alt={`Preview ${index + 1}`} />
                      <button
                        type="button"
                        className="remove-image-btn"
                        onClick={() => removeImage(index)}
                      >
                        <X size={16} />
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Additional Options */}
            <div className="form-section">
              <h2 className="section-title">Additional Options</h2>
              <div className="checkbox-group">
                <input
                  type="checkbox"
                  id="featured"
                  name="featured"
                  className="checkbox-input"
                  checked={formData.featured}
                  onChange={handleInputChange}
                />
                <label htmlFor="featured" className="checkbox-label">
                  Mark as Featured (Premium listing)
                </label>
              </div>
            </div>

            {/* Form Buttons */}
            <div className="form-buttons">
              <button type="button" className="btn btn-secondary">
                Cancel
              </button>
              <button type="submit" className="btn btn-primary">
                Publish Property
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}