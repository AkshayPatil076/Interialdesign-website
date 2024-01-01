import './Nav.css';
import  Logo from './img/home.png';


function Navbar() {

  // document.write(men.length)
  var menu=[
    {
      'men':'Home',
      'link':''
    },
    {
      'men':'About',
      'link':''
    },
    {
      'men':'Project',
      'link':''
    },
    {
      'men':'Contact',
      'link':''
    },
  
  ];
    return (
      
     <>
     <nav className='nav-bar'>
        <div className='Logo-nav'>
          <img src={Logo} className='logo'/>
        </div><h3 className='logo-name'>LOGO</h3>
        <div className='nav-men'>{}
        <ul id='menul'>
      {
        menu.map((menu,index)=>(
          
          <li className='menli' data-index={index}><a href={menu.link} className='mentext'>{menu.men}</a></li>
        ))}
          {/* <li className='menli'><a href='' className='mentext'>Link</a></li>
          <li className='menli'><a href='' className='mentext'>Link</a></li>
          <li className='menli'><a href='' className='mentext'>Link</a></li>
          <li className='menli'><a href='' className='mentext'>Link</a></li> */}
        </ul>
        </div>
        <button className='submit'>SUBUMIT</button>
     </nav>
     </>
    );
  }
  
  export default Navbar;