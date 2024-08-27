
import { EmailTemplate } from "@/components/email-template";
import { NextResponse } from "next/server";
import { Resend } from "resend";


export async function POST(request) {
  const body = await request.json();
  const { name, email, subject, message, tele } = body;

  const discordMessage = `
    <@phuongtt>
    **New Email Received:**
    **Name:** ${name}
    **Email:** ${email}
    **Subject:** ${subject}
    **Message:** ${message}
    **Phone:** ${tele}
  `;
  const webhookUrl = 'https://discord.com/api/webhooks/1273878472355348510/0A-sEQLEZo8IBZLP321sJ2jSRmllIxfoYNBAmKSCN0OoYODaVuIpu4A6oFROrj5qotD7';
  try {
    
    const response = await fetch(webhookUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ content: discordMessage }),
    });
    
    // const body = await request.json();
    // console.log(body);
    // const { name, email, subject, message ,tele } = body;
    // const response = await resend.emails.send({
    //   from: `${name} <neo>` ,
    //   to: "neo.t2p@gmail.com",
    //   subject:  subject,
    //   react: EmailTemplate({ firstName: name ,Msg:message, Email:email ,Phone:tele }),
    // });

   
    if(response.status === 'success') {
      return NextResponse.json({ message: 'Email Successfully Sent!' })
      }
      return NextResponse.json(response)
    } catch (error) {
      console.log('error', error)
    }
}
