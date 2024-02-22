import car from '../components/car.png'
function Review()
{
    return(
        <div>
            <img src={car} style={{width:"1550px",height:"600px"}}/>
           <div className="review">
               <h1>About  PVR</h1>
           </div>
           <div>
                <p>
                Welcome to our car rental app! 
                We are passionate about providing our customers with the ultimate rental experience, offering a wide variety of vehicles to choose from and a seamless rental process from start to finish.
                </p>

                <p>
                Our app is designed to make renting a car as easy and convenient as possible.
                 With just a few clicks, you can browse our extensive inventory of cars, select your preferred vehicle, and reserve it for the dates you need. 
                 We offer a range of options, from compact cars for solo travelers to SUVs for families or groups.
                We are committed to ensuring the safety and comfort of our customers.
                </p> 
                <p>
                That's why we regularly maintain and clean our vehicles to ensure they are in top condition. 
                Additionally, we provide comprehensive insurance coverage for every rental, so you can have peace of mind while driving.
                Our team is dedicated to providing exceptional customer service, and we are always available to answer any questions you may have. 
                We believe that every customer deserves a personalized experience, and we strive to make each rental a memorable one.
                </p>
                <p>
                Thank you for choosing our car rental app. We look forward to serving you and making your next road trip or adventure a success!
                </p>
           </div>
        </div>
    )
}
export default Review;