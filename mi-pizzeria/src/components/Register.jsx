import React, { useState } from 'react';
function Register({ onViewChange }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [message, setMessage] = useState({ text: '', type: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    setMessage({ text: '', type: '' }); 

    if (!email || !password || !confirmPassword) {
      setMessage({ text: 'Error: Todos los campos son obligatorios.', type: 'error' });
      return;
    }

    if (password.length < 6) {
      setMessage({ text: 'Error: La contraseña debe tener al menos 6 caracteres.', type: 'error' });
      return;
    }

    if (password !== confirmPassword) {
      setMessage({ text: 'Error: Las contraseñas no coinciden.', type: 'error' });
      return;
    }

    // ÉXITO
    setMessage({ text: '¡Registro exitoso! Redirigiendo a Login...', type: 'success' });
    
    setTimeout(() => onViewChange('login'), 1500); 
  };

  const style = message.type === 'success' ? { color: 'green', fontWeight: 'bold' } : { color: 'red', fontWeight: 'bold' };

  return (
    <div className="register-form" style={{ maxWidth: '400px', margin: '40px auto', padding: '20px', border: '1px solid #ccc' }}>
      
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

      <h2 style={{ textAlign: 'center' }}>Registro de Usuario</h2>
      
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
        
        <label>Email:</label>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} style={{ padding: '8px' }} />

        <label>Contraseña:</label>
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} style={{ padding: '8px' }} />

        <label>Confirmar contraseña:</label>
        <input type="password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} style={{ padding: '8px' }} />

        <button type="submit" style={{ padding: '10px', backgroundColor: '#28a745', color: 'white' }}>Registrarse</button>
      </form>

      {message.text && (
        <p style={{ ...style, textAlign: 'center' }}>{message.text}</p>
      )}
    </div>
  );
}

export default Register;