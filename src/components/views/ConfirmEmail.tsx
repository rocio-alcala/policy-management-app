import Button from "../bits/Button";

export default function ConfirmEmail() {
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
        {/* TO-DO: form */}

        <Button primary={true}>RE-SEND POLICY AND CERTIFICATE</Button>
      </div>
    </div>
  );
}
