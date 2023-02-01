import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import GmailImg from "../assets/GmailIcon.png";
import Alert from "react-bootstrap/Alert";

function ReservePage() {
  const [show, setShow] = useState(false);

  const [email, setEmail] = useState("");

  // console.log(email);

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

    const data = await res.json();
    console.log(data);

    if (data.status === 401 || !data) {
      console.log("error");
    } else {
      setShow(true);
      setEmail("");
      console.log("Email sent");
    }
  };
  return (
    <section className="title">
      {show ? (
        <Alert variant="primary" onClose={() => setShow(false)} dismissible>
          Your Email Succesfully Send
        </Alert>
      ) : (
        ""
      )}
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
