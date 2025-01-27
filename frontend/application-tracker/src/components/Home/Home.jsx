import '../../App.css';
import { useEffect, useState} from 'react';

const Home = ({allApplications}) => {
    


    return (
        <>
            <div className='applicationContainer'>
                <ul>
                    {allApplications.map((application, index) => (
                        <div className='applicationContent' key={index}>
                            <li>
                            <h2>Company Name: {application.companyName}</h2>
                            <h2>Job Title: {application.jobTitle}</h2>
                            <h3>Application Submitted: {application.submissionDate}</h3>
                            <h3>Response Received: {application.responseDate}</h3>
                            <h4>Result: {application.result}</h4>
                            </li>
                        </div>
                    ))}
                </ul>
            </div>
        </>
    )
}

export default Home