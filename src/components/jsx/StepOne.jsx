import { useFormContext } from "react-hook-form";

const StepOne = () => {
    const { register, formState:{errors}} = useFormContext()

     //Чтобы сбросить поля только первого шага   
    // const handleReset =()=>{        
    //     resetField("firstName")
    //     resetField("lastName")
    //     resetField("email")
    // }

    return (
        <div>
            StepOne
            {/* <div style={{ display: 'flex', flexDirection: 'row', paddingTop: 2 }}>                        
                <button onClick={handleReset}>Reset</button>
            </div> */}
            
        <div>
            <label htmlFor="firstName">Name</label>
            <input  
            {...register("firstName", {
                required: 'First name is required',                
                minLength:  {
                    value: 2,
                    message: "Минимум 2 символа"
                }
                })} 
                id="firstName"                           
                />
        </div>
        <div>        
            {errors.firstName?.message && <p>{errors.firstName?.message}</p>}
           
        </div>
        <div>
            <label htmlFor="lastName">Last name</label>
            <input   
            {...register("lastName", {
                required: "Last name is required" ,
                minLength:  {
                    value: 2,
                    message: "Минимум 2 символа"
                }
                })} id="lastName"/>
        </div>
        <div>
            {errors.lastName?.message && <p>{errors.lastName?.message}</p>}
        </div>
        <div>
            <label htmlFor="email">Email</label>
            <input  
            {...register("email", {
                required: "Email is required",
                minLength:  {
                    value: 2,
                    message: "Минимум 2 символа"
                }
                })} id="email"/>
        </div>
        <div>
            {errors.email?.message && <p>{errors.email?.message}</p>}          
        </div>

        </div>
    );
};

export default StepOne;