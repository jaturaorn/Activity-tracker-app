import React, { useState } from 'react'
import ActivityTracker from '../components/ActivityTracker'
import GoalTracker from '../components/GoalTracker'

function Dashboard() {
  const [test, setText] = useState(0);

  return (
    <div className="flex flex-col items-center h-full">
      {/* Status Section */}
      <div className="w-full">
        <div className="container border-2 border-yellow-500 mx-auto">
          <h1>Status section</h1>
          <h1>Status section</h1>
          <h1>Status section</h1>
          <h1>Status section</h1>
          <h1>Status section</h1>
          <h1>Status section</h1>
          <h1>Status section</h1>
          <h1>Status section</h1>
          <h1>Status section</h1>
          <h1>Status section</h1>
          <h1>Status section</h1>
          <h1>Status section</h1>
        </div>
      </div>


      {/* Graph Section */}
      <div className="w-full">
        <div className="container border-2 border-red-500 mx-auto">
          <h1>Graph section</h1>
          <h1>Graph section</h1>
          <h1>Graph section</h1>
          <h1>Graph section</h1>
          <h1>Graph section</h1>
          <h1>Graph section</h1>
          <h1>Graph section</h1>
          <h1>Graph section</h1>
        </div>
      </div>


      {/* Bottom Section */}
      <div className="w-full flex-grow h-screen-2/4">
        <div className="container mx-auto border-2 border-yellow-700">
          <h1 className="text-3xl font-bold py-2">Your Tracking</h1>
        </div>
        <div className="container mx-auto grid grid-cols-4 gap-x-4 max-md:grid-cols-1">
          <ActivityTracker />
          <GoalTracker />
        </div>
      </div>
    </div>
  )
}

export default Dashboard