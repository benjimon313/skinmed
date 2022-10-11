import * as React from "react";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import { Box } from "@mui/system";

import Divider from "@mui/material/Divider";

function AnalisisCompletos() {
  const printHandler = () => {
    window.print();
  };
  return (
    <>
      <Box m={5}>
        <h2 align="center" onClick={printHandler}>
          Solicitud de Analisis
        </h2>
        <Grid container>
          <Grid item xs={8}>
            <Box mr={1} mb={1}>
              <TextField
                fullWidth
                label="Nombre Paciente"
                id="fullWidth"
                variant="standard"
              />
            </Box>
          </Grid>
          <Grid item xs={2}>
            <Box mr={1}>
              <TextField
                fullWidth
                label="Edad"
                id="fullWidth"
                variant="standard"
              />
            </Box>
          </Grid>
          <Grid item xs={2}>
            <Box mr={1}>
              <TextField
                fullWidth
                label="Telf."
                id="fullWidth"
                variant="standard"
              />
            </Box>
          </Grid>

          <Grid item xs={9}>
            <Box mr={1}>
              <TextField
                fullWidth
                label="Medico Solicitante"
                id="fullWidth"
                variant="standard"
              />
            </Box>
          </Grid>
          <Grid item xs={3}>
            <Box mt={2}>
              <TextField
                fullWidth
                id="fullWidth"
                variant="standard"
                defaultValue="2022-09-24"
                type="date"
              />
            </Box>
          </Grid>
        </Grid>

        <Box m={3}>
          <Divider> </Divider>
        </Box>
        <Grid container>
          <Grid item xs={3}>
            <FormGroup>
              <h4>HEMATOLOGIA</h4>
              <FormControlLabel
                control={<Checkbox />}
                label="Hemograma Completo"
              />
              <FormControlLabel
                control={<Checkbox />}
                label="Hemoglobina y Hermatocrito"
              />
              <FormControlLabel
                control={<Checkbox />}
                label="Eritrosedimentacion"
              />
              <FormControlLabel
                control={<Checkbox />}
                label="Grupo Sanguineo y Factor RH"
              />
              <FormControlLabel control={<Checkbox />} label="Celilas LE" />
              <FormControlLabel control={<Checkbox />} label="Coombs Directo" />
              <FormControlLabel
                control={<Checkbox />}
                label="Coombs Indirecto"
              />
              <FormControlLabel
                control={<Checkbox />}
                label="Recuento de Reticulocitos"
              />
              <FormControlLabel control={<Checkbox />} label="Plasmodium" />
              <FormControlLabel
                control={<Checkbox />}
                label="Tripanosoma Cruzi"
              />
              <FormControlLabel
                control={<Checkbox />}
                label="Tincion Giernsa"
              />
            </FormGroup>
            <FormGroup>
              <h4>COAGULOGRAMA</h4>
              <FormControlLabel
                control={<Checkbox />}
                label="Tiempo de Sangria"
              />
              <FormControlLabel
                control={<Checkbox />}
                label="Tiempo de Coagulacion"
              />
              <FormControlLabel
                control={<Checkbox />}
                label="T. de Promtobina"
              />
              <FormControlLabel
                control={<Checkbox />}
                label="T. Tromboplastina P. Activada"
              />
              <FormControlLabel control={<Checkbox />} label="Fibrinogeno" />
            </FormGroup>
            <FormGroup>
              <h4>URIANALISIS</h4>
              <FormControlLabel control={<Checkbox />} label="Orina Completa" />
              <FormControlLabel
                control={<Checkbox />}
                label="Disformismo Eritrocitario"
              />
              <FormControlLabel
                control={<Checkbox />}
                label="Depuracion de Creatinina"
              />
              <FormControlLabel
                control={<Checkbox />}
                label="Proteinuiria Orina de 24 Hrs"
              />
              <FormControlLabel
                control={<Checkbox />}
                label="Glucosa en Orina de 24 Hrs"
              />
              <FormControlLabel
                control={<Checkbox />}
                label="Uricosuria en Orina de 24 Hrs"
              />
              <FormControlLabel
                control={<Checkbox />}
                label="Potasio Urinario"
              />
              <FormControlLabel control={<Checkbox />} label="Sodio Urinario" />
              <FormControlLabel control={<Checkbox />} label="Cloro Urinario" />
            </FormGroup>
            <FormGroup>
              <h4>HECES</h4>
              <FormControlLabel
                control={<Checkbox />}
                label="Parasitologico Simple"
              />
              <FormControlLabel
                control={<Checkbox />}
                label="Parasitologico Seriado"
              />
              <FormControlLabel control={<Checkbox />} label="Moco Fecal" />
              <FormControlLabel
                control={<Checkbox />}
                label="Substancia Reductoras"
              />
              <FormControlLabel control={<Checkbox />} label="Sangre Oculta" />
              <FormControlLabel
                control={<Checkbox />}
                label="Helicobacter Pylori"
              />
              <FormControlLabel control={<Checkbox />} label="Rotavirus" />
            </FormGroup>
            <FormGroup>
              <h4>OXIDOLOGIA</h4>
              <FormControlLabel control={<Checkbox />} label="Calcio-U" />
              <FormControlLabel control={<Checkbox />} label="Vitamina-C" />
              <FormControlLabel control={<Checkbox />} label="Test Adrenal" />
              <FormControlLabel control={<Checkbox />} label="MDA" />
              <FormControlLabel control={<Checkbox />} label="HLB" />
            </FormGroup>
            <FormGroup>
              <h4>FARMACOS</h4>
              <FormControlLabel
                control={<Checkbox />}
                label="Cocaina en Orina"
              />
              <FormControlLabel
                control={<Checkbox />}
                label="Marihuana en Orina"
              />
            </FormGroup>
          </Grid>

          <Grid item xs={3}>
            <FormGroup>
              <h4>BIOQUIMICA SANGUINEA</h4>
              <FormControlLabel control={<Checkbox />} label="Glucosa" />
              <FormControlLabel
                control={<Checkbox />}
                label="Glucosa Post Prandial"
              />
              <FormControlLabel
                control={<Checkbox />}
                label="Curva de Tolerancia a la Glucosa"
              />
              <FormControlLabel
                control={<Checkbox />}
                label="Hermoglobina Glicosilada"
              />
              <FormControlLabel control={<Checkbox />} label="Urea" />
              <FormControlLabel
                control={<Checkbox />}
                label="Nitrogeno Urico"
              />
              <FormControlLabel control={<Checkbox />} label="Creatinina" />
              <FormControlLabel control={<Checkbox />} label="Acido Urico" />
              <FormControlLabel
                control={<Checkbox />}
                label="Perfil Lipidico"
              />
              <FormControlLabel
                control={<Checkbox />}
                label="Colesterol Total"
              />
              <FormControlLabel control={<Checkbox />} label="HDL Colesterol" />
              <FormControlLabel control={<Checkbox />} label="LDL Colesterol" />
              <FormControlLabel control={<Checkbox />} label="Trigliceridos" />
              <FormControlLabel
                control={<Checkbox />}
                label="Lipidos Totales"
              />
              <FormControlLabel control={<Checkbox />} label="Fosfolipidos" />
              <FormControlLabel control={<Checkbox />} label="Bilirrubinas" />
              <FormControlLabel
                control={<Checkbox />}
                label="GOT-Transaminasa"
              />
              <FormControlLabel
                control={<Checkbox />}
                label="GPT-Transaminasa"
              />
              <FormControlLabel
                control={<Checkbox />}
                label="Fosfatasa Alcalina"
              />
              <FormControlLabel
                control={<Checkbox />}
                label="LDH - Deshidrogenasa Lactica"
              />
              <FormControlLabel control={<Checkbox />} label="Amilasa" />
              <FormControlLabel control={<Checkbox />} label="Lipasa" />
              <FormControlLabel
                control={<Checkbox />}
                label="Proteinas Totales"
              />
              <FormControlLabel control={<Checkbox />} label="Albuminidas" />
              <FormControlLabel control={<Checkbox />} label="Globulinas" />
              <FormControlLabel
                control={<Checkbox />}
                label="Electroforesis de Proteinas"
              />
              <FormControlLabel control={<Checkbox />} label="Calcio Ionico" />
              <FormControlLabel control={<Checkbox />} label="Calcio" />
              <FormControlLabel control={<Checkbox />} label="Fosforo" />
              <FormControlLabel control={<Checkbox />} label="Magnesio" />
              <FormControlLabel control={<Checkbox />} label="Sodio" />
              <FormControlLabel control={<Checkbox />} label="Potasio" />
              <FormControlLabel control={<Checkbox />} label="Cloro" />
              <FormControlLabel control={<Checkbox />} label="Litio" />
              <FormControlLabel
                control={<Checkbox />}
                label="GGT - Gama Glutamil Transferasa"
              />
              <FormControlLabel control={<Checkbox />} label="Fructosamina" />
              <FormControlLabel control={<Checkbox />} label="Mucoproteinas" />
              <FormControlLabel control={<Checkbox />} label="Fructosamina" />
              <FormControlLabel control={<Checkbox />} label="Vitamina D" />
              <FormControlLabel control={<Checkbox />} label="IgF1" />
            </FormGroup>
          </Grid>
          <Grid item xs={3}>
            <FormGroup>
              <h4>INMUNOLOGIA</h4>
              <FormControlLabel control={<Checkbox />} label="Asto" />
              <FormControlLabel control={<Checkbox />} label="PCR" />
              <FormControlLabel
                control={<Checkbox />}
                label="PCR Ultra Sensible"
              />
              <FormControlLabel control={<Checkbox />} label="Latex RA" />
              <FormControlLabel
                control={<Checkbox />}
                label="Reaccion de Widal"
              />
              <FormControlLabel
                control={<Checkbox />}
                label="Reaccion de Well Felix"
              />
              <FormControlLabel
                control={<Checkbox />}
                label="Reaccion de Huddlesson"
              />
              <FormControlLabel
                control={<Checkbox />}
                label="Paul Bunel - Monotest"
              />
              <FormControlLabel
                control={<Checkbox />}
                label="Epstein Barr Elisa"
              />
              <FormControlLabel
                control={<Checkbox />}
                label="Cardiolipina VDRL"
              />
              <FormControlLabel control={<Checkbox />} label="Chagas" />
              <FormControlLabel control={<Checkbox />} label="Toxoplasmosis" />
              <FormControlLabel
                control={<Checkbox />}
                label="Helicobacter Pylori"
              />
              <FormControlLabel control={<Checkbox />} label="Tuberculosis" />
              <FormControlLabel control={<Checkbox />} label="Rubeola Elisa" />
              <FormControlLabel control={<Checkbox />} label="Ada Desaminasa" />
              <FormControlLabel control={<Checkbox />} label="Ig A" />
              <FormControlLabel control={<Checkbox />} label="Ig E" />
              <FormControlLabel control={<Checkbox />} label="Ig G" />
              <FormControlLabel control={<Checkbox />} label="Ig M" />
              <FormControlLabel control={<Checkbox />} label="C1" />
              <FormControlLabel control={<Checkbox />} label="C2" />
              <FormControlLabel control={<Checkbox />} label="C3" />
              <FormControlLabel control={<Checkbox />} label="C4" />
              <FormControlLabel control={<Checkbox />} label="Anti CCP" />
              <FormControlLabel control={<Checkbox />} label="Peptido C" />
              <FormControlLabel
                control={<Checkbox />}
                label="Anticardiolipina Ig G"
              />
              <FormControlLabel
                control={<Checkbox />}
                label="Antiocardiolipina Ig G"
              />
              <FormControlLabel
                control={<Checkbox />}
                label="Fan - Factor Antinucleares"
              />
              <FormControlLabel control={<Checkbox />} label="Asma" />
              <FormControlLabel control={<Checkbox />} label="Anti DNA" />
              <FormControlLabel control={<Checkbox />} label="Anti TG" />
              <FormControlLabel
                control={<Checkbox />}
                label="Cistercosis Elisa"
              />
              <FormControlLabel
                control={<Checkbox />}
                label="Chlamydia Trachomantis Ig G, Ig M"
              />
              <FormControlLabel
                control={<Checkbox />}
                label="Chlamydia Trachomantis Ig A"
              />
              <FormControlLabel
                control={<Checkbox />}
                label="Mycoplasma pneumoniae Ig G"
              />
              <FormControlLabel
                control={<Checkbox />}
                label="Mycoplasma pneumoniae Ig M"
              />
            </FormGroup>
          </Grid>
          <Grid item xs={3}>
            <FormGroup>
              <h4>MARCADORES TUMORALES</h4>
              <FormControlLabel
                control={<Checkbox />}
                label="psa Antigeno Prostatico"
              />
              <FormControlLabel
                control={<Checkbox />}
                label="Especifico Total"
              />
              <FormControlLabel
                control={<Checkbox />}
                label="PSA Antigeno Prostatico"
              />
              <FormControlLabel
                control={<Checkbox />}
                label="CEA Antigeno Carcino"
              />
              <FormControlLabel control={<Checkbox />} label="CA -125" />
              <FormControlLabel control={<Checkbox />} label="CA -15.3" />
              <FormControlLabel control={<Checkbox />} label="CA -19.9" />
              <FormControlLabel
                control={<Checkbox />}
                label="Alfafetoproteinas"
              />
            </FormGroup>
            <FormGroup>
              <h4>HORMONAS</h4>
              <FormControlLabel control={<Checkbox />} label="TSH Neonatal" />
              <FormControlLabel control={<Checkbox />} label="T3,T4, TSR" />
              <FormControlLabel control={<Checkbox />} label="LH" />
              <FormControlLabel control={<Checkbox />} label="FSH" />
              <FormControlLabel control={<Checkbox />} label="Estradiol" />
              <FormControlLabel control={<Checkbox />} label="Progesterona" />
              <FormControlLabel control={<Checkbox />} label="Prolactina" />
              <FormControlLabel control={<Checkbox />} label="Testosterona" />
              <FormControlLabel control={<Checkbox />} label="Testosterona Libre" />
              <FormControlLabel control={<Checkbox />} label="Cortison Basal 8 Hrs" />
              <FormControlLabel control={<Checkbox />} label="Hormana del Crecimiento" />
              <FormControlLabel control={<Checkbox />} label="Antimulleriana" />
              <FormControlLabel control={<Checkbox />} label="ACTH" />
              <FormControlLabel control={<Checkbox />} label="Androstenodiona" />
              <FormControlLabel control={<Checkbox />} label="DHEA -S" />
              <FormControlLabel control={<Checkbox />} label="Insulina" />
              <FormControlLabel control={<Checkbox />} label="B-HCG Cualitativa" />
            </FormGroup>
            <FormGroup>
              <h4>BACTEROLOGIA</h4>

              <FormControlLabel control={<Checkbox />} label="Coprocultivo" />
              <FormControlLabel
                control={<Checkbox />}
                label="Tincion de Gram"
              />
              <FormControlLabel
                control={<Checkbox />}
                label="Urocultivo y Antibiograma"
              />
              <FormControlLabel control={<Checkbox />} label="Antibiograma" />
              <FormControlLabel
                control={<Checkbox />}
                label="Cultivo de Liq. Cefalorraquideo"
              />
              <FormControlLabel
                control={<Checkbox />}
                label="Cultivo de Secrecion Vaginal"
              />
              <FormControlLabel
                control={<Checkbox />}
                label="Cultivo de Secrecion Broqu."
              />
              <FormControlLabel
                control={<Checkbox />}
                label="Cultivo Micologico"
              />
              <FormControlLabel
                control={<Checkbox />}
                label="Chlamydia Trachomatis"
              />
              <FormControlLabel
                control={<Checkbox />}
                label="Baciloscopia Simple"
              />
              <FormControlLabel
                control={<Checkbox />}
                label="Baciloscopia Sertada"
              />
            </FormGroup>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}

export default AnalisisCompletos;
