import { useLoaderData, useParams } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { saveDonationApplication } from "../../utility/localStorage";
import './Donate.css'



const DonationDetails = () => {

    const donations = useLoaderData();
    const {id} = useParams();
    const idInt = parseInt(id);
    const donation = donations.find(donation => donation.id === idInt);
    const {image,price,title,description,text_color} = donation;

    const handleApplyDonate = () =>{
        saveDonationApplication (idInt);
        toast(" You have donated successfully !");
    }

    return (
        <div>
            <div>
                <div className="p-8 relative">
                    <img className="h-[550px] w-[1100px] ml-20" src={image} alt="" />
                        <div className="absolute donate-bg h-32 w-[1100] -mt-32 right-[136px] left-[110px]">
                             <button onClick={handleApplyDonate} 
                            className="btn ml-10 mt-10 text-white border-0" 
                            style={{backgroundColor:text_color}}>Donate<span>{price}TK</span></button>
                        </div>
                </div>
               
            </div>
            <div>
                <h1 className="text-4xl font-bold p-6">{title}</h1>
                <p className="text-[16] text-[hsl(0,0%,64%)] text-justify px-6 pb-8">{description}</p>
            </div>
            <ToastContainer />
        </div>
    );
};

export default DonationDetails;