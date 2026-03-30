import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser,faHeart} from "@fortawesome/free-regular-svg-icons";
import { faMagnifyingGlass ,faCartShopping} from "@fortawesome/free-solid-svg-icons";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import Logo from "../assets/hnm.png"
import { useNavigate } from 'react-router-dom';


const Navbar = ({authenticate, setAuthenticate}) => {
  const menuList = ["WOMEN","MEN","KIDS"]
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const inputRef = React.useRef(null);

  const toggleSearch = ()=>{
    setIsSearchOpen(!isSearchOpen);
    if (!isSearchOpen) {
    setTimeout(() => inputRef.current?.focus(), 500);
  }
  }
  const search = (event) => {
    if(event.key === "Enter") {
      let keyword = event.target.value;
      navigate(`/?q=${keyword}`);
      setIsSearchOpen(false);
    }
  }

  
  return (
    <>
      <div className='navbar'>
         <div className='nav-left' >
          
        {/* mobile */}
        <div className='menu-burger' onClick={()=> setIsMenuOpen(true)}>
          <FontAwesomeIcon icon={faBars} />
        </div>
        <div className='nav-logo'>
             <img
              width={80} 
              src={Logo} 
              onClick={()=>navigate('/')} 
              alt="logo" 
            />
        </div>
        <div className={`side-menu ${isMenuOpen ? "show" : ""}`} style={{ width: 250 }}>
          <button className="close-btn" onClick={() => setIsMenuOpen(false)}>
            <FontAwesomeIcon icon={faXmark} />
          </button>
          
          <div className="side-menu-list">
            {menuList.map((menu, index) => (
              <button key={index}>{menu}</button>
            ))}
          </div>
        </div>

        {/* Desktop */}
       
           <ul className='menu-list'>
            {menuList.map((menu, index) => (
              <li key={index}>{menu}</li>
            ))}
          </ul>
        </div>

        <div className='nav-right'> 
           <div className={`menu-search ${isSearchOpen ? 'open' : ''}`}>
              <FontAwesomeIcon icon={faMagnifyingGlass } onClick={toggleSearch}/>
              <input ref={inputRef} type="text" className='search-input' onKeyDown={(event) => search(event)} placeholder="search"/>
           </div>
          <FontAwesomeIcon icon={faHeart} />
          <FontAwesomeIcon icon={faCartShopping} />

           <div className='nav-login'>
          {authenticate ? (
            <div className='login' onClick={() => {
              setAuthenticate(false)
              navigate('/login')
              }}>
              <FontAwesomeIcon icon={faUser} />
              <span className='login-btn'>Logout</span>
            </div>
            ): (
              <div className='login' onClick={() => navigate('/login')}>
              <FontAwesomeIcon icon={faUser} />
              <span className='login-btn'>Login</span>
            </div>
            )}
           
        </div>
         
       
        </div>
       
      </div> 
      
    </>
  )
}

export default Navbar
