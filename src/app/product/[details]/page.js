import CommonDetails from "@/app/components/commondetails";
import { productById } from "@/service/product";


export default async function ProductDetails({params}){
    const productDetailsData = await productById(params.details)

    console.log(productDetailsData);

    return <CommonDetails item={productDetailsData && productDetailsData.data}/>;
}