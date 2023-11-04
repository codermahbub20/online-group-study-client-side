

const Banner = () => {
    return (
        <div>
            <div className="carousel md:h-[600px] ">
                <div id="slide1" className="carousel-item relative w-full">
                    <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="w-full rounded-lg" />

                    <div className="absolute rounded-xl flex items-center h-full left-0 md:top-0  bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)]">

                        <div className='md:space-y-6 ml-12 text-white md:w-1/2'>
                            <h1 className='text-xl md:text-3xl lg:text-5xl '>Start Learn from Home and Learn group study platform</h1>
                            <p className="md:text-xl">Collaborative learning, diverse insights, accountability, and improved understanding in groups</p>
                            <button className='btn bg-[#FF3811] text-white border-none hover:text-black mr-4 '>See More...</button>
                            <button className="btn text-white hover:bg-[hsl(10,100%,53%)] btn-outline">Join With Us</button>
                        </div>
                    </div>

                    <div className="absolute flex  justify-end transform -translate-y-1/2 left-5  right-5 bottom-0 gap-4">
                        <a href="#slide4" className="btn btn-circle">❮</a>
                        <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full">
                    <img src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=2071&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="w-full rounded-lg" />

                    <div className="absolute rounded-xl flex items-center h-full left-0 md:top-0  bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)]">

                        <div className='md:space-y-6 ml-12 text-white md:w-1/2'>
                            <h1 className='text-xl md:text-3xl lg:text-5xl '>Start Learn from Home and Learn group study platform</h1>
                            <p className="md:text-xl">Collaborative learning, diverse insights, accountability, and improved understanding in groups</p>
                            <button className='btn bg-[#FF3811] text-white border-none hover:text-black mr-4 '>See More...</button>
                            <button className="btn text-white hover:bg-[#FF3811] btn-outline">Join With Us</button>
                        </div>
                    </div>

                    <div className="absolute flex  justify-end transform -translate-y-1/2 left-5  right-5 bottom-0 gap-4">
                        <a href="#slide1" className="btn btn-circle">❮</a>
                        <a href="#slide3" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full">
                    <img src="https://demo.omexer.com/main/wp-content/uploads/sites/3/2021/04/banner-3.jpg" className="w-full rounded-lg" />

                    <div className="absolute rounded-xl flex items-center h-full left-0 md:top-0  bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)]">

                        <div className='md:space-y-6 ml-12 text-white md:w-1/2'>
                            <h1 className='text-xl md:text-3xl lg:text-5xl '>Start Learn from Home and Learn group study platform</h1>
                            <p className="md:text-xl">Collaborative learning, diverse insights, accountability, and improved understanding in groups</p>
                            <button className='btn bg-[#FF3811] text-white border-none hover:text-black mr-4 '>See More...</button>
                            <button className="btn text-white hover:bg-[#FF3811] btn-outline">Join With Us</button>
                        </div>
                    </div>


                    <div className="absolute flex  justify-end transform -translate-y-1/2 left-5  right-5 bottom-0 gap-4">
                        <a href="#slide2" className="btn btn-circle">❮</a>
                        <a href="#slide4" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide4" className="carousel-item relative w-full">
                    <img src="https://demo.omexer.com/main/wp-content/uploads/sites/3/2021/04/banner-6.jpg" className="w-full rounded-lg" />

                    <div className="absolute rounded-xl flex items-center h-full left-0 md:top-0  bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)]">

                        <div className='md:space-y-6 ml-12 text-white md:w-1/2'>
                            <h1 className='text-xl md:text-3xl lg:text-5xl '>Start Learn from Home and Learn group study platform</h1>
                            <p className="md:text-xl">Collaborative learning, diverse insights, accountability, and improved understanding in groups</p>
                            <button className='btn bg-[#FF3811] text-white border-none hover:text-black mr-4 '>See More...</button>
                            <button className="btn text-white hover:bg-[#FF3811] btn-outline">Join With Us</button>
                        </div>
                    </div>

                    <div className="absolute flex  justify-end transform -translate-y-1/2 left-5  right-5 bottom-0 gap-4">
                        <a href="#slide3" className="btn btn-circle">❮</a>
                        <a href="#slide1" className="btn btn-circle">❯</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;