import React from 'react';

const Portfolio = () => {
    return (
        <div className='my-12 flex justify-center'>
            <div class="card w-full lg:w-1/2 bg-base-200 shadow-xl">

                <div class="card-body">
                    <h2 class="card-title">My Profile</h2>
                    <p>Name: Md. Mehedi Hasan</p>
                    <p>Email: mehedyh259@gmail.com</p>
                    <p>Education: Completed B.Sc. in Computer Science and Engineering</p>
                    <p cla>My Programming skills: </p>
                    <small>HTML, CSS, Bootstrap 5, React-Bootstrap, Tailwind CSS, Daisy UI, Javascript, ES6, React, React router, Express js, Mongodb</small>

                    <p>Projects Live Link: </p>
                    <p><a target='_blank' href="https://solo-photographer.web.app/" rel="noreferrer">https://solo-photographer.web.app/</a></p>
                    <p><a target='_blank' href="https://medicine-inventory-76ade.web.app/" rel="noreferrer">https://medicine-inventory-76ade.web.app/</a></p>
                    <p><a target='_blank' href="https://solo-photographer.web.app/" rel="noreferrer">https://solo-photographer.web.app/</a></p>

                </div>
            </div>
        </div >
    );
};

export default Portfolio;