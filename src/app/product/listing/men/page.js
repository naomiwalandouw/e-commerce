import CommonListing from "@/app/components/commonlisting";
import { productByCategory } from "@/service/product";


export default async function MenAllProducts(){
    const getAllProducts = await productByCategory("men");

    return <CommonListing data={getAllProducts && getAllProducts.data}/>;
}