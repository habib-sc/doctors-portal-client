import React from 'react';
import footerBg from '../../../assets/images/footer.png';

const Footer = () => {
    return (
        <footer class="bg-cover bg-center" style={{backgroundImage: `url(${footerBg})`}}>
            <div className='container px-4 footer'>
                <div>
                    <span class="footer-title">Services</span> 
                    <a class="link link-hover">Branding</a> 
                    <a class="link link-hover">Design</a> 
                    <a class="link link-hover">Marketing</a> 
                    <a class="link link-hover">Advertisement</a>
                </div> 
                <div>
                    <span class="footer-title">Company</span> 
                    <a class="link link-hover">About us</a> 
                    <a class="link link-hover">Contact</a> 
                    <a class="link link-hover">Jobs</a> 
                    <a class="link link-hover">Press kit</a>
                </div> 
                <div>
                    <span class="footer-title">Legal</span> 
                    <a class="link link-hover">Terms of use</a> 
                    <a class="link link-hover">Privacy policy</a> 
                    <a class="link link-hover">Cookie policy</a>
                </div> 
                <div>
                    <span class="footer-title">Newsletter</span> 
                    <div class="form-control w-80">
                    <div class="relative">
                        <input type="text" placeholder="username@email.com" class="input input-bordered w-full pr-16 shadow-2xl" /> 
                        <button class="btn btn-primary absolute top-0 right-0 rounded-l-none text-white">Subscribe</button>
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