import linkedinLogo from "../../assets/linkedin.svg"
import instagramLogo from "../../assets/Instagram.svg"
import githubLogo from "../../assets/Github.svg"
import facebookLogo from "../../assets/Facebook.svg"
import "../SocialLogos.css"

export const SocialLogos = () => {
    return (
        <section className="social-media-logos">
            <img className="social-icon" src={linkedinLogo} alt="Linkedin logo" />
            <img className="social-icon" src={instagramLogo} alt="Instagram logo" />
            <img className="social-icon" src={githubLogo} alt="Github logo" />
            <img className="social-icon" src={facebookLogo} alt="facebook logo" />
        </section>
    )
}