const VideoBanner = () => {
    return (
        <div className="bg-primary">
            <div className="container grid grid-cols-1 items-center md:grid-cols-3 md:gap-8">
                {/* Video Section */}
                <div>
                    <iframe
                        className="aspect-video w-full rounded-md"
                        src="https://www.youtube.com/embed/qZrCNktrp6g"
                        frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen
                    ></iframe>
                </div>

                {/* Text Section */}
                <div className="flex flex-col items-center gap-4 text-center text-white md:col-span-2 md:items-start md:text-left">
                    <h1 className="text-3xl font-bold">Make your project with CoZ</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error, magnam!</p>
                </div>
            </div>
        </div>
    );
};

export default VideoBanner;
