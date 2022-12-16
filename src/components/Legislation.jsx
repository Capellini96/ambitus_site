import React from 'react';

import FadeInSection from './UI/FadeComp'
import Air from '../assets/images/air.svg'
import Water from '../assets/images/water.svg'
import Conservation from '../assets/images/rain-drop.svg'
import Solids from '../assets/images/solids.svg'


const Legislation = () => {
    
    return (
        <FadeInSection>
        <div className="phasesBox" id="legislation">
            <h1 className='text-center title '>Legislation</h1>
            <div className="phases mt-5">
                <div className="cardBlue">
                    <img src={Water} alt="" />
                    <div>
                        <h3 className='diamond-text'>Residual Waters</h3>
                        <p>Water resulting from domestic, urban, industrial or service activities, surface runoff, contaminated rainwater, unitary or pseudo-seperative drainage systems, or any influx or accidental infiltration into wastewater drainage systems.</p>  
                    </div>
                </div>
                <div className="cardBlue">
                    <img src={Solids} alt="" />  
                    <div>
                        <h3 className='diamond-text'>Water Recycling</h3>
                        <p>Use of treated wastewater for certain uses, minimizing the associated risks and becoming an alternative source in terms of water availability. Treated wastewater should be reused whenever possible and appropriate</p>
                    </div>
                </div>
                <div className="cardBlue">
                    <img src={Air} alt="" />
                    <div>
                        <h3 className='diamond-text'>Associated Uses</h3>
                        <p>Non-potable uses, in accordance with decree-law No. 119/2019 of 08/21; Non-Potable reuse systems generally have lower water quality objectives and the level of treatment varies depending on the end use - fit for purpose.</p>
                    </div>
                </div>
                <div className="cardBlue">
                    <img src={Conservation} alt="" />
                    <div>
                        <h3 className='diamond-text'>Water for Reuse (APA)</h3>
                        <p>Wastewater intended for reuse that has been subjected to the necessary treatment to achieve a quality compatible with the intended end use without deteriorating the quality of the recievers.</p> 
                    </div>
                </div>
                <div className="cardBlue">
                <img src={Conservation} style={{width: '25px'}} alt="" /><img src={Conservation} style={{width: '25px'}}  alt="" />
                    <div>
                        <h3 className='diamond-text'>Contaminated RainWater</h3>
                        <p>RainWater in contact with waterproofed surfaces, is liable to drag suspended materials or other polluteants and contaminants (Bird and /or rodent feces; leaves; particulates, etc.) Whose load implies the need for treatement prior to their reuse or direct rejection to the recieving medium.</p> 
                    </div>
                </div>
            </div>
        </div>
        </FadeInSection>
    )
}

export default Legislation;