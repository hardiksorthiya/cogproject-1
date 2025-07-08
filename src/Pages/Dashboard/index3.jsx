import React, { useState } from 'react';
import {
  Container,
  Table,
  Form,
  Button,
  Row,
  Col,
  Card,
  Dropdown,
  DropdownButton,
  Badge,
  Image
} from 'react-bootstrap';

const EnhancedTable = () => {
  const allData = [
    {
      name: 'Ralph Edwards',
      phone: '(405) 555-0128',
      status: 'Open',
      rate: 78.0,
      balance: -105.55,
      deposit: 293.01,
      image: 'https://randomuser.me/api/portraits/men/1.jpg',
    },
    {
      name: 'Floyd Miles',
      phone: '(480) 555-0103',
      status: 'Paid',
      rate: 40.0,
      balance: 275.43,
      deposit: 710.68,
      image: 'https://randomuser.me/api/portraits/men/2.jpg',
    },
    {
      name: 'Darlene Robertson',
      phone: '(808) 555-0111',
      status: 'Open',
      rate: 77.0,
      balance: -778.35,
      deposit: 169.43,
      image: 'https://randomuser.me/api/portraits/women/3.jpg',
    },
    {
      name: 'Albert Flores',
      phone: '(316) 555-0116',
      status: 'Inactive',
      rate: 85.0,
      balance: 928.41,
      deposit: 779.58,
      image: 'https://randomuser.me/api/portraits/men/4.jpg',
    },
    {
      name: 'Devon Lane',
      phone: '(217) 555-0113',
      status: 'Paid',
      rate: 56.0,
      balance: 256.35,
      deposit: 896.65,
      image: 'https://randomuser.me/api/portraits/men/5.jpg',
    },
  ];

  const [visibleColumns, setVisibleColumns] = useState({
    name: true,
    status: true,
    rate: true,
    balance: true,
    deposit: true,
    actions: true,
  });

  const [search, setSearch] = useState('');
  const [sortConfig, setSortConfig] = useState({ key: '', direction: '' });
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [currentPage, setCurrentPage] = useState(1);

  const handleSort = (key) => {
    let direction = 'asc';
    if (sortConfig.key === key && sortConfig.direction === 'asc') {
      direction = 'desc';
    }
    setSortConfig({ key, direction });
  };

  const getFilteredSortedData = () => {
    let filtered = allData.filter(item =>
      item.name.toLowerCase().includes(search.toLowerCase()) ||
      item.phone.toLowerCase().includes(search.toLowerCase())
    );

    if (sortConfig.key) {
      filtered = [...filtered].sort((a, b) => {
        const aVal = a[sortConfig.key];
        const bVal = b[sortConfig.key];
        if (typeof aVal === 'number') {
          return sortConfig.direction === 'asc' ? aVal - bVal : bVal - aVal;
        } else {
          return sortConfig.direction === 'asc'
            ? aVal.localeCompare(bVal)
            : bVal.localeCompare(aVal);
        }
      });
    }

    return filtered;
  };

  const toggleColumn = (key) => {
    setVisibleColumns(prev => ({ ...prev, [key]: !prev[key] }));
  };

  const getStatusBadge = (status) => {
    switch (status) {
      case 'Paid': return <Badge bg="success">Paid</Badge>;
      case 'Open': return <Badge bg="primary">Open</Badge>;
      case 'Inactive': return <Badge bg="secondary">Inactive</Badge>;
      default: return <Badge bg="light">{status}</Badge>;
    }
  };

  const filteredData = getFilteredSortedData();
  const totalPages = Math.ceil(filteredData.length / rowsPerPage);
  const paginatedData = filteredData.slice(
    (currentPage - 1) * rowsPerPage,
    currentPage * rowsPerPage
  );

  return (
    <Container fluid className="py-4 px-3">
      <Card className="p-4 show-page-sorath">
      <h2 className="mb-4">Table</h2>
      {/* Top Search & Columns */}
      <Row className="mb-3">
        <Col md={6}>
          <Form.Control
            type="text"
            placeholder="Search customer or phone..."
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
              setCurrentPage(1);
            }}
            className='show-page-sorath'
          />
        </Col>
        <Col md={6} className="d-flex justify-content-end">
          <DropdownButton variant="outline-secondary" title="Columns" size="sm" className='colum-3-sorath' >
            {Object.keys(visibleColumns).map((col) => (
              <Form.Check
                key={col}
                type="checkbox"
                className="px-3 "
                label={col.toUpperCase()}
                checked={visibleColumns[col]}
                onChange={() => toggleColumn(col)}
                
              />
            ))}
          </DropdownButton>
        </Col>
      </Row>

      {/* Table */}
      <Table responsive bordered className="align-middle text-nowrap rounded-3">
        <thead className="table-sorath-three">
          <tr>
            {visibleColumns.name && (
              <th onClick={() => handleSort('name')} style={{ cursor: 'pointer' }}>
                CUSTOMER {sortConfig.key === 'name' && (sortConfig.direction === 'asc' ? '▲' : '▼')}
              </th>
            )}
            {visibleColumns.status && (
              <th onClick={() => handleSort('status')} style={{ cursor: 'pointer' }}>
                STATUS {sortConfig.key === 'status' && (sortConfig.direction === 'asc' ? '▲' : '▼')}
              </th>
            )}
            {visibleColumns.rate && (
              <th onClick={() => handleSort('rate')} style={{ cursor: 'pointer' }}>
                RATE {sortConfig.key === 'rate' && (sortConfig.direction === 'asc' ? '▲' : '▼')}
              </th>
            )}
            {visibleColumns.balance && (
              <th onClick={() => handleSort('balance')} style={{ cursor: 'pointer' }}>
                BALANCE {sortConfig.key === 'balance' && (sortConfig.direction === 'asc' ? '▲' : '▼')}
              </th>
            )}
            {visibleColumns.deposit && (
              <th onClick={() => handleSort('deposit')} style={{ cursor: 'pointer' }}>
                DEPOSIT {sortConfig.key === 'deposit' && (sortConfig.direction === 'asc' ? '▲' : '▼')}
              </th>
            )}
            {visibleColumns.actions && <th>ACTIONS</th>}
          </tr>
        </thead>
        <tbody>
          {paginatedData.map((row, idx) => (
            <tr key={idx}>
              {visibleColumns.name && (
                <td>
                  <div className="d-flex align-items-center gap-2">
                    <Image
                      src={row.image}
                      roundedCircle
                      width={36}
                      height={36}
                      alt={row.name}
                    />
                    <div>
                      <strong>{row.name}</strong><br />
                      <small className="text-muted">{row.phone}</small>
                    </div>
                  </div>
                </td>
              )}
              {visibleColumns.status && <td>{getStatusBadge(row.status)}</td>}
              {visibleColumns.rate && <td>${row.rate.toFixed(2)} USD</td>}
              {visibleColumns.balance && (
                <td style={{ color: row.balance < 0 ? 'red' : 'green' }}>
                  ${row.balance.toFixed(2)} USD
                </td>
              )}
              {visibleColumns.deposit && <td>${row.deposit.toFixed(2)} USD</td>}
              {visibleColumns.actions && (
                <td>
                  <div className="d-flex gap-2">
                    <Button variant="outline-primary" size="sm">View</Button>
                    <Button variant="outline-success" size="sm">Edit</Button>
                    <Button variant="outline-danger" size="sm">Delete</Button>
                  </div>
                </td>
              )}
            </tr>
          ))}
        </tbody>
      </Table>

      {/* Footer Pagination */}
      <Row className="px-1 py-3 align-items-center">
        <Col>
          <span className="text-muted small"  >
            {paginatedData.length > 0
              ? `${(currentPage - 1) * rowsPerPage + 1}–${(currentPage - 1) * rowsPerPage + paginatedData.length}`
              : '0'} of {filteredData.length}
          </span>
        </Col>
        <Col className="text-center" >
         <DropdownButton
  title={`Rows per page: ${rowsPerPage}`}
  variant="outline-secondary"
  className="custom-rows-dropdown" 
  size="sm"
>
  {[5, 10, 15, 20].map(n => (
    <Dropdown.Item
      key={n}
      onClick={() => {
        setRowsPerPage(n);
        setCurrentPage(1);
      }}
      active={n === rowsPerPage}
    >
      {n}
    </Dropdown.Item>
  ))}
</DropdownButton>

        </Col>
        <Col className="text-end">
          <div className="d-inline-flex gap-2">
           <Button
               variant="outline-secondary"
               size="sm"
               disabled={currentPage === 1}
               onClick={() => setCurrentPage((p) => p - 1)}
             >
               Prev
             </Button>
             <span className="fw-semibold d-flex align-center">{currentPage}</span>
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

export default EnhancedTable;
