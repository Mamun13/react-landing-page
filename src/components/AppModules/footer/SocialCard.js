import React, { useState } from 'react'
import FooterSocial from './FooterSocial'
import Sdata from './SocialData'

const SocialCard = () => {
    const [socialData, setsocialData] = useState(Sdata);
    console.log(socialData);
  return (
    <>
        <section>
            <div className='container-fluid'>
                <div className='row'>
                    <FooterSocial sendData={socialData}/>
                </div>
            </div>
        </section>
    </>
  )
}

export default SocialCard