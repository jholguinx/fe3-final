import React from "react";
import { useState } from 'react';
import  {useContextGlobal}  from '../Components/utils/global.context';
import { useEffect } from "react";
import swal from 'sweetalert';

const Form = () => {
  const {formStyle} = useContextGlobal();
  const [formErrors, setFormErrors] = useState({});
  const [submit, setSubmit] = useState(false);
  const [user, setUser] = useState({
    name: '',
    email: '',
  })
  const validEmail = new RegExp(/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g);
  const validName = new RegExp(/[a-zA-Z]{5,30}$/g);

  const handleSubmit = (event) => {
    event.preventDefault();
    setFormErrors(validate(user));
    setSubmit(true);
  }

  useEffect(()=>{
    if(Object.keys(formErrors).length === 0 && submit){
      console.log(user)
      swal({
        icon: 'success',
        title: 'Your registration has been successful',
      })
    }
  },[formErrors])

  const validate = (user) => {
    const errors = {};
    if(!user.name){
      errors.name = "a name is required"
    }else if(!validName.test(user.name.trim())){
      errors.name = true;
    }

    if(!user.email){
      errors.email = "an email is required"
    }else if(!validEmail.test(user.email)){
      errors.email = true;
    }
    return errors;
  }

  const handleChange = (e) => {
    setUser({
        ...user,
      [e.target.name]: e.target.value
    })
  }
  return (
    <div>
      <form onSubmit={handleSubmit} style={formStyle}>
        <label htmlFor="name-input" >Name</label>
        <input type="text" name='name' id="name-input" onChange={handleChange} />
        <p>{formErrors.name}</p>
        <label htmlFor="email-input">Email</label>
        <input type="text" name='email' id="email-input" onChange={handleChange}/>
        <p>{formErrors.email}</p>
        <button>Submit</button>
      </form>
      {(formErrors.name || formErrors.email) === true && <p>Please check your data again</p>}
      {Object.keys(formErrors).length === 0 && submit && <p>Thank you {user.name} we will contact you as soon as possible via e-mail</p>}
    </div>
  );
};

export default Form;
