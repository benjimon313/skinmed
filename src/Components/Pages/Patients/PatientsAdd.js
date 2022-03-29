import React from "react";

import PatientsForm from "./PatientsForm";
import PatientsTable from "./PatientsTable";
import PatientsTableSort from "./PatientsTableSort";

const PatientsAdd = () => {
  return (
    <div>
      <PatientsForm />
      <PatientsTableSort/>
    </div>
  );
};

export default PatientsAdd;
