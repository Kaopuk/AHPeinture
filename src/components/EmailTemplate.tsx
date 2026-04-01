import * as React from 'react';

interface EmailTemplateProps {
  nom: string;
  prenom: string;
  adresse: string;
  telephone: string;
  email: string;
  message: string;
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  nom,
  prenom,
  adresse,
  telephone,
  email,
  message,
}) => (
  <div style={{
    fontFamily: 'Arial, sans-serif',
    color: '#333',
    backgroundColor: '#f9f9f9',
    padding: '20px',
    borderRadius: '10px',
    maxWidth: '600px',
    margin: '0 auto',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
  }}>
    <h1 style={{ color: '#d4af37', borderBottom: '2px solid #d4af37', paddingBottom: '10px' }}>Nouvelle demande de devis - AH Peinture</h1>
    
    <div style={{ marginBottom: '20px' }}>
      <h2 style={{ fontSize: '18px', color: '#555' }}>Informations Client :</h2>
      <p><strong>Nom :</strong> {prenom} {nom}</p>
      <p><strong>Adresse :</strong> {adresse}</p>
      <p><strong>Téléphone :</strong> {telephone}</p>
      <p><strong>Email :</strong> {email || 'Non renseigné'}</p>
    </div>

    <div style={{ backgroundColor: '#fff', padding: '15px', borderRadius: '5px' }}>
      <h2 style={{ fontSize: '18px', color: '#555' }}>Description du projet :</h2>
      <p style={{ lineHeight: '1.6' }}>{message || 'Pas de description fournie.'}</p>
    </div>

    <footer style={{ marginTop: '30px', fontSize: '12px', color: '#888' }}>
      Ce formulaire a été envoyé depuis le site internet de AH Peinture.
    </footer>
  </div>
);
