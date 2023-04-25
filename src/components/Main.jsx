import content1 from "/src/assets/content1.jpg"
import content2 from "/src/assets/content2.jpg"

const Main = () => {
    return (
        <div className="bg-main-purple ">
            <section className="bg-white flex justify-center items-center ">
                <article className="container flex flex-col justify-center items-center gap-6 p-16">
                    <h1 className="font-bold text-6xl">Crush your activities goals with JustFit</h1>
                    <p className="text-xl">Stay motivated and on track with our powerful exercise tracker and access to helpful health content.</p>
                    <button className="bg-main-pink text-xl text-white px-8 py-2 rounded-3xl hover:bg-pink-500">Join for free</button>
                </article>
            </section>
            <section className="container mx-auto">
                <article className="flex text-white pt-16 px-16 max-sm:flex-col max-sm:gap-y-4 max-md:flex-row" >
                    <header className="flex flex-col justify-center items-center w-2/4 pr-10 gap-y-4 max-sm:w-full max-sm:pr-0">
                        <h1 className="text-4xl font-semibold">Personalized goal tracking.</h1>
                        <p className="text-xl">JustFit allows you to set customized fitness goals and track your progress towards them. This ensures that you stay motivated and focused on achieving your goals.</p>
                    </header>
                    <figure className="w-2/4 max-sm:w-full">
                        <img className="block w-full/2 rounded-xl shadow-xl shadow-main-dark-purple" src={content1} alt="excersise image" />
                    </figure>
                </article>
                <article className="flex flex-row-reverse text-white p-16 max-sm:flex-col max-sm:gap-y-4 max-md:flex-row">
                    <header className="flex flex-col justify-center items-center w-1/2 pl-10 gap-y-4 max-sm:w-full max-sm:pl-0">
                        <h1 className="text-4xl font-semibold">Track your exercise progress.</h1>
                        <p className="text-xl">JustFit allows you to easily track your workouts and monitor your progress towards your fitness goals. You can view your data in easy-to-read graphs and charts, making it easier to make informed decisions about your fitness routine.</p>
                    </header>
                    <figure className="w-1/2 max-sm:w-full">
                        <img className="block w-full rounded-xl shadow-xl shadow-main-dark-purple" src={content2} alt="excersise image" />
                    </figure>
                </article>
            </section>
        </div>
    );
}

export default Main;