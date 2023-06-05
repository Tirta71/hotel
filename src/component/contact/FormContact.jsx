import React, { useState } from "react";
import Swal from "sweetalert2";
export default function FormContact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [alertMessage, setAlertMessage] = useState("");
  const [alertType, setAlertType] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = {
      name: name,
      email: email,
      message: message,
    };

    try {
      const response = await fetch(
        "https://647c5a8bc0bae2880ad09b73.mockapi.io/email",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      if (response.ok) {
        Swal.fire("Email Sending", "Message sent successfully!", "success");
      } else {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Failed to send message. Please try again.",
        });
        setAlertMessage("");
        setAlertType("error");
      }
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Something went wrong!",
        footer: '<a href="">Why do I have this issue?</a>',
      });
    }

    resetForm();
  };

  const resetForm = () => {
    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <div>
      <form id="contact_form" onSubmit={handleSubmit}>
        <div className={alertType ? "message" : "message d-none"}>
          <div id="contact_alert" className={`alert ${alertType}`}>
            {alertMessage}
          </div>
        </div>
        <label htmlFor="name" className="screen-reader-text">
          Name
        </label>
        <input
          type="text"
          name="name"
          id="name"
          placeholder="Your name&hellip;"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <label htmlFor="email" className="screen-reader-text">
          Email
        </label>
        <input
          type="email"
          name="email"
          id="email"
          placeholder="Your email&hellip;"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <label htmlFor="message" className="screen-reader-text">
          Message
        </label>
        <textarea
          name="message"
          id="message"
          cols="30"
          rows="10"
          placeholder="Your message&hellip;"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
        ></textarea>
        <button type="submit" className="button-filled button-color">
          Send message
        </button>
      </form>
    </div>
  );
}
