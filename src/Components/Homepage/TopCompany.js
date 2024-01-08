import React from 'react'
import './TopCompany.css'
import DeepMindlogo from '../Images/DeepMindlogo.png'
import Aimedis from '../Images/Aimedis.jpeg'
import awslogo from '../Images/awslogo.jpg'
import celinelogo from '../Images/celinelogo.png'
import elsevire from '../Images/elsevire.jpeg'
import nvidiaLogo from '../Images/nvidiaLogo.png'
import harvardUniversity from '../Images/harvardUniversity.png'
import OIP from '../Images/OIP.jpeg'

function TopCompany() {
  return (
    <div className="TopCompany">
      <div className="TopCompanyBox">
        <div className="TopCompanyHeading"> Top Companies</div>
        <div className="TopCompanyRow1">
          <div className="TopCompany1">
            <img src={DeepMindlogo} className='TopCompanyLogoImg' alt='' />
          </div>
          <div className="TopCompany1">
            <img src={Aimedis} className='TopCompanyLogoImg' alt='' />
          </div>
          <div className="TopCompany1">
            <img src={awslogo} className='TopCompanyLogoImg' alt='' />
          </div>
          <div className="TopCompany1">
            <img src={celinelogo} className='TopCompanyLogoImg' alt='' />
          </div>
        </div>
        <div className="TopCompanyRow1">
          <div className="TopCompany1">
            <img src={elsevire} className='TopCompanyLogoImg' alt='' />
          </div>
          <div className="TopCompany1">
            <img src={nvidiaLogo} className='TopCompanyLogoImg' alt='' />
          </div>
          <div className="TopCompany1">
            <img src={harvardUniversity} className='TopCompanyLogoImg' alt='' />
          </div>
          <div className="TopCompany1">
            <img src={OIP} className='TopCompanyLogoImg' alt='' />
          </div>
        </div>
      </div>
    </div>
  )
}

export default TopCompany