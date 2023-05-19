import React from 'react';
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import galleryImg1 from '../../assets/gallery/p1.webp';
import { Link } from 'react-router-dom';

const Category = () => {
    const categories = [
        {
          name: 'Category 1',
          subCategories: [
            {
              name: 'Subcategory 1',
              toys: [
                {
                  id: 1,
                  picture: 'toy1.jpg',
                  name: 'Toy 1',
                  price: 9.99,
                  rating: 4.5
                },
                {
                  id: 2,
                  picture: 'toy2.jpg',
                  name: 'Toy 2',
                  price: 14.99,
                  rating: 3.8
                },
                
              ]
            },
            // More subcategories and toys...
          ]
        },
        // More categories...
        {
            name: 'Category 2',
            subCategories: [
              {
                name: 'Subcategory 1',
                toys: [
                  {
                    id: 1,
                    picture: 'toy1.jpg',
                    name: 'Toy 1',
                    price: 9.99,
                    rating: 4
                  },
                  {
                    id: 2,
                    picture: 'toy2.jpg',
                    name: 'Toy 2',
                    price: 14.99,
                    rating: 3.8
                  },
                  
                ]
              },
              // More subcategories and toys...
            ]
          },
          {
            name: 'Category 3',
            subCategories: [
              {
                name: 'Subcategory 1',
                toys: [
                  {
                    id: 1,
                    picture: 'toy1.jpg',
                    name: 'Toy 1',
                    price: 9.99,
                    rating: 4.5
                  },
                  {
                    id: 2,
                    picture: 'toy2.jpg',
                    name: 'Toy 2',
                    price: 14.99,
                    rating: 3.8
                  },
                  
                ]
              },
              // More subcategories and toys...
            ]
          },
      ];
      
      
    return (
        <div className='my-12'>
            <h2 className='text-center mb-8 text-4xl text-blue-800 font-bold'>Shop by Category</h2>
    <Tabs>
      <TabList className=' text-blue-800 font-bold'>
        {categories.map(category => (
          <Tab key={category.name}>{category.name}</Tab>
        ))}
      </TabList>

      {categories.map(category => (
        <TabPanel key={category.name} className=' text-blue-600 font-bold mt-8'>
          {category.subCategories.map(subCategory => (
            <div key={subCategory.name}>
              <h3>{subCategory.name}</h3>
              <div className="container mx-auto mt-4">
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {subCategory.toys.map(toy => (
                  <div className="card w-96 bg-base-100 shadow-xl">
                  <figure><img src={galleryImg1} alt={toy.name} /></figure>
                  <div className="card-body items-center text-center">
                    <h2 className="card-title">{toy.name}</h2>
                    <p>Price: ${toy.price}</p>
                    <p>Rating: {toy.rating}</p>
                    <div className="rating">
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked />
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                  
                    </div>
                    <div className="card-actions justify-end">
                      <button className="btn btn-sm btn-primary">
                        <Link to='/'>View Details</Link>
                        </button>
                    </div>
                  </div>
                </div>
                ))}

              </div>
              </div>
              
                
              
            </div>
          ))}
        </TabPanel>
      ))}
    </Tabs>
        </div>
    );
};

export default Category;