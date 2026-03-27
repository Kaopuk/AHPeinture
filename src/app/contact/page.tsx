"use client";

import { useState, useTransition } from 'react';
import styles from './contact.module.css';
import { sendQuoteRequest } from '../actions';

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [isPending, startTransition] = useTransition();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    
    startTransition(async () => {
      const result = await sendQuoteRequest(formData);
      if (result.success) {
        setSubmitted(true);
      }
    });
  };


  if (submitted) {
    return (
      <div className={styles.success}>
        <div className={styles.container}>
          <h2>Merci pour votre demande !</h2>
          <p>Nous avons bien reçu vos informations. Alexandre Hodier vous recontactera dans les plus brefs délais.</p>
          <button onClick={() => setSubmitted(false)} className={styles.backBtn}>Retour au formulaire</button>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.page}>
      <header className={styles.header}>
        <div className={styles.container}>
          <h1>Demander un devis</h1>
          <p>Remplissez le formulaire ci-dessous pour obtenir une estimation gratuite de vos travaux.</p>
        </div>
      </header>

      <section className={styles.formSection}>
        <div className={styles.container}>
          <form className={styles.form} onSubmit={handleSubmit}>
            <div className={styles.row}>
              <div className={styles.field}>
                <label htmlFor="nom">Nom *</label>
                <input type="text" id="nom" name="nom" required placeholder="Votre nom" />
              </div>
              <div className={styles.field}>
                <label htmlFor="prenom">Prénom *</label>
                <input type="text" id="prenom" name="prenom" required placeholder="Votre prénom" />
              </div>
            </div>

            <div className={styles.field}>
              <label htmlFor="adresse">Adresse complète *</label>
              <input type="text" id="adresse" name="adresse" required placeholder="N°, Rue, Code Postal, Ville" />
            </div>

            <div className={styles.row}>
              <div className={styles.field}>
                <label htmlFor="telephone">Téléphone *</label>
                <input type="tel" id="telephone" name="telephone" required placeholder="06 00 00 00 00" />
              </div>
              <div className={styles.field}>
                <label htmlFor="email">Email</label>
                <input type="email" id="email" name="email" placeholder="votre@email.com" />
              </div>
            </div>

            <div className={styles.field}>
              <label htmlFor="message">Description des travaux</label>
              <textarea id="message" name="message" rows={5} placeholder="Décrivez votre projet en quelques lignes..."></textarea>
            </div>

            <div className={styles.field}>
              <label htmlFor="photos">Photos du projet (Optionnel)</label>
              <div className={styles.fileInputWrapper}>
                <input type="file" id="photos" name="photos" multiple accept="image/*" />
                <p className={styles.fileHint}>Formats acceptés: JPG, PNG. Taille max: 5Mo par photo.</p>
              </div>
            </div>

            <button type="submit" className={styles.submitBtn} disabled={isPending}>
              {isPending ? "Envoi en cours..." : "Envoyer ma demande de devis"}
            </button>

            <p className={styles.requiredHint}>* Champs obligatoires</p>
          </form>
        </div>
      </section>
    </div>
  );
}
