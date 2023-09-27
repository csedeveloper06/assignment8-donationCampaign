import { useLoaderData, useParams } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { saveDonationApplication } from "../../utility/localStorage";



const DonationDetails = () => {

    const donations = useLoaderData();
    const {id} = useParams();
    const idInt = parseInt(id);
    const donation = donations.find(donation => donation.id === idInt);
    const {image,price,title,description} = donation;

    const handleApplyDonate = () =>{
        saveDonationApplication (idInt);
        toast(" You have donated successfully !");
    }

    return (
        <div>
            <div className="p-8">
                <img className="h-[550px] w-[1100px] ml-20" src={image} alt="" />
            </div>
            <div>
                <button onClick={handleApplyDonate} className="btn">Donate<span>{price}TK</span></button>
            </div>
            <h1>{title}</h1>
            <p>{description}</p>

            <ToastContainer />
        </div>
    );
};

export default DonationDetails;