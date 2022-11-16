import React from "react";
// import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
// import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Logo from "../../../assets/logos/banner-logo.png";
import "./ManuItem.scss";
// import { IoMdCall } from 'react-icons/io';
// import { BiSearch } from 'react-icons/bi';
import { BsChevronDown } from "react-icons/bs";
import { Link } from "react-router-dom";

const ManuItem = () => {
  return (
    <>
      <header>
        <Navbar bg="light" expand="md" className="p-0">
          <Container fluid>
            <Navbar.Brand href="#" className="ms-2 pt-0 logo">
              <Link to="/">
                <img src={Logo} alt="" style={{ width: "150px" }} className="pt-3 pb-3"/>
              </Link>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
              <Nav className="ms-auto my-2 my-lg-0 text-uppercase text-dark font-calibri">
                <NavDropdown
                  className="p-0"
                  title={
                    <span className="left-line pe-3 manu-item">
                      About Us
                      <BsChevronDown className="ps-1" />
                    </span>
                  }
                  id="navbarScrollingDropdown"
                >
                  <NavDropdown.Item href="#" className="text-capitalize">
                    Factory
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#" className="text-capitalize">
                    Quality Certification
                  </NavDropdown.Item>
                  {/* <NavDropdown.Divider /> */}
                  <NavDropdown.Item href="#" className="text-capitalize">
                    Food Safety Policy
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#" className="text-capitalize">
                    Milestone
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#" className="text-capitalize">
                    Message from management
                  </NavDropdown.Item>
                </NavDropdown>

                <Nav.Link href="#" id="2" className="manu-item product">
                  <span className="left-line pe-3"><Link to="product">our products</Link></span>
                </Nav.Link>
                <Nav.Link href="#" id="3" className="manu-item">
                  <span className="left-line pe-3">global presence</span>
                </Nav.Link>
                <Nav.Link href="#" id="4" className="manu-item">
                  <span className="left-line pe-3"> board of directors</span>
                </Nav.Link>
                <Nav.Link href="#" id="5" className="manu-item">
                  career
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </header>
    </>
  );
};

export default ManuItem;
