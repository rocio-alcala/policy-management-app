import { useForm } from "react-hook-form";
import Button from "../bits/Button";
import InputText from "../bits/InputText";
import InputSelect from "../bits/InputSelect";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useParams } from "react-router-dom";

const languages = [
  "English",
  "Spanish",
  "Français",
  "German",
  "Russian",
  "Chinese",
  "Dutch",
  "Swedish"
];

const validationSchema = {
  email: yup.string().email("E-mail debe tener formato de email"),
  language: yup.string().required("Language es requerido")
};

//TO-DO: receive like prop/param the id of the policy to send??
export default function ConfirmEmail() {
  const { policyId } = useParams();
  console.log(policyId);
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(yup.object().shape(validationSchema))
  });

  function onSubmit(data) {
    //TO-DO: POST A API
    console.log(data);
  }

  return (
    <div className="bg-background flex-1">
      <div className="bg-white flex flex-col m-4 p-3 rounded-md">
        <h1 className="font-publico-headline py-3 text-2xl font-bold leading-7 text-grey8-dark-text">
          Confirm e-mail address
        </h1>
        <p className="py-1 leading-6 text-grey8-dark-text">
          We will re-send the policy and certificate to the policy holder
          e-mail: <span className="font-bold">{"emailexample@gmail.com"}</span>
        </p>
        <p className="py-1 leading-6 text-grey8-dark-text">
          If you want to send it to a different e-mail please type it here:
        </p>
        <form onSubmit={handleSubmit(onSubmit)}>
          <InputText
            id="email"
            label="e-mail"
            placeholder="example@mail.com"
            {...register("email")}
            errors={errors.email?.message}
            className="mb-3"
          ></InputText>
          <InputSelect
            id="language"
            label="Language"
            {...register("language")}
            options={languages.map((language) => {
              return { value: language, label: language };
            })}
            errors={errors.language?.message}
            placeholder="Select language"
            className="mb-3"
          ></InputSelect>
          <Button primary={true} type="submit" className="mt-3">
            RE-SEND POLICY AND CERTIFICATE
          </Button>
        </form>
      </div>
    </div>
  );
}
