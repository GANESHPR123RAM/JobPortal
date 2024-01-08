import React from 'react'
import './JobRecruiters.css'
import OLA from '../Images/OlaLogo.png'
import star from '../Images/star.svg'
import LTLOGO from '../Images/LT-LOGO.png'
import Zomato from '../Images/ZomatoLogo.png'
// import LTLOGO from '../Images/LT-LOGO.png'

function JobRecruiters() {
    return (
        <div className="JobRecruiters">
            <div className="JobRecruitersBox">
                <div className="JobRecruitersPlate">
                    <div className="JobRecruitersText">
                        Verified International Job Recruiters
                    </div>
                    <div className="JobRecruitersView">
                        <p className='JobRecruitersViewBtn'><a href='/'>View all&#8594;</a></p>
                    </div>
                </div>
                <div className="JobRecruiterscards">
                    <div className="JobRecruiterscardsBox">
                        {JobRecruitersdata.map((R) => (
                            <div className="Recruiterscards">
                                <div className="RecruitCompanyImg"><img src={R.RecruitCompanyLogo} className='RecruitImg' /></div>
                                <div className="RecruitCompanyName">{R.RecruitCompanyName}</div>
                                <div className="RecruitCompanyDetail"><img src={star} />{R.Rating} {R.Reviews} Reviews</div>
                                <div className="CompanyDiscription">{R.CompanyDiscription}</div>
                                <div className="RecruitCompanyViewMore"><button className='ViewjobsBtn'>View jobs</button></div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>

    )
}
const JobRecruitersdata = [
    {
        id: '1',
        RecruitCompanyLogo: OLA,
        RecruitCompanyName: 'ola',
        Reviews: '250',
        Rating: '4.5',
        CompanyDiscription: 'Transport platform of choice for immediate and spontaneous city travel needs'
    },
    {
        id: '2',
        RecruitCompanyLogo: LTLOGO,
        RecruitCompanyName: 'Larsen & Turbo',
        Reviews: '250',
        Rating: '4.5',
        CompanyDiscription: 'Transport platform of choice for immediate and spontaneous city travel needs'
    },
    {
        id: '3',
        RecruitCompanyLogo: Zomato,
        RecruitCompanyName: 'Zomato',
        Reviews: '250',
        Rating: '4.5',
        CompanyDiscription: 'Transport platform of choice for immediate and spontaneous city travel needs'
    },
    {
        id: '4',
        RecruitCompanyLogo: OLA,
        RecruitCompanyName: 'ola',
        Reviews: '250',
        Rating: '4.5',
        CompanyDiscription: 'Transport platform of choice for immediate and spontaneous city travel needs'
    }
]

export default JobRecruiters