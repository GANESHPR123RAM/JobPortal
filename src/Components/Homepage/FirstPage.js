import React from 'react'
import './FirstPage.css'
import HomepageBg1 from '../Images/HomepageBg1.png'

function FirstPage() {
    return (
        <div className="FirstPageBox">
            <div className="HomePage1">
                <div className="TypeOfJop">
                    <div className="Type1">
                        Job Seeker
                    </div>
                    <div className="Type2">
                        Job Provider
                    </div>
                </div>
                <div className="HomePageBg">
                    <img src={HomepageBg1} alt='HomepageBg1' className='HomepageBg1Img' />
                    <div className="HomePageContent1">
                        <div className="sloganContent">
                            Unlock Your Career Potential with<br />
                            JobOwn: Your Gateway to<br />
                            Opportunities
                        </div>
                        <div className="HomePageSearch">
                        <input type="text" placeholder="Search Jobs, Title" className="HomePageSearchIcon"/>|
                        <input type="text" placeholder="Search Jobs, Title" className="HomePageSearchIcon"/>
                        <button type='search' className='SearchIconBox'><i class="fa-solid fa-magnifying-glass" style={{color:'white'}}></i></button>
                        </div>
                        <div className="Apply">
                            <a href='/'>Apply for jobs-</a>It may take few seconds
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FirstPage