import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import * as yup from "yup";

import { capitalizeString } from "../../utils/utils";
import Button from "../bits/Button";
import InputSelect from "../bits/InputSelect";
import InputText from "../bits/InputText";

const languages = [
  "English",
  "Spanish",
  "Français",
  "German",
  "Russian",
  "Chinese",
  "Dutch",
  "Swedish",
];

const validationSchema = {
  email: yup.string().email("Must be a valid email"),
  language: yup.string().required("Language is required"),
};

interface ConfirmEmailProps {
  email: string;
}

interface ConfirmEmailForm {
  email?: string | undefined;
  language: string;
}

export default function ConfirmEmail({ email }: ConfirmEmailProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ConfirmEmailForm>({
    resolver: yupResolver(yup.object().shape(validationSchema)),
  });

  function onSubmit(data: ConfirmEmailForm) {
    console.log(data);
  }

  return (
    <div className="bg-background p-4">
      <div className="bg-white flex flex-col p-3 rounded-md">
        <h1 className="font-publico-headline py-3 text-2xl font-bold leading-7 text-grey8-dark-text">
          Confirm e-mail address
        </h1>
        <p className="py-1 leading-6 text-grey8-dark-text">
          We will re-send the policy and certificate to the policy holder
          e-mail: <span className="font-bold">{capitalizeString(email)}</span>
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
          />
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
          />
          <Button primary={true} type="submit" className="mt-3">
            RE-SEND POLICY AND CERTIFICATE
          </Button>
        </form>
      </div>
    </div>
  );
}
