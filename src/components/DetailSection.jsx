import { useLoaderData } from "react-router-dom"


const DetailSection = () => {
    const country = useLoaderData;
  return (
    <>
    <section className="h-screen w-full bg-black absolute top-0 left-0">
    <h1 className='text-white'>This is detail section</h1>
    <div>
      <h2 className="text-white">{country.name.common}</h2>
      <p>Capital: {country.capital ? country.capital[0] : "No Capital"}</p>
      <p>Region: {country.region}</p>
    </div>
    </section>
    </>
  )
}

export default DetailSection


// export const fetchSingleCountry = async ({id}) => {
//     try {
//         const res = await fetch('https://restcountries.com/v3.1/name/${params.name}');
//         const data = res.json();
//         console.log(data);
        
//         return data[0];
//     } catch (error) {
        
//     }
// }