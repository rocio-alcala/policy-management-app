/* import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import * as yup from "yup";
import Button from "../bits/Button";
import { useGetPoliciesByIdQuery } from "../../store/api/policiesApi";

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

export default function BeneficiaryEdit() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    control
  } = useForm({
    resolver: yupResolver(yup.object().shape(validationSchema))
  });

  const navigate = useNavigate();
  const { policyId } = useParams();
  const { data: policy } = useGetPoliciesByIdQuery(policyId as string); //DUDA! CASTEO

  function onSubmit(data) {
    console.log(data);
  }

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
      <form onSubmit={handleSubmit(onSubmit)}>
                 {beneficiaries.map((beneficiary, index) => (
          <BeneficiaryEditCard key={beneficiary} />
        ))} 
        <Button type="submit" primary className="my-1 mt-5">
          SAVE CHANGES
        </Button>
        <Button className="my-1">DISCARD CHANGES</Button>
      </form>
    </div>
  )
}
 */
