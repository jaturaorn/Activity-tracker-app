import Footer from "../components/Footer"

function RecipeDetail({ recipe }) {
    return (
        <>
            <div>
                {/* Header */}
                <section className="flex flex-col h-screen items-center justify-between bg-cover" style={{ backgroundImage: `url(${recipe.image})` }}>
                    <div className="container mt-8">
                        <h3 className="text-left text-3xl bg-red-100 inline-block px-8 py-2 rounded-full bg-opacity-80">{recipe.meal}</h3>
                    </div>
                    <div className="w-full bg-gray-100 bg-opacity-50 h-60 flex flex-col items-center justify-center">
                        <h1 className="text-center text-9xl text-white bg-100 font-semibold tracking-widest">{recipe.title}</h1>
                    </div>
                    <div className="container flex justify-end">
                        <h2 className="text-right text-5xl text-black mb-8 bg-red-100 inline-block px-8 py-2 rounded-full">{recipe.kcal}kcal</h2>
                    </div>
                </section>

                {/* Ingredients */}
                <section>
                    <article className="container mx-auto py-12 break-words">
                        <h1 className="text-6xl">Ingredients</h1>
                        <ul className="list-disc list-outside ml-20 mt-8 text-3xl">
                            {recipe.ingredients.map((ingredientItem) => <li key={crypto.randomUUID()}>{ingredientItem}</li>)}
                        </ul>
                    </article>
                </section>

                {/* How to make ... */}
                <section className="bg-main-purple text-white py-12 break-words">
                    <article className="container mx-auto">
                        <h1 className="text-center text-6xl mt-8 mb-20">How To Make {recipe.title}</h1>
                        <ul className="list-disc list-outside ml-20 mt-8 text-3xl ">
                            {recipe.howtomake.map((stepItem) => <li key={crypto.randomUUID()}>{stepItem}</li>)}
                        </ul>
                    </article>
                </section>
            </div>
            <Footer />
        </>
    );
}

export default RecipeDetail;