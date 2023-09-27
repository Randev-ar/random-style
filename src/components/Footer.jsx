import React from 'react'

const Footer = () => {
    const linkedin = process.env.REACT_APP_SOCIAL_LINKEDIN
    const facebook = process.env.REACT_APP_SOCIAL_FACEBOOK
    const github = process.env.REACT_APP_SOCIAL_GITHUB
    const instagram = process.env.REACT_APP_SOCIAL_INSTAGRAM
    const socialMedia = {
        linkedin,
        github,
        facebook,
        instagram
    }
    return (
        <footer>
            <div className="footer color--white">
                <span className='color--white'>
                    <a style={{ color: 'white', textDecoration: 'none' }} href="mailto: soporte@randev.com.ar">soporte@randev.com.ar</a>
                </span>

                <div className="btn-social-desk">
                    {
                        socialMedia?.linkedin &&
                        <a className="btn-social color--white " href={socialMedia.linkedin} target="blank">
                            <i className="fab fa-linkedin" />
                        </a>
                    }
                    {
                        socialMedia?.github &&
                        <a className="btn-social color--white ms--1" href={socialMedia.github} target="blank">
                            <i className="fab fa-github" />
                        </a>
                    }
                    {
                        socialMedia?.facebook &&
                        <a className="btn-social color--white ms--1" href={socialMedia.facebook} target="blank">
                            <i className="fab fa-facebook-square" />
                        </a>
                    }
                    {
                        socialMedia?.instagram &&
                        <a className="btn-social color--white ms--1" href={socialMedia.instagram} target="blank">
                            <i className="fab fa-instagram" />
                        </a>
                    }
                </div>

            </div>
            <div className="faq-footer">
                <p className='faq-footer--text'>
                    Made with <span className="corazon"></span> by <a href='https://www.randev.com.ar' >
                        {/* <img src={logo} className="App-logo" alt="logo" style={{maxWidth: '2.3rem', maxHeight: '2.3rem', verticalAlign: 'middle'}}/> */}
                        <span style={{ fontWeight: '900', fontStyle: 'italic', textTransform: 'uppercase' }}>
                            <span className='color--primary'>ran</span>
                            <span className='color--secondary'>dev</span>
                        </span>
                    </a>
                    <br />
                    &copy;2023 - Random Development
                </p>
            </div>
        </footer>
    )
}

export default Footer
