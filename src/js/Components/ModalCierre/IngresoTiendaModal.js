import React, {useContext}  from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import IngresoTienda from '../RegistrationForm/IngresoTienda';
import RegistFormTienda from '../RegistrationForm/RegistFormTienda';
import Box from '@material-ui/core/Box';
import {Context} from '../../AppContext';
import Alert from '@material-ui/lab/Alert';
import { withRouter } from 'react-router-dom';



function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
    
        La Tienda

      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}



const useStyles = makeStyles(theme => ({
  appBar: {
    position: 'relative',
  },
  layout: {
    width: 'auto',
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(2) * 2)]: {
      width: 600,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
  paper: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3),
    padding: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(3) * 2)]: {
      marginTop: theme.spacing(6),
      marginBottom: theme.spacing(6),
      padding: theme.spacing(3),
    },
  },
  stepper: {
    padding: theme.spacing(3, 0, 5),
  },
  buttons: {
    display: 'flex',
    justifyContent: 'flex-end',
  },
  button: {
    marginTop: theme.spacing(3),
    marginLeft: theme.spacing(1),
  },
}));

const steps = ['Ingreso Cliente', 'Registro Formulario cliente'];

function getStepContent(step) {
  switch (step) {
    case 0:
      return <IngresoTienda />;
    case 1:
      return <RegistFormTienda />;
    default:
      throw new Error('Unknown step');
  }
}

function IngresoTiendaModal(props) {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const {actions, store} = useContext(Context);

  const handleNext = () => {
    setActiveStep(activeStep + 1);
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

  

  return (
      <main >
        <Paper >
        {
          !!store.errorTienda  && (
            <div className={classes.root}>
              
              <Alert severity="error">{store.errorTienda.msg}</Alert>
    
            </div>)
          }
          <React.Fragment>
            {activeStep === steps.length ? (
              <React.Fragment>
                <Typography variant="h5" gutterBottom>
                 Gracias por registrarse su Tienda con nosotros
                </Typography>
              </React.Fragment>
            ) : (
       
              <React.Fragment>
              {getStepContent(activeStep)}
              <div className={classes.buttons}>
                {activeStep !== 0 && (
                <Button onClick={handleBack} className={classes.button}>
                    Back
                </Button>
                )}

                  {activeStep === steps.length - 1? (
                  <Button 
                  variant="contained"
                  color="primary"
                  onClick={
                    store.clave?
                    
                    e =>{actions.handleSubmitTienda(e, props.history)
                         handleNext(e)
                    } :
                    e =>{actions.handleSubmitTienda(e, props.history)
                    }
                  }
                  className={classes.button}
                  > 
                  Registrate
                  </Button>
                     ) : (
                    <Button
                      variant="contained"
                      color="primary"
                      onClick={handleNext}
                      className={classes.button}
                    >
                      "No tienes una cuenta? Registrate"     
                </Button>
                )} 
              </div>
              </React.Fragment>
                 )}
            </React.Fragment>
       </Paper>
      <Box mt={8}>
        <Copyright />
      </Box>
  </main>
);
}


export default withRouter(IngresoTiendaModal);

