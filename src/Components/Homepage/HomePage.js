import React from 'react'
import './HomePage.css'
import FirstPage from './FirstPage'
import JobsbyLocation from './JobsbyLocation'
import TrendingJobs from './TrendingJobs'
import LatestJob from './LatestJob'
import JobRecruiters from './JobRecruiters'
import Jobspecialty from './Jobspecialty'
import TopCompany from './TopCompany'
import Testimonials from './TestimonialsHome'
import HomeContactUs from './HomeContactUs'

function HomePage() {
  return (
    <div className='HomeBox'>
        <FirstPage/>
        <JobsbyLocation/>
        <TrendingJobs/>
        <LatestJob/>
        <JobRecruiters/>
        <Jobspecialty/>
        <TopCompany/>
        <Testimonials/>
        <HomeContactUs/>
    </div>
  )
}

export default HomePage