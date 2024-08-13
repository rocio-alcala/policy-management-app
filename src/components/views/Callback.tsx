import Spinner from "../bits/Spinner";

// will only render the navigation bar and an empty content container
// to help you create a smooth transition to the route is going to be redirect
// on the onRedirectCallback
export default function Callback() {
  console.log("entro a callback");
  return (
    <div className="flex flex-1 justify-center items-center">
      <Spinner />
      <h1>EN CALLBACCKKKKKKKKKK</h1>
    </div>
  );
}
