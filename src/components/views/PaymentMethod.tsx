import { useNavigate, useParams } from "react-router-dom";

const creditCard = {
  nameOn: "John Doe",
  brand: "Visa",
  cardNumber: "1994995972",
  expirationDate: "25/03/29",
};

const payment = {
  status: "processed",
  amount: 265,
  currency: "EUR",
  date: "25/03/24",
  nextPayment: "25/04/24",
};

export default function PaymentMethod() {
  const navigate = useNavigate();
  const { policyId } = useParams();
  // TO-DO: obtener data de api pero no tiene la info a renderizar
  /*   const { data: policy, isLoading, error } = useGetPoliciesByIdQuery(policyId as string)
   if (isLoading) {
    return <Spinner />;
  }
  if (typeof policy === "undefined") {
    if (error) {
      // check for error type
      if ("status" in error) {
        // you can access all properties of `FetchBaseQueryError` here
        const errMsg =
          "error" in error ? error.error : JSON.stringify(error.data);

        return <ErrorPage errorMsg={errMsg} status={error.status} />;
      } else {
        // you can access all properties of `SerializedError` here
        return (
          <ErrorPage
            errorMsg={error.message || "Error fetching policy"}
            status={error.code}
          />
        );
      }
    } else {
      // if policy is undefined, error should be always be populated
      return <ErrorPage errorMsg="Error fetching policy" />;
    }
  } */

  // TO-DO: NO ESTAN LOS DATOS PARA RENDERIZAR EN JSON BY ID
  return (
    <div className="bg-background p-5 flex flex-col flex-1">
      <div
        className="flex mb-7 justify-start items-center hover:cursor-pointer"
        onClick={() => navigate(`/policies/${policyId}/personal-details`)}
      >
        <img src="/ArrowBack.png" className="h-4 w-4 mr-3"></img>
        <div className="text-axa-blue leading-5">BACK</div>
      </div>
      <div className="flex flex-col rounded-md bg-white">
        {/*  payment method */}
        <h1 className="font-publico-headline py-3 px-5 text-2xl font-bold leading-7 text-grey8-dark-text">
          Payment method - NO HAY DATOS
        </h1>
        <div className="flex mr-5 items-center self-end">
          <img src="/Edit.png" className="h-4 w-4 mr-2"></img>
          <div className="text-axa-blue leading-5">EDIT</div>
        </div>
        <div className="flex flex-col rounded-b-md bg-white">
          {/*         Credit card */}
          <h1 className=" p-5 leading-8 font-bold text-xl text-grey8-dark-text">
            Credit card
          </h1>
          <div className="flex justify-between border-t-[1px] px-5 py-3 border-border-default">
            <p className=" leading-6  text-grey6">Name on card</p>
            <p className="text-start leading-6 text-grey8-dark-text">
              {creditCard.nameOn}
            </p>
          </div>
          <div className="flex justify-between border-t-[1px] px-5 py-3 border-border-default">
            <p className=" leading-6  text-grey6">Card brand</p>
            <p className="text-start leading-6 text-grey8-dark-text">
              {creditCard.brand}
            </p>
          </div>
          <div className="flex justify-between border-t-[1px] px-5 py-3 border-border-default">
            <p className=" leading-6  text-grey6">Card number</p>
            <p className="text-start leading-6 text-grey8-dark-text">
              {creditCard.cardNumber}
            </p>
          </div>
          <div className="flex justify-between border-y-[1px] px-5 py-3 border-border-default">
            <p className=" leading-6  text-grey6">Expiration date</p>
            <p className="text-start leading-6 text-grey8-dark-text">
              {creditCard.expirationDate}
            </p>
          </div>
          {/*        Payment status */}
          <div className="flex justify-between content-center items-center border-grey6">
            <h1 className=" p-5 leading-8 font-bold text-xl text-grey8-dark-text">
              Payment status
            </h1>
            <div className="flex mr-5 items-center">
              {/* TO-DO: check posibles status and correct */}
              {payment.status === "processed" ? (
                <>
                  <div className="text-success leading-5 text-sm">
                    Processed
                  </div>
                  <img className="h-3.5 w-3.5 ml-2" src="/Active.png"></img>
                </>
              ) : payment.status === "pending" ? (
                <>
                  <div className="text-axa-sienna leading-5 text-sm">
                    Pending
                  </div>
                  <img className="h-3.5 w-3.5 ml-2" src="/Pending.png"></img>
                </>
              ) : (
                <>
                  <div className="text-grey5-text-secundary leading-5 text-sm">
                    Removed
                  </div>
                  <img className="h-3.5 w-3.5 ml-2" src="/Exclude.png"></img>
                </>
              )}
            </div>
          </div>
          <div className="flex px-5 py-3 border-border-default border-y-[1px]">
            <p className="font-bold leading-6 flex-1 text-grey8-dark-text ">
              Amount
            </p>
            <p className="text-start leading-6 flex-1 text-grey6">
              {payment.amount}
            </p>
          </div>
          <div className="flex px-5 py-3 border-border-default border-b-[1px]">
            <p className="font-bold leading-6 flex-1 text-grey8-dark-text ">
              Currency
            </p>
            <p className="text-start leading-6 flex-1 text-grey6">
              {payment.currency}
            </p>
          </div>
          <div className="flex px-5 py-3 border-border-default border-b-[1px]">
            <p className="font-bold leading-6 flex-1 text-grey8-dark-text ">
              Date
            </p>
            <p className="text-start leading-6 flex-1 text-grey6">
              {payment.date}
            </p>
          </div>
          <div className="flex px-5 py-3 border-border-default">
            <p className="font-bold leading-6 flex-1 text-grey8-dark-text ">
              Next payment
            </p>
            <p className="text-start leading-6 flex-1 text-grey6">
              {payment.nextPayment}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
