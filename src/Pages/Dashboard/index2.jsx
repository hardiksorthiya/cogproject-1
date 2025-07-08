import React, { useState } from 'react';
import {
  Container,
  Row,
  Col,
  Card,
  Form,
  Table,
  Badge,
  InputGroup,
  Button,
} from 'react-bootstrap';

const DashboardPage = () => {
  const allUsers = [
    { id: 1, name: 'Jane Cooper', email: 'jane.cooper@example.com', title: 'Regional Paradigm Technician', status: 'ACTIVE', age: 27, role: 'Admin', avatar: 'https://i.pravatar.cc/150?img=1' },
    { id: 2, name: 'Cody Fisher', email: 'cody.fisher@example.com', title: 'Product Directives Officer', status: 'INACTIVE', age: 43, role: 'Owner', avatar: 'https://i.pravatar.cc/150?img=2' },
    { id: 3, name: 'Esther Howard', email: 'esther.howard@example.com', title: 'Forward Response Developer', status: 'ACTIVE', age: 32, role: 'Member', avatar: 'https://i.pravatar.cc/150?img=3' },
    { id: 4, name: 'Jenny Wilson', email: 'jenny.wilson@example.com', title: 'Central Security Manager', status: 'OFFLINE', age: 29, role: 'Member', avatar: 'https://i.pravatar.cc/150?img=4' },
    { id: 5, name: 'Kristin Watson', email: 'kristin.watson@example.com', title: 'Lean Implementation Liaison', status: 'INACTIVE', age: 36, role: 'Admin', avatar: 'https://i.pravatar.cc/150?img=5' },
  ];

  const [search, setSearch] = useState('');
  const [role, setRole] = useState('All');
  const [currentPage, setCurrentPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  const filteredUsers = allUsers.filter(user =>
    (role === 'All' || user.role === role) &&
    (user.name.toLowerCase().includes(search.toLowerCase()) ||
     user.email.toLowerCase().includes(search.toLowerCase()))
  );

  const paginatedUsers = filteredUsers.slice(
    (currentPage - 1) * rowsPerPage,
    currentPage * rowsPerPage
  );

  const totalPages = Math.ceil(filteredUsers.length / rowsPerPage);

  const getStatusVariant = (status) => {
    switch (status) {
      case 'ACTIVE': return 'success';
      case 'INACTIVE': return 'warning';
      case 'OFFLINE': return 'danger';
      default: return 'secondary';
    }
  };

  return (
    <Container fluid className="py-4 px-3">
      <Card className="p-4 show-page-sorath">

        <h2 className="mb-4">Table</h2>

        <Row className="mb-3">
          <Col md={6} className='d-flex align-items-center'>
            <InputGroup>
              <Form.Control
                type="text"
                placeholder={`Search: ${filteredUsers.length} records...`}
                value={search}
                onChange={(e) => {
                  setSearch(e.target.value);
                  setCurrentPage(1);
                }}
                className='show-page-sorath'
              />
            </InputGroup>
          </Col>
          <Col md={3}>
            <Form.Select
              value={role}
              onChange={(e) => {
                setRole(e.target.value);
                setCurrentPage(1);
              }}
              className='show-page-sorath'
            >
              <option value="All">All Roles</option>
              <option value="Admin">Admin</option>
              <option value="Member">Member</option>
              <option value="Owner">Owner</option>
            </Form.Select>
          </Col>
        </Row>

        <Table className="custom-table align-middle" responsive>
          <thead>
            <tr>
              <th>NAME</th>
              <th>TITLE</th>
              <th>STATUS</th>
              <th>AGE</th>
              <th>ROLE</th>
            </tr>
          </thead>
          <tbody>
            {paginatedUsers.map(user => (
              <tr key={user.id}>
                <td>
                  <div className="d-flex align-items-center gap-2">
                    <img
                      src={user.avatar}
                      alt={user.name}
                      className="rounded-circle"
                      width="40"
                      height="40"
                    />
                    <div>
                      <strong>{user.name}</strong><br />
                      <small className="text-muted">{user.email}</small>
                    </div>
                  </div>
                </td>
                <td>{user.title}</td>
                <td>
                  <Badge bg={getStatusVariant(user.status)}>{user.status}</Badge>
                </td>
                <td>{user.age}</td>
                <td>{user.role}</td>
              </tr>
            ))}
          </tbody>
        </Table>

        <Row className="align-items-center mt-3">
          <Col>
            <Form.Select
              value={rowsPerPage}
              onChange={(e) => {
                setRowsPerPage(Number(e.target.value));
                setCurrentPage(1);
              }}
              style={{ width: '100px' }}
              size="sm"
              className='show-page-sorath'
            >
              {[5, 10, 15, 20].map(num => (
                <option key={num} value={num}>Show {num}</option>
              ))}
            </Form.Select>
          </Col>
          <Col className="text-end">
            <div className="d-flex justify-content-end align-items-center gap-3">
  <Button
    variant="outline-secondary"
    size="sm"
    disabled={currentPage === 1}
    onClick={() => setCurrentPage((p) => p - 1)}
  >
    Prev
  </Button>
  <span className="fw-semibold">{currentPage}</span>
  <Button
    variant="outline-secondary"
    size="sm"
    disabled={currentPage === totalPages}
    onClick={() => setCurrentPage((p) => p + 1)}
  >
    Next
  </Button>
</div>
          </Col>
        </Row>
      </Card>
    </Container>
  );
};

export default DashboardPage;
