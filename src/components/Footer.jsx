function Footer() {
  return (
    <>
      <footer style={{ background: '#f8f8f8' }}>
        <div className="container">
          <div className="footer-content">
            <ul className="footer-content__1">
              <li>
                <span>EL-KAHT</span> Rent Car
              </li>
              <li>
                We offers a big range of vehicles for all your driving needs. We
                have the perfect car to meet your needs.
              </li>
              <li>
                <a href="tel:+212 661-292787">
                  <i className="fa-solid fa-phone"></i> &nbsp; +212 661-292787
                </a>
              </li>

              <li>
                <a
                  href="mailto: 
                  elkaht.rent.car@gmail.com"
                >
                  <i className="fa-solid fa-envelope"></i>
                  &nbsp;elkaht.rent.car@gmail.com
                </a>
              </li>

              
            </ul>

            <ul className="footer-content__2">
              <li>Company</li>
              <li>
                <a href="#home">Gallery</a>
              </li>
              <li>
                <a href="#home">Careers</a>
              </li>
              <li>
                <a href="#home">Mobile</a>
              </li>
              <li>
                <a href="#home">Blog</a>
              </li>
              <li>
                <a href="#home">How we work</a>
              </li>
            </ul>

            <ul className="footer-content__2">
              <li>Working Hours</li>
              <li>Mon - Fri: 9:00AM - 9:00PM</li>
              <li>Sat: 9:00AM - 19:00PM</li>
              <li>Sun: Closed</li>
            </ul>

            <ul className="footer-content__2">
              <li>Subscription</li>
              <li>
                <p>Subscribe your Email address for latest news & updates.</p>
              </li>
              <li>
                <input type="email" placeholder="Enter Email Address"></input>
              </li>
              <li>
                <button className="submit-email">Submit</button>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
