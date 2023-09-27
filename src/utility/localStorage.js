const getStoredDonationApplication = () => {
    const storedDonationApplication = localStorage.getItem('donation-application');
    if(storedDonationApplication){
        return JSON.parse(storedDonationApplication);
    }
    return [];
}

const saveDonationApplication = id =>{
    const storedDonationsApplications = getStoredDonationApplication();
    const exists = storedDonationsApplications.find(donationId => donationId === id);
    if(!exists){
        storedDonationsApplications.push(id);
        localStorage.setItem('donation-application',JSON.stringify(storedDonationsApplications));
    }
}
 export {getStoredDonationApplication,saveDonationApplication}