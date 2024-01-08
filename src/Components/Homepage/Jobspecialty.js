import React from 'react'
import './Jobspecialty.css'

function Jobspecialty() {
    return (
        <div className="Jobspecialty">
            <div className="JobspecialtyBox">
                <div className="JobspecialtyCol1">
                    <div className="Col1Content1">
                        Top Gulf Jobs in Jobsown
                    </div>
                    <div className="Col1Content2">
                        Explore Top Gulf Jobs Exclusively at Jobsown
                    </div>
                    <div className="Col1Content3">
                        <a href='/'>See all Jobs&#8594;</a>
                    </div>
                </div>
                <div className="JobspecialtyCol2">
                    <div className="JobspecialtyBox1">
                        <i class="fa-solid fa-chart-simple"></i>&nbsp; Business Development
                    </div>
                    <div className="JobspecialtyBox1">
                        <i class="fa-solid fa-palette"></i>&nbsp;  Design
                    </div>
                    <div className="JobspecialtyBox1">
                        <i class="fa-solid fa-laptop"></i>&nbsp;   Development
                    </div>
                </div>
                <div className="JobspecialtyCol2">
                    <div className="JobspecialtyBox1">
                        <i class="fa-solid fa-tty"></i>&nbsp; CustomerService
                    </div>
                    <div className="JobspecialtyBox1">
                        <i class="fa-brands fa-ubuntu"></i>&nbsp;  Operations
                    </div>
                    <div className="JobspecialtyBox1">
                        <i class="fa-solid fa-mobile-screen"></i>&nbsp;&nbsp; Mobile Devlopment
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Jobspecialty