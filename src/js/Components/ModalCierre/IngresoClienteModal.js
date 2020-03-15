import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import IngresoCliente from '../RegistrationForm/IngresoCliente';
import RegistFormCliente from '../RegistrationForm/RegistFormCliente';
import { Link } from 'react-router-dom'

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        La Tienda
      </Link>{' '}
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
      backgroundColor: '#252525'
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
    backgroundColor: '#ff8d1e',
    color: '#f5f3f3',
    '&:hover': {
      backgroundColor: '#ff8d1e',
      borderColor: 'none',
      boxShadow: 'none',
    },
    '&:active': {
      boxShadow: 'none',
      backgroundColor: '#ff8d1e',
      borderColor: 'none',
    },
    '&:focus': {
      backgroundColor: '#ff8d1e',
      boxShadow: 'none'
    },
  },
}));

const steps = ['Ingreso Cliente', 'Registro Formulario cliente'];

function getStepContent(step) {
  switch (step) {
    case 0:
      return <IngresoCliente />;
    case 1:
      return <RegistFormCliente />;
    default:
      throw new Error('Unknown step');
  }
}

export default function IngresoClienteModal() {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);

  const handleNext = () => {
    setActiveStep(activeStep + 1);
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

  return (
      <main>
        <Paper >
          <React.Fragment>
            {activeStep === steps.length ? (

              <React.Fragment>
                <Typography variant="h5" gutterBottom>

                  Aqui colocamos el LInk para la siguiente vista
                </Typography>
                <Typography variant="subtitle1">

                  En caso
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
                    <Button
                      variant="contained"
                      color="primary"
                      onClick={handleNext}
                      className={classes.button}
                    >
                      {activeStep === steps.length - 1 ? 'Registrate' : "Don't have an account? Sign Up"}
                    </Button>
                  </div>
                </React.Fragment>
              )}
          </React.Fragment>
          <Box mt={8}>
            <Copyright />
          </Box>
        </Paper>
      </main>
  );
}