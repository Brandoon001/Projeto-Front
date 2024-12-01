import Footer from "../components/Footer";
import Header from "../components/Header";
import ProductCard from "../components/ProductCard";


const ProductListingPage = () => {
    return ( 
        <>
            <Header />
            <div className="pt-8 flex align-items-stretch flex-wrap" style={{ width:'100%'}}>
                <div className=" flex align-items-center justify-content-center flex-wrap" style={{width:'29%'}}>
                    
                </div>
                <div className="pt-8 flex align-items-center justify-content-center flex-wrap" style={{width:'71%'}}>    
                    <ProductCard />
                </div>
            </div>
            <Footer />
        </>
     );
}
 
export default ProductListingPage;