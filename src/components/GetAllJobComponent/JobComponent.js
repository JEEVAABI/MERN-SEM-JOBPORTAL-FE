import React from 'react'

function JobComponent({job}) {
return (
        <div className="card">
          <div className="text-container">
            <h3>{job.jobTitle}</h3>
            <p className="status">
              {job.jobCompany} ({job.jobLocation})
            </p>
            <p className="status">
              job ID : {job.jobID}
            </p>
            <p className="title">Skills</p>
            <p className='author'>{job.jobSkills}</p>
            <p className="availability">{job.jobPreference}</p>
          </div>
        </div>
      );
}

export default JobComponent