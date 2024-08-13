import { useNavigate, useParams } from "react-router-dom";

import FieldsetRadio from "../bits/FieldsetRadio";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Label } from "../ui/label";

export default function PolicyEdit() {
  const navigate = useNavigate();
  // TODO: get policy details to fill data
  const { policyId } = useParams();

  return (
    <div className="bg-background-axa p-5 flex flex-col h-full">
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
            { value: "Yes", label: "Yes" },
            { value: "No", label: "No" },
          ]}
        />
        {/* CONTRACT DETAILS  */}
        <div className="flex justify-between content-center items-center border-b-[1px] border-border-default">
          <h1 className="py-3 leading-8 font-bold text-xl text-grey8-dark-text ">
            Contract details
          </h1>
        </div>
        <Label htmlFor="trip_cost">Trip cost</Label>
        <Input id="trip_cost" type="text" />
        <Label htmlFor="trip_cost_per_traveler">Trip cost per traveler</Label>
        <Input type="text" id="trip_cost_per_traveler" disabled />
        <Label htmlFor="destination_area">Destination area</Label>
        <Input type="text" id="destination_area" />
        {/* should be a select?? */}

        <Button type="submit" variant={"axa-primary"} className="my-1 mt-5">
          SAVE CHANGES
        </Button>
        <Button variant={"axa-secondary"} className="my-1">
          DISCARD CHANGES
        </Button>
      </div>
    </div>
  );
}
