import React from 'react'
import './TrendingJobs.css'
import Driver from '../Images/Driver.png'
import Receptionist from '../Images/Receptionist.png'
import Plumber from '../Images/Plumber.png'
import arrow from '../Images/arrow.svg'
function TrendingJobs() {
    return (
        <div className="TrendingJobs">
            <div className="TrendingJobsBox">
                <div className="TrendingJobsplate">
                    <p className='TrendingJobsHeading'>Popular Searches On Jobsown</p>
                </div>
                <div className="TrendingJobsCardBox">
                    <div className="TrendingJobsCard">
                        {TrendingJobsdata.map((T) => (
                            <div className="JobsCard">
                                <p className='Trending'>#Trending Jobs</p>
                                <p className='fild'>{T.fildName}</p>
                                <div className="jobcardimgbtn">
                                    <button className='TrendingJobsBtn'>View all<img src={arrow} className='arrow' alt='arrow' /></button>
                                    <img src={T.jobImg} alt='Driver' className='jobcardimg' />
                                </div>
                            </div>))}
                    </div>
                </div>
                <div className="TrendingJobsviewMore">
                    <button type='submit' className='trendingSeeAllBtn'>See all</button>
                </div>
            </div>
        </div>
    )
}
const TrendingJobsdata = [
    {
        id: '1',
        fildName: "In the Driver's Seat",
        jobImg: Driver
    },
    {
        id: '2',
        fildName: "The Receptionist's Guide",
        jobImg: Receptionist
    },
    {
        id: '3',
        fildName: 'Plumbing Prowess',
        jobImg: Plumber
    }
]

export default TrendingJobs