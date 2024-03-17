import nodemailer from 'nodemailer'

const MAIL_SETTINGS =  {
    service: 'gmail',
    auth: {
        user: "mr.hirenpadaliya@gmail.com",
        pass: "H!4en@H!y@"
    //   user: process.env.MAIL_EMAIL,
    //   pass: process.env.MAIL_PASSWORD,
    },
  }
const transporter = nodemailer.createTransport(MAIL_SETTINGS)

export const sendMail = async function(params:{to: string, OTP: string}){
    try{
        let info = await transporter.sendMail({
            from: MAIL_SETTINGS.auth.user,
            to: params.to, 
            subject: 'Otp for login in to app id',
            html: `
                <div
                class="container"
                style="max-width: 90%; margin: auto; padding-top: 20px"
            >
                <h2>Welcome to the App.</h2>
                <h4>Bellow is the OTP for signup in to App ✔</h4>
                <p style="margin-bottom: 30px;">Pleas enter the sign up OTP to get started</p>
                <h1 style="font-size: 40px; letter-spacing: 2px; text-align:center;">${params.OTP}</h1>
                </div>
            `,
        });
        return info
    }catch(error){
        console.log(error)
        return false
    }
} 
