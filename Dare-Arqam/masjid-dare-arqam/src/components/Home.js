import React from 'react'
// import Dollar from "../assets/dollar.png"
import QrCode from "../assets/qr-code.png"
// import Users from "../assets/users.png"
import Navbar from './Navbar'
const Home = () => {
  return (
    <div className='dar-e-arqam'>
    <Navbar/>
    <p className='notice'>Fajar first salat 10 mins after azan<br/> Second 10 minutes after first salat<br/>Maghreb first salat 10 mins after first azan<br/>Second salat 10 minutes after first salat<br/>Isha only 1 salat first come first serve basis </p>
    <p className='para'>Salah Timings</p>
      <p className='para2'>We usually change our timings on Sunday. Please check<br/> on Saturday night or Sunday morning for any changes.</p>
    
      <div className="App">
      <table cellPadding="0" cellSpacing="0" border="1">
        <thead>
        <tr>
          <th className='grey'>Salah</th>
          <th className='grey'>Begins</th>
          <th className='grey'>Adhan</th>
          <th className='grey'>Iqama</th>
        </tr>
        </thead>
     <tbody>
     <tr>
          <td className='black'>Fajr</td>   
          <td className='black'>6:10AM</td>
          <td className='black'>6:15AM</td>
          <td className='black'>6:30AM</td>
        </tr>
        <tr>
        <td className='grey'>Zuhr</td>   
          <td className='grey'> 1:26PM</td>
          <td className='grey'>1:30PM</td>
          <td className='grey'>1:45PM</td>
        </tr>
        <tr>
        <td className='black'>Asr</td>   
          <td className='black'>5:34PM</td>
          <td className='black'>5:45PM</td>
          <td className='black'>6:00PM</td>
        </tr>
        <tr>
        <td className='grey'>Maghrib </td>   
          <td className='grey'>7:25PM</td>
          <td className='grey'>7:25PM</td>
          <td className='grey'>7:28PM</td>
        </tr>
        <tr>
        <td className='black'> Isha</td>   
          <td className='black'>8:33PM</td>
          <td className='black'>8:45PM</td>
          <td className='black'>9:00PM</td>
        </tr>
        <tr>
        <td className='grey'> Jumah 1</td>   
          <td className='grey'>1:26PM</td>
          <td className='grey'>1:30PM</td>
          <td className='grey'>1:45PM</td>
        </tr> 
        <tr>
        <td className='black'> Jumah 2</td>   
          <td className='black'>1:26PM</td>
          <td className='black'>1:30PM</td>
          <td className='black'>1:45PM</td>
        </tr> 
        <tr>
        <td className='grey'> Jumah 3</td>   
          <td className='grey'>1:26PM</td>
          <td className='grey'>1:30PM</td>
          <td className='grey'>1:45PM</td>
        </tr>
     
       
     </tbody>
     
      </table>
    </div>
    
    <p className='para3'>Dar-e-arqaam is a musalla located in 101-47 Thorncliffe Pk Dr. We facilitate <br /> daily 5 times prayer along with Jumaa prayer. We do provide different <br /> programs to help community to learn Islamic values and principles.</p>
      <p className='para4'>We strive to make positive impact on our community to help and equip<br /> them with Islamic teachings. We work together with other islamic mosques<br /> and musalla to coordinate and be part of our muslim network</p>
    
      <div id="Footer" className="col-md-12 mt-3  pb-5 rounded" >
        <div className="row w-100 ">
        <div className="col-md-2 text-start py-2 col-lg-3 col-12 ">
                <ul className="navbar-nav ms-auto nav-flex-icons mx-3 p-2 list-group-vertical row justify-content-center" id='font' >
                <div className="text-white">
                        <h4>JOIN US</h4>
                        <p>Keep yourself up-to-date with our Whatsapp group</p>

                             <img src={QrCode} width="100" height="100" alt=""/>


                    </div>
    
    </ul>
            </div>
            <div className="col-md-2 text-start py-2 col-lg-3 col-12  ">
                <ul className="navbar-nav ms-auto nav-flex-icons mx-3 p-2 list-group-vertical row justify-content-center" >
                <li className="py-1 text-white ">SERVICES</li>  
                <li className="py-1 text-white">5 Times Prayers</li> 
                <li className="py-1 text-white">Juma Prayers</li>
                <li className="py-1 text-white">Weekly Ghush</li>
                <li className="py-1 text-white">Special Programs</li>
                

</ul>
            </div>
            <div className="col-md-2 text-start py-2 col-lg-3 col-12  ">
                <ul className="navbar-nav ms-auto nav-flex-icons mx-3 p-2 list-group-vertical row justify-content-center" >
                    <li className="py-1 text-white">INFORMATION</li>   
                    <li className="py-1 text-white" >Privacy Policy</li>
                    <li className="py-1 text-white"  routerlink="/term-of-use">Terms Of Use</li>
                    <li className="py-1 text-white"  routerlink="/abuse">Abuse</li>&gt;
                    
    
    </ul>
            </div>
            <div className="col-md-2 text-start py-2 col-lg-3 col-12">
                <ul className="navbar-nav ms-auto nav-flex-icons mx-3 p-2 list-group-vertical row justify-content-center">
                <li className="py-1 text-white ">Organization</li>  
                <li className="py-1 text-white"  routerlink="/about-us">About Us</li>
                <li className="py-1 text-white" >Contact Us</li>
                

</ul>
            </div>
        </div>
        </div>
        </div>
        )}
   
      
      
      
     
    
    
  



export default Home
