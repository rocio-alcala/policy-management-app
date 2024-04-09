import { Link, isRouteErrorResponse, useRouteError } from "react-router-dom";

export default function ErrorRoute() {
  const error = useRouteError();

  if (isRouteErrorResponse(error)) {
    return (
      <div className="flex flex-col items-center justify-center h-screen text-center p-3">
        <h1 className="text-4xl font-bold mb-6"></h1>
        <p className="text-lg">{error.status}</p>
        <p className="text-lg mb-6">{error.statusText}</p>
        <p className="text-base">
          <Link to="/policies/all">
            <div className="text-blue-500 hover:underline">
              Volver a la página de inicio
            </div>
          </Link>
        </p>
      </div>
    );
  }
  return (
    <div className="flex flex-col items-center justify-center h-screen text-center p-3">
      <h1 className="text-4xl font-bold mb-6"></h1>
      <p className="text-lg mb-6">
        Lo sentimos, la página que estás buscando no se pudo encontrar.
      </p>
      <p className="text-base">
        <Link to="/policies/all">
          <div className="text-blue-500 hover:underline">
            Volver a la página de inicio
          </div>
        </Link>
      </p>
    </div>
  );
}
