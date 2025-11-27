import React from 'react';

const AccessDenied = () => {
    return (
        <div style={{
            minHeight: '100vh',
            background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '20px',
            fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif'
        }}>
            <div style={{
                backgroundColor: 'white',
                borderRadius: '16px',
                padding: '60px 40px',
                maxWidth: '500px',
                width: '100%',
                textAlign: 'center',
                boxShadow: '0 10px 30px rgba(0,0,0,0.2)'
            }}>
                {/* Access Denied Title */}
                <h1 style={{
                    color: '#dc2626',
                    fontSize: '2.5rem',
                    fontWeight: 'bold',
                    marginBottom: '30px',
                    textTransform: 'uppercase',
                    letterSpacing: '1px'
                }}>
                    Access Denied
                </h1>

                {/* Error Icon */}
                <div style={{
                    fontSize: '80px',
                    marginBottom: '30px'
                }}>
                    🚫
                </div>

                {/* Message */}
                <p style={{
                    color: '#4b5563',
                    fontSize: '1.1rem',
                    lineHeight: '1.6',
                    marginBottom: '15px'
                }}>
                    Your Google account is not registered in our system.
                </p>

                <p style={{
                    color: '#6b7280',
                    fontSize: '1rem',
                    lineHeight: '1.6',
                    marginBottom: '40px'
                }}>
                    Please contact the administrator to register your email address.
                </p>

                {/* Back to Login Button */}
                <a href="/" style={{ textDecoration: 'none' }}>
                    <button style={{
                        backgroundColor: '#3b82f6',
                        color: 'white',
                        padding: '14px 32px',
                        fontSize: '1rem',
                        fontWeight: 'bold',
                        border: 'none',
                        borderRadius: '8px',
                        cursor: 'pointer',
                        transition: 'all 0.3s',
                        boxShadow: '0 4px 6px rgba(59, 130, 246, 0.3)',
                        textTransform: 'uppercase',
                        letterSpacing: '0.5px'
                    }}
                        onMouseOver={(e) => {
                            e.target.style.backgroundColor = '#2563eb';
                            e.target.style.transform = 'translateY(-2px)';
                            e.target.style.boxShadow = '0 6px 12px rgba(59, 130, 246, 0.4)';
                        }}
                        onMouseOut={(e) => {
                            e.target.style.backgroundColor = '#3b82f6';
                            e.target.style.transform = 'translateY(0)';
                            e.target.style.boxShadow = '0 4px 6px rgba(59, 130, 246, 0.3)';
                        }}>
                        Back to Login
                    </button>
                </a>
            </div>
        </div>
    );
};

export default AccessDenied;
