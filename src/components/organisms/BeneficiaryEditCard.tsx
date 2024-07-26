import {
  Control,
  Controller,
  FieldValues,
  UseFormRegister,
} from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";

import { Beneficiary } from "../../types";
import FieldsetRadio from "../bits/FieldsetRadio";
import InputDate from "../bits/InputDate";
import InputText from "../bits/InputText";

interface BeneficiaryEditCard {
  beneficiaryNumber: number;
  register: UseFormRegister<FieldValues>;
  control: Control<FieldValues, any>;
  beneficiaryId: Beneficiary["id"];
}

export default function BeneficiaryEditCard({
  beneficiaryNumber,
  register,
  control,
  beneficiaryId,
}: BeneficiaryEditCard) {
  const navigate = useNavigate();
  const { policyId } = useParams();

  return (
    <div className="bg-white flex flex-col rounded-md p-5 mb-4">
      <div className="flex justify-between content-center items-center border-b-[1px] border-border-default">
        <h1 className="py-3 leading-8 font-bold text-xl text-grey8-dark-text ">
          Beneficiary {beneficiaryNumber + 1}
        </h1>
        <div
          className="flex mr-5 items-center hover:cursor-pointer"
          onClick={() =>
            navigate(
              `/policies/${policyId}/edit/beneficiaries/remove/${beneficiaryId}`,
            )
          }
        >
          <img src="/Exclude.png" className="h-4 w-4 mr-2"></img>
          <div className="text-axa-blue leading-5">REMOVE</div>
        </div>
      </div>
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
      />
      <InputText
        id="first_name"
        label="First name"
        {...register("first_name")}
        className="my-2"
      />
      <InputText
        id="last_name"
        label="Last name"
        {...register("last_name")}
        className="my-2"
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
                {...rest}
              />
            </div>
          );
        }}
      />
    </div>
  );
}
