

const AppliedDonation = ({donation}) => {

    const{id,image,title,category,card_bg_color,text_color,category_bg_color,price} = donation;
    return (
        <div className="card card-compact card-side w-80 ml-5  lg:w-[600px] bg-base-100 shadow-xl" style={{backgroundColor:card_bg_color}}>
             <figure>
                <img className="w-[100%] h-[100%]" src={image} alt=""/>
            </figure>
            <div className="card-body">
                <h2 className="card-title w-20  text-sm rounded-lg items-center py-1 px-2" 
                    style={{backgroundColor:category_bg_color, color:text_color}}>{category}</h2>
                <p className="text-sm lg:text-xl font-semibold">{title}</p>
                <p  className="text-xs lg:text-2xl" style={{color:text_color}}>{price} Tk</p>
                <div className="card-actions">
                    <button className="tex-xs p-1 text-white rounded-lg   lg:btn lg:text-white justify-start" 
                        style={{backgroundColor:text_color}}>View Details</button>
                </div>
            </div>
        </div>
    );
};

export default AppliedDonation;