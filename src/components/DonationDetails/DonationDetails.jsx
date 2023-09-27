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
                <div className="pl-8 relative mt-8 md:ml-40 md:mt-10 lg:ml-16 justify-center">
                    <img className="w-[312px] ml-5 lg:h-[550px] lg:w-[1100px]" src={image} />
                        <div className="absolute donate-bg h-16 w-[312px] -mt-16 ml-5 lg:h-32 lg:w-[1100px] 
                            lg:-mt-32">
                             <button onClick={handleApplyDonate} 
                                className="p-2 ml-10 mt-3 rounded-md border-0 text-white lg:btn lg:mt-10 
                                lg:border-0 lg:text-white" 
                            style={{backgroundColor:text_color}}>Donate<span>{price}TK</span></button>
                        </div>
                </div>
               
            </div>
            <div>
                <h1 className="text-center  lg:text-left text-4xl font-bold p-8 lg:ml-20">{title}</h1>
                <p className="text-[hsl(0,0%,64%)] text-sm text-justify p-8 pb-8 lg:text-[16] lg:text-justify lg:ml-20 lg:py-5 
                        lg:pl-8 lg:pr-[124px]">{description}</p>
            </div>
            <ToastContainer />
        </div>
    );
};

export default DonationDetails;