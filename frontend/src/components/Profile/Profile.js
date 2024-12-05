import React, { useState } from 'react';
import './Profile.css';

const Profile = () => {
  const [userData, setUserData] = useState({
    fullName: 'Genesis Lopez',
    birthDate: '2009-09-03',
    email: 'genesis@email.com',
    password: '********',
    role: 'Estudiante',
    image: require('../../assets/iconde.png'),
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setUserData({ ...userData, image: reader.result });
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="profile-container">
      <h2>Mi Perfil</h2>
      <div className="profile-image-container">
        <img src={userData.image} alt="Profile" className="profile-image" />
        <input type="file" accept="image/*" onChange={handleImageChange} />
      </div>
      <form>
        <label>
          Nombre Completo:
          <input type="text" name="fullName" value={userData.fullName} onChange={handleChange} />
        </label>
        <label>
          Fecha de Nacimiento:
          <input type="date" name="birthDate" value={userData.birthDate} onChange={handleChange} />
        </label>
        <label>
          Correo Electrónico:
          <input type="email" name="email" value={userData.email} onChange={handleChange} />
        </label>
        <label>
          Contraseña:
          <input type="password" name="password" value={userData.password} onChange={handleChange} />
        </label>
        <label>
          Rol:
          <input type="text" name="role" value={userData.role} disabled />
        </label>
        <button type="submit">Guardar Cambios</button>
      </form>
    </div>
  );
};

export default Profile;