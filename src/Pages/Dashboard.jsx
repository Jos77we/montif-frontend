import React from 'react'
import TabsLayout from '../Design/TabsLayout'
import HomeContent from '../Contents/HomeContent'


const Dashboard = () => {
  return (
    <TabsLayout content={<HomeContent/>} />
  )
}

export default Dashboard