import CommonListing from "@/app/components/commonlisting";
import { getAllAdminProducts } from "@/service/product";


export default async function AllProducts(){
    const getAllProducts = await getAllAdminProducts();

    return <CommonListing data={getAllProducts && getAllProducts.data}/>;
}