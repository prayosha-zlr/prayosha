import React, { useState } from "react";

import Button from "@mui/material/Button";
import { auth } from "../Firebase-config";
import {
    signInWithEmailAndPassword,
  } from "firebase/auth";
import { useNavigate } from "react-router-dom";


const Login = () => {
    const[data,setData] = useState({
        email:"",
        password:""
    })

    const navigate = useNavigate()

    const handleChange = (e)=>{
        setData((prevData)=>{
         return{...prevData,[e.target.name]:e.target.value}
        })
    }

    const handleSubmit = async(e)=>{
        e.preventDefault();
        try {
            const user = await signInWithEmailAndPassword(
              auth,
              data.email,
              data.password
            );
            console.log(user);
            navigate('/')

          } catch (error) {
            alert(error.message);
          }
     
    }
  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <div>
          <label>Email</label>
          <input type="text" placeholder="Email" name="email" onChange={handleChange} value={data.email} />
        </div>
        <div>
          <label>Password</label>
          <input type="password" placeholder="Password"  name="password" onChange={handleChange} value={data.password} />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};
export default Login;


// import React from 'react';
// import {
//   Checkbox,
//   Grid,
//   TextField,
//   FormControlLabel,
//   Paper,
//   Button
// } from '@material-ui/core';
// const Login = () => {
//   const [checked, setChecked] = React.useState(true);

//   const handleChange = (event) => {
//     setChecked(event.target.checked);
//   };

//   return (
//     <div style={{ padding: 30 }}>
//       <Paper>
//         <Grid
//           container
//           spacing={3}
//           direction={'column'}
//           justify={'center'}
//           alignItems={'center'}
//         >
//           <Grid item xs={12}>
//             <TextField label="Username"></TextField>
//           </Grid>
//           <Grid item xs={12}>
//             <TextField label="Password" type={'password'}></TextField>
//           </Grid>
//           <Grid item xs={12}>
//             <FormControlLabel
//               control={
//                 <Checkbox
//                   checked={checked}
//                   onChange={handleChange}
//                   label={'Keep me logged in'}
//                   inputProps={{ 'aria-label': 'primary checkbox' }}
//                 />
//               }
//               label="Keep me logged in"
//             />
//           </Grid>
//           <Grid item xs={12}>
//             <Button fullWidth> Login </Button>
//           </Grid>
//         </Grid>
//       </Paper>
//     </div>
//   );
// };

// export default Login;
