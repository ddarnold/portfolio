import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import ReCAPTCHA from "react-google-recaptcha";

const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [success, setSuccess] = useState("");
  const [captchaValue, setCaptchaValue] = useState(null);

  const form = useRef();
  const recaptchaRef = useRef();

  const handleCaptchaChange = (value) => {
    setCaptchaValue(value);
  };

  const sendEmail = (e) => {
    e.preventDefault();

    if (!captchaValue) {
      alert("Please verify that you are not a robot.");
      return;
    }

    emailjs
      .sendForm("service_2ll7dem", "template_0ooxolh", form.current, {
        publicKey: "Oi-HJNvs05jWPBvLO",
      })
      .then(
        () => {
          setName("");
          setEmail("");
          setMessage("");
          setSuccess("Message sent successfully!");
          recaptchaRef.current.reset(); // reset reCAPTCHA after success
          setCaptchaValue(null);
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <div id="contact">
      <p className="text-cyan">{success}</p>
      <form className="flex flex-col gap-4 text-white" ref={form} onSubmit={sendEmail}>
        <input
          name="from_name"
          type="text"
          placeholder="Your Name"
          required
          className="h-12 rounded-lg bg-lightNavy px-2"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          name="from_email"
          type="email"
          placeholder="Your Email"
          required
          className="h-12 rounded-lg bg-lightNavy px-2"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <textarea
          name="message"
          rows="9"
          placeholder="Message"
          cols="50"
          required
          className="rounded-lg bg-lightNavy p-2"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        
        <ReCAPTCHA
          sitekey="6LfjF40rAAAAADxOnpIJYKpUUJBMBEvoqyrVsn6n"
          onChange={handleCaptchaChange}
          ref={recaptchaRef}
        />

        <button
          type="submit"
          className="w-full rounded-lg border border-cyan text-white h-12 font-bold text-xl hover:bg-darkCyan bg-cyan transition-all duration-500"
        >
          Send
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
