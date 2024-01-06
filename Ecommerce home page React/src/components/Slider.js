import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import '../App.css';
import '../css/Home.css';
import {     
    kids1,
    kids2,
    kids3,
    kids4,
    menHoodies1,
    menPants1,
    menShirts1,
    menShirts2,
    womenDresses1,
    womenPants1,
    womenPants2,
    womenSkirts1 } from './ImgImports';

function Slider() {
    return (
      <section id="slider">
        <h1 lg-mb-0 md-mb-3 mb-4>Featured Products</h1>
        <div id="featured-slide" className="carousel carousel-dark slide" data-bs-ride="carousel">
          <div className="carousel-inner">
            <div className="carousel-item active">
              <div className="card-container">
                <div className="card">
                  <div className="image-container">
                    <img src={womenDresses1} className="card-img-top" alt="..." />
                  </div>
                  <div className="card-body">
                    <h5 className="card-title">Red dress</h5>
                    <h6 className="card-text fw-bold">$15</h6>
                    <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    <a href="/" className="add-to-cart btn btn-primary">            
                      <FontAwesomeIcon className="cart-btn-icon" icon={faCartShopping} />
                      <span>Add to cart</span>
                    </a>
                  </div>
                </div>
                <div className="card">
                  <div className="image-container">
                    <img src={womenPants1} className="card-img-top" alt="..." /> 
                  </div>
                  <div className="card-body">
                    <h5 className="card-title">Striped pants</h5>
                    <h6 className="card-text fw-bold">$15</h6>
                    <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    <a href="/" className="add-to-cart btn btn-primary">            
                      <FontAwesomeIcon className="cart-btn-icon" icon={faCartShopping} />
                      <span>Add to cart</span>
                    </a>
                  </div>
                </div>
                <div className="card">
                  <div className="image-container">
                    <img src={womenSkirts1} className="card-img-top" alt="..." />
                  </div>
                  <div className="card-body">
                    <h5 className="card-title">Cream skirt</h5>
                    <h6 className="card-text fw-bold">$15</h6>
                    <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    <a href="/" className="add-to-cart btn btn-primary">            
                      <FontAwesomeIcon className="cart-btn-icon" icon={faCartShopping} />
                      <span>Add to cart</span>
                    </a>
                  </div>
                </div>
                <div className="card">
                  <div className="image-container">
                    <img src={womenPants2} className="card-img-top" alt="..." />
                  </div>
                  <div className="card-body">
                    <h5 className="card-title">Ripped jeans</h5>
                    <h6 className="card-text fw-bold">$15</h6>
                    <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    <a href="/" className="add-to-cart btn btn-primary">            
                      <FontAwesomeIcon className="cart-btn-icon" icon={faCartShopping} />
                      <span>Add to cart</span>
                    </a>
                  </div>
                </div>
                <div className="card">
                  <div className="image-container">
                    <img src={womenPants2} className="card-img-top" alt="..." />
                  </div>
                  <div className="card-body">
                    <h5 className="card-title">Ripped jeans</h5>
                    <h6 className="card-text fw-bold">$15</h6>
                    <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    <a href="/" className="add-to-cart btn btn-primary">            
                      <FontAwesomeIcon className="cart-btn-icon" icon={faCartShopping} />
                      <span>Add to cart</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <div className="card-container">
                <div className="card">
                  <div className="image-container">
                    <img src={menHoodies1} className="card-img-top" alt="..." />
                  </div>
                  <div className="card-body">
                    <h5 className="card-title">Men grey hoodie</h5>
                    <h6 className="card-text fw-bold">$15</h6>
                    <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    <a href="/" className="add-to-cart btn btn-primary">            
                      <FontAwesomeIcon className="cart-btn-icon" icon={faCartShopping} />
                      <span>Add to cart</span>
                    </a>
                  </div>
                </div>
                <div className="card">
                  <div className="image-container">
                    <img src={menShirts1} className="card-img-top" alt="..." />
                  </div>
                  <div className="card-body">
                    <h5 className="card-title">White T-shirt</h5>
                    <h6 className="card-text fw-bold">$15</h6>
                    <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    <a href="/" className="add-to-cart btn btn-primary">            
                      <FontAwesomeIcon className="cart-btn-icon" icon={faCartShopping} />
                      <span>Add to cart</span>
                    </a>
                  </div>
                </div>
                <div className="card">
                  <div className="image-container">
                    <img src={menPants1} className="card-img-top" alt="..." />
                  </div>
                  <div className="card-body">
                    <h5 className="card-title">Men grey hoodie</h5>
                    <h6 className="card-text fw-bold">$15</h6>
                    <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    <a href="/" className="add-to-cart btn btn-primary">            
                      <FontAwesomeIcon className="cart-btn-icon" icon={faCartShopping} />
                      <span>Add to cart</span>
                    </a>
                  </div>
                </div>
                <div className="card">
                  <div className="image-container">
                    <img src={menShirts2} className="card-img-top" alt="..." />
                  </div>
                  <div className="card-body">
                    <h5 className="card-title">Men blue jeans</h5>
                    <h6 className="card-text fw-bold">$15</h6>
                    <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    <a href="/" className="add-to-cart btn btn-primary">            
                      <FontAwesomeIcon className="cart-btn-icon" icon={faCartShopping} />
                      <span>Add to cart</span>
                    </a>
                  </div>
                </div>
                <div className="card">
                  <div className="image-container">
                    <img src={menHoodies1} className="card-img-top" alt="..." />
                  </div>
                  <div className="card-body">
                    <h5 className="card-title">White T-shirt</h5>
                    <h6 className="card-text fw-bold">$15</h6>
                    <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    <a href="/" className="add-to-cart btn btn-primary">            
                      <FontAwesomeIcon className="cart-btn-icon" icon={faCartShopping} />
                      <span>Add to cart</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <div className="card-container">
                <div className="card">
                  <div className="image-container">
                    <img src={kids1} className="card-img-top" alt="..." />
                  </div>
                  <div className="card-body">
                    <h5 className="card-title">Superman dress</h5>
                    <h6 className="card-text fw-bold">$15</h6>
                    <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    <a href="/" className="add-to-cart btn btn-primary">            
                      <FontAwesomeIcon className="cart-btn-icon" icon={faCartShopping} />
                      <span>Add to cart</span>
                    </a>
                  </div>
                </div>
                <div className="card">
                  <div className="image-container">
                    <img src={kids2} className="card-img-top" alt="..." />
                  </div>
                  <div className="card-body">
                    <h5 className="card-title">Princess dress</h5>
                    <h6 className="card-text fw-bold">$15</h6>
                    <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    <a href="/" className="add-to-cart btn btn-primary">            
                      <FontAwesomeIcon className="cart-btn-icon" icon={faCartShopping} />
                      <span>Add to cart</span>
                    </a>
                  </div>
                </div>
                <div className="card">
                  <div className="image-container">
                    <img src={kids3} className="card-img-top" alt="..." />
                  </div>
                  <div className="card-body">
                    <h5 className="card-title">classNameic set</h5>
                    <h6 className="card-text fw-bold">$15</h6>
                    <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    <a href="/" className="add-to-cart btn btn-primary">            
                      <FontAwesomeIcon className="cart-btn-icon" icon={faCartShopping} />
                      <span>Add to cart</span>
                    </a>
                  </div>
                </div>
                <div className="card">
                  <div className="image-container">
                    <img src={kids4} className="card-img-top" alt="..." />
                  </div>
                  <div className="card-body">
                    <h5 className="card-title">Green frock</h5>
                    <h6 className="card-text fw-bold">$15</h6>
                    <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    <a href="/" className="add-to-cart btn btn-primary">            
                      <FontAwesomeIcon className="cart-btn-icon" icon={faCartShopping} />
                      <span>Add to cart</span>
                    </a>
                  </div>
                </div>
                <div className="card">
                  <div className="image-container">
                    <img src={kids1} className="card-img-top" alt="..." />
                  </div>
                  <div className="card-body">
                    <h5 className="card-title">Superman dress</h5>
                    <h6 className="card-text fw-bold">$15</h6>
                    <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    <a href="/" className="add-to-cart btn btn-primary">            
                      <FontAwesomeIcon className="cart-btn-icon" icon={faCartShopping} />
                      <span>Add to cart</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#featured-slide" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#featured-slide" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </section>
    );
}
  
export default Slider;