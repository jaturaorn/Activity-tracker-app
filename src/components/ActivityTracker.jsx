import yoga from "../assets/yoga64.png"
import edit from "../assets/edit.png"
import edit2 from "../assets/edit2.png"
import edit3 from "../assets/edit3.png"

function ActivityTracker() {
    return (
        <div className="col-span-2 border-main-purple border-2">
            <div className="bg-main-purple px-4 py-2">
                <h1 className="text-white font-semibold">Activities Tracking</h1>
            </div>
            <div className="w-full">
                <div className="py-4">
                    <button className="bg-main-pink text-white px-4 py-1 block mx-auto rounded-lg">Create Activity</button>
                </div>
                <div className="flex flex-col gap-y-4 px-10 overflow-auto w-full h-550 max-md:px-2">
                    <ActivityList />
                </div>
            </div>
        </div>
    )
}

function ActivityList() {
    return (
        <>
            <ActivityCard />
            <ActivityCard />
            <ActivityCard />
            <ActivityCard />
            <ActivityCard />
            <ActivityCard />
            <ActivityCard />
        </>
    )
}

function ActivityCard() {
    return (
        <div className="flex justify-between bg-main-purple text-white rounded-3xl py-4 px-2 max-md:px-8">
            {/* left */}
            <div className="w-1/4 pt-4 max-md:hidden">
                <img className="block mx-auto" src={yoga} />
            </div>

            {/* center */}
            <div className="w-3/4">
                <div>
                    <span className="font-semibold">Running with friend</span>
                </div>
                <div className="flex justify-between items-center">
                    <span><span className="font-semibold">Duration:</span> 01:00 hrs</span>
                    <span>14/03/2023</span>
                </div>
                <div className="flex justify-between items-center">
                    <span><span className="font-semibold">Distance:</span> 01:00 hrs</span>
                    <span>10:00 AM</span>
                </div>
                <div>
                    <span><span className="font-semibold">Energy burn:</span> 3000 Cal</span>
                </div>
                <div className="pt-2">
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley</p>
                </div>
            </div>

            {/* right */}
            <div className="w-1/4 flex justify-center items-start">
                <img className="block" src={edit3} width="48px" />
                <img className="block" src={edit3} width="48px" />
            </div>
        </div>
    )
}

export default ActivityTracker;