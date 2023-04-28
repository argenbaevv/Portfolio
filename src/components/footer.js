import '../css/footer.css';

function Footer() {
  return (
    <div className='footer'>

      <div className='footer-left'>
        <span className='project-active'>01</span>
        <div className='project-line'></div>
        <span className='project-count'>02</span>
      </div>

      <div className='footer-right'>
        <a href="#">Follow Me
        {/* <span className='footer-share'><i class="fa-solid fa-share-nodes"></i></span>
        <div className='follow-social'>
          <a className='social'>1</a>
          <a className='social'>2</a>
          <a className='social'>3</a>
          <a className='social'>4</a>
        </div> */}
        </a>
        
      </div>
    </div>
  );
}

export default Footer;
