import React, { useState } from 'react';

const LoginForm = () => {
    const queryParams = new URLSearchParams(window.location.search);
    const error = queryParams.get('error');

    return (
        <div style={{
            minHeight: '100vh',
            background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'white',
            fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif'
        }}>
            <h1 style={{
                fontSize: '4rem',
                fontWeight: 'bold',
                marginBottom: '10px',
                textShadow: '2px 2px 4px rgba(0,0,0,0.3)'
            }}>
                Weekly Planner
            </h1>
            <p style={{ fontSize: '1.5rem', marginBottom: '40px', opacity: 0.9 }}>
                Organize your academic life efficiently.
            </p>

            <div className="bg-white rounded-xl shadow-2xl p-8" style={{ width: '100%', maxWidth: '400px', backgroundColor: 'rgba(255, 255, 255, 0.95)' }}>
                <h2 className="text-2xl font-semibold text-center mb-6 text-gray-800">Student Login</h2>

                {error === 'unauthorized' && (
                    <div className="mb-4 w-full p-3 bg-red-100 border border-red-400 text-red-700 rounded">
                        <strong>Access Denied:</strong> You are not registered in the system.
                    </div>
                )}

                <div className="mt-4 w-full">
                    <a href="http://localhost:8082/login" className="block w-full">
                        <button
                            type="button"
                            style={{
                                width: '100%',
                                padding: '12px',
                                backgroundColor: '#db4437',
                                color: 'white',
                                border: 'none',
                                borderRadius: '8px',
                                fontSize: '16px',
                                fontWeight: 'bold',
                                cursor: 'pointer',
                                transition: 'background-color 0.3s',
                                boxShadow: '0 4px 6px rgba(0,0,0,0.1)'
                            }}
                            onMouseOver={(e) => e.target.style.backgroundColor = '#c53929'}
                            onMouseOut={(e) => e.target.style.backgroundColor = '#db4437'}
                        >
                            Login with Google
                        </button>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default LoginForm;
