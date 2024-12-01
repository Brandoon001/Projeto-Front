import { useEffect, useState } from "react";
import { API } from "./Section";

const ProductCard = () => {

    const [products, setProducts] = useState([]);

    async function buscarProdutos(){
       const request = await API.get('/products');
       setProducts(request.data);
    }

    useEffect(() => {
        buscarProdutos();
    }, [])

    return ( 
       <>
        <div className="flex flex-wrap">
          <section className=" px-5 flex-1">
            <ul className="grid list-none p-0">
              {
                products.map((product) => (                  
                <li className="col-12">
                  <div className="shadow-4 p-3 border-round-md" style={{width:'250px'}}>
                    <div className="relative ">
                      <img className="w-full" style={{height: '291px', width:'321', objectFit: 'contain'}} src={product.image} alt="produto tênis" />
                      <h6 className="absolute top-0 border-round-md bg-yellow-400 font-normal text-center" style={{height:'15px', width:'55px'}}>{product.discount}</h6>
                    </div>
                  </div>
                    <h6>Tênis</h6>
                    <h3 className="mb-0 text-700 text-2xl">{product.name}</h3>
                    <h4 className="inline line-through text-400">{product.price}</h4>
                    <h4 className="inline p-2 font-bold">{product.priceDiscount}</h4>
                </li>      
                ))
              }
            </ul>
          </section>
          <section className=" px-5 flex-1">
            <ul className="grid list-none p-0">
              {
                products.map((product) => (                  
                <li className="col-12">
                  <div className="shadow-4 p-3 border-round-md" style={{width:'250px'}}>
                    <div className="relative ">
                      <img className="w-full" style={{height: '291px', width:'321', objectFit: 'contain'}} src={product.image} alt="produto tênis" />
                      <h6 className="absolute top-0 border-round-md bg-yellow-400 font-normal text-center" style={{height:'15px', width:'55px'}}>{product.discount}</h6>
                    </div>
                  </div>
                    <h6>Tênis</h6>
                    <h3 className="mb-0 text-700 text-2xl">{product.name}</h3>
                    <h4 className="inline line-through text-400">{product.price}</h4>
                    <h4 className="inline p-2 font-bold">{product.priceDiscount}</h4>
                </li>      
                ))
              }
            </ul>
          </section>
          <section className="px-5 flex-1">
            <ul className="grid list-none p-0">
              {
                products.map((product) => (                  
                <li className="col-12">
                  <div className="shadow-4 p-3 border-round-md" style={{width:'250px'}}>
                    <div className="relative ">
                      <img className="w-full" style={{height: '291px', width:'321', objectFit: 'contain'}} src={product.image} alt="produto tênis" />
                      {/*<h6 className="absolute top-0 border-round-md bg-yellow-400 font-normal text-center" style={{height:'15px', width:'55px'}}>{product.discount}</h6>*/}
                    </div>
                  </div>
                    <h6>Tênis</h6>
                    <h3 className="mb-0 text-700 text-2xl">{product.name}</h3>
                    <h4 className="inline line-through text-400">{product.price}</h4>
                    <h4 className="inline p-2 font-bold">{product.priceDiscount}</h4>
                </li>      
                ))
              }
            </ul>
          </section>
          <section className=" px-5 flex-1">
            <ul className="grid list-none p-0">
              {
                products.map((product) => (                  
                <li className="col-12">
                  <div className="shadow-4 p-3 border-round-md" style={{width:'250px'}}>
                    <div className="relative ">
                      <img className="w-full" style={{height: '291px', width:'321', objectFit: 'contain'}} src={product.image} alt="produto tênis" />
                      {/*<h6 className="absolute top-0 border-round-md bg-yellow-400 font-normal text-center" style={{height:'15px', width:'55px'}}>{product.discount}</h6>*/}
                    </div>
                  </div>
                    <h6>Tênis</h6>
                    <h3 className="mb-0 text-700 text-2xl">{product.name}</h3>
                    <h4 className="inline line-through text-400">{product.price}</h4>
                    <h4 className="inline p-2 font-bold">{product.priceDiscount}</h4>
                </li>      
                ))
              }
            </ul>
          </section>
          <section className=" px-5 flex-1">
            <ul className="grid list-none p-0">
              {
                products.map((product) => (                  
                <li className="col-12">
                  <div className="shadow-4 p-3 border-round-md" style={{width:'250px'}}>
                    <div className="relative ">
                      <img className="w-full" style={{height: '291px', width:'321', objectFit: 'contain'}} src={product.image} alt="produto tênis" />
                      {/*<h6 className="absolute top-0 border-round-md bg-yellow-400 font-normal text-center" style={{height:'15px', width:'55px'}}>{product.discount}</h6>*/}
                    </div>
                  </div>
                    <h6>Tênis</h6>
                    <h3 className="mb-0 text-700 text-2xl">{product.name}</h3>
                    <h4 className="inline line-through text-400">{product.price}</h4>
                    <h4 className="inline p-2 font-bold">{product.priceDiscount}</h4>
                </li>      
                ))
              }
            </ul>
          </section>
          <section className=" px-5 flex-1">
            <ul className="grid list-none p-0">
              {
                products.map((product) => (                  
                <li className="col-12">
                  <div className="shadow-4 p-3 border-round-md" style={{width:'250px'}}>
                    <div className="relative ">
                      <img className="w-full" style={{height: '291px', width:'321', objectFit: 'contain'}} src={product.image} alt="produto tênis" />
                      {/*<h6 className="absolute top-0 border-round-md bg-yellow-400 font-normal text-center" style={{height:'15px', width:'55px'}}>{product.discount}</h6>*/}
                    </div>
                  </div>
                    <h6>Tênis</h6>
                    <h3 className="mb-0 text-700 text-2xl">{product.name}</h3>
                    <h4 className="inline line-through text-400">{product.price}</h4>
                    <h4 className="inline p-2 font-bold">{product.priceDiscount}</h4>
                </li>      
                ))
              }
            </ul>
          </section>
          <section className=" px-5 flex-1">
            <ul className="grid list-none p-0">
              {
                products.map((product) => (                  
                <li className="col-12">
                  <div className="shadow-4 p-3 border-round-md" style={{width:'250px'}}>
                    <div className="relative ">
                      <img className="w-full" style={{height: '291px', width:'321', objectFit: 'contain'}} src={product.image} alt="produto tênis" />
                      {/*<h6 className="absolute top-0 border-round-md bg-yellow-400 font-normal text-center" style={{height:'15px', width:'55px'}}>{product.discount}</h6>*/}
                    </div>
                  </div>
                    <h6>Tênis</h6>
                    <h3 className="mb-0 text-700 text-2xl">{product.name}</h3>
                    <h4 className="inline line-through text-400">{product.price}</h4>
                    <h4 className="inline p-2 font-bold">{product.priceDiscount}</h4>
                </li>      
                ))
              }
            </ul>
          </section>
          <section className=" px-5 flex-1">
            <ul className="grid list-none p-0">
              {
                products.map((product) => (                  
                <li className="col-12">
                  <div className="shadow-4 p-3 border-round-md" style={{width:'250px'}}>
                    <div className="relative ">
                      <img className="w-full" style={{height: '291px', width:'321', objectFit: 'contain'}} src={product.image} alt="produto tênis" />
                      {/*<h6 className="absolute top-0 border-round-md bg-yellow-400 font-normal text-center" style={{height:'15px', width:'55px'}}>{product.discount}</h6>*/}
                    </div>
                  </div>
                    <h6>Tênis</h6>
                    <h3 className="mb-0 text-700 text-2xl">{product.name}</h3>
                    <h4 className="inline line-through text-400">{product.price}</h4>
                    <h4 className="inline p-2 font-bold">{product.priceDiscount}</h4>
                </li>      
                ))
              }
            </ul>
          </section>
          
        </div>
        
       </>
     );
}
 
export default ProductCard;