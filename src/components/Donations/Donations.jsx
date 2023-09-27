import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredDonationApplication} from "../../utility/localStorage";
import Donation from "../Donation/Donation";
import AppliedDonation from "../AppliedDonation/AppliedDonation";
import { key } from "localforage";


const Donations = () => {

    const donations = useLoaderData();
    const[appliedDonations, setAppliedDonations] = useState([]);
    const [dataLength,setDataLength] = useState(4);

    useEffect(() =>{
        const storedDonationIds = getStoredDonationApplication();
        if(donations.length > 0){
            const donationsApplied = [];
            for(const id of storedDonationIds){
                const donation = donations.find(donation => donation.id === id);
                if(donation){
                    donationsApplied.push(donation);
                }
            }
            setAppliedDonations(donationsApplied);
        }
    },[donations])

    return (     
        <div>
            <div className="ml-10 grid grid-cols-1 gap-4 mt-16 md:grid-cols-2 lg:grid-cols-2">
                {
                    appliedDonations.slice(0,dataLength).map(donation =><AppliedDonation
                        key={donation.id} 
                        donation={donation}
                        ></AppliedDonation>
                    )
                }
            </div>
         
            <div className={dataLength === appliedDonations.length ? 'hidden' : ''}>
                <button onClick={() => setDataLength(appliedDonations.length)} 
                    className="btn btn-primary">See All</button>
            </div>
        </div>
    );
};

export default Donations;