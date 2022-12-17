import React from 'react';

import FadeInSection from './UI/FadeComp'
import Air from '../assets/images/air.svg'
import Water from '../assets/images/water.svg'
import Conservation from '../assets/images/rain-drop.svg'
import Solids from '../assets/images/solids.svg'
// import translateDangerous from '../utils/utilities';
import { useTranslation } from "react-i18next";

const Legislation = () => {
    
    const { t } = useTranslation();
    return (
        <FadeInSection>
        <div className="phasesBox" id="legislation">
            <h1 className='text-center title '>{t('i18n.main.legislation')}</h1>
            <div className="phases mt-5">
                <div className="cardBlue">
                    <img src={Water} alt="" />
                    <div>
                        <h3 className='diamond-text'>{t('i18n.main.legislation_residual')}</h3>
                        <p>{t('i18n.main.legislation_residual_desc')}</p>  
                    </div>
                </div>
                <div className="cardBlue">
                    <img src={Solids} alt="" />  
                    <div>
                        <h3 className='diamond-text'>{t('i18n.main.legislation_recycling')}</h3>
                        <p>{t('i18n.main.legislation_recycling_desc')}</p>
                    </div>
                </div>
                <div className="cardBlue">
                    <img src={Air} alt="" />
                    <div>
                        <h3 className='diamond-text'>{t('i18n.main.legislation_ass')}</h3>
                        <p>{t('i18n.main.legislation_ass_desc')}</p>
                    </div>
                </div>
                <div className="cardBlue">
                    <img src={Conservation} alt="" />
                    <div>
                        <h3 className='diamond-text'>{t('i18n.main.legislation_reuse')}</h3>
                        <p>{t('i18n.main.legislation_reuse_desc')}</p> 
                    </div>
                </div>
                <div className="cardBlue">
                <img src={Conservation} style={{width: '25px'}} alt="" /><img src={Conservation} style={{width: '25px'}}  alt="" />
                    <div>
                        <h3 className='diamond-text'>{t('i18n.main.legislation_rain')}</h3>
                        <p>{t('i18n.main.legislation_rain_desc')}</p> 
                    </div>
                </div>
            </div>
        </div>
        </FadeInSection>
    )
}

export default Legislation;