import React from 'react';

const Restaurant = (props) => {
  return (
      <tr className="restaurant-row">
        <td><image src={props.photo}></image></td>
        <td>{props.name}</td>
        <td><div>{props.address[0]}</div><div>{props.address[1]}</div><div>{props.address[2]}</div></td>
        <td>{props.phone}</td>
        <td>{props.price}</td>
        <td>{props.rating}</td>
        <td>{props.count}</td>
        <td>{(props.closed)}</td>
      </tr>
  )
}

export default Restaurant;