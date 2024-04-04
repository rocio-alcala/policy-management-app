/* import { Controller, useForm } from "react-hook-form";
import InputText from "../bits/InputText";
import Button from "../bits/Button";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import FieldsetRadio from "../bits/FieldsetRadio";
import InputDate from "../bits/InputDate";
import "react-datepicker/dist/react-datepicker.css";
import { useNavigate, useParams } from "react-router-dom";
import { useGetPoliciesByIdQuery } from "../../store/api/policiesApi";
import Spinner from "../bits/Spinner";

const validationSchema = {
  first_name: yup.string().required(),
  last_name: yup.string().required(),
  id_number: yup.string().required(), //TO-DO: alfanumerico??
  phone_number: yup.number().required(),
  email: yup.string().email().required(),
  address: yup.string().required(),
  title: yup.string().required(),
  birth_date: yup.string(),
  is_beneficiary: yup.string().required()
};

export default function PolicyHolderEdit() {
  const navigate = useNavigate();
  const { policyId } = useParams();
  const {
    data: policy,
    isLoading,
    error
  } = useGetPoliciesByIdQuery(policyId as string); //DUDA! CASTEO

  const {
    register,
    handleSubmit,
    formState: { errors },
    control
  } = useForm({
    resolver: yupResolver(yup.object().shape(validationSchema)),
    defaultValues: policyHolderDefaultValues
  });

  if (isLoading) {
    return <Spinner />;
  }
  if (typeof policy === "undefined") {
    //TO-DO?? MANEJO DE UNDFINED
    console.error("@Error fetching policies ", error);
    return;
  }

  const policyHolderDefaultValues = {
    first_name: policy.policy_holder.first_name,
    last_name: policy.policy_holder.last_name,
    id_number: "falta dato",
    phone_number: policy.policy_holder.phone,
    email: policy.policy_holder.email,
    address: policy.policy_holder.address.country + "falta info",
    title: policy.policy_holder.title,
    birth_date: policy.policy_holder.birth_date,
    is_beneficiary: policy.policy_holder.is_policy_beneficiary
  };



  return (
    <div className="bg-background p-5 flex flex-col flex-1">
      <div
        className="flex mb-7 justify-start items-center hover:cursor-pointer"
        onClick={() => navigate(`/policies/${policyId}/personal-details`)}
      >
        <img
          src=".././../../public/ArrowBack.png"
          className="h-4 w-4 mr-3"
        ></img>
        <div className="text-axa-blue leading-5">BACK</div>
      </div>
      <div className="bg-white flex flex-col rounded-md p-5">
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
            items={[
              { value: "true", label: "Yes" },
              { value: "false", label: "No" }
            ]}
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
 */