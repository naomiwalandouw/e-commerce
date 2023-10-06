import CommonListing from "@/app/components/commonlisting";
import { getAllAdminProducts } from "@/service/product";


export default async function AdminAllProducts(){
    
    const allAdminProducts = await getAllAdminProducts()

    console.log(allAdminProducts);

    return <CommonListing data={allAdminProducts && allAdminProducts.data}/>
}