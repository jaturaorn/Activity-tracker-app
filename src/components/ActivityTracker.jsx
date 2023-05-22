import ActivityList from "./ActivityList"

function ActivityTracker({ setCloseModal, setSelectedActivity }) {
    return (
        <div className="col-span-7 border-main-purple border-2 rounded-t-xl shadow-lg max-md:rounded-t-none">
            <div className="bg-main-purple px-8 py-4 rounded-t-lg max-md:rounded-t-none">
                <h1 className="text-white text-2xl font-bold ">Activities Tracking</h1>
        </div>
            <div className="w-full">
                <div className="pt-8 py-8 shadow-sm">
                    <button className="bg-main-pink text-white px-8 py-2 text-2xl block mx-auto rounded-lg shadow-lg" onClick={() => setCloseModal(false)}>Create Activity</button>
                </div>
                <div className="flex flex-col gap-y-6 px-24 py-8 overflow-auto w-full h-900 max-md:px-2 max-xl:px-8">
                    <ActivityList setSelectedActivity={setSelectedActivity} setCloseModal={setCloseModal} />
                </div>
            </div>
        </div>
    )
}

export default ActivityTracker;