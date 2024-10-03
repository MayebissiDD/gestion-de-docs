import React from 'react';

const Login = () => {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="w-full max-w-md bg-white shadow-md p-6">
        <h2 className="text-2xl font-bold mb-4">Connexion</h2>
        <input type="text" placeholder="Nom d'utilisateur" className="border p-2 w-full mb-4" />
        <input type="password" placeholder="Mot de passe" className="border p-2 w-full mb-4" />
        <button className="bg-blue-600 text-white p-2 w-full rounded">Se connecter</button>
      </div>
    </div>
  );
};

export default Login;
