import React from 'react'

import Navbar from '../components/header/Navbar'
import Banner2 from '../components/partner/Banner2'
import Works from '../components/partner/Works'
import Support from '../components/partner/Support'

const PartnerPage = () => {
  return (
    <div>
      <Navbar />

      <div>
        <Banner2 />
        <hr style={{ margin: '50px auto', width: '70%' }} />
        <Works />
        <hr style={{ margin: '50px auto', width: '70%' }} />
        <Support />
      </div>
    </div>
  )
}

export default PartnerPage
