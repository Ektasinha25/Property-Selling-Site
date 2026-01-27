import React, { useState } from 'react';
import { 
  BarChart3, Users, Home, TrendingUp, AlertCircle, 
  ArrowUp, ArrowDown, Eye, Edit2, Trash2, Search,
  Filter, Download, Plus, MoreVertical
} from 'lucide-react';

import "./AdminDashboard.css"

export default function AdminDashboard() {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterType, setFilterType] = useState('all');

  const stats = [
    {
      title: 'Total Properties',
      value: '1,234',
      change: '+12.5%',
      isPositive: true,
      icon: Home,
      color: '#17a2b8'
    },
    {
      title: 'Active Users',
      value: '856',
      change: '+8.2%',
      isPositive: true,
      icon: Users,
      color: '#007bff'
    },
    {
      title: 'Total Revenue',
      value: '₹48.5K',
      change: '+23.1%',
      isPositive: true,
      icon: TrendingUp,
      color: '#28a745'
    },
    {
      title: 'Pending Approvals',
      value: '23',
      change: '-5.4%',
      isPositive: false,
      icon: AlertCircle,
      color: '#ffc107'
    }
  ];

  const recentProperties = [
    {
      id: 1,
      title: 'Luxury Apartment in Downtown',
      seller: 'John Doe',
      price: '₹450,000',
      status: 'Active',
      date: '2024-01-15'
    },
    {
      id: 2,
      title: 'Modern Villa with Garden',
      seller: 'Jane Smith',
      price: '₹750,000',
      status: 'Pending',
      date: '2024-01-14'
    },
    {
      id: 3,
      title: 'Commercial Space',
      seller: 'Mike Johnson',
      price: '₹320,000',
      status: 'Active',
      date: '2024-01-13'
    },
    {
      id: 4,
      title: 'Residential Complex',
      seller: 'Sarah Wilson',
      price: '₹1,200,000',
      status: 'Rejected',
      date: '2024-01-12'
    },
    {
      id: 5,
      title: 'Beachfront Property',
      seller: 'Robert Brown',
      price: '₹890,000',
      status: 'Active',
      date: '2024-01-11'
    }
  ];

  const users = [
    { id: 1, name: 'John Doe', email: 'john@example.com', role: 'Seller', joined: '2023-06-15', status: 'Active' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com', role: 'Buyer', joined: '2023-07-20', status: 'Active' },
    { id: 3, name: 'Mike Johnson', email: 'mike@example.com', role: 'Seller', joined: '2023-08-10', status: 'Inactive' },
    { id: 4, name: 'Sarah Wilson', email: 'sarah@example.com', role: 'Buyer', joined: '2023-09-05', status: 'Active' }
  ];

  return (
    <>
      <link 
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" 
        rel="stylesheet"
      />
      
      

      <div className="admin-dashboard">
        <div className="container-fluid">
          {/* Dashboard Header */}
          <div className="dashboard-header">
            <h1 className="dashboard-title">Admin Dashboard</h1>
            <p className="dashboard-subtitle">Welcome back, Administrator. Here's your system overview.</p>
          </div>

          {/* Stats Cards */}
          <div className="stats-grid">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div key={index} className="stat-card">
                  <div className="stat-header">
                    <div>
                      <p className="stat-title">{stat.title}</p>
                      <p className="stat-value">{stat.value}</p>
                    </div>
                    <div className="stat-icon" style={{ backgroundColor: stat.color }}>
                      <Icon size={24} />
                    </div>
                  </div>
                  <div className={`stat-change ₹{stat.isPositive ? 'positive' : 'negative'}`}>
                    {stat.isPositive ? <ArrowUp size={16} /> : <ArrowDown size={16} />}
                    <span>{stat.change}</span>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Recent Properties */}
          <div className="content-card">
            <div className="card-header-custom">
              <h2 className="card-title">Recent Properties</h2>
              <div className="card-actions">
                <button className="btn-custom btn-secondary-custom">
                  <Download size={16} />
                  Export
                </button>
                <a href="AddProperty"><button className="btn-custom btn-primary-custom">
                  <Plus size={16} />
                  Add Property
                </button>
                </a>
              </div>
            </div>

            <div className="search-filter-bar">
              <div style={{ flex: 1, display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
                <Search size={16} color="#6c757d" />
                <input
                  type="text"
                  className="search-input"
                  placeholder="Search properties..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  style={{ flex: 1 }}
                />
              </div>
              <select 
                className="filter-select"
                value={filterType}
                onChange={(e) => setFilterType(e.target.value)}
              >
                <option value="all">All Status</option>
                <option value="active">Active</option>
                <option value="pending">Pending</option>
                <option value="rejected">Rejected</option>
              </select>
            </div>

            <div className="table-responsive">
              <table className="table-custom">
                <thead>
                  <tr>
                    <th>Property Title</th>
                    <th>Seller</th>
                    <th>Price</th>
                    <th>Status</th>
                    <th>Date</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {recentProperties.map((property) => (
                    <tr key={property.id}>
                      <td>{property.title}</td>
                      <td>{property.seller}</td>
                      <td>{property.price}</td>
                      <td>
                        <span className={`badge-custom badge-₹{property.status.toLowerCase()}`}>
                          {property.status}
                        </span>
                      </td>
                      <td>{property.date}</td>
                      <td>
                        <div className="action-buttons">
                          <button className="btn-action btn-view" title="View">
                            <Eye size={16} />
                          </button>
                          <button className="btn-action btn-edit" title="Edit">
                            <Edit2 size={16} />
                          </button>
                          <button className="btn-action btn-delete" title="Delete">
                            <Trash2 size={16} />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Users and More Info Grid */}
          <div className="two-column-grid">
            {/* Active Users */}
            <div className="content-card">
              <div className="card-header-custom">
                <h2 className="card-title">Active Users</h2>
                <button className="btn-custom btn-secondary-custom">
                  <MoreVertical size={16} />
                </button>
              </div>

              <div className="table-responsive">
                <table className="table-custom">
                  <thead>
                    <tr>
                      <th>Name</th>
                      <th>Role</th>
                      <th>Status</th>
                      <th>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {users.map((user) => (
                      <tr key={user.id}>
                        <td>
                          <div>
                            <strong>{user.name}</strong>
                            <div style={{ fontSize: '0.75rem', color: '#6c757d' }}>{user.email}</div>
                          </div>
                        </td>
                        <td>{user.role}</td>
                        <td>
                          <span className={`badge-custom badge-₹{user.status.toLowerCase()}`}>
                            {user.status}
                          </span>
                        </td>
                        <td>
                          <div className="action-buttons">
                            <button className="btn-action btn-view" title="View">
                              <Eye size={16} />
                            </button>
                            <button className="btn-action btn-edit" title="Edit">
                              <Edit2 size={16} />
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Quick Stats */}
            <div className="content-card">
              <h2 className="card-title">System Overview</h2>
              
              <div style={{ marginTop: '1.5rem' }}>
                <div style={{ marginBottom: '1.5rem' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                    <span style={{ fontSize: '0.875rem', fontWeight: '500', color: '#6c757d' }}>Properties Listed</span>
                    <span style={{ fontSize: '0.875rem', fontWeight: '600', color: '#212529' }}>1,234</span>
                  </div>
                  <div style={{ width: '100%', height: '8px', backgroundColor: '#e9ecef', borderRadius: '4px', overflow: 'hidden' }}>
                    <div style={{ width: '85%', height: '100%', backgroundColor: '#007bff' }}></div>
                  </div>
                </div>

                <div style={{ marginBottom: '1.5rem' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                    <span style={{ fontSize: '0.875rem', fontWeight: '500', color: '#6c757d' }}>Active Users</span>
                    <span style={{ fontSize: '0.875rem', fontWeight: '600', color: '#212529' }}>856</span>
                  </div>
                  <div style={{ width: '100%', height: '8px', backgroundColor: '#e9ecef', borderRadius: '4px', overflow: 'hidden' }}>
                    <div style={{ width: '72%', height: '100%', backgroundColor: '#17a2b8' }}></div>
                  </div>
                </div>

                <div style={{ marginBottom: '1.5rem' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                    <span style={{ fontSize: '0.875rem', fontWeight: '500', color: '#6c757d' }}>Pending Approvals</span>
                    <span style={{ fontSize: '0.875rem', fontWeight: '600', color: '#212529' }}>23</span>
                  </div>
                  <div style={{ width: '100%', height: '8px', backgroundColor: '#e9ecef', borderRadius: '4px', overflow: 'hidden' }}>
                    <div style={{ width: '15%', height: '100%', backgroundColor: '#ffc107' }}></div>
                  </div>
                </div>

                <div style={{ marginBottom: '1.5rem' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                    <span style={{ fontSize: '0.875rem', fontWeight: '500', color: '#6c757d' }}>System Health</span>
                    <span style={{ fontSize: '0.875rem', fontWeight: '600', color: '#212529' }}>98%</span>
                  </div>
                  <div style={{ width: '100%', height: '8px', backgroundColor: '#e9ecef', borderRadius: '4px', overflow: 'hidden' }}>
                    <div style={{ width: '98%', height: '100%', backgroundColor: '#28a745' }}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}