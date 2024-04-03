import { Controller, useForm } from "react-hook-form";
import InputText from "../bits/InputText";
import Button from "../bits/Button";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import FieldsetRadio from "../bits/FieldsetRadio";
import InputDate from "../bits/InputDate";
import 'react-datepicker/dist/react-datepicker.css';

const validationSchema = {
  first_name: yup.string().required(),
  last_name: yup.string().required(),
  id_number: yup.string().required(), //TO-DO: alfanumerico??
  phone_number: yup.number().required(),
  email: yup.string().email().required(),
  address: yup.string().required(),
  title: yup.string().required(),
  birth_date: yup.string().required(),
  is_beneficiary: yup.string().required()
};

export default function PolicyHolder() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    control
  } = useForm({
    resolver: yupResolver(yup.object().shape(validationSchema))
  });

  function onSubmit(data) {
    console.log(data);
  }

  return (
    <div className="bg-background flex-1">
      <div className="bg-white flex flex-col m-4 rounded-md p-5">
        <h1 className="py-3 leading-8 font-bold text-xl text-grey8-dark-text border-b-[1px] border-border-default">
          Policy holder
        </h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <FieldsetRadio
            id="title"
            label="Title"
            items={[{ value: "Mr." }, { value: "Mrs." }, { value: "Miss." }]}
            {...register("title")}
            className="my-2"
            errors={errors.title?.message}
          ></FieldsetRadio>
          <InputText
            id="first_name"
            label="First name"
            {...register("first_name")}
            className="my-2"
            errors={errors.first_name?.message}
          ></InputText>
          <InputText
            id="last_name"
            label="Last name"
            {...register("last_name")}
            className="my-2"
            errors={errors.last_name?.message}
          ></InputText>
          <InputText
            id="id_number"
            label="ID number"
            disabled
            {...register("id_number")}
            className="my-2"
            errors={errors.id_number?.message}
          ></InputText>
                    <FieldsetRadio
            id="is_beneficiary"
            label="Is a beneficiary"
            items={[{ value: "true", label:"Yes" }, { value: "false", label:"No" }]}
            {...register("is_beneficiary")}
            className="my-2"
            errors={errors.is_beneficiary?.message}
          ></FieldsetRadio>
          <Controller
            name="birth_date"
            control={control}
            render={({ field: renderField }) => {
              const { value, ...rest } = renderField;
              // check value type number or boolean not assignable to InputDate
              if (typeof value === "number" || typeof value === "boolean") {
                throw new Error(
                  `Value for field of type date is not valid: ${value}`
                );
              }
              return (
                <div>
                  <InputDate
                    selectedValue={
                      typeof value === "string" ? new Date(value) : value
                    } //check and transform value type string
                    showIcon
                    label="Birth date"
                    id="birth_date"
                    errors={errors.birth_date?.message}
                    {...rest}
                  />
                </div>
              );
            }}
          />

          <InputText
            id="phone_number"
            label="Phone"
            {...register("phone_number")}
            className="my-2"
            errors={errors.phone_number?.message}
          ></InputText>
          <InputText
            id="email"
            label="E-mail"
            {...register("email")}
            className="my-2"
            errors={errors.email?.message}
          ></InputText>
          <InputText
            id="address"
            label="Address"
            {...register("address")}
            className="my-2"
            errors={errors.address?.message}
          ></InputText>
          <Button type="submit" primary className="my-1 mt-5">
            SAVE CHANGES
          </Button>
          <Button className="my-1">DISCARD CHANGES</Button>
        </form>
      </div>
    </div>
  );
}
