import React, { useState } from 'react';
import {
  Container,
  Row,
  Col,
  Table,
  Form,
  Button,
  InputGroup,
  Dropdown,
  DropdownButton,
  Pagination,
} from 'react-bootstrap';
import { BsDownload } from 'react-icons/bs';

const sampleData = Array.from({ length: 50 }, (_, i) => ({
  lot: '1212222',
  report: `4564${i}`,
  issuedTo: 'Ecopure Specialities Ltd.',
  lab: i % 2 === 0 ? 'Assurance' : 'Neutron',
  issueDate: '07-08-2024',
  uploadDate: '09-08-2024',
  uploadedBy: 'Rahul Sharma',
  source: i % 2 === 0 ? 'TRF' : 'Certification',
}));

const columnList = [
  { key: 'lot', label: 'Lot No.' },
  { key: 'report', label: 'Report No.' },
  { key: 'issuedTo', label: 'Issued To' },
  { key: 'lab', label: 'Lab Name' },
  { key: 'issueDate', label: 'Report Issue Date' },
  { key: 'uploadDate', label: 'Uploaded Date' },
  { key: 'uploadedBy', label: 'Uploaded By' },
  { key: 'source', label: 'Source' },
];

const ReportsTable = () => {
  const [visibleCols, setVisibleCols] = useState(() =>
    Object.fromEntries(columnList.map(col => [col.key, true]))
  );
  const [itemsPerPage, setItemsPerPage] = useState(5);
  const [search, setSearch] = useState('');
  const [currentPage, setCurrentPage] = useState(1);

  const filteredData = sampleData.filter(item =>
    Object.values(item).some(val =>
      String(val).toLowerCase().includes(search.toLowerCase())
    )
  );

  const totalPages = Math.ceil(filteredData.length / itemsPerPage);
  const paginatedData = filteredData.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const toggleColumn = (key) => {
    setVisibleCols(prev => ({ ...prev, [key]: !prev[key] }));
  };

  const handlePageSizeChange = (e) => {
    setItemsPerPage(parseInt(e.target.value));
    setCurrentPage(1);
  };

  return (
    <Container fluid className="p-4">
      <h5 className="mb-3 fw-semibold">All Reports</h5>

      <Row className="mb-3 align-items-center">
        <Col md={4}>
          <InputGroup>
            <Form.Control
              type="text"
              placeholder="Search..."
              value={search}
              onChange={(e) => {
                setSearch(e.target.value);
                setCurrentPage(1);
              }}
            />
          </InputGroup>
        </Col>
        <Col md={8} className="text-end">
          <DropdownButton title="Columns" variant="outline-secondary">
            {columnList.map(col => (
              <Form.Check
                type="checkbox"
                key={col.key}
                className="px-3"
                label={col.label}
                checked={visibleCols[col.key]}
                onChange={() => toggleColumn(col.key)}
              />
            ))}
          </DropdownButton>
        </Col>
        
        {/* <Col className="text-end">
          <small className="text-muted">
            Showing {paginatedData.length} of {filteredData.length} results
          </small>
        </Col> */}
      </Row>

      <div className="table-responsive">
        <Table bordered hover size="sm">
          <thead className="table-light">
            <tr>
              <th>S. No.</th>
              {columnList.map(col => visibleCols[col.key] && <th key={col.key}>{col.label}</th>)}
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {paginatedData.length > 0 ? (
              paginatedData.map((item, index) => (
                <tr key={index}>
                  <td>{(currentPage - 1) * itemsPerPage + index + 1}</td>
                  {columnList.map(col =>
                    visibleCols[col.key] ? (
                      <td key={col.key}>{item[col.key]}</td>
                    ) : null
                  )}
                  <td>
                    <Button variant="link" size="sm">
                      <BsDownload />
                    </Button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={columnList.length + 2} className="text-center text-muted">
                  No matching results found.
                </td>
              </tr>
            )}
          </tbody>
        </Table>
      </div>

      <div className="d-flex justify-content-between align-items-center">
        <span>
          <Col md="auto">
          <Form.Select size="sm" value={itemsPerPage} onChange={handlePageSizeChange}>
            {[5, 10, 15, 20].map(num => (
              <option key={num} value={num}>
                {num} per page
              </option>
            ))}
          </Form.Select>
        </Col>
        </span>
        <Pagination className="mb-0">
          <Pagination.Prev
            disabled={currentPage === 1}
            onClick={() => setCurrentPage(p => p - 1)}
          />
          <Pagination.Item active>{currentPage}</Pagination.Item>
          <Pagination.Next
            disabled={currentPage === totalPages}
            onClick={() => setCurrentPage(p => p + 1)}
          />
        </Pagination>
      </div>
    </Container>
  );
};

export default ReportsTable;
