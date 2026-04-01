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

  try {
    const attachments = [];
    let totalSize = 0;
    const MAX_SIZE = 10 * 1024 * 1024; // 10 Mo

    for (const photo of photos) {
      if (photo instanceof File && photo.size > 0) {
        totalSize += photo.size;

        if (totalSize > MAX_SIZE) {
          return { success: false, error: "Le poids total des photos dépasse la limite de 10 Mo." };
        }

        const buffer = Buffer.from(await photo.arrayBuffer());
        attachments.push({
          filename: photo.name,
          content: buffer,
        });
      }
    }

    const { data, error } = await resend.emails.send({
      from: "AH Peinture <contact@ahpeinture.com>", // À changer une fois le domaine vérifié <onboarding@resend.dev>
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
      attachments: attachments.length > 0 ? attachments : undefined,
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


