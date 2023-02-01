import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import GmailImg from "../assets/GmailIcon.png";

function ReservePage() {
  const [email, setEmail] = useState("");

  const sendEmail = async (e) => {
    e.preventDefault();

    const res = await fetch("/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
      }),
    });
    console.log(res);
    const data = res.json();
    return data;
  };
  return (
    <section className="title">
      <div className="container mt-2">
        <div className="d-flex justify-content-center">
          <h2>You can send us email for further questions</h2>
          <img src={GmailImg} alt="gmail img" style={{ width: "50px" }} />
        </div>
        <div className="d-flex justify-content-center">
          <Form className="mt-2 col-lg-6">
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Enter your Email</Form.Label>
              <Form.Control
                type="email"
                name="email"
                placeholder="Enter email"
                onChange={(e) => setEmail(e.target.value)}
              />
            </Form.Group>
            <Button variant="primary" type="submit" onClick={sendEmail}>
              Send
            </Button>
          </Form>
        </div>
      </div>
    </section>
  );
}

export default ReservePage;
