import { useAuth0 } from "@auth0/auth0-react";

export default function Callback() {
  const { user } = useAuth0();


  if (!user) {
    return <p>Loading</p>;
  }
  return (
    <>
      <h1>{user.name}</h1>
      <h1>{user.nickname}</h1>
      <h1>{user.address}</h1>
      <h1>{user.birthdate}</h1>
    </>
  );
}
