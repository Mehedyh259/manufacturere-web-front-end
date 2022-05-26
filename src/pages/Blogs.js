import React from 'react';

const Blogs = () => {
    return (
        <div className='my-12'>
            <h2 className="text-center text-3xl font-bold text-primary mb-5">
                Questions And Answers
            </h2>

            <div className="grid grid-cols-1 gap-5">

                <div className="card w-full md:w-3/4 lg:w-4/6 mx-auto bg-base-200 shadow-xl">
                    <div className="card-body">
                        <div className="collapse collapse-plus border border-base-300 bg-base-100 rounded-box">
                            <input type="checkbox" className="peer" />
                            <div className="collapse-title text-lg font-bold">
                                How will you improve the performance of a React Application?
                            </div>
                            <div className="collapse-content bg-base-100">
                                <p>There are so many steps that can improve the prformance of a react application.</p>
                                <ul>
                                    <li>1. By Using Immutable Data Structures</li>
                                    <li>2. Don't use class component, use functional component</li>
                                    <li>3. By Optimizing the dependencies</li>
                                    <li>4. By Using React empty fragments to avoid unwanted html div</li>
                                    <li>5. Avoiding Props in Initial States</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="card w-full md:w-3/4 lg:w-4/6 mx-auto bg-base-200 shadow-xl">
                    <div className="card-body">
                        <div className="collapse collapse-plus border border-base-300 bg-base-100 rounded-box">
                            <input type="checkbox" className="peer" />
                            <div className="collapse-title text-lg font-bold">
                                What are the different ways to manage a state in a React application?
                            </div>
                            <div className="collapse-content bg-base-100">
                                <p>There area 4 types of different ways to manage a state in react application.</p>
                                <ul>
                                    <li>1. LOCAL STATE: this state is managed by using (useState) react hook</li>
                                    <li>2. Global STATE: this state is data that we manage in multiple components</li>
                                    <li>3. Server STATE: Data Comes from the server and we integrate to our user interface of application</li>
                                    <li>4. URL STATE: Data exist on the url of our application, that includes pathname query parameter etc.</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="card w-full md:w-3/4 lg:w-4/6 mx-auto bg-base-200 shadow-xl">
                    <div className="card-body">
                        <div className="collapse collapse-plus border border-base-300 bg-base-100 rounded-box">
                            <input type="checkbox" className="peer" />
                            <div className="collapse-title text-lg font-bold">
                                How does prototypical inheritance work?
                            </div>
                            <div className="collapse-content bg-base-100">
                                <p>Prototypical inheritance is a feature in javascript. It is used to add methods and properties in objects of javascript. by using this method an object can inherite other object properties. For doing prototypical inheritance we use Object. getPrototypeOf . When function is javascript engin adds a prototype to the function.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="card w-full md:w-3/4 lg:w-4/6 mx-auto bg-base-200 shadow-xl">
                    <div className="card-body">
                        <div className="collapse collapse-plus border border-base-300 bg-base-100 rounded-box">
                            <input type="checkbox" className="peer" />
                            <div className="collapse-title text-lg font-bold">
                                Why you do not set the state directly in React?
                            </div>
                            <div className="collapse-content bg-base-100">
                                <p>There are some reason why we do not set the state directly. If we update directly the state variable, after calling the seState() may replace the previous update we made. Directly update state does not change this.state immediately. If we directly update the state value, we will lose control of the state acrosss all components of our appliction.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="card w-full md:w-3/4 lg:w-4/6 mx-auto bg-base-200 shadow-xl">
                    <div className="card-body">
                        <div className="collapse collapse-plus border border-base-300 bg-base-100 rounded-box">
                            <input type="checkbox" className="peer" />
                            <div className="collapse-title text-lg font-bold">
                                You have an array of products. Each product has a name, price, description, etc. How will you implement a search to find products by name?
                            </div>
                            <div className="collapse-content bg-base-100">
                                <p>To find the products by name we can use filter method. filter() method will give us an array as a return based on our condition. example code is written below.
                                    <pre>
                                        {`  
    const products = [
        {id: 1, name:'AB',price:12},
        {id: 2, name:'BC',price:13},
        {id: 3, name:'DE',price:14},
        {id: 4, name:'CD',price:15}
        ];
                                            
    const result = products.filter(pd => pd.name.includes('C'));
    console.log(result); 

    Output: [ { id: 2, name: 'BC', price: 13 },
            { id: 4, name: 'CD', price: 15 } ]
                                        `}
                                    </pre>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>


            </div>

        </div>
    );
};

export default Blogs;