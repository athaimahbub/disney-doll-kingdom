import React from 'react';

const Blog = () => {
    return (
        <div>
            <h2 className='text-center mb-8 text-2xl text-blue-800 font-bold'>Q/A Blog</h2>
            <div className="container mx-auto mt-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4 px-4">
                
                <div className='text-gray-600 border-solid border-2 border-gray-400 rounded px-4 py-4'>
                <h2 className=' text-blue-600 font-bold mb-2'>What is an access token and refresh token? How do they work and where should we store them on the client-side?</h2>
                <p >An access token is a credential that allows a client application to access protected resources on behalf of a user. It is typically short-lived and contains information about the user and their authorization. A refresh token, on the other hand, is a long-lived token used to obtain a new access token once the current one expires.On the client-side, access tokens should be stored securely, typically in memory or browser storage, to ensure they are not accessible by unauthorized parties. Refresh tokens, however, should be stored securely, such as in an HTTP-only cookie or secure storage, to mitigate the risk of theft. Proper security measures should be implemented, like encryption and token rotation, to protect both types of tokens from unauthorized access and potential misuse.</p>
                </div>


                <div className='text-gray-600 border-solid border-2 border-gray-400 rounded px-4 py-4'>
                <h2 className=' text-blue-600 font-bold mb-2'>Compare SQL and NoSQL databases?</h2>
                <p >SQL (Structured Query Language) databases are relational databases that store and manage data in structured tables with predefined schemas. They ensure data integrity and support complex queries using SQL. NoSQL (Not only SQL) databases are non-relational databases that provide flexible schemas and horizontal scalability. They handle unstructured and semi-structured data efficiently and support high-performance, distributed systems. While SQL databases prioritize consistency and ACID transactions, NoSQL databases prioritize scalability and availability, often sacrificing some level of consistency. SQL databases are suitable for applications with complex relationships and structured data, while NoSQL databases are preferred for handling large volumes of rapidly changing and diverse data.</p>
                </div>

                <div className='text-gray-600 border-solid border-2 border-gray-400 rounded px-4 py-4'>
                <h2 className=' text-blue-600 font-bold mb-2'>What is express js? What is Nest JS?</h2>
                <p >Express.js is a popular, minimalist web application framework for Node.js. It simplifies the process of building web applications and APIs by providing a set of robust features and middleware. Express.js allows developers to handle routes, manage requests and responses, and implement middleware for tasks such as authentication and error handling. It offers flexibility and scalability for building server-side applications.
                </p>
                <p>Nest.js is a progressive, TypeScript-based framework built on top of Express.js. It provides a structured and scalable architecture for building server-side applications. Nest.js incorporates concepts from Angular, such as decorators and dependency injection, to create modular and maintainable code. It emphasizes the use of decorators to define modules, controllers, and services, making it suitable for large-scale enterprise applications.</p>
                </div>

                <div className='text-gray-600 border-solid border-2 border-gray-400 rounded px-4 py-4'>
                <h2 className=' text-blue-600 font-bold mb-2'>What is MongoDB aggregate and how does it work?</h2>
                <p >MongoDB's aggregate is a powerful data processing operation used to perform complex operations on collections of documents. It allows for advanced querying, transformations, and data analysis. The aggregate operation works by applying a series of stages to a collection of documents, allowing for data manipulation and aggregation. Each stage in the pipeline performs a specific operation like filtering, grouping, sorting, projecting, or performing mathematical calculations. The output of one stage serves as the input for the next stage. This pipeline approach enables the construction of sophisticated queries and facilitates the extraction of valuable insights from MongoDB's document-oriented data.</p>
                </div>
                  
                </div>


            </div>
            
        </div>
    );
};

export default Blog;