import React, { useState, useRef, useEffect } from "react";
import { Offcanvas, Form, Dropdown, Button } from "react-bootstrap";
import { Sliders } from "react-bootstrap-icons";

const Filter = ({ show, handleClose }) => {
  const transcriptOptions = [
    "Transcript A",
    "Transcript B",
    "Transcript C",
    "Transcript D",
    "Transcript E",
    "Transcript F",
    "Transcript G",
  ];

  const [selectedTranscripts, setSelectedTranscripts] = useState([]);
  const [isOpen, setIsOpen] = useState(true);
  const [contentHeight, setContentHeight] = useState(0);
  const contentRef = useRef(null);

  const isAllSelected = selectedTranscripts.length === transcriptOptions.length;

  const handleSelectAll = () => {
    setSelectedTranscripts(
      isAllSelected ? [] : [...transcriptOptions]
    );
  };

  const handleRowClick = (option) => {
    setSelectedTranscripts((prev) =>
      prev.includes(option)
        ? prev.filter((item) => item !== option)
        : [...prev, option]
    );
  };

  useEffect(() => {
    if (contentRef.current) {
      setContentHeight(contentRef.current.scrollHeight);
    }
  }, [isOpen, selectedTranscripts]);

  // Witness
  const witnessOptions = [
    "Witness X",
    "Witness Y",
    "Witness Z",
    "Witness Alpha",
    "Witness Beta",
  ];
  const [selectedWitnesses, setSelectedWitnesses] = useState([]);
  const handleWitnessCheck = (option) => {
    setSelectedWitnesses((prev) =>
      prev.includes(option)
        ? prev.filter((item) => item !== option)
        : [...prev, option]
    );
  };
  // Witness Alignment
  const [selectedAlignments, setSelectedAlignments] = useState([]);
  const handleAlignmentChange = (alignment) => {
    setSelectedAlignments((prevSelected) =>
      prevSelected.includes(alignment)
        ? prevSelected.filter((item) => item !== alignment)
        : [...prevSelected, alignment]
    );
  };

  // Witness Type
  const [selectedWitnessTypes, setSelectedWitnessTypes] = useState([]);
  const handleWitnessTypeChange = (type) => {
    setSelectedWitnessTypes((prevSelected) =>
      prevSelected.includes(type)
        ? prevSelected.filter((item) => item !== type)
        : [...prevSelected, type]
    );
  };

  return (
    <Offcanvas show={show} onHide={handleClose} placement="end">
      <Offcanvas.Header closeButton className="border-bottom">
        <Offcanvas.Title className="fw-semibold">
          <Sliders className="me-2" /> Filter Options
        </Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body className="bg-light">
        <div className="bg-white p-3 rounded-3 shadow-sm">
          {/* Transcript Filter with tablkel */}
          <Form.Group className="mb-3">
      <Form.Label className="fw-semibold">Transcript</Form.Label>

      {/* Header Toggle */}
      <div
        onClick={() => setIsOpen(!isOpen)}
        className="w-100 border rounded-2 p-2 d-flex justify-content-between align-items-center sorath-table-header-filter"
        style={{ cursor: "pointer" }}
      >
        <div className="d-flex flex-wrap gap-2">
          {selectedTranscripts.length > 0 ? (
            selectedTranscripts.map((item, idx) => (
              <span key={idx} className="badge bg-primary rounded px-3 py-1">
                {item}
              </span>
            ))
          ) : (
            <span className="text-white">Select transcript(s)</span>
          )}
        </div>
        <span className="ms-auto">
          {isOpen ? (
            <i className="bi bi-chevron-up"></i>
          ) : (
            <i className="bi bi-chevron-down"></i>
          )}
        </span>
      </div>

      {/* Expandable Section */}
      <div
        className="overflow-hidden transition-height"
        style={{
          height: isOpen ? contentHeight : 0,
          transition: "height 0.4s ease",
        }}
      >
        <div ref={contentRef} className="sorath-table-filter-box">
          {/* Transcript Table */}
          <div
            className="sorath-table-boday-filter"
            style={{ maxHeight: "180px", overflowY: "auto" }}
          >
            <table className="table table-sm table-hover mb-0">
              <thead>
                <tr>
                  <th style={{ width: "40px" }} className="bg-transparent">
                    <Form.Check
                      type="checkbox"
                      checked={isAllSelected}
                      onChange={handleSelectAll}
                      className="m-0 square-checkbox"
                    />
                  </th>
                  <th className="bg-transparent">Transcript Name</th>
                </tr>
              </thead>
              <tbody>
                {transcriptOptions.map((option, idx) => (
                  <tr
                    key={idx}
                    onClick={() => handleRowClick(option)}
                    style={{
                      backgroundColor: selectedTranscripts.includes(option)
                        ? "#e7f1ff"
                        : "transparent",
                      cursor: "pointer",
                    }}
                  >
                    <td>
                      <Form.Check
                        type="checkbox"
                        checked={selectedTranscripts.includes(option)}
                        onChange={() => handleRowClick(option)}
                        className="m-0 square-checkbox"
                        onClick={(e) => e.stopPropagation()}
                      />
                    </td>
                    <td>{option}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </Form.Group>

          {/* Witness Filter */}
          <Form.Group className="mb-4">
            <Form.Label className="fw-semibold">Witness</Form.Label>
            <Dropdown className="w-100 colum-3-sorath">
              <Dropdown.Toggle
                variant="light"
                className="w-100 text-start border rounded-2 filter-drp-sorath"
              >
                {selectedWitnesses.length > 0 ? (
                  <div className="d-flex flex-wrap gap-1">
                    {selectedWitnesses.map((item, idx) => (
                      <span key={idx} className="badge bg-success">
                        {item}
                      </span>
                    ))}
                  </div>
                ) : (
                  "Select witness(es)"
                )}
              </Dropdown.Toggle>

              <Dropdown.Menu
                className="w-100 border rounded-2 shadow"
                style={{ maxHeight: "200px", overflowY: "auto" }}
              >
                {witnessOptions.map((option, idx) => (
                  <Form.Check
                    key={idx}
                    type="checkbox"
                    label={option}
                    className="px-3 py-1"
                    checked={selectedWitnesses.includes(option)}
                    onChange={() => handleWitnessCheck(option)}
                  />
                ))}
              </Dropdown.Menu>
            </Dropdown>
          </Form.Group>

          {/* Witness Alignment */}
          <Form.Group className="mb-4">
            <Form.Label className="fw-semibold">Witness Alignment</Form.Label>
            <div className="d-flex flex-wrap gap-3 ps-1">
              {["Left", "Center", "Right"].map((alignment) => (
                <Form.Check
                  key={alignment}
                  type="checkbox"
                  label={alignment}
                  value={alignment}
                  checked={selectedAlignments.includes(alignment)}
                  onChange={() => handleAlignmentChange(alignment)}
                />
              ))}
            </div>
          </Form.Group>

          {/* Witness Type */}
          <Form.Group className="mb-4">
            <Form.Label className="fw-semibold">Witness Type</Form.Label>
            <div className="d-flex flex-wrap gap-3 ps-1">
              {["Eyewitness", "Expert", "Anonymous"].map((type) => (
                <Form.Check
                  key={type}
                  type="checkbox"
                  label={type}
                  value={type}
                  checked={selectedWitnessTypes.includes(type)}
                  onChange={() => handleWitnessTypeChange(type)}
                />
              ))}
            </div>
          </Form.Group>

          {/* Testimony Count Box */}
          <div className="bg-primary text-white text-center py-3 px-2 rounded-3">
            <h6 className="mb-1">Testimony Count</h6>
            <h2 className="fw-bold mb-0">37</h2>
          </div>

          {/* Apply & Reset */}
          <div className="d-flex justify-content-between mt-4">
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={() => alert("Apply clicked")}>
              Apply Filters
            </Button>
          </div>
        </div>
      </Offcanvas.Body>
    </Offcanvas>
  );
}

export default Filter;
