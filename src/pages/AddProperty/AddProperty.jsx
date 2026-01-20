import React, { useState } from 'react';
import { Upload, X, MapPin, Home, Bed, Bath, Square, DollarSign } from 'lucide-react';

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
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        body {
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', sans-serif;
          background: #f9fafb;
        }

        .add-property-page {
          min-height: 100vh;
          background: #f9fafb;
          padding: 2rem;
        }

        .page-header {
          max-width: 900px;
          margin: 0 auto 2rem;
        }

        .page-title {
          font-size: 2.5rem;
          font-weight: 700;
          color: #1a1a2e;
          margin-bottom: 0.5rem;
        }

        .page-subtitle {
          color: #6b7280;
          font-size: 1rem;
        }

        .form-container {
          max-width: 900px;
          margin: 0 auto;
          background: white;
          border-radius: 20px;
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.08);
          padding: 2.5rem;
        }

        .form-section {
          margin-bottom: 2.5rem;
        }

        .section-title {
          font-size: 1.25rem;
          font-weight: 600;
          color: #1a1a2e;
          margin-bottom: 1.5rem;
          padding-bottom: 1rem;
          border-bottom: 2px solid #e5e7eb;
        }

        .form-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1.5rem;
          margin-bottom: 1.5rem;
        }

        .form-row.full {
          grid-template-columns: 1fr;
        }

        .form-group {
          display: flex;
          flex-direction: column;
        }

        .form-label {
          font-size: 0.875rem;
          font-weight: 600;
          color: #1a1a2e;
          margin-bottom: 0.5rem;
        }

        .required {
          color: #ef4444;
          margin-left: 0.25rem;
        }

        .input-wrapper {
          position: relative;
          display: flex;
          align-items: center;
        }

        .form-input,
        .form-select,
        .form-textarea {
          width: 100%;
          padding: 0.875rem 1rem 0.875rem 3rem;
          border: 2px solid #e5e7eb;
          background: white;
          border-radius: 12px;
          font-size: 0.875rem;
          color: #1a1a2e;
          outline: none;
          transition: border-color 0.3s ease;
          font-family: inherit;
        }

        .form-input:focus,
        .form-select:focus,
        .form-textarea:focus {
          border-color: #3b82f6;
        }

        .form-input::placeholder,
        .form-textarea::placeholder {
          color: #9ca3af;
        }

        .form-input-icon {
          position: absolute;
          left: 1rem;
          color: #9ca3af;
          pointer-events: none;
        }

        .form-select {
          appearance: none;
          cursor: pointer;
          background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12'%3E%3Cpath fill='%239ca3af' d='M6 9L1 4h10z'/%3E%3C/svg%3E");
          background-repeat: no-repeat;
          background-position: right 1rem center;
          padding-right: 2.5rem;
        }

        .form-textarea {
          padding: 1rem 1rem 1rem 3rem;
          resize: vertical;
          min-height: 120px;
        }

        .image-upload-area {
          border: 2px dashed #3b82f6;
          border-radius: 12px;
          padding: 2rem;
          text-align: center;
          background: #f0f9ff;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .image-upload-area:hover {
          border-color: #2563eb;
          background: #e0f2fe;
        }

        .upload-icon {
          color: #3b82f6;
          margin-bottom: 0.5rem;
        }

        .upload-text {
          color: #1a1a2e;
          font-weight: 600;
          font-size: 0.875rem;
        }

        .upload-subtext {
          color: #6b7280;
          font-size: 0.75rem;
          margin-top: 0.25rem;
        }

        .image-input {
          display: none;
        }

        .image-preview-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
          gap: 1rem;
          margin-top: 1rem;
        }

        .image-preview-item {
          position: relative;
          aspect-ratio: 1;
          border-radius: 12px;
          overflow: hidden;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
        }

        .image-preview-item img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .remove-image-btn {
          position: absolute;
          top: 0.5rem;
          right: 0.5rem;
          width: 28px;
          height: 28px;
          background: #ef4444;
          color: white;
          border: none;
          border-radius: 50%;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: background 0.3s ease;
        }

        .remove-image-btn:hover {
          background: #dc2626;
        }

        .amenities-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
          gap: 1rem;
        }

        .amenity-item {
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }

        .amenity-checkbox {
          width: 18px;
          height: 18px;
          cursor: pointer;
          accent-color: #3b82f6;
        }

        .amenity-label {
          font-size: 0.875rem;
          color: #1a1a2e;
          cursor: pointer;
        }

        .checkbox-group {
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }

        .checkbox-input {
          width: 18px;
          height: 18px;
          cursor: pointer;
          accent-color: #3b82f6;
        }

        .checkbox-label {
          font-size: 0.875rem;
          color: #6b7280;
          cursor: pointer;
        }

        .form-buttons {
          display: flex;
          gap: 1rem;
          justify-content: flex-end;
          margin-top: 2rem;
          padding-top: 2rem;
          border-top: 2px solid #e5e7eb;
        }

        .btn {
          padding: 0.875rem 2rem;
          border: none;
          border-radius: 12px;
          font-size: 0.875rem;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .btn-primary {
          background: #3b82f6;
          color: white;
        }

        .btn-primary:hover {
          background: #2563eb;
        }

        .btn-secondary {
          background: #e5e7eb;
          color: #1a1a2e;
        }

        .btn-secondary:hover {
          background: #d1d5db;
        }

        .features-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1rem;
        }

        @media (max-width: 768px) {
          .form-row {
            grid-template-columns: 1fr;
          }

          .features-grid {
            grid-template-columns: 1fr;
          }

          .amenities-grid {
            grid-template-columns: repeat(2, 1fr);
          }

          .form-container {
            padding: 1.5rem;
          }

          .page-title {
            font-size: 2rem;
          }

          .add-property-page {
            padding: 1rem;
          }

          .form-buttons {
            flex-direction: column;
          }

          .btn {
            width: 100%;
          }
        }
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