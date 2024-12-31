import React, { useState } from 'react';
import { TextField, Button, FormControl, InputLabel, Select, MenuItem, FormHelperText, Grid,  } from '@mui/material';

const StudentForm = () => {
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [mobile, setMobile] = useState('');
  const [email, setEmail] = useState('');
  const [gender, setGender] = useState('');
  const [dob, setDob] = useState('');
  const [course, setCourse] = useState('');
  const [errors, setErrors] = useState({});

  
  const courseOptions = ['Biology', 'Computer Science', 'Commerce', 'Humanities'];

  const handleCancel = () => {
    setName('');
    setAddress('');
    setMobile('');
    setEmail('');
    setGender('');
    setDob('');
    setCourse('');
    setErrors({});
  };

  const validateForm = () => {
    const newErrors = {};

    if (!name) newErrors.name = 'Name is required';
    if (!address) newErrors.address = 'Address is required';
    if (!mobile) newErrors.mobile = 'Mobile number is required';
    if (!/^\d{10}$/.test(mobile)) newErrors.mobile = 'Mobile number must be 10 digits';
    if (!email) newErrors.email = 'Email is required';
    if (!/\S+@\S+\.\S+/.test(email)) newErrors.email = 'Email is not valid';
    if (!gender) newErrors.gender = 'Gender is required';
    if (!dob) newErrors.dob = 'Date of birth is required';
    if (!course) newErrors.course = 'Course selection is required';

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const formErrors = validateForm();
    setErrors(formErrors);

    if (Object.keys(formErrors).length === 0) {
      const userData = {
        name,
        address,
        mobile,
        email,
        gender,
        dob,
        course,
      };
      alert(`Data stored successfully!\n\n${JSON.stringify(userData, null, 2)}`);
      handleCancel(); 
    }
  };

  return (
    <div   style={{ width: "100%", minHeight: "100vh" }}
    className="d-flex justify-content-center align-items-center bg-dark">
      <div style={{ width: "600px" }} className="bg-light rounded p-5">
      <h1 className='text-danger'>Student Admission Form</h1>
      <form onSubmit={handleSubmit}>
      
            <TextField     
              label="Name"
              variant="outlined"
              className="w-100 mb-3"
              value={name}
              onChange={(e) => setName(e.target.value)}
              error={Boolean(errors.name)}
              helperText={errors.name}
            />
      

            <TextField
              label="Address"
              variant="outlined"
              className="w-100 mb-3"
              multiline
              rows={2}
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              error={Boolean(errors.address)}
              helperText={errors.address}
            />
        

          
            <TextField
              label="Mobile"
              variant="outlined"
              className="w-100 mb-3"
              value={mobile}
              onChange={(e) => setMobile(e.target.value)}
              error={Boolean(errors.mobile)}
              helperText={errors.mobile}
            />
       

        
            <TextField
              label="Email"
              variant="outlined"
              className="w-100 mb-3"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              error={Boolean(errors.email)}
              helperText={errors.email}
            />
          
        
            <FormControl className="w-100 mb-3"  error={Boolean(errors.gender)}>
              <InputLabel>Gender</InputLabel>
              <Select
                value={gender}
                onChange={(e) => setGender(e.target.value)}
                label="Gender"
              >
                <MenuItem value="">Select Gender</MenuItem>
                <MenuItem value="Male">Male</MenuItem>
                <MenuItem value="Female">Female</MenuItem>
                <MenuItem value="Other">Other</MenuItem>
              </Select>
              <FormHelperText>{errors.gender}</FormHelperText>
            </FormControl>
   

      
            <TextField
              label="Date of Birth"
              className="w-100 mb-3"
              type="date"
              InputLabelProps={{
                shrink: true,
              }}
              value={dob}
              onChange={(e) => setDob(e.target.value)}
              error={Boolean(errors.dob)}
              helperText={errors.dob}
            />
   
 
            <FormControl className="w-100 mb-3"  error={Boolean(errors.course)}>
              <InputLabel>Course</InputLabel>
              <Select
                value={course}
                onChange={(e) => setCourse(e.target.value)}
                label="Course"
              >
                <MenuItem  value="">Select Course</MenuItem>
                {courseOptions.map((courseOption) => (
                  <MenuItem key={courseOption} value={courseOption}>
                    {courseOption}
                  </MenuItem>
                ))}
              </Select>
              <FormHelperText>{errors.course}</FormHelperText>
            </FormControl>
     

  
            <Button  variant="contained" color="primary" type="submit" style={{width:'50%',height:'70px'}} className='bg-dark'>
              Register
            </Button>
            <Button variant="outlined" color="secondary" onClick={handleCancel} style={{width:'50%',height:'70px'}}>
              Cancel
            </Button>
    

      </form>
      </div>
     
    </div>
  );
};

export default StudentForm;
