import { data } from "autoprefixer";
import { useEffect, useState } from "react";
import Donation from "../Donation/Donation";


const FeaturedDonations = () => {

    const [donations,setDonations] = useState([]);

    useEffect(() =>{
        fetch('donations.json')
        .then(res => res.json())
        .then(data => setDonations(data));
    },[])

    return (
       <div className="grid grid-cols-1 gap-6 p-16 md:grid-cols-2 md:p-20 md:gap-10 lg:grid-cols-4">
            
            {
                donations.map(donation => <Donation 
                    key={donation.id} 
                    donation={donation}
                    ></Donation>)
            }
            
       </div>
    );
};

export default FeaturedDonations;