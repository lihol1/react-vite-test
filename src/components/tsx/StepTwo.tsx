import { useFormContext } from "react-hook-form";
import { useState } from "react";


const StepTwo = () => {
    const { register,formState:{errors} } = useFormContext()
    const [value, setValue] = useState('');

    // const handleReset =()=>{
    //    
    // }

    return (<>
        
            StepTwo
            {/* <div style={{ display: 'flex', flexDirection: 'row', paddingTop: 2 }}>                        
                <button onClick={handleReset}>Reset</button>
            </div> */}
        <div>
            <label htmlFor="address">Gender</label>
            <select {...register("gender",{
                required:"Поле обязательно к заполнению",
                minLength:  {
                    value: 2,
                    message: "Минимум 2 символа"
                }
            })} value={value} onChange={e=> setValue(e.target.value)} id="gender">
                <option value="female">female</option>
                <option value="male">male</option>
                <option value="other">other</option>
            </select>        
        </div>
        <div>
        {errors?.gender && <p>{errors?.gender?.message as string || "Error!"}</p>}
   </div>
   </> );
};

export default StepTwo;