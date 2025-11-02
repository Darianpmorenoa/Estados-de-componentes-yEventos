import React, { useState } from 'react';

function Login({ onViewChange }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState({ text: '', type: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    setMessage({ text: '', type: '' }); 

    
    if (!email || !password) {
      setMessage({ text: 'Error: Email y contraseña son obligatorios.', type: 'error' });
      return;
    }

    
    if (password.length < 6) {
      setMessage({ text: 'Error: La contraseña debe tener al menos 6 caracteres.', type: 'error' });
      return;
    }

    
    if (email === "prueba@prueba.com" && password === "123456") { 
        setMessage({ text: '¡Authentication successful!', type: 'success' });
       
    } else {
        setMessage({ text: 'Error: Credenciales inválidas.', type: 'error' });
    }
  };

  const style = message.type === 'success' ? { color: 'green', fontWeight: 'bold' } : { color: 'red', fontWeight: 'bold' };

  return (
    <div className="login-form" style={{ maxWidth: '400px', margin: '40px auto', padding: '20px', border: '1px solid #ccc' }}>
      <h2 style={{ textAlign: 'center' }}>Iniciar Sesión</h2>

    
      <button 
        onClick={() => onViewChange('home')} 
        style={{ 
          marginBottom: '20px', 
          padding: '8px 15px', 
          backgroundColor: '#6c757d',
          color: 'white', 
          border: 'none', 
          borderRadius: '4px',
          cursor: 'pointer'
        }}
      >
        ← Volver a la Principal
      </button>
      
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
        
        <label>Email:</label>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} style={{ padding: '8px' }} />

        <label>Contraseña:</label>
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} style={{ padding: '8px' }} />

        <button type="submit" style={{ padding: '10px', backgroundColor: '#007bff', color: 'white' }}>Acceso</button>
      </form>

     
      {message.text && (
        <p style={{ ...style, textAlign: 'center', marginTop: '15px' }}>{message.text}</p>
      )}
    </div>
  );
}

export default Login;