import GlaLogo from '../../public/photos/image/gla-logo.png';
import './Banner.css';

function Banner() {
  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="Banner">
      <div className="logoGLA">
        <h1>
          <img src={GlaLogo} className="logoGLA" alt="Gift Life Adventures" />
        </h1>
      </div>
      <div className="nav">
        <div className="click" onClick={() => scrollToSection('section1')}>Home</div>
        <div className="click" onClick={() => scrollToSection('section2')}>About Us</div>
        <div className="click" onClick={() => scrollToSection('section3')}>Activities</div>
        <div className="click" onClick={() => scrollToSection('section4')}>Gift Life Saturday</div>
        <div className="click" onClick={() => scrollToSection('section5')}>Blog</div>
        <div className="click" onClick={() => scrollToSection('section6')}>Contact US</div>
      </div>
    </div>
  );
}

export default Banner;
