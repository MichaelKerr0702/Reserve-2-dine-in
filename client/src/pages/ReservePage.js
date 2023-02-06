import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import GmailImg from "../assets/GmailIcon.png";
import Alert from "react-bootstrap/Alert";
import {
  faCalendarDays,
  faClock,
  faPerson,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { DateRange } from "react-date-range";
// import "react-date-range/dist/styles.css"; // main style file
// import "react-date-range/dist/theme/default.css"; // theme css file

import { format } from "date-fns";
import TimePicker from "react-time-picker";
import Calendar from "moedim";

// const Header = () => {
//   return (
//     <div className="header">
//       <div className="headerList">
//         <div className="headerListItem"></div>
//       </div>
//     </div>
//   );
// };

function ReservePage() {
  const [value, setValue] = useState(new Date());

  const [value1, onChange] = useState("10:00");
  // const [openDate, setOpenDate] = useState(false);
  const [openOptions, setOpenOptions] = useState(false);
  const [options, setOptions] = useState({
    adult: 1,
    children: 0,
  });

  const handleOption = (name, operation) => {
    setOptions((prev) => {
      return {
        ...prev,
        [name]: operation === "i" ? options[name] + 1 : options[name] - 1,
      };
    });
  };

  // const [date, setDate] = useState([
  //   {
  //     startDate: new Date(),
  //     endDate: null,
  //     key: "selection",
  //   },
  // ]);

  const [show, setShow] = useState(false);

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [contact, setContact] = useState("");
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
        firstName,
        lastName,
        contact,
        value,

        // date,
        time: value,
        options,
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
        {/* <div className="d-flex justify-content-center">
          <h2>You can send us email for further questions</h2>
          <img src={GmailImg} alt="gmail img" style={{ width: "50px" }} />
        </div> */}
        <div className="header">
          <div className="headerContainer">
            <div className="headerList">
              <Row className="mt-3">
                <Col xl={6} xs={12} md={6}>
                  <div className="headerListItem active">
                    <Calendar value={value} onChange={(d) => setValue(d)} />
                    <FontAwesomeIcon
                      icon={faCalendarDays}
                      className="headerIcon"
                    />
                    {/* <span
                      onClick={() => setOpenDate(!openDate)}
                      className="headerSearchText"
                    >{`${format(date[0].startDate, "MM/dd/yyyy")}`}</span> */}
                  </div>
                </Col>

                <Col xl={6} xs={12} md={6}>
                  <div className="headerListItem mt-3">
                    <span className="headerSearchText">Time</span>
                    <TimePicker onChange={onChange} value={value1} />
                  </div>
                </Col>

                <Col xl={6} xs={12} md={6}>
                  <div className="headerListItem mt-3">
                    <FontAwesomeIcon icon={faPerson} className="headerIcon" />
                    <span
                      onClick={() => setOpenOptions(!openOptions)}
                      className="headerSearchText"
                    >{`${options.adult} adult · ${options.children} children`}</span>
                    {openOptions && (
                      <div className="options">
                        <div className="optionItem">
                          <span className="optionText">Adult</span>
                          <div className="optionCounter">
                            <button
                              disabled={options.adult <= 1}
                              className="optionCounterButton"
                              onClick={() => handleOption("adult", "d")}
                            >
                              -
                            </button>
                            <span className="optionCounterNumber">
                              {options.adult}
                            </span>
                            <button
                              className="optionCounterButton"
                              onClick={() => handleOption("adult", "i")}
                            >
                              +
                            </button>
                          </div>
                        </div>
                        <div className="optionItem">
                          <span className="optionText">Children</span>
                          <div className="optionCounter">
                            <button
                              disabled={options.children <= 1}
                              className="optionCounterButton"
                              onClick={() => handleOption("children", "d")}
                            >
                              -
                            </button>
                            <span className="optionCounterNumber">
                              {options.children}
                            </span>
                            <button
                              className="optionCounterButton"
                              onClick={() => handleOption("children", "i")}
                            >
                              +
                            </button>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </Col>
              </Row>
            </div>
          </div>
          <div className="d-flex justify-content-center">
            <Form className="mt-2 col-lg-6">
              <Form.Group className="mb-1" controlId="formFirstName">
                <Form.Label>First Name</Form.Label>
                <Form.Control
                  is
                  required
                  type="First name"
                  name="First name"
                  value={firstName}
                  placeholder="Enter First Name"
                  onChange={(e) => setFirstName(e.target.value)}
                />
              </Form.Group>
              <Form.Group className="mb-2" controlId="formLastName">
                <Form.Label>Last Name</Form.Label>
                <Form.Control
                  type="Last name"
                  name="Last name"
                  placeholder="Enter Last Name"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formFirstName">
                <Form.Label>Contact Info</Form.Label>
                <Form.Control
                  type="First Contact"
                  name="First Contact"
                  placeholder="Enter Contact Info"
                  value={contact}
                  onChange={(e) => setContact(e.target.value)}
                />
              </Form.Group>
              <Form.Group className="mb-4" controlId="formBasicEmail">
                <Form.Label>Enter your Email</Form.Label>
                <Form.Control
                  type="email"
                  name="email"
                  placeholder="Enter email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </Form.Group>
              <Button
                variant="primary"
                type="button"
                onClick={(e) => sendEmail(e)}
              >
                Send
              </Button>
            </Form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ReservePage;
