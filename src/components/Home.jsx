import React from 'react'

const Home = () => {

    return (

        <>

            <div class="contact">
                <nav>
                    <ul>
                        <a><i class="icon fas fa-solid fa-mobile-screen" style={{ color: "#ffff" }}></i>+91
                            1234567890</a>&nbsp;&nbsp;
                        <a><i class="fa-regular fa-envelope"></i>info@company.com</a>
                    </ul>
                </nav>
            </div>
            <nav>
                <div class="navbar">
                    <div class="logo"><a href="#">LOGO</a></div>
                    <ul class="menu">
                        <li><a href="#Home">HOME</a></li>
                        <li><a href="#About">ABOUT US</a></li>
                        <li><a href="#Category">SERVICES</a></li>
                        <li><a href="#Contact">TESTIMONIALS</a></li>
                        <li><a href="#Feedback">BLOG</a></li>
                        <li><a href="#Feedback">CONTACT</a></li>
                    </ul>
                </div>
            </nav>

            <main>
                <div class="img">
                    <img src="./images/Background.webp" width="100%" />
                    <div class="text-container">
                        <h1>Contact Us</h1>
                        <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, <br />
                            sed diam nonummy nibh euismod tincidunt ut laoreet</p><br />
                        <div class="btn-box">
                            <a href="#">Home <i class="icon fas fa-solid  fa-sm fa-angles-right"></i> Contact Us</a>
                        </div>
                    </div>
                </div>

                {/* <!--second --> */}


                <div class="container1">
                    <div class="column1">
                        <div class="info-container">
                            <h1>Let's Start</h1><br /><h1>Something Great!</h1><br />
                            <p style={{ color: "#666666" }}>proactively Customized Cross-media schemas rather than high-payoff<br />the customer service.
                                Uniquely enable extensible niche.</p><br />
                            <div class="icon-container">
                                <ul>
                                    <li class="c-text"><i class="icon fas fa-map-marker-alt"></i><b>Adarsh Nagar 1st Block 1st
                                        Floor Cross,<br />Ramurthy Nagar,Bangalore-560016s</b></li><br />
                                    <li class="c-text"><i class="icon fas fa-regular fa-mobile"></i><b>+91 1234567890</b></li><br />
                                    <li class="c-text"><i class="icon fas fa-regular fa-envelope"></i><b>info@company.com</b></li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* ************************* */}
                    <div class="column2">

                        <div class="form-container">
                            <h1>Need Help?</h1><br />
                            <p>Proactively fashion world-class leadership via-a-vis<br />enterprise e-services.Great strong
                                leadership.</p><br />
                            <form action="#" method="post">
                                <div class="form-group">
                                    <label for="name"></label>
                                    <i class="icon fas fa-user"></i>
                                    <input type="text" id="name" name="name" class="placeholder" placeholder="Name" />
                                </div>
                                <div class="form-group">
                                    <label for="email"></label>
                                    <i class="icon fas fa-envelope"></i>
                                    <input type="email" id="email" name="email" class="placeholder" placeholder="Email" />
                                </div>
                                <div class="form-group">
                                    <label for="subject"></label>
                                    <i class="icon fa fa-tag fa-rotate-90"></i>
                                    <input type="text" id="subject" name="subject" class="placeholder" placeholder="Subject" />
                                </div>

                                <div class="form-group">
                                    <label for="message"></label>
                                    <i class="icon fas fa-solid fa-pen" style={{ color: "#3b3d44" }}></i>
                                    <textarea id="message" name="message" class="placeholder" placeholder="Your Message"></textarea>
                                </div>

                                <button class="button" type="submit"><b>SEND INQUIRY</b></button>

                            </form>
                        </div>
                    </div>


                </div>


                {/* </div>
                    </div> */}


            </main>
            <section>
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d242090.3415922727!2d73.9111797!3d18.5441888!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c220a4234a03%3A0xaacdd60fadf55f2c!2siAssure%20International%20Technology%20Pvt%20Ltd!5e0!3m2!1sen!2sin!4v1701085866838!5m2!1sen!2sin"
                    width="2020" height="400" style={{ border: "0" }} allowfullscreen="" loading="lazy"
                    referrerpolicy="no-referrer-when-downgrade"></iframe>
            </section>
            <footer>
                <div class="row">
                    <div class="follow-us">
                        <h2>Follow us</h2>
                        <ul>
                            <a href="#"><i class="fa-brands fa-linkedin" style={{ color: "#f1f2f3" }}></i></a>
                            <a href="#"><i class="fa-brands fa-telegram" style={{ color: "#f5f7f9" }}></i></a>
                            <a href="#" style={{ color: "white" }}><i class="fa-brands fa-square-twitter"></i></a>
                            <li style={{ listStyle: "none", fontSize: "larger" }}> <i
                                class="icon fas fa-regular fa-globe"></i> &nbsp https://company.com</li>
                        </ul>
                    </div>
                    <div class="servies">
                        <h2>Our Services</h2>
                        <ul>
                            <li><i class="icon fas fa-solid fa-angles-right"></i>Lorem ipsum dolor</li>
                            <li><i class="icon fas fa-solid fa-angles-right"></i>Lorem ipsum dolor</li>
                            <li><i class="icon fas fa-solid fa-angles-right"></i>Lorem ipsum dolor</li>
                            <li><i class="icon fas fa-solid fa-angles-right"></i>Lorem ipsum dolor</li>
                        </ul>
                    </div>
                    <div class="services2">
                        <ul><br />
                            <li><i class="icon fas fa-solid fa-angles-right"></i> Lorem ipsum dolor</li>
                            <li><i class="icon fas fa-solid fa-angles-right"></i>Lorem ipsum dolor</li>
                            <li><i class="icon fas fa-solid fa-angles-right"></i>Lorem ipsum dolor</li>
                            <li><i class="icon fas fa-solid fa-angles-right"></i>Lorem ipsum dolor</li>
                        </ul>
                    </div>
                    <div class="get">
                        <h2>Get In Touch</h2>
                        <li><i class="icon fas fa-map-marker-alt"></i>
                            Adarsh Nagar 1st Block 1st Floor Cross,<br />
                            Ramurthy Nagar,Bangalore-560016s</li>
                        <hr />
                        <li><i class="icon fas fa-regular fa-mobile"></i>
                            phone: +91 1234567890</li>
                        <li> <i class="icon fas fa-solid fa-envelope"></i>
                            Email: info@company.com</li>
                    </div>
                </div>
                <section class="footer">
                    <p class="left">Copyright © 2023, iAssureIT All Rights Reserved</p>

                    <p class="right">Designed & Developed By <b>iAssure International Technologies Pvt. Ltd</b></p>

                </section>
            </footer>

        </>





    );


}

export default Home;