 import React, {useContext} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import AddressForm from './AddressFom';
import PaymentForm from './PaymentForm';
import Review from './Review';
import {Context} from '../../AppContext';


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

const steps = ['Shipping address', 'Payment details', 'Review your order'];

function getStepContent(step) {
  switch (step) {
    case 0:
      return <AddressForm />;
    case 1:
      return <PaymentForm />;
    case 2:
      return <Review />;
    default:
      throw new Error('Unknown step');
  }
}

export default function CheckOut(props) {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const {actions} = useContext(Context);

  const handleNext = () => {
    setActiveStep(activeStep + 1);
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

  return (
  
      

        <Paper className={classes.paper}>
          <Typography component="h1" variant="h4" align="center">
            Checkout
          </Typography>
          <Stepper activeStep={activeStep} className={classes.stepper}>
            {steps.map(label => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
          <React.Fragment>
            {activeStep === steps.length ? (
              <React.Fragment>
                <Typography variant="h5" gutterBottom>
                  Gracias por su compra.
                </Typography>
                <Typography variant="subtitle1">
                  Su orden es #2001539. Le estremos enviando un email conla orden.
                </Typography>
              </React.Fragment>
            ) : (


              <React.Fragment>
                {getStepContent(activeStep)}
                <div className={classes.buttons}>
                {activeStep !== 0 && (
                <Button onClick={handleBack} className={classes.button}>
                    Anterior
                </Button>
                )}

                  {activeStep === steps.length - 1? (
                  <Button 
                  variant="contained"
                  color="primary"
                  onClick= { e => {handleNext(e)
                    actions.productoComprado(e, props.history)}
                    }
                  className={classes.button}
                  > 
                  Pagar
                  </Button>
                     ) : (
                    <Button
                      variant="contained"
                      color="primary"
                      onClick={handleNext}
                      className={classes.button}
                    >
                      Siguiente     
                </Button>
                )} 
              </div>
              


              </React.Fragment>
            )}
          </React.Fragment>
        </Paper>
 
  
  
  );
}


