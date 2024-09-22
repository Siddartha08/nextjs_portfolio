import React from 'react';
const ResumeSection = () => {
  return (
    <section id="Resume" className="bg-light py-5">
      <div className="container">
        <div
 className="row justify-content-center">
          <div className="col-md-8 text-center">
            <h2>My Resume</h2>
            <a href="/download_resume" className="btn btn-primary btn-lg">Download PDF</a>
          </div>
        </div>
      </div>
    </section>
  );
};
export default ResumeSection;