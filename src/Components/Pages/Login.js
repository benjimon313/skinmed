import React, { useState } from "react";

import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { TextField } from "@mui/material";
import Box from "@mui/material/Box";

import skinmed from './imagss/skinmed.jpeg'
import "./Login.css";
import { useRecoilState, useRecoilValue } from "recoil";
import {userState, activeUserState} from "../Atoms/userAtom"

function Login() {
    const usersList = useRecoilValue(userState);
    const [activeUser, setActiveUser] = useRecoilState(activeUserState);
    const [username, setUsername] = useState();
    const [password, setPassword] = useState();
    const verifyUser = () => {
        console.log(username,password);
        const userIndex = usersList.findIndex(
            (user) => user.username === username
          );
          if(usersList[userIndex]?.pass === password){
              setActiveUser({username:username, rol:usersList[userIndex].rol})
          } else {
              console.log("Usuario y/o contrasenha invalidas");
          }
    }
    
  return (
    <div className="login-wrapper">
      <img src={skinmed} alt= " " width="300" height="250" align="right"/>
      <Card>
        <CardContent>
        
          <form>
            <Grid container>
              
              <Box>
                <Grid item xs={12} sx={{ m: 1, p: 2 }}>
                  <TextField label="Usuario" variant="outlined"  onChange={(event) => setUsername(event.target.value)} fullWidth />
                </Grid>
                <Grid item xs={12} sx={{ m: 1, p: 2 }}>
                  <TextField label="Contraseña" type="password" variant="outlined" onChange={(event) => setPassword(event.target.value)} fullWidth />

                  <div className="new-expense">
                    <Button onClick={verifyUser}>Iniciar Sesion</Button>
                  </div>
                </Grid>
              </Box>
            </Grid>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}

export default Login;
