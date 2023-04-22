const Main = () => {
    return (
        <main>
            <section className="bg-white flex flex-col justify-center items-center gap-4 p-10">
                <h1 className="font-bold text-4xl">Crush your activities goals with JustFit</h1>
                <p className="text-xl">Stay motivated and on track with our powerful exercise tracker and access to helpful health content.</p>
                <button className="bg-pink-500 text-xl text-white px-8 py-2 rounded-3xl hover:bg-pink-400">Join for free</button>
            </section>
            <section>
                <article className="flex bg-purple-600 text-white p-10 max-sm:flex-col max-sm:gap-y-4 max-md:flex-row" >
                    <header className="flex flex-col justify-center items-center w-1/2 pr-10 gap-y-4 max-sm:w-full max-sm:pr-0">
                        <h1 className="text-3xl font-semibold">Personalized goal tracking.</h1>
                        <p className="text-xl">JustFit allows you to set customized fitness goals and track your progress towards them. This ensures that you stay motivated and focused on achieving your goals.</p>
                    </header>
                    <figure className="w-1/2 max-sm:w-full">
                        <img className="block w-full rounded-xl " src="https://images.unsplash.com/photo-1516398810565-0cb4310bb8ea?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1065&q=80" alt="excersise image" />
                    </figure>
                </article>

                <article className="flex flex-row-reverse bg-purple-600 text-white p-10 max-sm:flex-col max-sm:gap-y-4 max-md:flex-row">
                    <header className="flex flex-col justify-center items-center w-1/2 pl-10 gap-y-4 max-sm:w-full max-sm:pl-0">
                        <h1 className="text-3xl font-semibold">Track your exercise progress.</h1>
                        <p className="text-xl">JustFit allows you to easily track your workouts and monitor your progress towards your fitness goals. You can view your data in easy-to-read graphs and charts, making it easier to make informed decisions about your fitness routine.</p>
                    </header>
                    <figure className="w-1/2 max-sm:w-full">
                        <img className="block w-full rounded-xl" src="https://images.unsplash.com/photo-1590556409324-aa1d726e5c3c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80" alt="excersise image" />
                    </figure>
                </article>

            </section>
        </main>
    );
}

export default Main;