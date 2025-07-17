import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";

const stats = [
  {
    title: "Total Sales",
    value: "$1k",
    change: "+8% from yesterday",
    bg: "bg-light-danger",
    color: "text-danger",
  },
  {
    title: "Total Order",
    value: "300",
    change: "+5% from yesterday",
    bg: "bg-light-warning",
    color: "text-warning",
  },
  {
    title: "Product Sold",
    value: "5",
    change: "+1.2% from yesterday",
    bg: "bg-light-success",
    color: "text-success",
  },
  {
    title: "New Customers",
    value: "8",
    change: "0.5% from yesterday",
    bg: "bg-light-purple",
    color: "text-primary",
  },
];

const Dashboard = () => {
  return (
    <Container fluid className="sorath-dashboard">
      <Row>
        <Col md={8}>
        <Card className="p-4 shadow-sm border-0">
          <div className="d-flex justify-content-between align-items-center mb-4">
            <div>
              <h5 className="mb-0 title-section">Today's Sales</h5>
              <small className="text-muted">Sales Summary</small>
            </div>
            <Button variant="outline-secondary" size="sm">
              Export
            </Button>
          </div>

          <Row>
            {stats.map((stat, idx) => (
              <Col key={idx} md={6} lg={3} className="mb-3">
                <Card
                  className={`text-center border-0 ${stat.bg} rounded-4 p-3`}
                >
                  <div className={`mb-2 ${stat.color}`}>{stat.icon}</div>
                  <h5 className="fw-bold mb-1">{stat.value}</h5>
                  <p className="mb-1">{stat.title}</p>
                  <small className={stat.color}>{stat.change}</small>
                </Card>
              </Col>
            ))}
          </Row>
        </Card></Col>
        
      </Row>
    </Container>
  );
};

export default Dashboard;
