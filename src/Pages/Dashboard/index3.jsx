import React from 'react';
import { Container, Row, Col, Card, Table, Badge } from 'react-bootstrap';

const DashboardPage = () => {
  const users = [
    { id: 1, name: 'Hardik Sorathiya', email: 'hardik@example.com', role: 'Admin' },
    { id: 2, name: 'John Doe', email: 'john@example.com', role: 'Manager' },
    { id: 3, name: 'Jane Smith', email: 'jane@example.com', role: 'User' },
  ];

  return (
    <Container fluid className="px-3">
      {/* Dashboard Header */}
      <Row className="mb-4">
        <Col className="d-flex justify-content-between align-items-center">
          <h2 className="fw-bold mb-0">Dashboard 3</h2>
          {/* <span className="text-muted">Welcome, Hardik 👋</span> */}
        </Col>
      </Row>

      {/* User Table Card */}
      <Row>
        <Col>
          <Card className="shadow-sm border-0">
            <Card.Header className="bg-primary text-white">
              <h5 className="mb-0">User List</h5>
            </Card.Header>
            <Card.Body className="p-0">
              <div className="table-responsive">
                <Table hover striped className="mb-0">
                  <thead className="table-light">
                    <tr>
                      <th>#ID</th>
                      <th>Name</th>
                      <th>Email</th>
                      <th>Role</th>
                    </tr>
                  </thead>
                  <tbody>
                    {users.map((user) => (
                      <tr key={user.id}>
                        <td>{user.id}</td>
                        <td>{user.name}</td>
                        <td>{user.email}</td>
                        <td>
                          <Badge bg={
                            user.role === 'Admin' ? 'success' :
                            user.role === 'Manager' ? 'warning' :
                            'secondary'
                          }>
                            {user.role}
                          </Badge>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </Table>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default DashboardPage;
