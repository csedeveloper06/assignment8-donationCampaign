import './Banner.css'

const Banner = () => {
    return (
            <div className="banner-container flex flex-col items-center justify-center mt-36 h-screen">
                <h1 className="text-2xl font-bold lg:text-5xl">I Grow By Helping People In Need</h1>
                <div className="flex mt-10">
                        <input type="text" placeholder="Search here..." 
                                className="text-opacity-100 input rounded-r-[0] border-1 border-gray-300 
                                    w-full max-w-xs" />
                        <button className="  bg-[#FF444A] text-white w-40 rounded-l-[0] 
                            rounded-xl">Search</button>
                   </div> 
            </div>
    );
};

export default Banner;