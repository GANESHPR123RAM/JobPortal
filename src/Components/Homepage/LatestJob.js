import React from 'react'
import './LatestJob.css'
import LT from '../Images/LT.png'
import star from '../Images/star.svg'

function LatestJob() {
    return (
        <div className="LatestJobBox">
            <div className="LatestJobBox1">
                <div className="LatestJobPlate">
                    <div className="LatestJobPlate1">
                        <div className="LatestJobHeading">
                            Latest Job Openings
                        </div>
                        <div className="LatestJobViewMore">
                            <a href='/'>See all Jobs<i class="fa-solid fa-arrow-right" style={{ color: "#053485" }}></i>
                            </a>
                        </div>
                    </div>
                    <div className="LatestJobPlate2">
                        Know your value and choose jobs that make your life better
                    </div>
                </div>
                {LatestJobdata.map((L) => (
                    <div className="LatestJobBoxItem">
                        <div className="CompanyLogo">
                            <img src={L.companyLogo} className='CompanyLogoImg' alt='CompanyLogo' />
                        </div>
                        <div className="Jobdetails">
                            <div className="jobPosition">
                                {L.Position}
                            </div>
                            <div className="Larsen">
                                Larsen & Toubro <img src={star} />{L.Rating} {L.NumbersOfReview} Reviews
                            </div>
                            <div className="JobdetailsBtnBox">
                                <button className='JobdetailsBtn'><i class="fa-solid fa-location-dot"></i> &nbsp;{L.JobLocation}</button>
                                <button className='JobdetailsBtn'><i class="fa-regular fa-clock"></i>&nbsp;{L.JobTiming}Hour</button>
                                <button className='JobdetailsBtn'>{L.JobAed}AED</button>
                                <button className='JobdetailsBtn'>{L.TypeOfJob}</button>

                            </div>
                        </div>
                        <div className="SaveJob">
                            <div> <i class="fa-regular fa-bookmark"></i> Save</div>
                        </div>
                    </div>
                ))}

            </div>
        </div>
    )
}
const LatestJobdata = [
    {
        id: '1',
        companyLogo: LT,
        Position: ' Heavy Equipment Operator',
        Rating: '4.6',
        NumbersOfReview: '50',
        JobLocation: 'Kuwait',
        JobTiming: '8',
        JobAed: '5000',
        TypeOfJob: 'Full time'
    },
    {
        id: '2',
        companyLogo: LT,
        Position: ' Heavy Equipment Operator',
        Rating: '4.6',
        NumbersOfReview: '50',
        JobLocation: 'Kuwait',
        JobTiming: '8',
        JobAed: '5000',
        TypeOfJob: 'Full time'
    },
    {
        id: '3',
        companyLogo: LT,
        Position: ' Heavy Equipment Operator',
        Rating: '4.6',
        NumbersOfReview: '50',
        JobLocation: 'Kuwait',
        JobTiming: '8',
        JobAed: '5000',
        TypeOfJob: 'Full time'
    },
    {
        id: '4',
        companyLogo: LT,
        Position: ' Heavy Equipment Operator',
        Rating: '4.6',
        NumbersOfReview: '50',
        JobLocation: 'Kuwait',
        JobTiming: '8',
        JobAed: '5000',
        TypeOfJob: 'Full time'
    },
    {
        id: '5',
        companyLogo: LT,
        Position: ' Heavy Equipment Operator',
        Rating: '4.6',
        NumbersOfReview: '50',
        JobLocation: 'Kuwait',
        JobTiming: '8',
        JobAed: '5000',
        TypeOfJob: 'Full time'
    },
    {
        id: '6',
        companyLogo: LT,
        Position: ' Heavy Equipment Operator',
        Rating: '4.6',
        NumbersOfReview: '50',
        JobLocation: 'Kuwait',
        JobTiming: '8',
        JobAed: '5000',
        TypeOfJob: 'Full time'
    }

]
export default LatestJob