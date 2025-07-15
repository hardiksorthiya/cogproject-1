import { Container, Row, Col, Form, InputGroup } from "react-bootstrap";
import { GearFill, BellFill, Search } from "react-bootstrap-icons";
const Header = ({ isOpen, toggle }) => {
  const today = new Date().toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });
  return (
    <nav id="header-4-1">
      {/* Left: Toggle Button */}
      {/* <button className="btn toggle-btn" onClick={toggle}>
        <i className={`bi ${isOpen ? 'bi-chevron-left' : 'bi-chevron-right'}`}></i>
      </button> */}

      {/* Right: Notification + Profile */}
      <div className="py-3 px-2">
      <Container fluid>
        <Row className="align-items-center">
          <Col md={4} className="d-flex align-items-center gap-3">
            <img
              src="https://i.pravatar.cc/150?img=3" // Replace with your avatar URL
              alt="User Avatar"
              className="rounded-circle"
              width="40"
              height="40"
            />
            <div>
              <div className="fw-semibold">Hey, Markus</div>
              <div className="text-muted" style={{ fontSize: "0.9rem" }}>
                {today}
              </div>
            </div>
          </Col>

          <Col md={8} className="d-flex justify-content-end align-items-center gap-3">
          <InputGroup className="search-bar">
              <InputGroup.Text>
                <Search />
              </InputGroup.Text>
              <Form.Control placeholder="Start searching here..." />
            </InputGroup>
            <GearFill size={20} className="text-secondary icon-header" />
            <BellFill size={20} className="text-secondary icon-header" />
          </Col>

        
        </Row>
      </Container>
    </div>
    </nav>
  );
};

export default Header;
