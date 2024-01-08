import React from 'react'
import './JobsbyLocation.css'
import kuwait from '../Images/Kuwait.png'
import qatar from '../Images/Qatar.png'
import saudiarab from '../Images/SaudiArabia.png'

function JobsbyLocation() {
    return (
        <div className="JobsbyLocation">
            <div className="JobsbyLocationBox">
                <div className="JobsbyLocationPlate">
                    <div className="JobsbyLocationText">
                        Jobs by Location
                    </div>
                    <div className="JobsbyLocationView">
                        <p className='JobsbyLocationViewBtn'><a href='/'>View all Location&#8594;</a></p>
                    </div>
                </div>
                <div className="countrysBox">
                    <div className="countrysBoxIn">
                        {JobsbyLocationdata.map((J) => (
                            <div className="FlagBox">
                                <img src={J.countryFlag} alt='saudiarab' className='Flag' />
                                <div className="countrysText">
                                    <strong>{J.countryName}</strong> |{J.NumbersOfJob} jobs
                                </div>
                            </div>
                            ))}
                    </div>

                </div>

            </div>

        </div>
    )
}

const JobsbyLocationdata = [
    {
        id: '1',
        countryName: 'Saudi Arabia',
        NumbersOfJob: '13,500',
        countryFlag: saudiarab
    },
    {
        id: '2',
        countryName: 'Qatar',
        NumbersOfJob: '13,500',
        countryFlag: qatar
    },
    {
        id: '3',
        countryName: 'Kuwait',
        NumbersOfJob: '13,500',
        countryFlag: kuwait
    }
]
export default JobsbyLocation