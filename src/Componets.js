import React, { useState,useRef } from 'react'
import emailjs from '@emailjs/browser';
import './Componets.css'

export default function Componets() {
  const [value,setValues]=useState({
    first_name:'',
    lastname:'',
    mail:'',
    contact_number:'',
    gender:'',
    sub:'',
    resumefile:'',
    link:'',
    description:'',
    })


  const [isSubmit,setSubmit]=useState(false);
 
  const handleChange=(e)=>{
    setValues({...value,[e.target.name]:[e.target.value]})
  }
  
  const form = useRef();
  const sendEmail =(e)=>{
     e.preventDefault()
 
     emailjs
     .sendForm('service_8a4igu7', 'template_b5xf9te', form.current, {
       publicKey: 'Uyjj4TpD-gaBGVhq8',
     })
     .then(
       (setValues) => {
         console.log(setValues.text);
       },
       (error) => {
         console.log(error.text);
       },
     );
     e.target.reset()
     console.log(value)
     setSubmit(true);
     
    

  
     
    
  };

 
  
  const resetFunc= ()=> {
    setValues({ first_name:'',
      lastname:'',
      mail:'',
      contact_number:'',
      gender:'',
      sub:'',
      resumefile:'',
      link:'',
      description:'',
      submit:'',
      })

  }
 

  
    
  return (
   
     <div className='container'>
      
         <form ref={form} onSubmit={sendEmail}>

           <label htmlFor='fname'>First Name*</label><br/>
           <input 
           placeholder='Enter first Name' type='text' name='first_name'
           onChange={(e)=>handleChange(e)} required value={value.firstname}/><br/>

           <label htmlFor='lname'>Last Name*</label><br/>
           <input placeholder='Enter last Name' type='text' name='lastname'
           onChange={(e)=>handleChange(e)} required value={value.lastname}/><br/>

           <label htmlFor='emaill'>Email*</label><br/>
           <input placeholder='Enter email' type='email' name='mail'required value={value.mail}
           onChange={(e)=>handleChange(e)}/><br/>

           <label htmlFor='contact'>Contact*</label><br/>
           <input placeholder='Enter mobile Number' type='number' name='contact_number'
           onChange={(e)=>handleChange(e)} required value={value.contact_number}/>

     <div className='gender'>
           <label htmlFor='human' name="gender" value={value.gender}>Gender</label><br/>
           <input type='radio' name="gender" value='male' onChange={(e)=>handleChange(e)}/>Male<br/>
           <input type='radio' name="gender" value='female' onChange={(e)=>handleChange(e)}/>Female<br/>
           <input type='radio' name='gender' value='other' onChange={(e)=>handleChange(e)}/>Other<br/>
     </div>

     <div className='subject'>
          <label htmlFor='topics'>Subject</label><br/>
          <select name='sub' id='subjct'
          onChange={(e)=>handleChange(e)} value={value.sub}>
              <option>select subject...</option>
              <option value="maths">Maths</option>
              <option value="physics">Physics</option>
              <option value="englis">English</option>
          </select><br/>
     </div>
           <label htmlFor='resume'>Upload Resume</label><br/>
           <input type='file' name='resumefile'
           onChange={(e)=>handleChange(e)} value={value.resumefile}/><br/>
           
           <label htmlFor='url'>Url</label><br/>
           <input placeholder='Enter URL' type='text' name='link'
           onChange={(e)=>handleChange(e)} value={value.link}/><br/>

           <label htmlFor='about'>About</label><br/>
           <textarea  name='description' className='abt' placeholder='about me' cols="30" rows="10"
           onChange={(e)=>handleChange(e)} value={value.description}></textarea><br/>


   <div className='button'>
           <button type='submit'>Submit</button>
           <button type='butn' onClick={resetFunc}>Reset</button>
    </div>

    {isSubmit&&<div className='alert'>
        
        <h1>submitted successfully.<a href='http://192.168.1.7:3000/'>click here</a> to refresh page.</h1>
        
        </div>}
        </form>
      
    </div>
  )
}
