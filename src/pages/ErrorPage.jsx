import { useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();

  return (
    <section className="h-screen w-full bg-red-950 text-white p-10">
      <h1 className="text-4xl font-bold mb-4">Oops! An error occurred.</h1>
      <p>Status: {error?.status || "Unknown"}</p>
      <p>{error?.statusText || error?.message || "Something went wrong."}</p>
    </section>
  );
};

export default ErrorPage;

