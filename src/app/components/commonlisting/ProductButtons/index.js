"use client";

import { GlobalContext } from "@/app/context";
import { deletedAProduct } from "@/service/product";
import { useRouter, usePathname } from "next/navigation"
import { useContext } from "react";
import { toast } from "react-toastify";
import ComponentLevelLoader from "../../loader/componentlevel";

export default function ProductButton({item}) {
    const pathName = usePathname();
    const {setCurrentUpdatedProduct, setComponentLevelLoader, componentLevelLoader} = useContext(GlobalContext)
    const router = useRouter();

    const isAdmInView = pathName.includes('admin-view');

    async function handleDeleteProduct(item){
        setComponentLevelLoader({loading : true, id: item._id});
        const res = await deletedAProduct(item._id);

        if(res.success){
            setComponentLevelLoader({loading : false , id: ""});
            toast.success(res.message, {
                position: toast.POSITION.TOP_RIGHT
            });
            router.refresh()
        } else {
            toast.error(res.message, {
                position: toast.POSITION.TOP_RIGHT
            });
            setComponentLevelLoader({loading : false , id:""});
        }
    }

    return isAdmInView ? (
        <>
         <button 
         onClick={()=> {
            setCurrentUpdatedProduct(item);
            router.push("/admin-view/add-product");
         }}
         className="mt-1.5 flex w-full justify-center bg-black px-5 py-3 text-xs font-medium uppercase tracking-wide text-white">
            Update
        </button> 
         <button 
         onClick={()=> handleDeleteProduct(item)}
         className="mt-1.5 flex w-full justify-center bg-black px-5 py-3 text-xs font-medium uppercase tracking-wide text-white"
         >
            {componentLevelLoader && 
            componentLevelLoader.loading && 
            item._id === componentLevelLoader.id ? (
                <ComponentLevelLoader
                text={"Deleting Product"}
                color={"#ffffff"}
                loading={componentLevelLoader && componentLevelLoader.loading}
                />
            ) : (
                "DELETE"
            )}
        </button>
        </>
    ) : (
        <>
         <button className="mt-1.5 flex w-full justify-center bg-black px-5 py-3 text-xs font-medium uppercase tracking-wide text-white">
        Add To Cart
        </button>
        </>
    );
}