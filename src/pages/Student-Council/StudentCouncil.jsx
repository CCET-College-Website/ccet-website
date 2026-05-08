import { useState, useEffect } from "react";

const API_BASE_URL = "https://ccet.ac.in/api/student-council.php";

// Helper function to get full image URL
const getFullImageUrl = (path) => {
  if (!path) return null;
  if (path.startsWith('http')) {
    return path;
  }
  const cleanPath = path.startsWith('/') ? path.substring(1) : path;
  return `https://ccet.ac.in/${cleanPath}`;
};

const getInitials = (name) =>
    name.split(" ").map((n) => n[0]).join("").toUpperCase();

const SectionHeading = ({ children }) => (
    <table width="100%" cellPadding="0" cellSpacing="0" style={{ marginBottom: "12px" }}>
      <tbody>
      <tr>
        <td style={{ background: "#003366", color: "#fff", padding: "8px 15px", fontSize: "16px", fontWeight: "bold", borderLeft: "5px solid #cc9900" }}>
          {children}
        </td>
      </tr>
      </tbody>
    </table>
);

export default function StudentCouncil() {
  const [facultyIncharge, setFacultyIncharge] = useState(null);
  const [councilMembers, setCouncilMembers] = useState([]);
  const [pdfList, setPdfList] = useState([]); // Changed to array
  const [academicYear, setAcademicYear] = useState("");
  const [availableYears, setAvailableYears] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [imgErrors, setImgErrors] = useState({});
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [selectedPdf, setSelectedPdf] = useState(null); // For embedded viewer

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    fetchAvailableYears();
  }, []);

  const fetchAvailableYears = async () => {
    try {
      const response = await fetch(`${API_BASE_URL}?get_years=1`);
      const result = await response.json();

      console.log("Available years:", result);

      if (result.success && result.years && result.years.length > 0) {
        setAvailableYears(result.years);
        const latestYear = result.years[0];
        setAcademicYear(latestYear);
        fetchData(latestYear);
      } else {
        setError("No academic years found");
        setLoading(false);
      }
    } catch (err) {
      console.error("Error fetching years:", err);
      setError("Error connecting to server");
      setLoading(false);
    }
  };

  const fetchData = async (year) => {
    setLoading(true);
    setError(null);

    try {
      const response = await fetch(`${API_BASE_URL}?academic_year=${year}`);
      const result = await response.json();

      console.log("API Response for year", year, ":", result);

      if (result.success) {
        setFacultyIncharge(result.faculty_incharge);
        setCouncilMembers(result.council_members);
        // Handle both old (single PDF) and new (array) formats
        if (result.pdf_list && Array.isArray(result.pdf_list)) {
          setPdfList(result.pdf_list);
        } else if (result.faq_pdf) {
          // Backward compatibility: convert single PDF to array
          setPdfList([result.faq_pdf]);
        } else {
          setPdfList([]);
        }
        // Auto-select first PDF for preview if any
        if (result.pdf_list && result.pdf_list.length > 0) {
          setSelectedPdf(result.pdf_list[0]);
        } else if (result.faq_pdf) {
          setSelectedPdf(result.faq_pdf);
        } else {
          setSelectedPdf(null);
        }
      } else {
        setError(result.error || "Failed to load data");
      }
    } catch (err) {
      setError("Error connecting to server");
      console.error("Fetch error:", err);
    } finally {
      setLoading(false);
    }
  };

  const handleYearChange = (event) => {
    const selectedYear = event.target.value;
    setAcademicYear(selectedYear);
    fetchData(selectedYear);
  };

  const handleImgError = (id) => {
    console.log(`Image failed to load for:`, id);
    setImgErrors((p) => ({ ...p, [id]: true }));
  };

  if (loading && !academicYear) {
    return (
        <div style={{ padding: "50px", textAlign: "center", fontSize: "16px" }}>
          Loading Student Council data...
        </div>
    );
  }

  if (error) {
    return (
        <div style={{ padding: "50px", textAlign: "center", color: "red", fontSize: "16px" }}>
          Error: {error}
        </div>
    );
  }

  return (
      <div style={{
        fontFamily: "Arial, Helvetica, sans-serif",
        fontSize: isMobile ? "14px" : "15px",
        color: "#000",
        padding: isMobile ? "20px 15px" : "40px 30px",
        maxWidth: "1400px",
        margin: "0 auto",
        boxSizing: "border-box"
      }}>
        <style>{`
          @media (max-width: 768px) {
            .faculty-card, .member-card {
              flex-direction: column !important;
              text-align: center !important;
            }
            .member-image, .faculty-image {
              margin: 0 auto !important;
            }
            .info-table {
              width: 100%;
            }
            .info-table td {
              display: block;
              width: 100% !important;
              text-align: left;
              padding: 5px 0 !important;
            }
            .info-table tr {
              display: flex;
              flex-direction: column;
              margin-bottom: 10px;
            }
            .info-table td:first-child {
              font-weight: bold;
              color: #555;
              padding-bottom: 2px !important;
            }
            .roster-table {
              font-size: 11px !important;
            }
            .roster-table th, .roster-table td {
              padding: 6px 4px !important;
            }
            .pdf-list {
              flex-direction: column !important;
            }
          }
          @media (max-width: 480px) {
            .roster-table th, .roster-table td {
              padding: 4px 2px !important;
              font-size: 10px !important;
            }
          }
          @media (min-width: 769px) {
            .info-table td:first-child {
              width: 120px;
              white-space: nowrap;
            }
          }
        `}</style>

        {/* Page Header */}
        <div style={{ textAlign: "center", marginBottom: isMobile ? "15px" : "20px", paddingBottom: isMobile ? "10px" : "15px", borderBottom: "2px solid #cc9900" }}>
          <h1 style={{
            margin: "0 0 8px",
            fontSize: isMobile ? "clamp(24px, 6vw, 32px)" : "clamp(32px, 6vw, 48px)",
            fontWeight: "bold",
            color: "#003366",
            letterSpacing: "0.5px"
          }}>
            Student Council
          </h1>
          <div style={{
            fontSize: isMobile ? "13px" : "15px",
            color: "#555",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: "10px",
            flexWrap: "wrap"
          }}>
            <span>Academic Year:</span>
            <select
                value={academicYear}
                onChange={handleYearChange}
                style={{
                  padding: isMobile ? "4px 8px" : "6px 12px",
                  fontSize: isMobile ? "12px" : "14px",
                  borderRadius: "4px",
                  border: "1px solid #ccc",
                  backgroundColor: "#fff",
                  cursor: "pointer"
                }}
            >
              {availableYears.map((year) => (
                  <option key={year} value={year}>{year}</option>
              ))}
            </select>
          </div>
        </div>

        {/* Introduction Text */}
        <p style={{
          margin: "0 0 20px",
          lineHeight: "1.7",
          textAlign: "justify",
          fontSize: isMobile ? "13px" : "15px",
          color: "#222"
        }}>
          The Student Council of CCET (Degree Wing) is the duly elected representative body of students, constituted as per the guidelines of the institution. The council acts as a link between the student community and the administration, and is responsible for organizing academic, cultural, and welfare activities throughout the academic session.
        </p>

        {/* Faculty Incharge */}
        <SectionHeading>Faculty Incharge</SectionHeading>
        {facultyIncharge ? (
            <div style={{
              border: "1px solid #bbb",
              background: "#f9f9f9",
              marginBottom: "20px",
              overflow: "auto",
              borderRadius: "8px",
              padding: isMobile ? "10px" : "0"
            }}>
              <div className="faculty-card" style={{
                display: "flex",
                flexDirection: isMobile ? "column" : "row",
                flexWrap: "wrap",
                alignItems: "center",
                padding: isMobile ? "15px" : "20px",
                gap: isMobile ? "15px" : "25px",
                textAlign: isMobile ? "center" : "left"
              }}>
                <div className="faculty-image" style={{ flexShrink: 0, textAlign: "center", margin: isMobile ? "0 auto" : "0" }}>
                  {!imgErrors["faculty"] && facultyIncharge.image ? (
                      <img
                          src={getFullImageUrl(facultyIncharge.image)}
                          alt={facultyIncharge.name}
                          onError={() => handleImgError("faculty")}
                          style={{
                            width: isMobile ? 120 : 150,
                            height: isMobile ? 140 : 170,
                            objectFit: "cover",
                            border: "2px solid #999",
                            display: "block",
                            borderRadius: "8px",
                            margin: isMobile ? "0 auto" : "0"
                          }}
                      />
                  ) : (
                      <div style={{
                        width: isMobile ? 120 : 150,
                        height: isMobile ? 140 : 170,
                        background: "#003366",
                        color: "#fff",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontSize: isMobile ? "36px" : "42px",
                        fontWeight: "bold",
                        border: "2px solid #999",
                        borderRadius: "8px",
                        margin: isMobile ? "0 auto" : "0"
                      }}>
                        {getInitials(facultyIncharge.name)}
                      </div>
                  )}
                </div>
                <div style={{ flex: 1, minWidth: isMobile ? "auto" : "250px", width: "100%" }}>
                  <table className="info-table" cellPadding="5" cellSpacing="0" style={{ fontSize: isMobile ? "13px" : "15px", width: "100%" }}>
                    <tbody>
                    <tr>
                      <td style={{ color: "#555", fontWeight: "bold", verticalAlign: "top" }}>Name:</td>
                      <td style={{ wordBreak: "break-word" }}><strong style={{ color: "#003366", fontSize: isMobile ? "15px" : "16px" }}>{facultyIncharge.name}</strong></td>
                    </tr>
                    <tr>
                      <td style={{ color: "#555", fontWeight: "bold", verticalAlign: "top" }}>Designation:</td>
                      <td style={{ wordBreak: "break-word" }}>{facultyIncharge.designation || "—"}</td>
                    </tr>
                    <tr>
                      <td style={{ color: "#555", fontWeight: "bold", verticalAlign: "top" }}>Department:</td>
                      <td style={{ wordBreak: "break-word" }}>{facultyIncharge.department || "—"}</td>
                    </tr>
                    {facultyIncharge.email && (
                        <tr>
                          <td style={{ color: "#555", fontWeight: "bold", verticalAlign: "top" }}>Email:</td>
                          <td style={{ wordBreak: "break-word" }}>
                            <a href={`mailto:${facultyIncharge.email}`} style={{ color: "#003399" }}>{facultyIncharge.email}</a>
                          </td>
                        </tr>
                    )}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
        ) : (
            <div style={{ padding: "30px", textAlign: "center", color: "#666", fontSize: "15px" }}>No faculty incharge data available for {academicYear}</div>
        )}

        <SectionHeading>Council Members — Profiles</SectionHeading>
        {councilMembers.length > 0 ? (
            councilMembers.map((member, idx) => (
                <div
                    key={member.id}
                    style={{
                      marginBottom: "20px",
                      border: "1px solid #bbb",
                      background: idx % 2 === 0 ? "#fff" : "#f0f4fb",
                      borderRadius: "8px",
                      overflow: "hidden"
                    }}
                >
                  <div style={{
                    background: "#dce6f0",
                    padding: isMobile ? "10px 15px" : "12px 20px",
                    fontWeight: "bold",
                    fontSize: isMobile ? "clamp(13px, 3.5vw, 16px)" : "clamp(14px, 3.5vw, 18px)",
                    color: "#003366",
                    borderBottom: "1px solid #bbb",
                    textAlign: "center"
                  }}>
                    {member.position} &nbsp;|&nbsp; {member.name}
                  </div>
                  <div className="member-card" style={{
                    display: "flex",
                    flexDirection: isMobile ? "column" : "row",
                    flexWrap: "wrap",
                    gap: isMobile ? "15px" : "25px",
                    padding: isMobile ? "15px" : "20px",
                    alignItems: "center"
                  }}>
                    <div className="member-image" style={{ flexShrink: 0, textAlign: "center", margin: isMobile ? "0 auto" : "0" }}>
                      {!imgErrors[member.id] && member.image ? (
                          <img
                              src={getFullImageUrl(member.image)}
                              alt={member.name}
                              onError={() => handleImgError(member.id)}
                              style={{
                                width: isMobile ? 100 : 130,
                                height: isMobile ? 120 : 150,
                                objectFit: "cover",
                                border: "2px solid #999",
                                display: "block",
                                borderRadius: "8px",
                                margin: isMobile ? "0 auto" : "0"
                              }}
                          />
                      ) : (
                          <div style={{
                            width: isMobile ? 100 : 130,
                            height: isMobile ? 120 : 150,
                            background: "#1a56a0",
                            color: "#fff",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            fontSize: isMobile ? "32px" : "38px",
                            fontWeight: "bold",
                            border: "2px solid #999",
                            borderRadius: "8px",
                            margin: isMobile ? "0 auto" : "0"
                          }}>
                            {getInitials(member.name)}
                          </div>
                      )}
                    </div>

                    <div style={{ flex: 1, minWidth: isMobile ? "auto" : "280px", width: "100%", overflowX: "auto" }}>
                      <table className="info-table" cellPadding="6" cellSpacing="0" style={{ fontSize: isMobile ? "12px" : "14px", width: "100%", borderCollapse: "collapse" }}>
                        <tbody>
                        <tr>
                          <td style={{ color: "#555", fontWeight: "bold", verticalAlign: "top" }}>Roll No.:</td>
                          <td style={{ wordBreak: "break-word" }}>{member.roll_no || "—"}</td>
                          {!isMobile && (
                              <>
                                <td style={{ color: "#555", fontWeight: "bold", verticalAlign: "top", paddingLeft: "15px" }}>Year / Sem:</td>
                                <td style={{ wordBreak: "break-word" }}>{member.year_semester || "—"}</td>
                              </>
                          )}
                        </tr>
                        {isMobile && (
                            <tr>
                              <td style={{ color: "#555", fontWeight: "bold", verticalAlign: "top" }}>Year / Sem:</td>
                              <td style={{ wordBreak: "break-word" }}>{member.year_semester || "—"}</td>
                            </tr>
                        )}
                        <tr>
                          <td style={{ color: "#555", fontWeight: "bold", verticalAlign: "top" }}>Branch:</td>
                          <td colSpan={isMobile ? 1 : 3} style={{ wordBreak: "break-word" }}>{member.branch || "—"}</td>
                        </tr>
                        <tr>
                          <td style={{ color: "#555", fontWeight: "bold", verticalAlign: "top" }}>Email:</td>
                          <td colSpan={member.mobile_no && !isMobile ? 1 : 2} style={{ wordBreak: "break-word" }}>
                            <a href={`mailto:${member.email}`} style={{ color: "#003399" }}>{member.email}</a>
                          </td>
                          {member.mobile_no && !isMobile && (
                              <>
                                <td style={{ color: "#555", fontWeight: "bold", verticalAlign: "top", paddingLeft: "15px" }}>Mobile:</td>
                                <td style={{ wordBreak: "break-word" }}>
                                  <a href={`tel:${member.mobile_no}`} style={{ color: "#003399" }}>{member.mobile_no}</a>
                                </td>
                              </>
                          )}
                        </tr>
                        {isMobile && member.mobile_no && (
                            <tr>
                              <td style={{ color: "#555", fontWeight: "bold", verticalAlign: "top" }}>Mobile:</td>
                              <td style={{ wordBreak: "break-word" }}>
                                <a href={`tel:${member.mobile_no}`} style={{ color: "#003399" }}>{member.mobile_no}</a>
                              </td>
                            </tr>
                        )}
                        <tr>
                          <td style={{ color: "#555", fontWeight: "bold", verticalAlign: "top" }}>Profile:</td>
                          <td colSpan={3} style={{ color: "#333", lineHeight: "1.6", textAlign: "justify", fontSize: isMobile ? "12px" : "14px" }}>{member.bio || "—"}</td>
                        </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
            ))
        ) : (
            <div style={{ padding: "30px", textAlign: "center", color: "#666", fontSize: "15px" }}>
              No council members data available for {academicYear}
            </div>
        )}

        <SectionHeading>Official Roster — Student Council {academicYear}</SectionHeading>
        {councilMembers.length > 0 ? (
            <div style={{ overflowX: "auto", marginBottom: "20px", border: "1px solid #bbb", borderRadius: "8px" }}>
              <table className="roster-table" cellPadding="0" cellSpacing="0" style={{ borderCollapse: "collapse", fontSize: isMobile ? "12px" : "14px", width: "100%", minWidth: isMobile ? "500px" : "700px" }}>
                <thead>
                <tr style={{ background: "#003366", color: "#fff" }}>
                  {["S.No.", "Position", "Name", "Roll No.", "Branch", "Year / Sem"].map(h => (
                      <th key={h} style={{ padding: isMobile ? "8px 6px" : "12px 15px", border: "1px solid #1a4a80", textAlign: "center", fontWeight: "bold", fontSize: isMobile ? "11px" : "14px" }}>{h}</th>
                  ))}
                </tr>
                </thead>
                <tbody>
                {councilMembers.map((m, i) => (
                    <tr key={m.id} style={{ background: i % 2 === 0 ? "#fff" : "#eef3fb" }}>
                      <td style={{ padding: isMobile ? "6px 4px" : "10px 12px", border: "1px solid #ccc", textAlign: "center" }}>{i + 1}.</td>
                      <td style={{ padding: isMobile ? "6px 4px" : "10px 12px", border: "1px solid #ccc", fontWeight: "bold", color: "#003366", textAlign: "center" }}>{m.position || "—"}</td>
                      <td style={{ padding: isMobile ? "6px 4px" : "10px 12px", border: "1px solid #ccc" }}>{m.name}</td>
                      <td style={{ padding: isMobile ? "6px 4px" : "10px 12px", border: "1px solid #ccc", textAlign: "center" }}>{m.roll_no || "—"}</td>
                      <td style={{ padding: isMobile ? "6px 4px" : "10px 12px", border: "1px solid #ccc" }}>{m.branch || "—"}</td>
                      <td style={{ padding: isMobile ? "6px 4px" : "10px 12px", border: "1px solid #ccc", textAlign: "center" }}>{m.year_semester || "—"}</td>
                    </tr>
                ))}
                </tbody>
              </table>
            </div>
        ) : (
            <div style={{ padding: "30px", textAlign: "center", color: "#666", fontSize: "15px" }}>No roster data available for {academicYear}</div>
        )}

        <SectionHeading>📄 Important Documents & Resources</SectionHeading>

        {pdfList.length > 0 ? (
            <div style={{
              border: "1px solid #bbb",
              borderRadius: "8px",
              overflow: "hidden",
              marginBottom: "10px"
            }}>
              {/* PDF List with Thumbnails / Links */}
              <div className="pdf-list" style={{
                background: "#f0f4fa",
                padding: isMobile ? "12px" : "15px",
                borderBottom: "1px solid #ccc",
                display: "flex",
                flexWrap: "wrap",
                gap: "10px",
                alignItems: "center"
              }}>
                <strong style={{ marginRight: "10px", color: "#003366" }}>Select a document:</strong>
                {pdfList.map((pdf, idx) => (
                    <button
                        key={idx}
                        onClick={() => setSelectedPdf(pdf)}
                        style={{
                          background: selectedPdf?.pdf_url === pdf.pdf_url ? "#003366" : "#fff",
                          color: selectedPdf?.pdf_url === pdf.pdf_url ? "#fff" : "#003366",
                          border: "1px solid #003366",
                          borderRadius: "20px",
                          padding: "6px 14px",
                          cursor: "pointer",
                          fontSize: isMobile ? "11px" : "13px",
                          fontWeight: "bold",
                          transition: "all 0.2s",
                          fontFamily: "inherit"
                        }}
                    >
                      {pdf.title || `Document ${idx + 1}`}
                    </button>
                ))}
              </div>

              {/* PDF Viewer */}
              {selectedPdf ? (
                  <div>
                    <iframe
                        src={getFullImageUrl(selectedPdf.pdf_url)}
                        title={selectedPdf.title || "Student Council Document"}
                        style={{
                          width: "100%",
                          height: isMobile ? "clamp(400px, 60vh, 500px)" : "clamp(500px, 70vh, 650px)",
                          border: "none",
                          display: "block"
                        }}
                    />
                  </div>
              ) : (
                  <div style={{ padding: "40px", textAlign: "center", color: "#666" }}>
                    <p>No document selected.</p>
                  </div>
              )}
            </div>
        ) : (
            <div style={{ padding: "30px", textAlign: "center", color: "#666", border: "1px solid #bbb", borderRadius: "8px", background: "#f9f9f9" }}>
              <p>No documents available at the moment.</p>
              <p style={{ fontSize: "12px", marginTop: "10px" }}>Please check back later.</p>
            </div>
        )}
      </div>
  );
}