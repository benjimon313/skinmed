import React from "react";

import { Card, Grid, CardContent, TextField, Button, Box } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import AttendancePatient from "./AttendancePatient";
import AttendanceList from "./AttendanceList";
import AttendanceHistory from "./AttendanceHistory";

const Attendance = () => {
  return (
    <div>
      
    <AttendanceList/>
    </div>
  );
};

export default Attendance;
