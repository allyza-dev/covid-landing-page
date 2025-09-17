import  logoIcon  from '../assets/logo.svg';

export default function Navigation() {
  return (
    <nav className="navigation">
      <div className="logo">
        <img src={logoIcon} alt="Logo" width={63}/> 
        <span>COVID 19</span>
      </div>
      <ul className="nav-links">
        <li><a href="#overview">Overview</a></li>
        <li><a href="#contagion">Contagion</a></li>
        <li><a href="#symptoms">Symptoms</a></li>
        <li><a href="#prevention">Prevention</a></li>
        <li><a href="#contact" className='nav-contact'>Contact</a></li>
      </ul>
    </nav>
  );
}   