import logo from './logo.svg';
import './App.css';
import Header from './header';
import Footer from './footer';


function App() {
  return (
    <>
      <header className="header center">
        <Header />
        <section className="header-content">
          <div className="header-info">
            <h1 className="header-info__title">our strong organaisation</h1>
            <p className="text text_header-info">Lorem ipsum dolor sit amet, consectetur adipis cing elit, sed do
              eiusmod
              tempor incididunt ut labore et. ectetur adig ipis cing elit, sed do eiusmod tempor incididunt.</p>
            <a href="#" className="button header-info__button">Contact Us</a>
          </div>
          <video src="#" controls className="header-info__video"></video>
        </section>
      </header>
      <main className="content">
        <section className="service center">
          <div className="service-box">
            <div className="service-info">
              <h2 className="heading">do you know we can provide for you ?</h2>
              <p className="text text_service-info">Lorem ipsum dolor sit amet, consecteturadipis cing elit, sed do
                eiusmod
                tempor
                incididunt ut labore et.Lorem ni ipsum dolor sit amet, consectetur adipis cing elit, ed doi
                eiusmod
                tempor incididunt ut labore et.</p>
              <a href="#" className="button service-info__button">Learn More</a>
            </div>
            <article clasName="service-article">
              <img className="service-article__img" src="./img/managment.svg" alt="icon" />
              <h3 className="service-article__title">Management</h3>
              <p className="text">Lorem ipsum dolor sitea amet, zixf conseit adipi cing elit, seddi
                do
                eiusmod btdempor in didunt utlae ore etioe.Lorem ipsum new idolor</p>
            </article>
            <article className="service-article">
              <img className="service-article__img" src="./img/design.svg" alt="icon" />
              <h3 className="service-article__title">UI /UX Design</h3>
              <p className="text">Lorem ipsum dolor sitea amet, zixf conseit adipi cing elit, seddi
                do
                eiusmod btdempor in didunt utlae ore etioe.Lorem ipsum new idolor </p>
            </article>
            <article className="service-article">
              <img className="service-article__img" src="./img/logo.svg" alt="icon" />
              <h3 className="service-article__title">Logo / Branding</h3>
              <p className="text">Lorem ipsum dolor sitea amet, zixf conseit adipi cing elit, seddi
                do
                eiusmod btdempor in didunt utlae ore etioeew idolor sit amet</p>
            </article>
            <article className="service-article">
              <img className="service-article__img" src="./img/animation.svg" alt="icon" />
              <h3 className="service-article__title">Animationg</h3>
              <p className="text">Lorem ipsum dolor sitea amet, zixf conseit adipi cing elit, seddi
                do
                eiusmod btdempor in didunt utlae ore etioe.Lorem ipsum new idolor sit amet</p>
            </article>
          </div>
        </section>

        <section className="products">
          <h2 className="heading heading_products">feature products</h2>
          <p className="text text_products">Lorem ipsum dolor sit amet, consectetur adipis cing elit,sed do eiusmod
            tempor
            incididunt ut labore et.</p>
          <div className="products__line"></div>
          <div>
            <div className="products__box">
              <div className="products__links">
                <a href="#" className="products__link products__link_active">all</a>
                <a href="#" className="products__link">print template</a>
                <a href="#" className="products__link">web template</a>
                <a href="#" className="products__link">user interface</a>
                <a href="#" className="products__link">mock-up</a>
              </div>
              <div className="products__items center">
                <a className="products__item" href="#"><img src="./img/product.jpg" alt="picture" /></a>
                <a className="products__item" href="#"><img src="./img/product.jpg" alt="picture" /></a>
                <a className="products__item" href="#"><img src="./img/product.jpg" alt="picture" /></a>
                <a clasName="products__item" href="#"><img src="./img/product.jpg" alt="picture" /></a>
                <a className="products__item" href="#"><img src="./img/product.jpg" alt="picture" /></a>
                <a className="products__item" href="#"><img src="./img/product.jpg" alt="picture" /></a>
                <a className="products__item" href="#"><img src="./img/product.jpg" alt="picture" /></a>
                <a className="products__item" href="#"><img src="./img/product.jpg" alt="picture" /></a>

              </div>
            </div>
          </div>
        </section>

        <section className="meet center">
          <div className="meet__top">
            <h2 className="heading heading_meet">Meet our team</h2>
            <p className="text meet_text">Lorem ipsum dolor sit amet, consectetur adipis cing elit, sed dooing eiusmod
              tempor incididut labore Ui / Ux , print template.</p>
            <div className="meet__line"></div>
          </div>
          <div className="meet__content">
            <div className="meet__person"></div>
            <div className="meet__info">
              <h3 className="meet__heading">mark waugh</h3>
              <p className="text meet_text-info">Lorem ipsum dolor sit amet, consectetur adipis cing elit, sed dooing
                eiusmod tempor incididut labore Ui / Ux , print template.</p>
              <div className="meet__links">
                <a className="meet__link" href="#">Facebook</a>
                <a className="meet__link" href="#">Dribble</a>
                <a className="meet__link" href="#">Behance</a>
                <a className="meet__link" href="#">Twiter</a>
              </div>
              <div className="meet__peoples">
                <a className="meet__people" href="#">
                  <div className="meet__name-box">
                    <h4 className="meet__person-name">sokina jue</h4>
                  </div>
                </a>
                <a className="meet__people" href="#">
                  <div className="meet__name-box">
                    <h4 className="meet__person-name">sokina jue</h4>
                  </div>
                </a>
                <a className="meet__people" href="#">
                  <div className="meet__name-box">
                    <h4 className="meet__person-name">sokina jue</h4>
                  </div>
                </a>
                <a className="meet__people" href="#">
                  <div className="meet__name-box">
                    <h4 className="meet__person-name">sokina jue</h4>
                  </div>
                </a>
              </div>

            </div>

          </div>
        </section>
        <section className="design">
          <h2 className="design__title">Design tips, tricks, and freebies. Delivered weekly.</h2>
          <p className="text design_text">Lorem ipsum dolor sit amet, consectetur adipis cing elit, sed do eiusmod.
          </p>
          <form className="design__form" action="#">
            <input className="design__mail" type="email" placeholder="Email Address..."
              required="" />
            <button className="design__button" type="submit">subscribe</button>

          </form>
        </section>

        <section className="get">
          <h2 className="heading heading_mode">get in touch</h2>
          <p className="text get__text">Lorem ipsum dolor sit amet, consectetur adipis cing elit, sed do eiusmod tempor
            incididunt ut labore et.ur adipis cing elit, sed do eiusmod tempor incididunt ut labore et. ur adipis
            cing elit, sed do eiusmod tempor incididunt ut labore et.</p>
          <div className="get__line"></div>
          <div className="get__content">
            <form action="#" className="get__form">
              <input className="get__input" type="text" placeholder="Name" />
              <input className="get__input" type="email" placeholder="Your Mail" />
              <textarea className="get__input get__input_textarea" placeholder="Type your message"></textarea>
              <button className="get__button" type="submit">Send message</button>
            </form>
            <div className="get__contacts">
              <h3 className="get__heading">contact info</h3>
              <p className="get__contacts-text" >Jalalabad 24 / A, Ambaarkhana, Sylhet, Bangladesh</p>
              <a className="get__contacts-text" href="mailto:redwan@deviserweb.com">redwan@deviserweb.com</a>
              <a className="get__contacts-text" href="tel:+8801761746373">(+88) 017 617 46373</a>
            </div>
          </div>
        </section>
      </main>
      <Footer />

      <script src="script.js"></script>

    </>

  );
}

export default App;
