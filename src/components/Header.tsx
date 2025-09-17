import headerPic from '../assets/header-pic.svg'

export default function Header() {
    return (
        <div className='header'>
            <div className='header-text'>
              <span>COVID-19 Alert</span>
              <h1>Stay at Home quarantine <br />
              To stop Corona virus</h1>
              <p>There is no specific medicine to prevent or treat coronavirus disease (COVID-19). People may need supportive care to .</p>
              <button className='header-btn btn-primary'>Let us Help</button>
            </div>
            <img src={headerPic} alt="headerPic" width={800}/>
        </div>
    );
}