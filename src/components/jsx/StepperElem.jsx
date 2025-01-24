import '../../styles/stepper.scss'
import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import StepConnector from '@mui/material/StepConnector';
import StepOne from './StepOne';
import StepTwo from './StepTwo';
import StepThree from './StepThree';
import { useForm, FormProvider } from "react-hook-form";

const steps = ['Select campaign settings', 'Create an ad group', 'Create an ad'];

const StepperElem = () => {
    const [activeStep, setActiveStep] = React.useState(0);
    // const [skipped, setSkipped] = React.useState(new Set<number>());    

    const methods = useForm({
            mode:"onBlur",
            defaultValues: {
                firstName: "",
                lastName: "",
                email: "",
                gender: '',
                address: ""
          },
        });
    const {handleSubmit, formState:{errors}, trigger, reset, getValues } = methods;   

    // const isStepOptional = (step: number) => {
    //   return step === 1;
    // };
  
    // const isStepSkipped = (step: number) => {
    //   return skipped.has(step);
    // };
    const stepFields = [
      {
        // id: 'Step 1',
        // name: 'Personal Information',
        fields: ['firstName', 'lastName', 'email']
      },
      {
        // id: 'Step 2',
        // name: 'Address',
        fields: "gender"
      },
      { 
        // id: 'Step 3', 
        // name: 'Complete',
        fields: "address"
      }
    ]

    const handleNext = async () => {
      const fields = stepFields[activeStep].fields;      
      const output = await trigger(fields) //fields as string | string[], { shouldFocus: true }
      console.log(output)
      if (!output) return;
      // let newSkipped = skipped;
      // if (isStepSkipped(activeStep)) {
      //   newSkipped = new Set(newSkipped.values());
      //   newSkipped.delete(activeStep);
      // }
      setActiveStep((prevActiveStep) => prevActiveStep + 1);
      // setSkipped(newSkipped);
    };
  
    const handleBack = () => {
      setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };
  
    // const handleSkip = () => {
    //   if (!isStepOptional(activeStep)) {
    //     // You probably want to guard against something like this,
    //     // it should never occur unless someone's actively trying to break something.
    //     throw new Error("You can't skip a step that isn't optional.");
    //   }
  
    //   setActiveStep((prevActiveStep) => prevActiveStep + 1);
    //   setSkipped((prevSkipped) => {
    //     const newSkipped = new Set(prevSkipped.values());
    //     newSkipped.add(activeStep);
    //     return newSkipped;
    //   });
    // };
  
    const handleReset = () => {          
      reset();    
      setActiveStep(0);
    };      
       
    //наша функция
    const onSubmit = (data) => {      
      console.log(111, data, errors)
    //   try {
    //    const response=fetch('http://localhost:3001/', {
    //     method: 'POST',
    //     headers: {
    //       'Content-Type': 'application/json',
    //       Accept: 'application/json',
    //     },
    //     body: JSON.stringify(data)
    //   })
    //   if (!response.ok) {
    //     throw new Error(`Error! status: ${response.status}`);
    //   }
    //   const result = response.json();
    //   console.log('result is: ', JSON.stringify(result));
    // } catch (error) {
    //   if (error) {
    //     console.log('error message: ', error.message);        
    //   } else {
    //     console.log('unexpected error: ', error);        
    //   }
    // }
  }
    return (       
        <Box sx={{ width: '100%' }}>
        <Stepper activeStep={activeStep} connector={<StepConnector />}
        sx={{
            // '& .MuiStepLabel-root': {
            //     'flexDirection': 'column-reverse',
            //     'width': '180px'                
            // },

            // '& .MuiStepLabel-labelContainer': {
            //     'marginBottom': '10px'
            // },            
            
            // '& .MuiStepIcon-root': {
            //     'width': '2em',
            //     'height': '2em'
            // },
            // '& .MuiStepConnector-root':{  
            //     'position': 'relative',              
            //     'width': '150px',
            //     '&.Mui-active':{
            //         '& .MuiStepConnector-line':{
            //             'borderColor': '#1976d2',     
            //         }
            //     },
            //     '&.Mui-completed':{
            //         '& .MuiStepConnector-line':{
            //             'borderColor': '#1976d2',     
            //         }
            //     }  
            // },
            // '& .MuiStepConnector-line':{
            //     'position': 'absolute',                
            //     'borderTopWidth': '2px',
            //     'width': '200%',
            //     'top': '15px',
            //     'transform': 'translateX(-26%)',
            //     // [theme.breakpoints.up('md')]: {},
            //     '&.Mui-active': {
            //         'borderСolor': '#1976d2',
            //     }
            // }
        }}>
          {steps.map((label, index) => {
            const stepProps = {};
            const labelProps = {};
            // if (isStepOptional(index)) {
            //   labelProps.optional = (
            //     <Typography variant="caption">Optional</Typography>
            //   );
            // }
            // if (isStepSkipped(index)) {
            //   stepProps.completed = false;
            // }
            return (
              <Step key={label} {...stepProps}>
                <StepLabel {...labelProps}>{label}</StepLabel>
              </Step>
            );
          })}
        </Stepper>

        <FormProvider {...methods}>      
          <form onSubmit={handleSubmit(onSubmit)}>
            {activeStep === 0 && <StepOne />}  
            {activeStep === 1 && <StepTwo />}  
            {activeStep === 2 && <StepThree /> } 

            {activeStep === steps.length && <input type="submit" />}            

          </form>          
        </FormProvider>
        
        
        {activeStep === steps.length ? (
          <React.Fragment>
            <Typography sx={{ mt: 2, mb: 1 }}>
              All steps completed - you&apos;re finished
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
              <Box sx={{ flex: '1 1 auto' }} />
              <Button onClick={handleReset}>Reset</Button>
            </Box>
            
          </React.Fragment>
        ) : (
          <React.Fragment>
            {/* <Typography sx={{ mt: 2, mb: 1 }}>Step {activeStep + 1}</Typography> */}
            <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
              <Button
                color="inherit"
                disabled={activeStep === 0}
                onClick={handleBack}
                sx={{ mr: 1 }}
              >
                Back
              </Button>
              <Box sx={{ flex: '1 1 auto' }} />
              {/* {isStepOptional(activeStep) && (
                <Button color="inherit" onClick={handleSkip} sx={{ mr: 1 }}>
                  Skip
                </Button>
              )} */}
              <Button onClick={handleNext}>
                {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
              </Button>
            </Box>
          </React.Fragment>
        )}
      </Box>
  )
};

export default StepperElem;


