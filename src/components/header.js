import '../css/header.css';





function Header() {
  return (

    

    <div className='header'>



      <div className='logo'>argenbaev</div>
      <nav className='header-nav'>
        <ul className='nav-list'>
          <li className='nav-item'><a href='/'>Home</a></li>
          <li className='nav-item'><a href='#'>About</a></li>
          <li className='nav-item'><a href='#'>Contact</a></li>
        </ul>
      </nav>
    </div>
  );
}



export default Header;
