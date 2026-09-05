
 import CategoryShowcase from "./components/CategoryShowcase";

import {
  ArrowRight,
  ChevronDown,
  Heart,
  Instagram,
  Menu,
  Search,
  ShoppingBag,
  UserRound,
  Truck,
  RotateCcw,
  Award,
  LockKeyhole,
  Mail,
  X,
} from "lucide-react";

 
const products = [
  { name: "Oversized Knit Sweater", price: "$69.00", image: "/images/character-1.jpeg" },
  { name: "Tailored Blazer", price: "$129.00", image: "/images/character-2.jpeg" },
  { name: "Satin Shirt", price: "$59.00", image: "/images/character-3.jpeg" },
  { name: "Pleated Midi Dress", price: "$89.00", image: "/images/character-4.jpeg" },
];

 
export default function Home() {
  return (
    <main>
      <div className="announcement">
        <Truck size={15} /> FREE SHIPPING ON ORDERS OVER $100
      </div>

      <header className="nav">
        <a className="logo" href="#">
          <span>Mife’s</span>
          <small>WEARS</small>
        </a>

        <nav className="desktopNav">
          <a href="#">Home</a>
          <a href="#shop">Shop <ChevronDown size={13}/></a>
          <a href="#new">New Arrivals</a>
          <a href="#collections">Collections <ChevronDown size={13}/></a>
          <a href="#about">About Us</a>
          <a href="#contact">Contact</a>
        </nav>

        <div className="navIcons">
          <button aria-label="Search"><Search /></button>
          <button aria-label="Account"><UserRound /></button>
          <button aria-label="Shopping bag" className="bag"><ShoppingBag /><b>0</b></button>
          <button className="mobileMenu" aria-label="Menu"><Menu /></button>
        </div>
      </header>

      <section className="hero">
         

        <div className="heroCopy">
          <p className="eyebrow">ELEVATED. TIMELESS. YOU.</p>

          <h1>
            FASHION<br />
            THAT DEFINES<br />
            <em>YOU.</em>
          </h1>

          <p className="heroText">
            Luxury-inspired pieces for the modern woman.
            Designed to make a statement, made for you.
          </p>

          <div className="buttons">
            <a className="btn primary" href="#new">
              SHOP NEW IN <ArrowRight size={17} />
            </a>

            <a className="btn" href="#collections">
              EXPLORE COLLECTIONS
            </a>
          </div>

          <div className="slides">
            <b>01</b>
            <span>02</span>
            <span>03</span>
          </div>
        </div>

        <div className="heroVisual">
          <div className="arch"></div>

          <img
            src="/images/character-2.jpeg"
            alt="Mife's Wears fashion character"
          />

          <div className="seal">
            MADE TO EMPOWER
            <br />
            <strong>M</strong>
            <br />
            MADE FOR YOU
          </div>
        </div>
      </section>

      <section className="benefits">
        {[
          [Truck, "FREE SHIPPING", "On orders over $100"],
          [RotateCcw, "EASY RETURNS", "30-day return policy"],
          [Award, "PREMIUM QUALITY", "Crafted with perfection"],
          [LockKeyhole, "SECURE PAYMENTS", "100% secure checkout"],
        ].map(([Icon, title, text]) => (
          <div className="benefit" key={title}>
            <Icon/><div><strong>{title}</strong><small>{text}</small></div>
          </div>
        ))}
      </section>

      <section className="section productsSection" id="new">
        <div className="sectionIntro">
          <p className="eyebrow">CURATED FOR YOU</p>
          <h2>NEW<br/>ARRIVALS</h2>
          <div className="rule"></div>
          <p>Be the first to own the season’s most desirable pieces.</p>
          <a href="#shop">SHOP ALL NEW IN <ArrowRight size={16}/></a>
        </div>

        <div className="productGrid">
          {products.map((p) => (
            <article className="product" key={p.name}>
              <div className="productImage">
                <img src={p.image} alt={p.name}/>
                <button className="heart" aria-label={`Add ${p.name} to wishlist`}><Heart size={17}/></button>
              </div>
              <div className="productInfo">
                <div>
                  <h3>{p.name}</h3>
                  <p>{p.price}</p>
                </div>
                <button className="plus">+</button>
              </div>
              <div className="swatches"><i/><i/><i/></div>
            </article>
          ))}
        </div>
      </section>

      <section className="signature" id="collections">

        

        <div className="signatureImage">
          <img
            src="/images/character-1.jpeg"
            alt="Signature collection character"
          />
        </div>

        <div className="signatureCopy">


          <p className="eyebrow">TIMELESS. REFINED. DISTINCTIVE.</p>
          <h2>THE SIGNATURE<br/><em>COLLECTION</em></h2>
          <p>Timeless designs. Refined details.<br/>Made to elevate every moment.</p>
          <a className="btn primary" href="#shop">DISCOVER COLLECTION <ArrowRight size={17}/></a>
        </div>
      </section>

       <CategoryShowcase />

      <section className="social" id="about">
        <div className="socialCopy">
          <p className="eyebrow">STYLE INSPIRATION</p>
          <h2>@MIFES.WEARS</h2>
          <p>Follow us for daily style, new drops & more.</p>
          <a href="#contact">FOLLOW US <ArrowRight size={15}/></a>
        </div>
        {["character-2.jpeg","character-1.jpeg","character-4.jpeg","character-3.jpeg","character-2.jpeg"].map((x,i) =>
          <img key={i} src={`/images/${x}`} alt="Mife's Wears style inspiration"/>
        )}
      </section>

      <section className="newsletter" id="contact">
        <div><Award/><span><strong>EXCLUSIVE PERKS</strong><small>Sign up & enjoy exclusive deals and early access.</small></span></div>
        <div><Heart/><span><strong>LOYALTY REWARDS</strong><small>Earn points and redeem exciting rewards.</small></span></div>
        <div className="emailBlock"><Mail/><span><strong>STAY IN THE KNOW</strong><small>Be the first to know about new arrivals & offers.</small></span>
          <form action="#" method="post"><input type="email" name="email" placeholder="Your email address"/><button type="submit" aria-label="Subscribe"><ArrowRight/></button></form>
        </div>
      </section>

      <footer>
        <div className="footerBrand">
          <a className="logo" href="#"><span>Mife’s</span><small>WEARS</small></a>
          <p>Fashion that empowers.<br/>Style that speaks.</p>
          <div className="socialIcons"><Instagram size={17}/><span>t</span><span>p</span><span>f</span></div>
        </div>
        <div><h4>SHOP</h4><a>All Products</a><a>New Arrivals</a><a>Best Sellers</a><a>Sale</a></div>
        <div><h4>CUSTOMER CARE</h4><a>Shipping & Delivery</a><a>Returns & Exchanges</a><a>Size Guide</a><a>FAQs</a></div>
        <div><h4>COMPANY</h4><a>About Us</a><a>Our Story</a><a>Contact Us</a><a>Blog</a></div>
        <div><h4>SECURE PAYMENTS</h4><div className="payments"><b>VISA</b><b>MC</b><b>Pay</b><b>G Pay</b></div></div>
      </footer>
      <div className="copyright"><span>© 2026 Mife’s Wears. All rights reserved.</span><span>Privacy Policy　 Terms & Conditions</span></div>
    </main>
  );
}