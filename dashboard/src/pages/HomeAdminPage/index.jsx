import {useLoaderData} from 'react-router-dom';
import { LastProductInDb } from "../../components/LastProductInDb"
import { Metrics } from "../../components/Metrics"

export const HomeAdminPage = () => {

  const {totalProducts} = useLoaderData();
  
  return (
    <>
    <Metrics totalProducts={totalProducts}/>

    <div className="row">
        <LastProductInDb />
    </div>
    </>
  )
}
