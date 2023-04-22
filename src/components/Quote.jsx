const Quote = ({ title, imgURL, name }) => {
    return (
        <div className="bg-main-dark-purple flex justify-center items-center">
            <div className="container flex flex-col items-center justify-center  text-white gap-y-10 pt-10 pb-10">
                <h1 className="text-5xl font-bold text-center">{title}</h1>
                <div className="flex items-center justify-center gap-x-4">
                    <img className="block w-32 h-32 object-cover rounded-full" src={imgURL} alt="user review image" />
                    <p className="text-3xl">{name}</p>
                </div>
            </div>
        </div>
    );
}

export default Quote;