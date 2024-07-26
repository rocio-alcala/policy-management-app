import { useNavigate, useParams } from "react-router-dom";

import Button from "../bits/Button";
import FieldsetRadio from "../bits/FieldsetRadio";
import InputText from "../bits/InputText";

export default function PolicyEdit() {
  const navigate = useNavigate();
  // TODO: get policy details to fill data
  const { policyId } = useParams();

  return (
    <div className="bg-background p-5 flex flex-col h-full">
      <div
        className="flex mb-7 justify-start items-center hover:cursor-pointer"
        onClick={() => navigate(`/policies/${policyId}/policy-details`)}
      >
        <img src="/ArrowBack.png" className="h-4 w-4 mr-3"></img>
        <div className="text-axa-blue leading-5">BACK</div>
      </div>
      <div className="bg-white flex flex-col rounded-md p-5 mb-4">
        <h1 className="font-publico-headline pb-2 text-2xl font-bold leading-7 text-grey8-dark-text">
          Policy details
        </h1>
        {/* CONTRACT ID  */}
        <div className="flex justify-between content-center items-center border-b-[1px] border-border-default">
          <h1 className="py-3 leading-8 font-bold text-xl text-grey8-dark-text ">
            Contract ID
          </h1>
        </div>
        <FieldsetRadio
          id="auto-renewable"
          label="Is auto-renewable"
          items={[
            { value: true, label: "Yes" },
            { value: false, label: "No" },
          ]}
        />
        {/* CONTRACT DETAILS  */}
        <div className="flex justify-between content-center items-center border-b-[1px] border-border-default">
          <h1 className="py-3 leading-8 font-bold text-xl text-grey8-dark-text ">
            Contract details
          </h1>
        </div>
        <InputText id="trip_cost" label="Trip cost" />
        <InputText
          id="trip_cost_per_traveler"
          label="Trip cost per traveler"
          disabled
        />
        <InputText id="destination_area" label="Destination area" />
        {/* should be a select?? */}

        <Button type="submit" primary className="my-1 mt-5">
          SAVE CHANGES
        </Button>
        <Button className="my-1">DISCARD CHANGES</Button>
      </div>
    </div>
  );
}
