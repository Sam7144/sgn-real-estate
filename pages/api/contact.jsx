const sdGmail=require('@sendgrid/mail');
sdGmail.setApiKey(process.env.SG_API_KEY)
export default async function handler(req, res) {
  const {method}=req;
  if(method==='POST'){
    const{fullName,Email,phoneNo,purpose}=req.body;
    if (!Email || !Email.includes("@")) {
      res.status(422).json({ message: "invalid email address" });
      return;
    }
  const msg={
    to:process.env.TO_EMAIL,
    from:process.env.FROM_EMAIL,
    subject:'SGN-EMPIRE',
    html:`
    <p><strong>name:${fullName}</strong></p>
    <p><strong>email:${Email}</strong></p>
    <p><strong>phoneNo:${phoneNo}</strong></p>
    <p><strong>purpose:${purpose}</strong></p>
    `
   }
   await sdGmail.send(msg)
  res.status(200).json({ message:'email sent successfully' })
  }
  
}
