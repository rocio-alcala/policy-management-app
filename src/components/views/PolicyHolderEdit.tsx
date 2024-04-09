import { yupResolver } from "@hookform/resolvers/yup";
import "react-datepicker/dist/react-datepicker.css";
import { format } from "date-fns";
import _ from "lodash";
import { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import * as yup from "yup";

import { useGetPoliciesByIdQuery } from "../../store/api/policiesApi";
import { Policy } from "../../types";
import { mockPromise } from "../../utils/utils";
import Button from "../bits/Button";
import FieldsetRadio from "../bits/FieldsetRadio";
import InputDate from "../bits/InputDate";
import InputSelect from "../bits/InputSelect";
import InputText from "../bits/InputText";
import Spinner from "../bits/Spinner";
import ConfirmModal from "../organisms/ConfirmModal";
interface PolicyHolderForm {
  first_name: string;
  last_name: string;
  id_number?: string;
  phone_number?: string;
  email: string;
  address: string;
  title: string;
  birth_date: string | Date;
  is_beneficiary: string;
  language: string;
}

const validationSchema = {
  first_name: yup.string().required("First name is required"),
  last_name: yup.string().required("Last name is required"),
  id_number: yup.string(),
  phone_number: yup.string(),
  email: yup
    .string()
    .email("Must be a valid email")
    .required("Email is required"),
  address: yup.string().required("Address is required"),
  title: yup.string().required("Title is required"),
  is_beneficiary: yup.string().required("Is beneficiary is required"),
  birth_date: yup.date().required(),
  language: yup.string().required("Language is required"),
};

const languages = [
  { label: "English", value: "English" },
  { label: "Spanish", value: "Spanish" },
  { label: "Français", value: "Français" },
  { label: "Dutch", value: "Dutch" },
  { label: "Chinese", value: "Chinese" },
  { label: "German", value: "de-DE" },
  { label: "Russian", value: "Russian" },
];

export default function PolicyHolderEdit() {
  const [isConfirmChangeModalOpen, setIsConfirmChangeModalOpen] =
    useState(false);

  const [updatedValues, setUpdatedValues] = useState([]);
  const navigate = useNavigate();
  const { policyId } = useParams();
  const {
    data: policy,
    isLoading,
    error,
  } = useGetPoliciesByIdQuery(policyId as string); // DUDA! CASTEO

  function getDefaultValues(policy: Policy | undefined) {
    if (typeof policy === "undefined") {
      return undefined;
    }
    const policyHolderDefaultValues = {
      first_name: policy.policy_holder.first_name,
      last_name: policy.policy_holder.last_name,
      id_number: "falta dato",
      phone_number: "no hay dato",
      email: policy.policy_holder.email,
      address: policy.policy_holder.address.country + "falta info",
      title: policy.policy_holder.title,
      birth_date: policy.policy_holder.birth_date,
      is_beneficiary: policy.policy_holder.is_policy_beneficiary
        ? "true"
        : "false",
      language: policy.policy_holder.spoken_language,
    };
    return policyHolderDefaultValues;
  }

  function getUpdatedValues(defaultValues: any, newValues: any) {
    const updatedValues: Record<string, string>[] = [];
    const cloneNewValues = _.cloneDeep(newValues);
    for (const key in cloneNewValues) {
      if (cloneNewValues[key] instanceof Date) {
        cloneNewValues[key] = format(cloneNewValues[key], "yyyy-MM-dd");
      }
      if (defaultValues[key] !== cloneNewValues[key])
        updatedValues.push({ [key]: cloneNewValues[key] });
    }
    return updatedValues;
  }

  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
  } = useForm<PolicyHolderForm>({
    resolver: yupResolver(yup.object().shape(validationSchema)),
    values: getDefaultValues(policy),
  });

  function onSubmit(policyHolderFormData: PolicyHolderForm) {
    setUpdatedValues(
      getUpdatedValues(getDefaultValues(policy), policyHolderFormData),
    );
    setIsConfirmChangeModalOpen(true);
  }
  function onConfirmCallback() {
    setIsConfirmChangeModalOpen(false);
  }

  if (isLoading) {
    return <Spinner />;
  }
  if (typeof policy === "undefined") {
    // TO-DO?? MANEJO DE UNDFINED
    console.error("@Error fetching policies ", error);
    return;
  }

  return (
    <div className="bg-background p-5 flex flex-col flex-1">
      <div
        className="flex mb-7 justify-start items-center hover:cursor-pointer"
        onClick={() => navigate(`/policies/${policyId}/personal-details`)}
      >
        <img src="/ArrowBack.png" className="h-4 w-4 mr-3"></img>
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
            items={[
              { value: "MR", label: "Mr." },
              { value: "MRS", label: "Mrs." },
              { value: "MISS", label: "Miss." },
            ]}
            {...register("title")}
            className="my-2"
            errors={errors.title?.message}
          />
          <InputText
            id="first_name"
            label="First name"
            {...register("first_name")}
            className="my-2"
            errors={errors.first_name?.message}
          />
          <InputText
            id="last_name"
            label="Last name"
            {...register("last_name")}
            className="my-2"
            errors={errors.last_name?.message}
          />
          <InputText
            id="id_number"
            label="ID number"
            disabled
            {...register("id_number")}
            className="my-2"
            errors={errors.id_number?.message}
          />
          <FieldsetRadio
            id="is_beneficiary"
            label="Is a beneficiary"
            items={[
              { value: "true", label: "Yes" },
              { value: "false", label: "No" },
            ]}
            {...register("is_beneficiary")}
            className="my-2"
            errors={errors.is_beneficiary?.message}
          />
          <Controller
            name="birth_date"
            control={control}
            render={({ field: renderField }) => {
              const { value, ...rest } = renderField;
              return (
                <div>
                  <InputDate
                    selectedValue={
                      typeof value === "string" ? new Date(value) : value
                    } // check and transform value type string
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
          />
          <InputSelect
            id="language"
            label="Language"
            {...register("language")}
            options={languages}
            errors={errors.language?.message}
            placeholder="Select language"
            className="mb-3"
          />
          <InputText
            id="email"
            label="E-mail"
            {...register("email")}
            className="my-2"
            errors={errors.email?.message}
          />
          <InputText
            id="address"
            label="Address"
            {...register("address")}
            className="my-2"
            errors={errors.address?.message}
          />
          <Button type="submit" primary className="my-1 mt-5">
            SAVE CHANGES
          </Button>
          <Button className="my-1">DISCARD CHANGES</Button>
        </form>
      </div>
      {/* MODALS */}
      <ConfirmModal
        isOpen={isConfirmChangeModalOpen}
        onClose={() => setIsConfirmChangeModalOpen(false)}
        onConfirm={() => mockPromise(onConfirmCallback)}
      >
        <>
          <p className="px-16 py-3 leading-6 text-center">
            We are about to make this changes:
          </p>
          <p>RENDERIZAR DATOS CAMBIADOS</p>
          <p className="px-16 py-3 leading-6 text-center">
            Are you sure you want to apply them?
          </p>
          <></>
        </>
      </ConfirmModal>
    </div>
  );
}
