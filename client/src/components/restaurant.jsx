import React from 'react';

const Restaurant = (props) => {
  return (
      <tr className="restaurant-row">
        <td><a href={props.url}>{props.name}</a></td>
        <td><div>{props.address[0]}</div><div>{props.address[1]}</div><div>{props.address[2]}</div></td>
        <td>{props.phone}</td>
        <td>{props.price}</td>
        <td>{props.rating}</td>
        <td>{props.count}</td>
        <td>{props.closed === false ? "Yes" : "No"}</td>
      </tr>
  )
}

export default Restaurant;