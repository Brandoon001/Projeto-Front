
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Button } from 'primereact/button';
import ProductCard from "../components/ProductCard";




const HomePage = () => {
    return ( 
        <>
                <Header />
                <div className="flex align-items-stretch flex-wrap" style={{height:'875px', width:'100%'}}>
                    <div className=" flex align-items-center justify-content-center flex-wrap" style={{width:'40%'}}>
                        <div >
                            <h5 style={{fontSize:'18px'}} className="text-yellow-500">Melhores ofertas personalizadas</h5>
                            <h1 style={{fontSize:'80px'}}>Queima de stoque Nike  🔥</h1>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea debitis odio in nam. Consequuntur tenetur quam velit maxime nisi, fugit accusamus, eum amet sapiente aliquid quo eaque veniam doloremque possimus.</p>
                            <Button  style={{height:'48px', width:'220px', color:'white'}} label="Ver Ofertas" className="mr-8 bg-pink-600 "/>
                        </div>
                    </div>
                    <div className="flex align-items-center justify-content-center flex-wrap" style={{width:'60%'}}>
                        <img src="/imagens/tenis-1.png" alt="" style={{height:'650px', width:'750px'}}/>
                    </div>
                    <div className="flex justify-content-center align-items-center" style={{width:'100%', height:'20px'}}>
                        <div id="blocos" className=" border-500 " style={{backgroundColor:'darkgray' ,borderRadius:'100%', height:'8px', width:'8px'}}></div>
                        <div id="blocos" className=" border-500 ml-1" style={{backgroundColor:'darkgray' ,borderRadius:'100%', height:'8px', width:'8px'}}></div>
                        <div id="blocos" className=" border-500 ml-1 " style={{backgroundColor:'darkgray' ,borderRadius:'100%', height:'8px', width:'8px'}}></div>
                        <div id="blocos" className=" border-500 ml-1 " style={{backgroundColor:'darkgray' ,borderRadius:'100%', height:'8px', width:'8px'}}></div>
                    </div>
                </div>
                <h6 style={{fontSize:'18px'}} className="pl-5">Coleções em destaques</h6>
                <div className="flex flex-wrap justify-content-around pb-8" >
                    <img src="/imagens/novidade-1.png" alt="novidade"  style={{width:'395px', height:'240px'}}/>
                    <img src="/imagens/novidade-2.png" alt="novidade"  style={{width:'395px', height:'240px'}}/>
                    <img src="/imagens/novidade-3.png" alt="novidade"  style={{width:'395px', height:'240px'}}/>
                </div>
                <div>
                    <div className="flex justify-content-center align-items-center">
                        <h6 style={{fontSize:'18px'}} className="pl-5">Coleções em destaque</h6>
                        </div>
                        <div className="flex justify-content-center align-items-center">
                            <img src="/imagens/grupo.png" alt="" />
                        </div>
                    </div>
                    <div className="flex align-content-between flex-wrap">
                    <h6 style={{fontSize:'18px'}} className="pl-5">Produtos em alta</h6>
                    <h6 style={{fontSize:'18px'}} className="">Ver todos </h6>

                    </div>
                    <ProductCard/>
                    
                <div className="flex align-items-center flex-wrap" style={{height:'875px', width:'100%'}}>
                    <div className="flex align-items-center justify-content-center flex-wrap" style={{width:'50%', height:'500px'}}>
                        <div className="border-circle w-24rem h-22rem mr-5 bg-blue-400 flex relative justify-content-center align-items-center" style={{borderRadius:'50%', background:'linear-gradient(#A5B4AC,#ffffff)'}}>
                                <img src="/imagens/layer-2.png" alt="" className="absolute justify-content-center align-items-center" style={{height:'250px', width:'450px'}}/>
                        </div>
                    </div>
                    <div style={{width:'50%'}}>
                        <h5 style={{fontSize:'18px'}} className="text-pink-600">Oferta especial</h5>
                            <h1 style={{fontSize:'80px'}}>Air Jordan edição de colecionador</h1>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea debitis odio in nam. Consequuntur tenetur quam velit maxime nisi, fugit accusamus, eum amet sapiente aliquid quo eaque veniam doloremque possimus.</p>
                            <Button  style={{height:'48px', width:'220px', color:'white'}} label="Ver Ofertas" className="mr-8 bg-pink-600 "/>
                    </div>    
                </div>
                <Footer />
        </>
     );
}
 
export default HomePage;