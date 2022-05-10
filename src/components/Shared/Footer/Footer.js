import React from 'react';
import footerBg from '../../../assets/images/footer.png';

const Footer = () => {
    return (
        <footer className="bg-cover bg-center" style={{backgroundImage: `url(${footerBg})`}}>
            <div className='container px-4 footer'>
                <div>
                    <span className="footer-title">Services</span> 
                    <a className="link link-hover">Branding</a> 
                    <a className="link link-hover">Design</a> 
                    <a className="link link-hover">Marketing</a> 
                    <a className="link link-hover">Advertisement</a>
                </div> 
                <div>
                    <span className="footer-title">Company</span> 
                    <a className="link link-hover">About us</a> 
                    <a className="link link-hover">Contact</a> 
                    <a className="link link-hover">Jobs</a> 
                    <a className="link link-hover">Press kit</a>
                </div> 
                <div>
                    <span className="footer-title">Legal</span> 
                    <a className="link link-hover">Terms of use</a> 
                    <a className="link link-hover">Privacy policy</a> 
                    <a className="link link-hover">Cookie policy</a>
                </div> 
                <div>
                    <span className="footer-title">Newsletter</span> 
                    <div className="form-control w-80">
                    <div className="relative">
                        <input type="text" placeholder="username@email.com" className="input input-bordered w-full pr-16 shadow-2xl" /> 
                        <button className="btn btn-primary absolute top-0 right-0 rounded-l-none text-white">Subscribe</button>
                    </div>
                    </div>
                </div>
            </div>
            <div className='container text-center py-2 border-t mt-2'>
                <p>Copyright © 2022 - All right reserved by Doctors Portal</p>
            </div>
        </footer>
    );
};

export default Footer;