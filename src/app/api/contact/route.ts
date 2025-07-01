import { NextResponse } from 'next/server';
import { resend } from '@/lib/email/resend';
import validator from "validator";



export async function POST(req: Request) {
    try {
        const { name, email, message, website } = await req.json();
        if (website) {
        return NextResponse.json({ error: 'Spam détecté.' }, { status: 400 });
        }

        
    if (
      !name?.trim() ||
      !email?.trim() ||
      !message?.trim() ||
      !validator.isEmail(email)
    ) {
      return NextResponse.json({ error: 'Champs invalides.' }, { status: 400 });
    }
 
    const mailResult = await resend.emails.send({
      from: 'Contact Form <onboarding@resend.dev>', // tu peux changer ça plus tard
      to: 'mohamed.pro.dembele@gmail.com', // METS TON EMAIL ICI
      subject: `📩 Nouveau message de ${name}`,
      replyTo: email,
      text: `Nom: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
    });

    console.log('✅ Email envoyé:', mailResult);

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Erreur API contact:", error);
    return NextResponse.json({ error: 'Erreur serveur' }, { status: 500 });
  }
}
