import { useFormContext } from "react-hook-form";


const StepThree = () => {
    const { register, formState:{errors} } = useFormContext()

    return (
        <div>
            StepThree
            <div>
                <label htmlFor="address">Address</label>
                <input  
                {...register("address", {
                    required: 'Address is required',                
                    minLength:  {
                        value: 2,
                        message: "Минимум 2 символа"
                    }
                    })} 
                    id="address"
                    // aria-invalid={errors.firstName ? "true" : "false"                
                    />
            </div>
            {errors?.address && <p>{errors?.address?.message || "Error!"}</p>}
        </div>
    );
};

export default StepThree;