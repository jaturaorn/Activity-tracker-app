
// isEdit: boolean
// setCloseModal: boolean, default close: false, state from parent 

import { useState } from "react";
import { caloriesCalculate } from "../utils/utils";
import { useAuth } from "../shared/authContext";
import axios from "axios";
import { useActivityDispatch } from "../shared/activityContext";
import moment from "moment";

function ActivityForm({ isEdit, setCloseModal, selectedActivity, setSelectedActivity }) {
  const { token, userId } = useAuth();
  const { addActivity, updateActivity } = useActivityDispatch();

  const [activity, setActivity] = useState({
    activityType: selectedActivity ? selectedActivity.activityType : "",
    title: selectedActivity ? selectedActivity.title : "",
    dateTime: selectedActivity ? selectedActivity.dateTime : "",
    duration: selectedActivity ? selectedActivity.duration : 0,
    energyBurn: selectedActivity ? selectedActivity.energyBurn : 0,
    distance: selectedActivity ? selectedActivity.distance : 0,
    description: selectedActivity ? selectedActivity.description : "",
  });

  console.log("current : ", activity);

  function handleTitleChange(title) {
    setActivity(prev => { return { ...prev, title } });
  }

  function handleTypeChange(activityType) {
    let energyBurn = caloriesCalculate(activityType, activity.duration);
    setActivity(prev => { return { ...prev, activityType, energyBurn } });
  }

  function handleDateChange(dateTime) {
    setActivity(prev => { return { ...prev, dateTime } });
  }

  function handleDistanceChange(distance) {
    setActivity(prev => { return { ...prev, distance: parseInt(distance) } });
  }

  function handleDescriptionChange(description) {
    setActivity(prev => { return { ...prev, description } });
  }

  function handleHoursChange(e) {
    let value = e.target.value;
    let hours = 0, minutes = 0, totalMinutes = 0;

    if (value !== "") {
      hours = parseInt(value);
      minutes = activity.duration % 60;
      totalMinutes = (hours * 60) + minutes;
    } else {
      totalMinutes = activity.duration % 60;
    }

    let calories = caloriesCalculate(activity.activityType, totalMinutes);

    setActivity(prev => {
      return {
        ...prev,
        duration: totalMinutes,
        energyBurn: calories,
      }
    });

  }

  function handleMinutesChange(e) {
    let value = e.target.value;

    let hours = 0, minutes = 0, totalMinutes = 0;

    if (value !== "") {
      hours = Math.floor(activity.duration / 60);
      minutes = parseInt(value);
      totalMinutes = (hours * 60) + minutes;
    } else {
      totalMinutes = Math.floor(activity.duration / 60) * 60;
    }

    let calories = caloriesCalculate(activity.activityType, totalMinutes);

    setActivity(prev => {
      return {
        ...prev,
        duration: totalMinutes,
        energyBurn: calories,
      }
    });
  }


  async function handleSubmit(e) {
    e.preventDefault();
    console.log(activity, token);

    if (!selectedActivity) {
      addActivity(activity);
    } else {
      updateActivity(selectedActivity._id, activity);
      setSelectedActivity(null);
    }
    setCloseModal(true);
  }

  return (

    <div className="fixed top-0 bottom-0 left-0 right-0 z-20">
      {/* backdrop */}
      <div className="fixed top-0 bottom-0 left-0 right-0 "></div>

      {/* modal content */}
      <div className="z-10 absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 bg-white shadow-xl w-550 rounded-b-md">

        {/* top */}
        <div className="flex justify-between items-center bg-main-purple text-white px-4 py-2 rounded-t-md">
          <span className="font-bold">{!isEdit ? "Create Activity" : "Edit Activity"}</span>
          <span className="cursor-pointer font-bold" onClick={() => setCloseModal(true)}>&#x2715;</span>
        </div>

        {/* mid */}
        <form onSubmit={handleSubmit}>
          <div className="px-4 py-2">
            {/* Choose Activity */}
            <div>
              <div>
                <span className="font-semibold">Choose Activity</span>
              </div>
              <div>
                <select className="border px-2 py-1 rounded-md" name="activityType" value={activity.activityType}  onChange={(e) => handleTypeChange(e.target.value)} required>
                  <option value="" disabled>Select activity</option>
                  <option value="Jogging">Jogging</option>
                  <option value="Abs">Abs</option>
                  <option value="Yoga">Yoga</option>
                  <option value="Pilates">Pilates</option>
                  <option value="Zumba">Zumba</option>
                </select>
              </div>
            </div>
            {/* Habit title */}
            <div className="mt-2">
              <div>
                <span className="font-semibold">Title</span>
              </div>
              <div>
                <input className="w-full border px-2 py-1 rounded-md" type="text" name="title" value={activity.title} placeholder="Enter habit name" onChange={(e) => handleTitleChange(e.target.value)} />
              </div>
            </div>

            {/* Datetime */}
            <div className="flex gap-x-4 w-full mt-2">
              {/* Date */}
              <div className="flex flex-col w-1/3">
                <span className="font-semibold">Date</span>
                <input className="px-2 py-1 border w-full rounded-md" type="date" name="date" value={activity.dateTime} onChange={(e) => handleDateChange(e.target.value)} />
              </div>

              {/* Time duration */}
              <div className="flex flex-col w-2/3">
                <span className="font-semibold">Time</span>
                <div className="flex gap-x-2 flex-wrap">
                  <input className="px-2 py-1 border rounded-md" type="number" min="0" max="10000" placeholder="hour" value={activity.duration ? Math.floor(activity.duration / 60) : undefined} onChange={handleHoursChange} />
                  <input className="px-2 py-1 border w-24 rounded-md" type="number" min="0" max="59" placeholder="minute" value={activity.duration ? Math.floor(activity.duration % 60) : undefined} onChange={handleMinutesChange} />
                </div>
              </div>
            </div>

            <div className="flex gap-x-2 mt-2">
              <div className="w-1/3">
                {/* Energy burn */}
                <span className="font-semibold">Energy burn(Calories)</span>
                <input className="px-2 py-1 border w-full rounded-md appearance-none" type="number" name="calories" min="0" max="10000000" value={activity.energyBurn} placeholder="calcories" disabled />
              </div>
              <div className="w-1/3">
                {/* Distance (kilometer) */}
                <span className="font-semibold">Distance (kilometer)</span>
                <input className="px-2 py-1 border w-full rounded-md appearance-none" type="number" name="distance" min="0" placeholder="Enter distance" value={activity.distance} onChange={(e) => handleDistanceChange(e.target.value)} />
              </div>
            </div>
            <div>
              <div className="flex flex-col mt-2">
                <span className="font-semibold">Description</span>
                <textarea className="px-2 py-1 border resize-none rounded-md h-20" name="description" placeholder="What did you do?" value={activity.description} onChange={(e) => handleDescriptionChange(e.target.value)} />
              </div>
            </div>
          </div>
          {/* bottom */}
          <div className="px-4 py-4 flex justify-end items-center gap-x-2 text-white">
            <button className="bg-main-purple px-4 py-1 rounded-md" activityType="submit" >{!isEdit ? "Create" : "Edit"}</button>
            <button className="bg-main-pink px-4 py-1 rounded-md" onClick={() => {
              setCloseModal(true)
              setSelectedActivity(null);
            }}>Cancel</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default ActivityForm;