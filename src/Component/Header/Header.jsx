import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Navbar, Nav, Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Header.css";

const Header = () => {
  const menuItems = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: "Industries", path: "/industries" },
    { name: "Our Clients", path: "/our-client" },
    { name: "About Us", path: "/about-us" },
    { name: "Contact Us", path: "/contact" },
  ];

  const navigate = useNavigate();
  const location = useLocation();
  const [activeItem, setActiveItem] = useState("");
  const [expanded, setExpanded] = useState(false);

  useEffect(() => {
    const currentPath = location.pathname;
    if (currentPath.startsWith("/services")) {
      setActiveItem("Services");
    } else if (currentPath.startsWith("/blog")) {
      setActiveItem("Blog");
    } else {
      const active = menuItems.find((item) => item.path === currentPath);
      setActiveItem(active ? active.name : "");
    }
  }, [location.pathname]);

  const handleMenuClick = (item) => {
    setActiveItem(item.name);
    navigate(item.path);
    setExpanded(false); // Close menu on mobile after click
  };

  return (
    <div className="header">
      <Navbar expand="lg" expanded={expanded} onToggle={setExpanded}>
        <Container fluid className="nav-container">
          <Navbar.Brand href="/">
            <img className="header-logo" src="/broadium.webp" alt="broadium.us" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbar-nav" />
          <Navbar.Collapse id="navbar-nav">
            <Nav className="ms-auto d-flex gap-2 align-items-center justify-content-center">
              {menuItems.map((item) => (
                <p
                  key={item.name}
                  className={`menu-item ${
                    activeItem === item.name ? "active" : ""
                  }`}
                  onClick={() => handleMenuClick(item)}
                >
                  {item.name}
                </p>
              ))}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
