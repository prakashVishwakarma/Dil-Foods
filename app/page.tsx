import Header from '@/Components/page'
import React from 'react'

const Home = () => {

  const route = {
    dashboard: 'routes.Business.dashboard',
    create: 'routes.Business.createBusiness',
    edit: () => 'routes.Business.editBusiness',
    details: () => 'routes.Business.businessDetails',
  }

  return (
    <div>
      home
      <Header route={route} />
    </div>
  )
}

export default Home
