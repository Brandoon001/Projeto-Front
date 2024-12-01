const Footer = () => {
    return ( 
        <>
            <div className="relative flex bg-black-alpha-90 text-white-alpha-90 align-items-center justify-content-between" style={{height: '454px', width: '100%' }}>
                <div className="ml-6" style={{width:'440px'}}>
                    <img src="/imagens/logo-1.png" alt="" className="" />
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quis eveniet assumenda illo, distinctio fugit dolores officia eius, similique mollitia earum quasi. Atque sequi at quos aut impedit earum quas necessitatibus.</p><br />
                    <img src="/imagens/icones.png" alt="icones" />
                </div>
                <div className="" style={{height:'340px', width:'200px'}}>
                    <h4>Informação</h4>
                    <br />
                    <p>
                    Sobre Drip Store
                    <br /><br />
                    Segurança
                    <br /><br />
                    Wishilist
                    <br /><br />
                    Blog
                    <br /><br />
                    Trabalhe conosco
                    <br /><br />
                    Meus Pedidos    
                    </p>
                </div>
                <div style={{height:'340px', width:'200px'}}>
                    <h4>Categorias</h4>
                    <br />
                    <p>
                        Camisetas
                        <br /><br />
                        Calças
                        <br /><br />
                        Bonés
                        <br /><br />
                        Headphones
                        <br /><br />
                        Tênis
                    </p>
                </div>
                <div className="mr-6" style={{height:'340px', width:'200px'}}>
                    <h4>Contato</h4>
                    <br />
                    <p>
                        Av.Santos Dumont, 1510 - 1andar - aldeota, Fortaleza - CE, 60150-161
                        <br /><br />
                        (85) 3051-3411
                    </p>
                </div>
                <div className="absolute align-item-center bottom-0" style={{width:'100%'}}>
                <hr style={{width:'80%'}} />
                <h5 className="text-center ">2022 @ Digital College</h5>
                </div>
            </div>
        </>
     );
}
 
export default Footer;