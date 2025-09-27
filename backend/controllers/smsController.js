
import Twilio from "twilio";

const accountSid = "YOUR_TWILIO_ACCOUNT_SID";
const authToken = "YOUR_TWILIO_AUTH_TOKEN";
const client = new Twilio(accountSid, authToken);

// Send SMS controller
const sendSms = async (req, res) => {
  const { phone, message } = req.body;

  if (!phone || !message) {
    return res.status(400).json({ success: false, message: "Phone number and message are required" });
  }

  try {
    const sms = await client.messages.create({
      body: message,
      from: "+9523709895",
      to: phone,
    });

    res.json({ success: true, message: "SMS sent successfully", sid: sms.sid });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: "Failed to send SMS" });
  }
};

export default sendSms;
