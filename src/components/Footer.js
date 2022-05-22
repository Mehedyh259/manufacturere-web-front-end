import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa'
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className='py-12 px-5 lg:px-12 bg-accent grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 justify-center'>
            <div className='flex justify-center items-center'>
                <h2 className="text-3xl font-bold">Cell Mart</h2>
            </div>
            <div>
                <h2 className="text-3xl font-bold">Address</h2>
                <p className='mb-0'>Shop 23, Hussain Market</p>
                <p className='mb-0'>Durgapur, Rajshahi</p>
                <p className='mb-0'>Bangladesh</p>
            </div>
            <div>
                <h2 className="text-3xl font-bold">Quick Links</h2>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/blogs'>Blogs</Link></li>
                <li><Link to='/all-products'>All Products</Link></li>
            </div>
            <div>
                <h2 className="text-3xl font-bold">Follow Us</h2>
                <ul>
                    <li className='flex items-center' style={{ cursor: 'pointer' }}> <FaFacebook className='mr-2' />  Facebook</li>
                    <li className='flex items-center' style={{ cursor: 'pointer' }}> <FaInstagram className='mr-2' />  Instagram</li>
                    <li className='flex items-center' style={{ cursor: 'pointer' }}> <FaTwitter className='mr-2' />  Twitter</li>
                </ul>
            </div>

        </footer>
    );
};

export default Footer;