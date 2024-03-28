
export default function BeneficiarieCard({ beneficiarie }) {
  return (
    <div className="flex flex-col border-t-[1px] border-border-default p-5">
      <div className="flex justify-between items-center ">
        <p className="font-bold text-grey8-dark-text  text-lg  leading-5">
          {beneficiarie.title} {beneficiarie.name} {beneficiarie.lastName}
        </p>
        {beneficiarie.status === "active" ? (
          <div className="flex items-center">
            <div className="text-success leading-5 text-sm">Active</div>
            <img
              className="h-3.5 w-3.5 ml-2"
              src="../.././../public/Active.png"
            ></img>
          </div>
        ) : beneficiarie.status === "pending" ? (
          <div className="flex items-center">
            <div className="text-axa-sienna leading-5 text-sm">Pending</div>
            <img
              className="h-3.5 w-3.5 ml-2"
              src="../.././../public/Pending.png"
            ></img>
          </div>
        ) : (
          <div className="flex items-center">
            <div className="text-grey5-text-secundary leading-5 text-sm">
              Removed
            </div>
            <img
              className="h-3.5 w-3.5 ml-2"
              src="../.././../public/Exclude.png"
            ></img>
          </div>
        )}
      </div>
      <p className="text-grey8-dark-text ">{beneficiarie.email}</p>
      <p className="text-grey8-dark-text ">{beneficiarie.number}</p>
    </div>
  );
}
