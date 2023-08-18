import React from 'react';
import { FaFacebook, FaGithub, FaInstagram, FaMailBulk, FaPhone} from 'react-icons/fa'; // Replace 'FaInstagram' with the desired icon component

const Footer = () => {
  return (
    <footer className="bg-dark text-light py-2 pt-3 " >
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <h3>Contact Us</h3>
            <p>Email:<a className='mx-3'  target='_blank' rel='noopener noreferrer' href='mailto:abdullahzubair356@gmail.com'><FaMailBulk size={30}/> </a> <br />
            Phone: (+92) 312 032-1939
            <a  href="tel:+92 312-0321-939">
             <FaPhone className='mx-2' size={15} color='green'/></a>
            </p>
          </div>
          <div className="col-md-6">
            <h3>Follow Us</h3>
            <p>Stay connected on social media</p>
            <a   target='_blank' rel="noopener noreferrer" href="https://www.instagram.com/iabdullah_xubair/">              
            <FaInstagram size={30} color='orange' />
            </a>
            <a className='mx-3 mx-lg-4' target='_blank' rel="noopener noreferrer" href="https://www.facebook.com/profile.php?id=100038288742428">
            <FaFacebook size={30}  />
            </a>
            <a  target='_blank' rel="noopener noreferrer" href="https://github.com/Xubair001">
            <FaGithub size={30} color='white'/>
            </a>

            {/* Add social media icons here */}
          </div>
        </div>
        <hr />
        <div className="text-center">
          &copy; 2023 Kadhar Tech. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
