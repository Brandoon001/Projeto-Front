import "primereact/resources/themes/lara-light-amber/theme.css"
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "../pages/HomePage";
import ProductViewPage from "../pages/ProductViewPage";
import ProductListingPage from "../pages/ProductListingPage";

const Paths = () => {
    return ( 
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/product:id" element={<ProductListingPage />} />
                    <Route path="/product" element={<ProductViewPage />} />
                </Routes>
            </BrowserRouter>
        </>
     );
}
 
export default Paths;