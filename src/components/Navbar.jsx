import { useState } from 'react';
import * as FaIcons from 'react-icons/fa';
import { Link, Outlet } from 'react-router-dom'
import { SidebarData } from './SidebarData';
import './Navbar.css';
import iconeCadastroCliente from '../images/iconeCadastroCliente.png';
import iconeCadastroEmpresa from '../images/iconeCadastroEmpresa.png';
import iconeCadastroProduto from '../images/iconeCadastroProduto.png';
import iconeVendas from '../images/iconeVendas.png';
// import iconeEstoque from '../images/iconeEstoque.png';
// import iconeRelatorios from '../images/iconeRelatorios.png';

const icons = {
  iconeCadastroEmpresa,
  iconeCadastroProduto,
  iconeCadastroCliente,
  iconeVendas

};
function Navbar() {
  const [sidebar, setSidebar] = useState(false);


  const showSidebar = () => 
    setSidebar(!sidebar);

  return (
    <>
      <div className="navbar">
        <Link to="#" className="menu-bars">
          <FaIcons.FaBars onClick={showSidebar} className='menu-bar'/>
            <img src={iconeCadastroCliente} alt="" className='cadastroCliente'/>
            <img src={iconeCadastroEmpresa} alt="" className='cadastroEmpresa'/>
            <img src={iconeCadastroProduto} alt="" className='cadastroProduto'/>
            <img src={iconeVendas} alt="" className='vendas'/>

          {/* <img src={iconeEstoque} alt="" className='estoque'/>
          <img src={iconeRelatorios} alt="" className='relatorios'/> */}
        </Link>
        
      </div>
      <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>  
        <ul className="nav-menu-items">
          <li className="navbar-toggle">
            <Link to="#" className="menu-bars-close">
              <FaIcons.FaBars onClick={showSidebar} className='menu-bar-close'/>
            </Link>
          </li>
          {SidebarData.map((item, index) => {
            return (
              <li key={index} className={item.cName}>
                <Link to={item.path}>
                  <div className="nav-item">
                    <img src={icons[item.icon]}/>
                    {sidebar && <span>{item.title}</span>}
                  </div>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
     <main style={{marginLeft:sidebar ? '340px' : '150px'}}>
        <Outlet/> 
      </main>
    </>
  );
}

export default Navbar;