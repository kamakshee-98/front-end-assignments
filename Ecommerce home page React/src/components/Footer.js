import '../App.css';
import '../css/Footer.css';

function Footer() {
    return (
      <section className="sec-footer">
        <div className="container">
          <section className="footer-links">
            <div className="row text-center" id="#section1">
              <div className="col-lg-3 col-md-6">
                <h5><a href="/pages/women.html" className="text-white">Women</a></h5>
                <ul className="list-unstyled">
                  <li>
                    <a href="/pages/categories/women-dresses.html" className="text-white">Dresses</a>
                  </li>
                  <li>
                    <a href="/pages/categories/women-pants.html" className="text-white">Pants</a>
                  </li>
                  <li>
                    <a href="/pages/categories/women-skirts.html" className="text-white">Skirts</a>
                  </li>
                </ul>
              </div>
              <div className="col-lg-3 col-md-6">
                <h5><a href="/pages/men.html" className="text-white">Men</a></h5>
                <ul className="list-unstyled">
                  <li>
                    <a href="/pages/categories/men-shirts.html" className="text-white">Shirts</a>
                  </li>
                  <li>
                    <a href="/pages/categories/men-pants.html" className="text-white">Pants</a>
                  </li>
                  <li>
                    <a href="/pages/categories/men-hoodies.html" className="text-white">Hoodies</a>
                  </li>
                </ul>
              </div>
              <div className="col-lg-3 col-md-6">
                <h5><a href="/pages/kids.html" className="text-white">Kids</a></h5>
              </div>
              <div className="col-lg-3 col-md-6">
                <h5>Links</h5>
                <ul className="list-unstyled">
                  <li>
                    <a href="/" className="text-white">Home</a>
                  </li>
                  <li>
                    <a href="/pages/login.html" className="text-white">Login</a>
                  </li>
                  <li>
                    <a href="/pages/contact.html" className="text-white">Contact</a>
                  </li>
                </ul>
              </div>
            </div>  
            <hr/>            
          </section>
        </div>
        <h6>Copyright &copy;Ecommerce 2022-23</h6>
      </section>
    );
}
  
export default Footer;