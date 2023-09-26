import { Link } from "react-router-dom";


const Donation = ({donation}) => {

    const{id,image,title,category,card_bg_color,text_color,category_bg_color,price} = donation;

    return (
        <Link to={`/donation/${id}`}>
            <div className="card card-compact w-72 bg-base-100 shadow-xl" style={{backgroundColor:card_bg_color}}>
                 <figure>
                    <img className="w-[100%] h-[100%]" src={image} alt=""/>
                </figure>
                <div className="card-body">
                    <h2 className="card-title w-20  text-sm rounded-lg items-center py-1 px-2" 
                        style={{backgroundColor:category_bg_color, color:text_color}}>{category}</h2>
                    <p style={{color:text_color}}>{title}</p>
                    <div className="card-actions">
                        <button className="btn text-white hidden" 
                            style={{backgroundColor:text_color}}>View Details</button>
                        <span className="hidden">{price}</span>
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default Donation;