/* import { Controller } from "react-hook-form";
import FieldsetRadio from "../bits/FieldsetRadio";
import InputText from "../bits/InputText";
import InputDate from "../bits/InputDate";

export default function BeneficiaryEditCard({ title, register, beneficiary, errors }) {
  return (
    <div className="bg-white flex flex-col rounded-md p-5">
          <div className="flex justify-between content-center items-center border-grey6">
          <h1 className=" p-5 leading-8 font-bold text-xl text-grey8-dark-text">
            {title}
          </h1>
          <div className="flex mr-5 items-center hover:cursor-pointer">
            <img
              src="/Remove.png"
              className="h-4 w-4 mr-2"
            ></img>
            <div className="text-axa-blue leading-5">REMOVE</div>
          </div>
        </div>
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
    </div>
  );
}
 */