import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { useState } from 'react';
import  {useContextGlobal}  from '../Components/utils/global.context';

const Detail = () => {
  const {stylesComponentsSwitch, datos} = useContextGlobal();
  const params = useParams()

  const [details, setDetails] = useState()
  const url = 'https://jsonplaceholder.typicode.com/users'

  let result = datos?.find(item => item.id === Number(params.id));

  useEffect(()=>{
    const axiosData = async () => {
      let res = await axios(url + '/' + result.id)
      setDetails(res.data)
  }
  axiosData()
}, [result])
  
  return (
    <div>
      <h1>Detail Dentist id </h1>
      <table>
      <tbody>
        <tr>
          <td>Name</td>
          <td>Email</td>
          <td>Phone</td>
          <td>Website</td>
        </tr>
        <tr style={stylesComponentsSwitch}>
          <td>{details?.name}</td>
          <td>{details?.email}</td>
          <td>{details?.phone}</td>
          <td>{details?.website}</td>
        </tr>
        </tbody>
      </table>
    </div>
  )
}

export default Detail