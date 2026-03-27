"use server";

export async function sendQuoteRequest(formData: FormData) {
  const nom = formData.get('nom');
  const prenom = formData.get('prenom');
  const adresse = formData.get('adresse');
  const telephone = formData.get('telephone');
  const email = formData.get('email');
  const message = formData.get('message');
  const photos = formData.getAll('photos');

  console.log("Nouvelle demande de devis reçue :");
  console.log({ nom, prenom, adresse, telephone, email, message, photosCount: photos.length });

  // Simulate a delay for the "sending" process
  await new Promise(resolve => setTimeout(resolve, 1500));

  // In a real application, you would use Nodemailer or a service like Resend/SendGrid
  // to send the email with the attachments.
  
  return { success: true };
}
