import React from 'react'
import './Footer.css'
import FooterLogo from '../Images/WebLogo.png'


function Footer() {
  return (
    <div className="FooterBox">
      <div className="FooterBox1">
        <div className="footerCl1">
          <div className="FooterLogoImgBox">
            <img src={FooterLogo} alt='FooterLogo' className='FooterLogoImg' />
          </div>
        </div>
        <div className="footerCl2">
          <ul>
            <li style={{ fontWeight: '700', fontSize: '18px', marginBottom: '5px' }}>Company</li>
            <li>About us</li>
            <li>Get a Job</li>
            <li>Contact us</li>
          </ul>
        </div>
        <div className="footerCl2">
          <ul>
            <li style={{ fontWeight: '700', fontSize: '18px', marginBottom: '5px' }}>Hire</li>
            <li>Start Hiring</li>
            <li>General Terms & Conditions</li>

          </ul>
        </div>
        <div className="footerCl2">
          <ul>
            <li style={{ fontWeight: '700', fontSize: '18px', marginBottom: 'px' }}>Legal</li>
            <li>Privacy Policy's</li>
          </ul>
        </div>
        <div className="footerCl2">
          <ul>
            <li style={{ fontWeight: '700', fontSize: '18px', marginBottom: '5px' }}>Contact us</li>
            <li style={{ display: 'inline' }}> <i class="fa fa-phone mx-1" aria-hidden="true"></i>+91 9848810550</li><br />
            <li style={{ display: 'inline' }}><i class="fa fa-envelope-o mx-1" aria-hidden="true"></i>Info@jobsown.com</li>
          </ul>
        </div>
      </div>
      <div className="FooterBox2">
        <div className="copyright">
          All rights reserved © 2023 Info Edge (India) Ltd
        </div>
        <div className="backtop">
          <a href='/' >Back To Top</a><i class="fa-thin fa-location-arrow-up"></i>
        </div>
        <div className="sociallinks">
          <a href="/"><i className="fab fa-facebook-f"></i></a>
          <a href="/"><i className="fab fa-twitter"></i></a>
          <a href="/"><i className="fab fa-instagram"></i></a>
          <a href="/"><i className="fab fa-linkedin-in"></i></a>
          <a href='/' style={{ backgroundColor: 'green',padding:'1.5%',marginLeft:'2%',fontSize:'20px',lineHeight:'130%'}}><i class="fa-brands fa-whatsapp" style={{color: '#ffffff'}}></i></a>
        </div>
      </div>
    </div>
  )
}

export default Footer