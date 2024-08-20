import React, { useEffect, useRef, useState } from 'react'
import Mainheader from '../Aboutheader/Mainheader'
import axios from '../../api/axios'
import { useNavigate } from 'react-router-dom'




const Apply = ({data}) => {
    
    
   console.log(data._id)
  
  const [firstName, setFirstName] = useState('')
    const [focusFirstName, setFocusFirstName]= useState(false)
      
    const [lastName, setLastName] = useState('')
    const [focuslastname, setFocusLastName] = useState(false)
      
    const [email, setEmail] = useState('')
    const [focusEmail, setFocusEmail] = useState(false)

    const [coverLetter, setCoverLetter] = useState('')
    const [focuscoverLetter, setFocusLetter] = useState(false)

    const [selectedFile, setSelectedFile] = useState(null);
    const [error, setError] = useState(null);
    const userRef = useRef()
    const navigate = useNavigate()

    // useEffect(() => {
    //     userRef.current.focus()
    // })  
const handleFileChange = (event) => {
      const file = event.target.files[0];  
  if (!file) {
        setSelectedFile(null);
        setError(null);
        return;
      }
  
      const allowedTypes  = ['application/pdf', 'application/msword'];
      if (!allowedTypes.includes(file.type)) {
        setError('Please upload a PDF or DOC file.');
        setSelectedFile(null);
        return;
      }
  
      setSelectedFile(file);
      setError(null);
    };

     const handleApply = async (event, id) => {
      event.preventDefault()
      const formData = new FormData();
      formData.append('first_name', firstName);
      formData.append('last_name', lastName);
      formData.append('email', email);
      formData.append('coverInfo', coverLetter);
      formData.append('resume', selectedFile);
      try {
          const response =  await axios.post(`/jobs/apply/` + id, formData, {
            headers: {
              "Content-Type": "multipart/form-data"

            },
            withCredentials : true
          })
          console.log(response.data)
          alert("applied sucessfully")
           navigate('/carer')
         } catch (error) {
        console.log(error,'error' )
         }
     }  
    

    return (
     
      
    <section className='bg-[--white] '>
      <Mainheader />
      
        <div className='container  m-auto bg-white w-[80%] md:w-[50%]'>
          <h1 className='text-[--black] text-[2rem] p-6 flex justify-center mt-8'>Welcome to Job Apply Form</h1>  
      <form className='flex flex-col  justify-center align-middle p-20 gap-6' onSubmit={e => handleApply(e, data[0]._id)} >
     <label htmlFor="firstname">First Name:</label>
      <input 
      type="text"
      id='firstname'
      ref={userRef}
      value={firstName}
      required
      className='w-[100%] border-[2px] border-[solid] border-black' 
      onChange={(e) => {setFirstName(e.target.value)}}
      />
      <label htmlFor='lastname'>Last Name:</label>
      <input
       type="text"
       id='lastname'
       onChange={(e) => {setLastName(e.target.value)}}
       required
       className='w-[100%] border-[2px] border-[solid] border-black' 
      />

      <label htmlFor="coverinfo">Cover Letter</label>
      
      <input 
      type="text"
            id='coverinfo'
           value={coverLetter}
            onChange={(e) => {setCoverLetter(e.target.value)}}
            required
            className='w-[100%] border-[2px] border-[solid] border-black' 
          />

        <label htmlFor="email">Email:</label>
         <input 
          type='email'
          id='email'
          value={email}
          required
          className='w-[100%] border-[2px] border-[solid] border-black' 
          onChange={(e) => {setEmail(e.target.value)}}
         />
    
       <input type="file" onChange={handleFileChange} required className='mt-4'  />
        {error && <div className="error">{error}</div>}
 


       <button  className='w-[30%] bg-blue-600 text-white h-[3rem] justify-end mt-4' >Apply</button>
      </form>
      </div>
    </section>
  )
}

export default Apply