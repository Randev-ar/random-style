import React from 'react'

/* This code defines a functional React component called `Footer`. The component takes in an object as
its argument with properties `linkedin`, `github`, `facebook`, and `instagram`, which are set to
default values retrieved from environment variables (`process.env.REACT_APP_SOCIAL_LINKEDIN`,
`process.env.REACT_APP_SOCIAL_GITHUB`, `process.env.REACT_APP_SOCIAL_FACEBOOK`,
`process.env.REACT_APP_SOCIAL_INSTAGRAM`). */
const Footer = ({
    linkedin = process.env.REACT_APP_SOCIAL_LINKEDIN,
    github = process.env.REACT_APP_SOCIAL_GITHUB,
    facebook = process.env.REACT_APP_SOCIAL_FACEBOOK,
    instagram = process.env.REACT_APP_SOCIAL_INSTAGRAM
}) => {
    return (
        <footer>
            <div className="footer color--white">
                <span className='color--white'>
                    <a style={{ color: 'white', textDecoration: 'none' }} href="mailto: soporte@randev.com.ar">soporte@randev.com.ar</a>
                </span>

                <div className="btn-social-desk">
                    {
                        linkedin &&
                        <a className="btn-social color--white " href={linkedin} target="blank">
                            <i className="fab fa-linkedin" />
                        </a>
                    }
                    {
                        github &&
                        <a className="btn-social color--white ms--1" href={github} target="blank">
                            <i className="fab fa-github" />
                        </a>
                    }
                    {
                        facebook &&
                        <a className="btn-social color--white ms--1" href={facebook} target="blank">
                            <i className="fab fa-facebook-square" />
                        </a>
                    }
                    {
                        instagram &&
                        <a className="btn-social color--white ms--1" href={instagram} target="blank">
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
                    &copy;2024 - Random Development
                </p>
            </div>
        </footer>
    )
}

export default Footer
