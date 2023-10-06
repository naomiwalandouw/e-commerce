import CommonListing from "@/app/components/commonlisting";
import { productByCategory } from "@/service/product";


export default async function WomenAllProducts(){
    const getAllProducts = await productByCategory("women");

    return <CommonListing data={getAllProducts && getAllProducts.data}/>;
}