import Logo from "./Logo";
import { InputText } from 'primereact/inputtext';
import { IconField } from 'primereact/iconfield';
import { InputIcon } from 'primereact/inputicon';
import { Button } from 'primereact/button';
import { Link } from "react-router-dom";
                

        

const Header = () => {
    return ( 
        <>
            <div className="relative  flex justify-content-between flex-wrap pr-5 pl-5" style={{width:'100%',height:'192px'}}>
                <div className="align-items-center flex justify-content-center">
                <Logo />
                </div>
                <form className="align-items-center flex justify-content-center">
                    <IconField  iconPosition="right">
                    <InputIcon
                        className="pi pi-search">
                    </InputIcon>
                    <InputText 
                        
                        style={{width:'450px', height:'40px' }}
                        className="pl-2 "
                        placeholder="pesquisar produto..."
                        id="pesquisar"
                    />
                    </IconField>  
                </form>
                <div className="static align-items-center flex justify-content-center">
                <a className="text-2xl"  href="/">cadastrar-se</a>
                </div>
                <div className="align-items-center flex justify-content-center ">
                <Button  style={{height:'40px', width:'114px', color:'white'}} label="entrar" className="mr-8 bg-pink-600 "/>
                <img style={{height:'30px'}} src="/imagens/carrinho.png" alt="carrinho" className="ml-8" />
                </div>
                <div className="mt-6 " style={{width:'400px',height:'40px'}}>
                <nav style={{width:'400px',height:'40px'}}>
                    <ul className=" flex align-content-between ">
                        <li className="flex   "><Link to={"/"}>Home</Link></li>
                        <li className="pl-4 flex "><Link to={"/product:id"}>Produtos</Link></li>
                        <li className="pl-4 flex "><Link to={"/product"}>Categorias</Link></li>
                        <li className=" pl-4 flex "><Link to={"/"}>Meus pedidos</Link></li>
                    </ul>
                </nav>
                </div>
            </div>
        </>
     );
}
 
export default Header;