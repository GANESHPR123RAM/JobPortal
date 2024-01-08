import React from 'react'
import './HomeContactUs.css'
import fivestar from '../Images/fivestar.svg'

function HomeContactUs() {
    return (
        <div className="HomeContactUs">
            <div className="HomeContactUsBox">
                <div className="HomeContactUsCol1">
                    <div className="HomeContactUsForm">
                        <div className="formContent">
                            Get Verified Job <br /><div>Updates of <p>JobsOwn</p></div>
                        </div>
                        <div className="formdiv">
                            <form action="/" method="POST">
                                <div className="formbox">
                                    <div className="formcss">
                                        <label>Email</label>
                                        <input
                                            name="Email"
                                            className="inputbox"
                                            type="email"
                                            placeholder="Email ID"
                                        />
                                        <label>Contact</label>
                                        <input
                                            name="Number"
                                            className="inputbox"
                                            type="text"
                                            placeholder="Contact"
                                        />
                                        <button type="submit" className="formbutton">
                                            submit
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                <div className="HomeContactUsCol2">
                    <div className="HomeContactUsRow1">
                        <div className="LineHeader"><img src={fivestar} alt='' /><h3>Personalized Predictions</h3><br /></div>
                        <p>Utilizing advanced machine learning algorithms,HAiLO tailors its drug<br />
                            interaction analyses to individual patient profiles,helping you zero in one the<br />
                            most effective and safest treatment options</p>
                    </div>
                    <div className="HomeContactUsRow1">
                        <div className="LineHeader"><img src={fivestar} alt='' /><h3>ComprehensiveDatabase</h3><br /></div>
                        <p>With an evergrowing database that covers thousands of drugs,nutrients,<br />
                            and herbal interactions, HAiLO provides an allencompassing look at<br />
                            potential synergies and conflicts to inform your decisions</p>
                    </div>
                    <div className="HomeContactUsRow1">
                        <div className="LineHeader"><img src={fivestar} alt='' /><h3>AlDriven Insights</h3><br /></div>
                        <p>HAiLO leverages state of the art artificial intelligence algorithms to analyze<br />
                            complex chemical structures and predict drug interactions.This enables<br />
                            faster, more accurate research,reducing the time and costs traditionally<br />
                            associated with drug discovery.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomeContactUs