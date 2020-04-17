import React, {useContext, useEffect}  from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import IngresoTienda from '../RegistrationForm/IngresoTienda';
import RegistFormTienda from '../RegistrationForm/RegistFormTienda';
import Box from '@material-ui/core/Box';
import {Context} from '../../AppContext';
import Link from '@material-ui/core/Link';
import { withRouter } from 'react-router-dom';
import Snackbar from '@material-ui/core/Snackbar';
import Alert from '@material-ui/lab/Alert';



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
  const [open, setOpen] = React.useState(false);

  const handleNext = () => {
    setActiveStep(activeStep + 1);
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return ;
    }
    actions.deleteErrors();
    setOpen(false);
  };

  useEffect(() => {
    if(!!store.errorTienda) setOpen(true);

  });

  

  return (
      <main >
        <Paper >
        {
          !!store.errorTienda && (
            
              <Snackbar open={open} autoHideDuration={6000} onClose={handleClose} anchorOrigin={{ vertical:'top', horizontal:'center' }}> 
                <Alert onClose={handleClose} severity="error">
                    {store.errorTienda.msg}
                </Alert>
              </Snackbar>
            )
        }
          <React.Fragment>
            {activeStep === steps.length ? (
              <React.Fragment>
                <Typography variant="h5" >
                 Gracias por registrar su Tienda con nosotros
                </Typography>
                <Typography variant="h5" >
                  Inicia sesión para agregar tus productos
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
                  onClick= { 
                    (store.clave && store.coordenadas)?
                      e => {handleNext(e)
                      actions.handleSubmitTienda(e, props.history)}
                  :
                    e =>{actions.handleSubmitTienda(e, props.history)}
                    }
                  className={classes.button}
                  > 
                  Registrate
                  </Button>
                     ) : (
                      <Typography
                      variant="button"
                      color="primary"
                      onClick={handleNext}
                    >
                      <Link href="#" style={{marginTop: '20px', marginBottom:'10px'}}>
                        No tienes una cuenta? Registrate
                      </Link>
                    </Typography>
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

