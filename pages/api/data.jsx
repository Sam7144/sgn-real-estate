const sdGmail=require('@sendgrid/mail');
sdGmail.setApiKey(process.env.SG_API_KEY)
export default async function handler(req, res) {
  const {method}=req;
  if(method==='POST'){
    const{firstName,lastName,email,text}=req.body;
    if (!email || !email.includes("@")) {
      res.status(422).json({ message: "invalid email address" });
      return;
    }
  const msg={
    to:process.env.TO_EMAIL,
    from:process.env.FROM_EMAIL,
    subject:'SGN-EMPIRE',
    html:`
    <p><strong>firstName:${firstName}</strong></p>
    <p><strong>lastName:${lastName}</strong></p>
    <p><strong>email:${email}</strong></p>
    <p><strong>text:${text}</strong></p>
    `
   }
   await sdGmail.send(msg)
  res.status(200).json({ message:'email sent successfully' })
  }
  
}
