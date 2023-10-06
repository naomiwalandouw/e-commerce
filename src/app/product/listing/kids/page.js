import CommonListing from "@/app/components/commonlisting";
import { productByCategory } from "@/service/product";


export default async function KidsAllProducts(){
    const getAllProducts = await productByCategory("kids");

    return <CommonListing data={getAllProducts && getAllProducts.data}/>;
}