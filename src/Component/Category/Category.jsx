import React from 'react';
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

const Category = () => {
    const categories = [
        {
          name: 'Category 1',
          subCategories: ['Subcategory 1', 'Subcategory 2', 'Subcategory 3']
        },
        {
          name: 'Category 2',
          subCategories: ['Subcategory 4', 'Subcategory 5', 'Subcategory 6']
        },
        {
          name: 'Category 3',
          subCategories: ['Subcategory 7', 'Subcategory 8', 'Subcategory 9']
        }
      ];
      
    return (
        <div className='my-12'>
            <h2>Doll Category section</h2>
            <Tabs>
      <TabList>
        {categories.map(category => (
          <Tab key={category.name}>{category.name}</Tab>
        ))}
      </TabList>

      {categories.map(category => (
        <TabPanel key={category.name}>
          <ul>
            {category.subCategories.map(subCategory => (
              <li key={subCategory}>{subCategory}</li>
            ))}
          </ul>
        </TabPanel>
      ))}
    </Tabs>
        </div>
    );
};

export default Category;