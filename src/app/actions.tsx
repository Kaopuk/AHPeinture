"use server";

import { Resend } from "resend";
import { EmailTemplate } from "@/components/EmailTemplate";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendQuoteRequest(formData: FormData) {
  const nom = formData.get('nom') as string;
  const prenom = formData.get('prenom') as string;
  const adresse = formData.get('adresse') as string;
  const telephone = formData.get('telephone') as string;
  const email = formData.get('email') as string;
  const message = formData.get('message') as string;
  const photos = formData.getAll('photos');

  console.log("Nouvelle demande de devis reçue :");
  console.log({ nom, prenom, adresse, telephone, email, message, photosCount: photos.length });

  try {
    const { data, error } = await resend.emails.send({
      from: "AH Peinture <onboarding@resend.dev>", // À changer une fois le domaine vérifié
      to: [process.env.CONTACT_EMAIL || "votre@email.com"],
      subject: `Demande de devis - ${prenom} ${nom}`,
      react: (
        <EmailTemplate 
          nom={nom} 
          prenom={prenom} 
          adresse={adresse} 
          telephone={telephone} 
          email={email} 
          message={message} 
        />
      ),
    });

    if (error) {
      console.error("Erreur Resend:", error);
      return { success: false, error: "L'envoi de l'e-mail a échoué." };
    }

    return { success: true, data };
  } catch (err) {
    console.error("Erreur serveur:", err);
    return { success: false, error: "Une erreur inattendue est survenue." };
  }
}

