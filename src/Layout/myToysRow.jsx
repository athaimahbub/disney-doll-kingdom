import React from 'react';

const myToysRow = ({myToys}) => {

    const {toyPhoto,tName,category,price} = myToys;
    return (
        <div>
            <tr>
        <th>
          <label>
            <input type="checkbox" className="checkbox" />
          </label>
        </th>
        <td>
          <div className="flex items-center space-x-3">
            <div className="avatar">
              <div className="rounded w-12 h-12">
                <img src={toyPhoto} />
              </div>
            </div>
            <div>
              <div className="font-bold">{category}</div>
              <div className="text-sm opacity-50">{price}</div>
            </div>
          </div>
        </td>
        <td>
          {tName}
        </td>
        <td>Purple</td>
        <th>
          <button className="btn btn-ghost btn-xs">details</button>
        </th>
      </tr>
        </div>
    );
};

export default myToysRow;