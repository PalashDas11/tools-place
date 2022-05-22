import React from 'react';

const Blog = () => {
    return (
        <div className='p-5'>
            <div>
                <h2 className ="text-2xl font-semibold">How will you improve the performance of a React Application?</h2>
                <p>Ans: There are many way to optimizing react website performance. Keeping component state local where necessary. If you keeping necessary component on localy, your performance would be better. Memoizing react component to prevent unnecessary render. You have to code spliting using dynamic import(), You have to do list virtualazation in react. and optimizing image sizing. This ruls are make react website faster.  </p>
            </div>
            <div>
                <h2 className ="text-2xl font-semibold">What are the different ways to manage a state in a React application?</h2>
                <p>Ans: There are four main types of state you properly manage in your react apps. Local state is most often managed in React using the useState hook. <br /> And Global state is necessary when we want to get and update data anyway in our app. <br />Server state is a simple concept , but is hard to manage alongside all of our local and gobal UI state, Because Data comes from external server. <br /> URL state Data that exists on our URLs, including the pathname and query parameters.

</p>
            </div>
            <div>
                <h2 className ="text-2xl font-semibold">How does prototypical inheritance work?</h2>
                <p>Ans: The Prototypal Inheritance is a feature in javascript used to add methods and properties in objects. This method inherit the properties and method of another object. Prototypical inheritance clearly has a lot of benefits for JavaScript programmings, but, like all tools, it does have limitations. Let's take a look at the key downsides to look out for as you write a prototype-based program. We can see how prototypal inheritance works on the basis of specifying categories within a group from least specific to most – from rectangle to square. </p>
            </div>
            <div>
                <h2 className ="text-2xl font-semibold">Why you do not set the state directly in React. For example, if you have const [products, setProducts] = useState([]). Why you do not set products = [...] instead, you use the setProducts?</h2>
                <p>Ans: We should never update the state directly beacuse of some reason. <br />For example if we update directly , calling the setState() afterward may just replace the update you made. When we update directly the state, it's doesn't change this.state immediately. nstead, it creates a pending state transition, and accessing it after calling this method will only return the present value. Another thing, We will lose control of the state acrooss all component.</p>
            </div>
            <div>
                <h2 className ="text-2xl font-semibold">You have an array of products. Each object has a name, price, description, etc. How will you implement a search to find products by name?</h2>
                <p>Ans: It's very way to find out any any object property. For example, Products is an array and it's have many object, And if i went to access object name property than i using map() method. For example - products.map() = this method give me single object than object.name to implement a search to find products by name.</p>
            </div>
            <div>
                <h2 className ="text-2xl font-semibold">What is a unit test? Why should write unit tests?</h2>
                <p>Ans: Unit testing is a software development process in which the smallest testable parts of an application, called units.  The main objective of unit testing is to isolate written code to test and determine if it works as intended. Unit testing is an importent for development process, Because if done correctly,it can help detect early flaws in code which may be more difficult to find in later testing stages. </p>
            </div>
        </div>
    );
};

export default Blog;