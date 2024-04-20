import React, { useState } from 'react';
import dummyData from './RandomData.json';
 

const ReportsList = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const reportsPerPage = 3; 

  const totalPages = Math.ceil(dummyData.length / reportsPerPage);

  
  const indexOfLastReport = currentPage * reportsPerPage;
 
  const indexOfFirstReport = indexOfLastReport - reportsPerPage;
  
  const currentReports = dummyData.slice(indexOfFirstReport, indexOfLastReport);

  
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

 
  const handleDownload = (date, reportName) => {
    const fileContent = `Date: ${date}\nReport Name: ${reportName}`;
    const blob = new Blob([fileContent], { type: 'text/plain' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = `${date}_${reportName}.txt`;
    link.click();
  };

  return (
    <div className="reports-container">
      <h2>Recently Generated Reports</h2>
      <table className="reports-table">
        <thead>
          <tr>
            <th>Date</th>
            <th>Report Name</th>
            <th>Download</th>
          </tr>
        </thead>
        <tbody>
          {currentReports.map((report, index) => (
            <tr key={index}>
              <td>{report.date}</td>
              <td>{report['report name']}</td>
              <td>
                <button onClick={() => handleDownload(report.date, report['report name'])} className="download-btn">
                  Download
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      
      <div className="pagination">
        <button onClick={() => paginate(currentPage - 1)} disabled={currentPage === 1} className="pagination-btn">
          Previous
        </button>
        {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
          <button key={page} onClick={() => paginate(page)} className={`pagination-btn ${currentPage === page ? 'active' : ''}`}>
            {page}
          </button>
        ))}
        <button onClick={() => paginate(currentPage + 1)} disabled={currentPage === totalPages} className="pagination-btn">
          Next
        </button>
      </div>
    </div>
  );
};

export default ReportsList;
