"use client"
import { products } from '@/products';

export default function ViewStore({ pid }: { pid: number }) {
    const product = products.find(product => product.id === Number(pid));

    return(
        <div className='mt-5 mx-5 bg-white max-h-fit px-10 py-5 flex flex-row justify-between'>
            <div className='flex flex-row'>
                <img className='brightness-50 max-h-20' src={product?.storeId.image} alt={product?.storeId.name} />
                <div className='text-2xl font-semibold place-content-center pl-6'>{product?.storeId.name}</div> 
            </div>
            <button className='bg-[#00BF7A] px-12 my-3 rounded text-white font-bold text-2xl'>View</button>
        </div>
    )
}