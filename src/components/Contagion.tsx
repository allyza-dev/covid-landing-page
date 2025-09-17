import airtransmission from '../assets/air-transmission.svg'
import humanContacts from '../assets/human-contacts.svg'
import containedObjects from '../assets/contained-object.svg'
import contagion from '../assets/contagion.svg'

export default function Contagion() {
    return (
        <div className='contagion'>
            <img src={contagion} alt="contagionbg" className='contagion-bg-img' />
            <div className="header-text">
                <span>Covid-19</span>
                <h1>Contagion</h1>
                <p>Corona viruses are a type of virus. There are many different kinds, and some cause disease. A newly identified type</p>
            </div>
            <div className='contagion-cards'>
              <div className='contagion-text'>
                <img src={airtransmission} alt="air transmission" width={150} />
                <h3>Air Transmission</h3>
                <p>Objectively evolve tactical expertise before extensible initiatives. Efficiently simplify</p>
              </div>
              <div className='contagion-text'>
                <img src={humanContacts} alt="Human Contacts" width={140} />
                <h3>Human Contacts</h3>
                <p>Washing your hands is one of thesimplest ways you can protect</p>
              </div>
              <div className='contagion-text'>
                <img src={containedObjects} alt="air transmission" width={150} />
                <h3>Containted Objects</h3>
                <p>Use the tissue while sneezing,In this way, you can protect your droplets.</p>
              </div>
            </div>
        </div>
    )
}