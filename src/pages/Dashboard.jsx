
import DashHeroTop from '../components/DashHeroTop'

import React, { useState } from 'react'
import ActivityTracker from '../components/ActivityTracker'
import GoalTracker from '../components/GoalTracker'


function Dashboard() {

  return (

    <div className="flex flex-col items-center h-full">
      {/* Status Section */}
      <div className="w-full">
        <div className="container border-2 border-yellow-500 mx-auto">

        <DashHeroTop />
          
          
        </div>
      </div>


      {/* Graph Section */}
      <div className="w-full">
        <div className="container border-2 border-red-500 mx-auto">

          {/* code here */}

          <h1>Graph section</h1>
          <h1>Graph section</h1>
          <h1>Graph section</h1>
          <h1>Graph section</h1>
          <h1>Graph section</h1>
          <h1>Graph section</h1>
          <h1>Graph section</h1>
          <h1>Graph section</h1>
          <h1 className="text-3xl">Code here.................</h1>

        </div>
      </div>


      {/* Activity and Goal Section */}
      <div className="w-full flex-grow pb-14">
        <div className="container mx-auto ">
          <h1 className="text-3xl font-bold py-2 tracking-wide">Your Tracking</h1>
        </div>
        <div className="container mx-auto grid grid-cols-12 gap-x-8 max-md:grid-cols-1 max-lg:grid-cols-1 max-xl:gap-x-0 max-xl:gap-y-10">
          <ActivityTracker />
          <GoalTracker />
        </div>
      </div>

    </div>
  )
}

export default Dashboard