import './App.css';
import React, { useState } from 'react';
import fruit from './images/fruit.jpg';
import vegtables from './images/vegtables.jpeg';
import cereals from './images/cereals.jpeg';
import salad1 from './images/salad1.jpg';
import salad3 from './images/salad3.jpg';
import food3 from './images/food3.jpeg';
import salad2 from './images/salad2.jpg';
import customer1 from './images/customer1.jpeg';
import customer2  from './images/customer2.jpeg';
import customer3 from './images/customer3.jpeg';
import restaurant_section_image from './images/restaurant_section_image.jpeg';



function App() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`Name: ${name}\nEmail: ${email}\nMessage: ${message}`);
    setName('');
    setEmail('');
    setMessage('');
  };
  return (
    <>
  {/*header section starts from here (bharat dhiman)*/}
  <header className="header">
    <h1>
      <span className="logo-f">F</span>ood<span className="logo-n">N</span>ook
    </h1>
    <ul>
      <li>
        <a href="/">Home</a>
      </li>
      <li>
        <a href="#about-section">About</a>
      </li>
      <li>
        <a href="#Category">Category</a>
      </li>
      <li>
        <a href="#menu_food">Menu</a>
      </li>
      <li>
        <a href="#testimonials">Testimonial</a>
      </li>
      <li>
        <a href="#contact">Contact</a>
      </li>
    </ul>
  </header>
  {/*header section ends here (bharat dhiman)*/}
  {/*top section starts from here (bharat dhiman)*/}
  <section className="top-section">
    <div className="eat-right-food">
      <h1>
        <span className="nourish">Nourish.</span>{" "}
        <span className="thrive">Thrive.</span>{" "}
        <span className="enjoy">Enjoy.</span>
      </h1>
      <p>
        Cooking with<span className="love">LOVE</span> <br />
        provides <span className="food">FOOD</span> <br />
        for the <span className="soul">SOUL</span>
      </p>
      <button>
        {" "}
        <a href="#menu_food" style={{ textDecoration: "none", color: "white" }}>
          Menu
        </a>
      </button>
    </div>
  </section>
  {/*top section ends here (bharat dhiman)*/}
  {/*about section starts from here (bharat dhiman)*/}
  <section className="about" id="about-section">
    <div className="aboutus">
      <div className="aboutus-left">
        <span>About Us</span>
        {/* <h1>WELCOME TO FOODNOOK</h1> */}
        <p>
          {" "}
          Founded with a dedication to serving delightful dishes crafted from
          the finest ingredients, we invite you to join us on a gastronomic
          journey. Our team is committed to providing a memorable dining
          experience, blending innovation with tradition to satisfy every palate
          Explore our menu curated with care, and allow us to exceed your
          expectations.
          <a href="#contact" className="about-link">
            Come dine with us
          </a>{" "}
          and discover the essence of indulgence.
        </p>
      </div>
      {/* <div class="aboutus-image-right">
          <img src={aboutus-right-image} alt="">
      </div> */}
    </div>
  </section>
  {/*bharat section completed*/}
  {/*ashutosh code starts*/}
  <main>
    <section id="Category">
      <div className="first_container">
        <h1 className="food_type">TYPES OF FOOD</h1>
        <br />
        <br />
        <div className="types">
          <div className="fruits">
            <img src={fruit} alt="" />
            <div className="overlay"> FRUITS</div>
          </div>
          <div className="vegetable">
            <img src={vegtables} alt="" />
            <div className="veg">VEGETABLES</div>
          </div>
          <div className="cereals">
            <img src={cereals} alt="" />
            <div className="cer">Grin</div>
          </div>
        </div>
      </div>
    </section>
    <section id="menu_food">
      <div className="menu">
        <h1 className="food_menu">Food Menu</h1>
        <div className="food1">
          <img src={salad1} alt="" />
          <div className="detail">
            <h3>Brunch Salad</h3>
            <p className="about1">
              I get hungry just looking at all this fruit.
            </p>
            <p className="price"> Price :$250</p>
          </div>
        </div>
        <div className="food2">
          <img src={salad3} alt="" />
          <div className="detail">
            <h3>Loaded Green Salad</h3>
            <p className="about1">
              Salad is a mixture of raw or cooked vegetables
            </p>
            <p className="price"> Price :$230</p>
          </div>
        </div>
        <div className="food3">
          <img src={food3} alt="" />
          <div className="detail">
            <h3>Healthy Nuts</h3>
            <p className="about1">
              Nuts would be awesome. Almonds. Walnuts.Cashews.
            </p>
            <p className="price"> Price :$233</p>
          </div>
        </div>
        <div className="food4">
          <img src={salad2} alt="" />
          <div className="detail">
            <h3>Tofu Salad</h3>
            <p className="about1">
              This tofu salad is made with marinated tofu,snow peas,ginger,and
              garlic.
            </p>
            <p className="price">Price :$243</p>
          </div>
        </div>
      </div>
    </section>
  </main>
  {/*ashutosh code ends*/}
  {/*dapinder code starts*/}
  {/* Testimonials Section */}
  <section id="testimonials">
    <h2>What Our Customers Say</h2>
    <div className="container">
      <div className="testimonial 1">
        <div className="customer 1">
          <img src={customer1} alt="Customer " />
          <p>Ross Lee</p>
        </div>
        <div className="rating">
          <span>***</span>
        </div>
        <p>
          "Ah, the brunch salad, a symphony of freshness and flavor! Each bite
          is like a culinary adventure, with crisp greens mingling harmoniously
          with an array of vibrant veggies and tantalizing toppings."
        </p>
      </div>
      <div className="testimonial 2">
        <div className="customer 2">
          <img src={customer2} alt="Customer " />
          <p>Amelia Watson</p>
        </div>
        <div className="rating">
          <span>***</span>
        </div>
        <p>
          "The loaded green salad is an absolute delight! With every forkful,
          The medley of greens, paired with an array of colorful vegetables and
          hearty toppings, creates a symphony of flavors that dance on your
          palate."
        </p>
      </div>
      <div className="testimonial 3">
        <div className="customer 3">
          <img src={customer3} alt="Customer " />
          <p>Ben Roy</p>
        </div>
        <div className="rating">
          <span>***</span>
        </div>
        <p>
          "Healthy nuts are my ultimate snack companion! Packed with protein and
          healthy fats, they're my go-to choice for a quick boost of energy and
          a satisfying crunch."
        </p>
      </div>
    </div>
  </section>
  <section id="contact">
    {" "}
    {/* Dapinder Singh Contact Section */}
    <div className="container">
      <div className="contact-img">
        <img
          src={restaurant_section_image}
          alt="Restaurant "
        />
      </div>
      <div className="form">
      <h2>Contact Us</h2>
      <input type="text" placeholder="Your Name" value={name} onChange={(e) => setName(e.target.value)} />
      <input type="email" placeholder="E-Mail" value={email} onChange={(e) => setEmail(e.target.value)} />
      <textarea placeholder="Type Your Message" value={message} onChange={(e) => setMessage(e.target.value)} />
      <button onClick={handleSubmit}>Submit</button>
      </div>
    </div>
  </section>
  <section style={{padding:"100px"}}>
    <div style={{display:"flex", justifyContent:"center",}}>
      <div style={{background:"black", padding:"30px", width:"30%", marginRight:"100px"}}> 
       <div style={{background:"black", padding:"30px", fontWeight:"600",  border:"2px #AF9923 dashed", display:"flex", justifyContent:"center", alignItems:"center", flexDirection:"column"}}>
            <div style={{color:"#fff", fontSize:"35px"}}>Time Open</div>
            <div style={{color:"#AF9923", fontSize:"25px", marginTop:"20px"}}>Monday-friday</div>
            <div style={{color:"#fff", fontSize:"15px", marginTop:"20px"}}>7am - 11am (breakfast)</div>
            <div style={{color:"#fff", fontSize:"15px"}}>1am - 10am (Lunch/Dinner)</div>
            <div style={{color:"#AF9923", fontSize:"25px",  marginTop:"20px"}}>Saturday and Sunday</div>
            <div style={{color:"#fff", fontSize:"15px", marginTop:"20px"}}>9am - 1am (breakfast)</div>
            <div style={{color:"#fff", fontSize:"15px"}}>1am - 10am (Lunch/Dinner)</div>
            <div style={{color:"#fff", fontSize:"18px", borderTop:"3px solid white", width:"90%", textAlign:"center",marginTop:"20px", paddingTop:"20px"}}>Call Us: (123) 34-50-667</div>
       </div>
      </div>
      <div style={{background:"", padding:"0px", width:"40%"}}>
      <div style={{background:"", padding:"30px", fontWeight:"600",   display:"flex", justifyContent:"center", alignItems:"center", flexDirection:"column"}}>
            <div style={{color:"#AF9923", fontSize:"35px"}}>RESERVATION ONLINE</div>
            <div style={{display:"flex", justifyContent:"space-around", width:"100%", alignItems:"center", marginTop:"20px"
            }}>
              <span>Your Name:</span>
              <input placeholder='your name' style={{padding:"10px"}}></input>
            </div>
            <div style={{display:"flex", justifyContent:"space-around", width:"100%", alignItems:"center", marginTop:"20px"
            }}>
              <span>Your email:</span>
              <input placeholder='your email' style={{padding:"10px"}}></input>
            </div>
            <div style={{display:"flex", justifyContent:"space-between", width:"82%", alignItems:"center", marginTop:"20px"
            }}>
              <span>Date</span>
              <input placeholder='mm/dd/yyyy' style={{padding:"10px"}}></input>
            </div>
            <div style={{display:"flex", justifyContent:"space-between", width:"82%", alignItems:"center", marginTop:"20px"
            }}>
              <span>Time</span>
              <input placeholder='--:-- --' style={{padding:"10px"}}></input>
            </div>
            <div style={{display:"flex", justifyContent:"space-between", width:"82%", alignItems:"center", marginTop:"20px"
            }}>
              <span>How Many People</span>
              <select name="people" id="people">
                <option value="volvo">2</option>
                <option value="saab">3</option>
                <option value="opel">4</option>
                <option value="audi">5</option>
              </select>
            </div>
            <div style={{fontSize:"20px",color:"#fff", padding:"10px", width:"80%", background:"#000", marginTop:"20px", textAlign:"center", borderRadius:"40px"
            }}>Submit</div>
       </div>
      </div>
    </div>
  </section>
  <footer id="footer">
    {" "}
    {/* Dapinder Singh Footer Section*/}
    <h2>Restaurant © all rights reserved</h2>
  </footer>
</>

  );
}

export default App;
