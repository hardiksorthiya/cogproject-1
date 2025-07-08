// src/components/Filter.jsx
import React from 'react';
import { Offcanvas, Form } from 'react-bootstrap';

const Filter = ({ show, handleClose }) => {
  return (
    <Offcanvas show={show} onHide={handleClose} placement="end">
      <Offcanvas.Header closeButton>
        <Offcanvas.Title>Filter Options</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
        {/* Transcript Filter */}
        <Form.Group className="mb-3">
          <Form.Label>Transcript</Form.Label>
          <Form.Control type="text" placeholder="Enter transcript" />
        </Form.Group>

        {/* Witness Filter */}
        <Form.Group className="mb-3">
          <Form.Label>Witness</Form.Label>
          <Form.Control type="text" placeholder="Enter witness name" />
        </Form.Group>

        {/* Witness Alignment */}
        <Form.Group className="mb-3">
          <Form.Label>Witness Alignment</Form.Label>
          <Form.Check type="checkbox" label="Left" />
          <Form.Check type="checkbox" label="Center" />
          <Form.Check type="checkbox" label="Right" />
        </Form.Group>

        {/* Witness Type */}
        <Form.Group className="mb-3">
          <Form.Label>Witness Type</Form.Label>
          <Form.Check type="checkbox" label="Eyewitness" />
          <Form.Check type="checkbox" label="Expert" />
          <Form.Check type="checkbox" label="Anonymous" />
        </Form.Group>

        {/* 3 Search Bars */}
        <Form.Group className="mb-3">
          <Form.Label>Search A</Form.Label>
          <Form.Control type="text" placeholder="Search A" />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Search B</Form.Label>
          <Form.Control type="text" placeholder="Search B" />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Search C</Form.Label>
          <Form.Control type="text" placeholder="Search C" />
        </Form.Group>

        {/* Testimony Count Box */}
        <div className="p-3 bg-light rounded text-center border">
          <h6 className="mb-1">Testimony Count</h6>
          <h3 className="text-primary mb-0">37</h3>
        </div>
      </Offcanvas.Body>
    </Offcanvas>
  );
};

export default Filter;
