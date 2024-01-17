import React from 'react'

import Main1 from './container/Main1'
import Faq from '../blog/container/Faq'
import Main0 from './container/Main0'
import Head from './container/Head'
import Main2 from './container/Main2'

export default function Landlord() {
  return (
    <div className=' flex justify-center  flex-col items-center mt-10'>

        <Head/>
        <Main0/>
        <Main1/>
        <Main2/>
        <Faq/>
    </div>
  )
}
