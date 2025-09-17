import wearMask from '../assets/wear-mask.svg'
import washHands from '../assets/wash-hands.svg'
import noseRag from '../assets/nose-rag.svg'
import stayHome from '../assets/avoid-contacts.svg'
import greenVirus from '../assets/virus-green.svg'
import redVirus from '../assets/virus-red.svg'

export default function WhatShouldWedo(){
    return (
        <div className="what-should-we-do">
            <div className='what-should-we-do-subtext header-text'>
              <span>Covid-19</span>
              <h1>What should we do</h1>
              <p>Corona viruses are a type of virus. There are many different kinds, and some cause disease. A newly identified type has caused</p>
            </div>
            <img src={greenVirus} alt="" className='green-virus'/>
            <img src={redVirus} alt="" className='red-virus'/>
            <div className='what-should-we-do-steps'>
              <div className='what-should-we-do-text'>
                <div>
                  <span>01</span>
                 <div>
                   <h3>Wear Masks</h3>
                    <p>Continually seize impactful vortals rather than future-proof supply chains. Uniquely exploit emerging niches via fully tested meta-services. Competently pursue standards compliant leadership skills vis-a-vis pandemic "outside the box" thinking. Objectively</p>
                 </div>
                </div>
                <img src={wearMask} alt="" width={350}/>
              </div>
              <div className='what-should-we-do-text'>
                <div>
                  <span>02</span>
                  <div>
                   <h3>Wash Your Hands</h3>
                    <p>Continually seize impactful vortals rather than future-proof supply chains. Uniquely exploit emerging niches via fully tested meta-services. Competently pursue standards compliant leadership skills vis-a-vis pandemic "outside the box" thinking. Objectively Continually seize impactful vortals</p>
                 </div>
                </div>
                <img src={washHands} alt="" width={350}/>
              </div>
              <div className='what-should-we-do-text'>
                <div>
                  <span>03</span>
                  <div>
                   <h3>Use Nose - Rag</h3>
                    <p>Continually seize impactful vortals rather than future-proof supply chains. Uniquely exploit emerging niches via fully tested meta-services. Competently pursue standards compliant leadership skills vis-a-vis pandemic "outside the box" thinking. Objectively</p>
                 </div>
                </div>
                <img src={noseRag} alt="" width={350}/>
              </div>
              <div className='what-should-we-do-text'>
                <div>
                  <span>04</span>
                  <div>
                   <h3>Avoid Contacts</h3>
                    <p>Continually seize impactful vortals rather than future-proof supply chains. Uniquely exploit emerging niches via fully tested meta-services. Competently pursue standards compliant leadership skills vis-a-vis pandemic</p>
                 </div>
                </div>
                <img src={stayHome} alt="" width={350}/>
              </div>
            </div>
        </div>
    )
}