import { PropsWithChildren } from "react";
import { FormProvider, useForm } from "react-hook-form";


export interface Data {
    firstName: string,
    lastName: string,
    email: string,
    gender: string,
    address: string
  }

export function HookFormProvider({children}: PropsWithChildren)  {
    const methods = useForm<Data>({
        mode:"onBlur",
        defaultValues: {
            firstName: "",
            lastName: "",
            email: "",
            gender: '',
            address: ""
      },
    });
    return (
         <FormProvider {...methods}>{children}</FormProvider>
    );
};

export default HookFormProvider;