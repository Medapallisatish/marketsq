import {Component, useState} from "react"
import {BrowserRouter, useNavigate} from "react-router-dom"
import {HashLink as Link} from "react-router-hash-link"

import { FaFacebook } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { FaMinusCircle } from "react-icons/fa";
import { FaPlusCircle } from "react-icons/fa";



import "./index.css"



const Home =()=>{

const [CheckInDateInput, setDateInput]=useState("")    
const [ CheckOutDateInput, setDateOutput]=useState("") 
const [roomData, setRoomData]= useState("")
    
    const [count, setCount]=useState(0)
    const navigate=useNavigate()

    const minusClick=()=>{
        setCount(prevCount=>Math.max(prevCount-1, 0))

    }





    const plusClick=()=>{
        setCount(prevCount=>prevCount+1)
    }

    const Navigation=()=>{
        localStorage.setItem("checkInDate" , CheckInDateInput)
        localStorage.setItem("checkOutDate", CheckOutDateInput)
        localStorage.setItem("plusroomData", count)

    navigate('/booking')
    }

    const checkInDateData=(event)=>{
        setDateInput(event.target.value)
    }

    const CheckOutDateData=(event)=>{
    setDateOutput(event.target.value)
}


        const servicesData = [
            { title: "High-Speed Internet", description: "Reliable, fast internet for seamless remote work.", icon: "https://i.pinimg.com/564x/cc/3c/d8/cc3cd82eecc6a933a0b0912b7dbf5662.jpg" },
            { title: "Healthy Meals", description: "Nutritious meals tailored to keep you energized.", icon: "https://i.pinimg.com/564x/e7/52/d8/e752d87ad12846872299e85587d7ce41.jpg" },
            { title: "Homely Stay", description: "Comfortable, home-like accommodation to make you feel at ease.", icon: "https://i.pinimg.com/564x/d3/81/3e/d3813e2b8f37c6f7960dadda161bea1d.jpg" },
            { title: "Transportation", description: "Convenient travel options for easy commuting.", icon: "https://i.pinimg.com/564x/bf/4f/a2/bf4fa261767de12bc7a726d9323863dd.jpg" },
            { title: "Food Delivery", description: "Quick food delivery to keep you fueled during work.", icon: "https://i.pinimg.com/564x/5c/0b/6d/5c0b6d069e86871472969dd71be509b8.jpg" },
            { title: "Tourism", description: "Explore local attractions and enjoy guided tours.", icon: "https://i.pinimg.com/564x/8b/d3/b2/8bd3b2fd55315f4c292461b7bd995736.jpg" },
            { title: "Job Assistance", description: "Support to connect with local job opportunities.", icon: "https://i.pinimg.com/564x/90/0a/42/900a420973d57fa420190a65b467a177.jpg" },
            { title: "Rental Services", description: "Access to rental options for equipment, vehicles, and more.", icon: "https://i.pinimg.com/564x/f5/c4/3d/f5c43df87ed342297a519ba9d202e111.jpg" },
            { title: "Online Shop", description: "Shop for essentials or souvenirs conveniently online.", icon: "https://i.pinimg.com/564x/dd/4c/f9/dd4cf936ebfb157cb22ce71771f7c0eb.jpg" },
          ];

        return(

            <div className="container">
            <div className="Home-container">
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <Link className="navbar-brand" to="/home"><h3>Brisphere</h3></Link>
  
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link className="nav-link active" to="#Discover">Discover</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="#Services">Services</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="#About us">About Us</Link>
        </li>
      </ul>
    </div>
  </div>
</nav>
                <div className="thala">
                <div className="head-container">
                    <div className="title-container">
                        <span className="title-heading">Work from ladakh</span>
                        <p className="title-para">India's first true digital tourism ecosystem</p>
                        <div className="facebook">
                            <FaFacebook className="bookIcon"/>
                            <AiFillInstagram className="instagram"/>
                        </div>
                    </div>
                    </div>
                    <div className="booking-container">
                        <div className="date-form">
                            <label>CHECK-IN</label>
                        <input type="date" className="date" value={CheckInDateInput} onChange={checkInDateData}/>  
                    </div>
                    <div className="date-form">
                            <label>CHECK-OUT</label>
                            <input type="date" className="date" value={CheckOutDateInput} onChange={CheckOutDateData}/>         
                    </div>
                    <div className="rooms">
                        <label>ROOMS</label>
                        <div className="plus-minus">
                        <FaMinusCircle className="minus" onClick={minusClick} />
                        <span value={count}>{count}</span>
                        <FaPlusCircle className="plus"  onClick={plusClick}/>                      
                        </div> 
                    </div>
                    <button className="book-button" onClick={Navigation} >Book</button>
                        </div>
                    <div>
                    <img src="https://images.pexels.com/photos/879434/pexels-photo-879434.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="ladakh-image" className="image"/>

                    </div>

                    </div>
              
{/*Discover*/}

<section id="Discover">
<div className="container1">
    <h1 className="discover-heading">Discover</h1>

    <div className="spot-card">
        <div className="spot-image">
            <img src="https://www.sabooresorts.com/wp-content/uploads/2024/04/top-hotels-in-leh-ladakh.jpg" alt="Mountain Haven Retreat"/>
        </div>
        <div className="spot-content">
            <h3>Mountain Haven Retreat</h3>
            <p>A serene getaway in the heart of the mountains, perfect for focused work sessions and breathtaking views. Includes high-speed Wi-Fi, dedicated workspaces, and rustic, cozy rooms.</p>
            <p className="review"><span className="rating">★★★★☆</span> "An unforgettable experience! Perfect blend of work and relaxation." - Jane D.</p>
        </div>
    </div>

    <div className="spot-card">
        <div className="spot-image">
            <img src="https://static.wanderon.in/wp-content/uploads/2023/02/best-hotels-in-leh-ladakh.jpg" alt="Valley View Lodge"/>
        </div>
        <div className="spot-content">
            <h3>Valley View Lodge</h3>
            <p>Near a quiet valley, this lodge offers workspaces with peaceful views and nearby hiking trails. High-speed internet, coworking lounges, and stunning sunrises.</p>
            <p className="review"><span className="rating">★★★★★</span> "Great internet and views! Highly recommend." - Mark R.</p>
        </div>
    </div>

    <div className="spot-card">
        <div className="spot-image">
            <img src="https://www.overlandescape.com/storage/accommodations/260623023217-himalayaneco1.jpg" alt="Eco-Friendly Workspace"/>
        </div>
        <div className="spot-content">
            <h3>Eco-Friendly Workspace</h3>
            <p>An eco-conscious retreat with solar-powered facilities and community areas. Ideal for those seeking sustainability and productivity.</p>
            <p className="review"><span className="rating">★★★★☆</span> "Loved the eco-friendly vibe and amenities for work." - Priya L.</p>
        </div>
    </div>

    <div className="spot-card">
        <div className="spot-image">
            <img src="https://images.squarespace-cdn.com/content/v1/5ab61c67ec4eb7ab7a2f40f2/1556091439487-UGF0UOI7IL3TFF8MHC8Z/nunkun-suruvalley-ladakh?format=1500w" alt="Himalayan Heights"/>
        </div>
        <div className="spot-content">
            <h3>Himalayan Heights</h3>
            <p>With panoramic mountain views and ample workspace, this spot is designed for digital nomads. Includes reliable Wi-Fi, lounge areas, and daily community events.</p>
            <p className="review"><span className="rating">★★★★★</span> "A perfect escape with work facilities." - Daniel S.</p>
        </div>
    </div>
    <div className="spot-card">
        <div className="spot-image">
            <img src="https://3.imimg.com/data3/QG/FG/MY-8972308/hotel-grand-dragon-leh-ladakh-1000x1000.jpg" alt="Zen Garden Lodge"/>
        </div>
        <div className="spot-content">
            <h3>Zen Garden Lodge</h3>
            <p>Set in a peaceful garden, this lodge offers meditative spots, workspaces, and seamless internet. Ideal for creative and focused work.</p>
            <p className="review"><span className="rating">★★★★☆</span> "Perfect for remote work and unwinding." - Linda T.</p>
        </div>
    </div>
    <div className="spot-card">
        <div className="spot-image">
            <img src="https://cf.bstatic.com/xdata/images/hotel/max1024x768/454671908.jpg?k=065d43d55e70bbc1651472fdca19625e8e012ff50465332fe1789544a660137b&o=&hp=1" alt="Skyline Cabins"/>
        </div>
        <div className="spot-content">
            <h3>Skyline Cabins</h3>
            <p>These modern cabins provide fast Wi-Fi, ergonomic work desks, and views of the vast Ladakh sky. Perfect for stargazing after work.</p>
            <p className="review"><span className="rating">★★★★☆</span> "Beautiful and productive work environment." - Rajiv N.</p>
        </div>
    </div>
</div>
</section>

{/*Services*/}

<section id="Services">
  <div className="services-container">
    <h2>Our Services</h2>
    <div className="services-grid">
      {servicesData.map((service, index) => (
        <div key={index} className="service-card">
          <div className="service-icon">
            {service.icon.startsWith("http") ? (
              <img src={service.icon} alt={service.title} className="icon"/>
            ) : (
              <span>{service.icon}</span>
            )}
          </div>
          <h3>{service.title}</h3>
          <p>{service.description}</p>
        </div>
      ))}
    </div>
  </div>
  </section>
</div>

{/*conatct*/}
 
<section id="About us">
    
    <div className="about-containers" >
        <div>
        <h1 className="about-heading">
            Brisphere
        </h1>
        <p style={{marginTop:8}}>Spituk, Ladakh</p>
        <p style={{marginTop:8}}>
            India, 194101
        </p>
        <p style={{marginTop:8}}>+91 7897845216</p>
        <p style={{marginTop:8}}>amit.jha6700@gmail.com</p>

        <a target="_blank" rel="noopener noreferrer" href="https://www.google.com/search?gs_ssp=eJzj4tFP1zc0yiguKk-3NDZg9OIrLsgsKc1WKMvMyUlMTwUAkWgKAw&q=spituk+village&rlz=1C1ONGR_enIN1095IN1095&oq=spituk&gs_lcrp=EgZjaHJvbWUqBwgJEC4YgAQyBggAEEUYOTIHCAEQABiABDIMCAIQABhDGIAEGIoFMgcIAxAAGIAEMgcIBBAAGIAEMgcIBRAAGIAEMg0IBhAuGK8BGMcBGIAEMgwIBxAAGEMYgAQYigUyBwgIEAAYgAQyBwgJEC4YgATSAQg5MDk1ajBqN6gCCLACAQ&sourceid=chrome&ie=UTF-8#eim=CAEQDxoSMzQuMTE2NDMwODY0MDQzOTM0IhE3Ny41NTczMTE5MDQ4Mjg1NA"><button className="about-button" >Location</button></a>
        </div>
    
    <div>

    </div>
    </div>
</section>
            </div>
        )
    }


export default Home