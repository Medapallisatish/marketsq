import Contactus from "../ContactUs";
import { Link, useNavigate } from "react-router-dom";
import Header from "../Header";
import { FaMinusCircle, FaPlusCircle } from "react-icons/fa";
import { useState, useEffect } from "react";
import { FaIndianRupeeSign } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa";


import "./index.css";

const BookingForm = () => {
    const [plusroomData, setCount] = useState("");
    const [checkInDate, setCheckInDate] = useState("");
    const [checkOutDate, setCheckOutDate] = useState("");
    const [Name, setName]=useState("")
    const [Gmail, setGmail]=useState("")
    const [contactNumber, setContact]=useState("")
    const [AdultCount, setAdult]=useState("")
    const [childrenCount, setChildren]=useState("")
    const [formsubmitted, setFormSubmit]=useState(false)
    
    //const [plusroomData, setroomData]=useState("")
    const navigate = useNavigate();

    const box1=(event)=>{
            setName(event.target.value)
            localStorage.getItem("Name")

            

    }
    const box2=(event)=>{
        setGmail(event.target.value)
        localStorage.getItem("Gmail")
        
    }
    const box3=(event)=>{
        setContact(event.target.value)
        localStorage.getItem("contactNumber")
    }
    const box4=(event)=>{
        setAdult(event.target.value)
        localStorage.getItem("AdultCount")
    }
    const box5 =(event)=>{
        setChildren(event.target.value)
        localStorage.getItem("childrenCount")
    }


    
    const PriceButton=()=>{
        localStorage.setItem("name", Name)
        localStorage.setItem("gmail", Gmail)
        localStorage.setItem("contact", contactNumber)
        localStorage.setItem("adult", AdultCount)
        localStorage.setItem("children", childrenCount)
        setFormSubmit(true)
    }





    // Load dates from localStorage on component mount
    useEffect(() => {
        const storedCheckInDate = localStorage.getItem("checkInDate");
        const storedCheckOutDate = localStorage.getItem("checkOutDate");
       const storedroomData=localStorage.getItem("plusroomData")
       const storedName=localStorage.getItem("Name")
       const storedGmail=localStorage.getItem("Gmail")
       const storedContactNumber=localStorage.getItem("contactNumber")
       const storedadultCount=localStorage.getItem("AdultCount")
const storedchildrenCount=localStorage.getItem("childrenCount")

        if (storedCheckInDate) setCheckInDate(storedCheckInDate);
        if (storedCheckOutDate) setCheckOutDate(storedCheckOutDate);
        if(storedroomData) setCount(storedroomData);
        
    }, []);

    const minusClick = () => {
        setCount(prevCount => Math.max(prevCount - 1, 0));
        
    };

    const plusClick = () => {
        setCount(prevCount => prevCount + 1);
    };

    const handleNavigation = (e) => {
        e.preventDefault();
        navigate('/booking');
    };

    const handleCheckInDateChange = (event) => {
        const date = event.target.value;
        setCheckInDate(date);
        localStorage.setItem("checkInDate", date); // Update localStorage
    };

    const handleCheckOutDateChange = (event) => {
        const date = event.target.value;
        setCheckOutDate(date);
        localStorage.setItem("checkOutDate", date); // Update localStorage
    };
    return (
        <div className="haha">
            <div>
            <Link to="/home" className="book"><Header/></Link> 
            </div>


{!formsubmitted ? ( 
                <div className="bookings">
                    <div className="text-container">
                        <input type="text" placeholder="Name" className="box1" required onChange={box1} value={Name}/>
                        <input type="email" placeholder="Gmail" className="box2" onChange={box2} value={Gmail}  required />
                    </div>
                    <input type="number" placeholder="Contact Number" className="box3"   onChange={box3}  value={contactNumber} required />
                    <input type="number" placeholder="Adult" className="box4" onChange={box4} value={AdultCount}     />
                    <input type="number" placeholder="Children" className="box5"  onChange={box5} value={childrenCount}/>

               </div>
):(

              


               <div className="confirm-container">
                <div className="g">
                <img src="https://cdn-icons-png.flaticon.com/256/14090/14090371.png" alt="check" className="green-image"/>
                <h2 style={{marginTop:10}}>Order Confirmed</h2>
                </div>

                <p style={{fontWeight:600}}>Booking Details</p>

                                <ul className="confirm-details">
                                    <span className="yes" style={{fontWeight:600}}>{Name} </span>
                                    <span className="yes">{Gmail}  </span>
                                    <span className="yes">+91 {contactNumber}  </span>
                                    <span className="yes">Check-In : {checkInDate}</span>
                                    <span className="yes">Check-Out : {checkOutDate}</span>
                                    <span className="yes">Guests : {AdultCount} Adult , {childrenCount} Children   </span>
                                    <span className="yes">Selected Rooms : {plusroomData}</span>
                                </ul>
                               
                                 <div className="confirmed-text">
                                    <hr style={{marginTop:10, width:220}}/>
                                    <span style={{fontWeight:600, marginTop:15}}>SubTotal: <FaIndianRupeeSign style={{marginTop:6}}/> 12,430</span>
                                    
                                </div>
                                </div>


                            )}

                            {!formsubmitted && (
                                <>

                            <div className="booking-containers">
                                    <div className="date-form">
                                        <label>CHECK-IN</label>
                                            <input
                                                type="date"
                                                className="date"
                                                value={checkInDate}
                                                onChange={handleCheckInDateChange} />
                                    </div>

                                    <div className="date-form">
                                        <label>CHECK-OUT</label>
                                            <input
                                                type="date"
                                                className="date"
                                                value={checkOutDate}
                                                onChange={handleCheckOutDateChange} />
                                    </div>
                                    <div className="rooms">
                                        <label>ROOMS</label>
                                        <div className="plus-minus">
                                            <FaMinusCircle className="minus" onClick={minusClick} />
                                            <span>{plusroomData}</span>
                                            <FaPlusCircle className="plus" onClick={plusClick} />
                                        </div>
                                    </div>
                                    <div className="button-container">
                                        <button type="submit" className="book-button" onClick={PriceButton}><FaIndianRupeeSign />12,430<span className="arrow"><FaArrowRight /></span></button>
                                        <span className="clicks">Click to pay the token amount</span>
                                    </div>
                                </div>
                                </>
                                
                   
)}



<div className="contactFoot">
<Contactus />

</div>
                </div>

    );
};

export default BookingForm;
