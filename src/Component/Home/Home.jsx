import React from 'react'

export default function Home() {
  return (
    <>
  <title>NewsPrk</title>
  {/* META */}
  <meta charSet="utf-8" />
  <meta
    name="viewport"
    content="width=device-width, initial-scale=1, shrink-to-fit=no"
  />
  {/*::::: FABICON ICON :::::::*/}
  <link rel="icon" href="assets/img/icon/fabicon.png" />
  {/*::::: ALL CSS FILES :::::::*/}
  <link rel="stylesheet" href="assets/css/plugins/bootstrap.min.css" />
  <link rel="stylesheet" href="assets/css/plugins/animate.min.css" />
  <link rel="stylesheet" href="assets/css/plugins/fontawesome.css" />
  <link rel="stylesheet" href="assets/css/plugins/modal-video.min.css" />
  <link rel="stylesheet" href="assets/css/plugins/owl.carousel.css" />
  <link rel="stylesheet" href="assets/css/plugins/slick.css" />
  <link rel="stylesheet" href="assets/css/plugins/stellarnav.css" />
  <link rel="stylesheet" href="assets/css/theme.css" />
  {/*::::: PRELOADER START :::::::*/}
  <div className="preloader">
    <div>
      <div className="nb-spinner" />
    </div>
  </div>
  {/*::::: PRELOADER END :::::::*/}
  {/*::::: SEARCH FORM START:::::::*/}
  <div className="searching">
    <div className="container">
      <div className="row">
        <div className="col-8 text-center m-auto">
          <div className="v1search_form">
            <form action="#">
              <input type="search" placeholder="Search Here..." />
              <button type="submit" className="cbtn1">
                Search
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
    <div className="close_btn">
      {" "}
      <i className="fal fa-times" />
    </div>
  </div>
  {/*:::::SEARCH FORM END :::::::*/}
  {/*::::: TOP BAR START :::::::*/}
  <div className="topbar white_bg" id="top">
    <div className="container">
      <div className="row">
        <div className="col-md-6 col-lg-8 align-self-center">
          <div className="trancarousel_area">
            <p className="trand">Tranding</p>
            <div className="trancarousel owl-carousel nav_style1">
              <div className="trancarousel_item">
                <p>
                  <a href="#">
                    Top 10 Best Movies of 2018 So Far: Great Movies
                  </a>
                </p>
              </div>
              <div className="trancarousel_item">
                <p>
                  <a href="#">
                    Top 10 Best Movies of 2018 So Far: Great Movies
                  </a>
                </p>
              </div>
              <div className="trancarousel_item">
                <p>
                  <a href="#">
                    Top 10 Best Movies of 2018 So Far: Great Movies
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-6 col-lg-4 align-self-center">
          <div className="top_date_social text-right">
            <div className="paper_date">
              <p>Thursday, March 26, 2020</p>
            </div>
            <div className="social1">
              <ul className="inline">
                <li>
                  <a href="#">
                    <i className="fab fa-twitter" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fab fa-facebook-f" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fab fa-youtube" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fab fa-instagram" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/*::::: TOP BAR END :::::::*/}
  <div className="border_black" />
  {/*::::: LOGO AREA START  :::::::*/}
  <div className="logo_area white_bg">
    <div className="container">
      <div className="row">
        <div className="col-lg-4 align-self-center">
          <div className="logo">
            <a href="index.html">
              <img src="assets/img/logo/logo.png" alt="image" />
            </a>
          </div>
        </div>
        <div className="col-lg-8 align-self-center">
          <div className="banner1">
            <a href="#">
              <img src="assets/img/bg/banner1.png" alt="" />
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/*::::: LOGO AREA END :::::::*/}
  {/*::::: MENU AREA START  :::::::*/}
  <div className="main-menu" id="header">
    {" "}
    <a href="#top" className="up_btn up_btn1">
      <i className="far fa-chevron-double-up" />
    </a>
    <div className="main-nav clearfix is-ts-sticky">
      <div className="container">
        <div className="row justify-content-between">
          <div className="col-6 col-lg-8">
            <div className="newsprk_nav stellarnav">
              <ul id="newsprk_menu">
                <li>
                  <a href="#">
                    Home <i className="fal fa-angle-down" />
                  </a>
                  <ul>
                    <li>
                      <a href="index.html">
                        Home 1 <i className="fal fa-angle-right" />
                      </a>
                      <ul>
                        <li>
                          <a href="index2.html">Version 1</a>
                        </li>
                        <li>
                          <a href="index3.html">Version 2</a>
                        </li>
                        <li>
                          <a href="index4.html">Version 3</a>
                        </li>
                        <li>
                          <a href="index5.html">Version 4</a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a href="dark/index.html">
                        Home 2 <i className="fal fa-angle-right" />
                      </a>
                      <ul>
                        <li>
                          <a href="dark/index2.html">Version 1</a>
                        </li>
                        <li>
                          <a href="dark/index3.html">Version 2</a>
                        </li>
                        <li>
                          <a href="dark/index4.html">Version 3</a>
                        </li>
                        <li>
                          <a href="dark/index5.html">Version 4</a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a href="theme-3/index.html">
                        Home 3 <i className="fal fa-angle-right" />
                      </a>
                      <ul>
                        <li>
                          <a href="theme-3/index2.html">Version 1</a>
                        </li>
                        <li>
                          <a href="theme-3/index3.html">Version 2</a>
                        </li>
                        <li>
                          <a href="theme-3/index4.html">Version 3</a>
                        </li>
                        <li>
                          <a href="theme-3/index5.html">Version 4</a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a href="theme-4/index.html">
                        Home 4 <i className="fal fa-angle-right" />
                      </a>
                      <ul>
                        <li>
                          <a href="theme-4/index2.html">Version 1</a>
                        </li>
                        <li>
                          <a href="theme-4/index3.html">Version 2</a>
                        </li>
                        <li>
                          <a href="theme-4/index4.html">Version 3</a>
                        </li>
                        <li>
                          <a href="theme-4/index5.html">Version 4</a>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="#">
                    Pages <i className="fal fa-angle-down" />
                  </a>
                  <ul>
                    <li>
                      <a href="about.html">About</a>
                    </li>
                    <li>
                      <a href="archive.html">Archive</a>
                    </li>
                    <li>
                      <a href="contact.html">Contact Us</a>
                    </li>
                    <li>
                      <a href="404.html">404</a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="#">
                    Posts <i className="fal fa-angle-down" />
                  </a>
                  <ul>
                    <li>
                      <a href="#">
                        General Posts <i className="fal fa-angle-right" />
                      </a>
                      <ul>
                        <li>
                          <a href="post1.html">Post 1</a>
                        </li>
                        <li>
                          <a href="post2.html">Post 2</a>
                        </li>
                        <li>
                          <a href="post3.html">Post 3</a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a href="#">
                        Video Posts <i className="fal fa-angle-right" />
                      </a>
                      <ul>
                        <li>
                          <a href="video_post1.html">Video Style 1</a>
                        </li>
                        <li>
                          <a href="video_post2.html">Video Style 2</a>
                        </li>
                        <li>
                          <a href="video_post3.html">Video Style 3</a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a href="#">
                        Audio Posts <i className="fal fa-angle-right" />
                      </a>
                      <ul>
                        <li>
                          <a href="audio_post1.html">Audio Style 1</a>
                        </li>
                        <li>
                          <a href="audio_post2.html">Audio Style 2</a>
                        </li>
                        <li>
                          <a href="audio_post3.html">Audio Style 3</a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a href="#">
                        Sidebars <i className="fal fa-angle-right" />
                      </a>
                      <ul>
                        <li>
                          <a href="post1.html">Right Sidebar</a>
                        </li>
                        <li>
                          <a href="left_post2.html">Left Sidebar</a>
                        </li>
                        <li>
                          <a href="post2.html">
                            No Sidebar <i className="fal fa-angle-right" />
                          </a>
                          <ul>
                            <li>
                              <a href="#">Simple menu</a>
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="#">
                    Categories <i className="fal fa-angle-down" />
                  </a>
                  <ul>
                    <li className="active">
                      <a href="business.html">Business</a>
                    </li>
                    <li>
                      <a href="entertainment.html">Entertainment</a>
                    </li>
                    <li>
                      <a href="feature.html">Features</a>
                    </li>
                    <li>
                      <a href="sports.html">Sports</a>
                    </li>
                    <li>
                      <a href="trending.html">Trending</a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="#world">World</a>
                </li>
                <li>
                  <a href="#sports">Sports</a>
                </li>
                <li>
                  <a href="contact.html">Contact</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-6 col-lg-4 align-self-center">
            <div className="menu_right">
              <div className="users_area">
                <ul className="inline">
                  <li className="search_btn">
                    <i className="far fa-search" />
                  </li>
                  <li>
                    <i className="fal fa-user-circle" />
                  </li>
                </ul>
              </div>
              <div className="lang d-none d-xl-block">
                <ul>
                  <li>
                    <a href="#">
                      English <i className="far fa-angle-down" />
                    </a>
                    <ul>
                      <li>
                        <a href="#">Spanish</a>
                      </li>
                      <li>
                        <a href="#">China</a>
                      </li>
                      <li>
                        <a href="#">Hindi</a>
                      </li>
                      <li>
                        <a href="#">Corian</a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
              <div className="temp d-none d-lg-block">
                <div className="temp_wap">
                  <div className="temp_icon">
                    <img src="assets/img/icon/temp.png" alt="" />
                  </div>
                  <h3 className="temp_count">13</h3>
                  <p>San Francisco</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/*::::: MENU AREA END :::::::*/}
  {/*::::: POST CAROUSEL AREA START  :::::::*/}
  <div className="fifth_bg">
    <div className="container">
      <div className="row">
        <div className="col-12">
          <div className="carousel_posts1 owl-carousel nav_style2 mb40 mt30">
            {/*CAROUSEL START*/}
            <div className="single_post widgets_small post_type5">
              <div className="post_img">
                <div className="img_wrap">
                  <a href="#">
                    <img src="assets/img/header/slider/hside4.jpg" alt="" />
                  </a>
                </div>
              </div>
              <div className="single_post_text">
                <h4>
                  <a href="post1.html">
                    The home decorations document: photograph of an
                  </a>
                </h4>
                <p>People have been infected</p>
              </div>
            </div>
            <div className="single_post widgets_small post_type5">
              <div className="post_img">
                <div className="img_wrap">
                  <a href="#">
                    <img src="assets/img/header/slider/hside5.jpg" alt="" />
                  </a>
                </div>
              </div>
              <div className="single_post_text">
                <h4>
                  <a href="post1.html">
                    U.S. Response subash says he will label regions by risk of…
                  </a>
                </h4>
                <p>People have been infected</p>
              </div>
            </div>
            <div className="single_post widgets_small post_type5">
              <div className="post_img">
                <div className="img_wrap">
                  <a href="#">
                    <img src="assets/img/header/slider/hside6.jpg" alt="" />
                  </a>
                </div>
              </div>
              <div className="single_post_text">
                <h4>
                  <a href="post1.html">
                    Stimul package will transform the government fundamentally.
                  </a>
                </h4>
                <p>People have been infected</p>
              </div>
            </div>
            <div className="single_post widgets_small post_type5">
              <div className="post_img">
                <div className="img_wrap">
                  <a href="#">
                    <img src="assets/img/header/slider/hside1.jpg" alt="" />
                  </a>
                </div>
              </div>
              <div className="single_post_text">
                <h4>
                  <a href="post1.html">
                    U.S. Response subash says he will label regions by risk of…
                  </a>
                </h4>
                <p>People have been infected </p>
              </div>
            </div>
            <div className="single_post widgets_small post_type5">
              <div className="post_img">
                <div className="img_wrap">
                  <a href="#">
                    <img src="assets/img/header/slider/hside2.jpg" alt="" />
                  </a>
                </div>
              </div>
              <div className="single_post_text">
                <h4>
                  <a href="post1.html">
                    U.S. Response subash says he will label regions by risk of…
                  </a>
                </h4>
                <p>People have been infected</p>
              </div>
            </div>
            <div className="single_post widgets_small post_type5">
              <div className="post_img">
                <div className="img_wrap">
                  <a href="#">
                    <img src="assets/img/header/slider/hside3.jpg" alt="" />
                  </a>
                </div>
              </div>
              <div className="single_post_text">
                <h4>
                  <a href="post1.html">
                    U.S. Response subash says he will label regions by risk of…
                  </a>
                </h4>
                <p>People have been infected</p>
              </div>
            </div>
          </div>
          {/*CAROUSEL END*/}
        </div>
      </div>
    </div>
  </div>
  {/*::::: POST CAREOUSEL AREA END :::::::*/}
  {/*::::: POST GALLARY AREA START :::::::*/}
  <div className="post_gallary_area fifth_bg mb40">
    <div className="container">
      <div className="row">
        <div className="col-lg-12">
          <div className="row">
            <div className="col-xl-8">
              <div className="slider_demo2">
                <div className="single_post post_type6 xs-mb30">
                  <div className="post_img gradient1">
                    <img src="assets/img/header/sider-top.jpg" alt="" />{" "}
                    <span className="tranding">
                      <i className="fas fa-play" />
                    </span>
                  </div>
                  <div className="single_post_text">
                    <div className="meta meta_separator1">
                      {" "}
                      <a href="#">TECHNOLOGY</a>
                      <a href="#">March 26, 2020</a>
                    </div>
                    <h4>
                      <a className="play_btn" href="video_post1.html">
                        Japan’s virus success has puzzled the world. Is its luck
                        running out?
                      </a>
                    </h4>
                    <div className="space-10" />
                    <p className="post-p">
                      The property, complete with 30-seat screening from room, a
                      100-seat amphitheater and a swimming pond with sandy
                      shower…
                    </p>
                  </div>
                </div>
                <div className="single_post post_type6 xs-mb30">
                  <div className="post_img gradient1">
                    <img src="assets/img/header/sider-top2.jpg" alt="" />{" "}
                    <span className="tranding">
                      <i className="fas fa-play" />
                    </span>
                  </div>
                  <div className="single_post_text">
                    <div className="meta meta_separator1">
                      {" "}
                      <a href="#">TECHNOLOGY</a>
                      <a href="#">March 26, 2020</a>
                    </div>
                    <h4>
                      <a className="play_btn" href="video_post1.html">
                        Copa America: Luis Suarez from devastated US America
                      </a>
                    </h4>
                    <div className="space-10" />
                    <p className="post-p">
                      The property, complete with 30-seat screening from room, a
                      100-seat amphitheater and a swimming pond with sandy
                      shower…
                    </p>
                  </div>
                </div>
                <div className="single_post post_type6 xs-mb30">
                  <div className="post_img gradient1">
                    <img src="assets/img/header/sider-top.jpg" alt="" />{" "}
                    <span className="tranding">
                      <i className="fas fa-play" />
                    </span>
                  </div>
                  <div className="single_post_text">
                    <div className="meta meta_separator1">
                      {" "}
                      <a href="#">TECHNOLOGY</a>
                      <a href="#">March 26, 2020</a>
                    </div>
                    <h4>
                      <a className="play_btn" href="video_post1.html">
                        Copa America: Luis Suarez from devastated US America
                      </a>
                    </h4>
                    <div className="space-10" />
                    <p className="post-p">
                      The property, complete with 30-seat screening from room, a
                      100-seat amphitheater and a swimming pond with sandy
                      shower…
                    </p>
                  </div>
                </div>
                <div className="single_post post_type6 xs-mb30">
                  <div className="post_img gradient1">
                    <img src="assets/img/header/sider-top2.jpg" alt="" />{" "}
                    <span className="tranding">
                      <i className="fas fa-play" />
                    </span>
                  </div>
                  <div className="single_post_text">
                    <div className="meta meta_separator1">
                      {" "}
                      <a href="#">TECHNOLOGY</a>
                      <a href="#">March 26, 2020</a>
                    </div>
                    <h4>
                      <a className="play_btn" href="video_post1.html">
                        Japan’s virus success has puzzled the world. Is its luck
                        running out?
                      </a>
                    </h4>
                    <div className="space-10" />
                    <p className="post-p">
                      The property, complete with 30-seat screening from room, a
                      100-seat amphitheater and a swimming pond with sandy
                      shower…
                    </p>
                  </div>
                </div>
                <div className="single_post post_type6 xs-mb30">
                  <div className="post_img gradient1">
                    <img src="assets/img/header/sider-top.jpg" alt="" />{" "}
                    <span className="tranding">
                      <i className="fas fa-play" />
                    </span>
                  </div>
                  <div className="single_post_text">
                    <div className="meta meta_separator1">
                      {" "}
                      <a href="#">TECHNOLOGY</a>
                      <a href="#">March 26, 2020</a>
                    </div>
                    <h4>
                      <a className="play_btn" href="video_post1.html">
                        Copa America: Luis Suarez from devastated US America
                      </a>
                    </h4>
                    <div className="space-10" />
                    <p className="post-p">
                      The property, complete with 30-seat screening from room, a
                      100-seat amphitheater and a swimming pond with sandy
                      shower…
                    </p>
                  </div>
                </div>
                <div className="single_post post_type6 xs-mb30">
                  <div className="post_img gradient1">
                    <img src="assets/img/header/sider-top2.jpg" alt="" />{" "}
                    <span className="tranding">
                      <i className="fas fa-play" />
                    </span>
                  </div>
                  <div className="single_post_text">
                    <div className="meta meta_separator1">
                      {" "}
                      <a href="#">TECHNOLOGY</a>
                      <a href="#">March 26, 2020</a>
                    </div>
                    <h4>
                      <a className="play_btn" href="video_post1.html">
                        Japan’s virus success has puzzled the world. Is its luck
                        running out?
                      </a>
                    </h4>
                    <div className="space-10" />
                    <p className="post-p">
                      The property, complete with 30-seat screening from room, a
                      100-seat amphitheater and a swimming pond with sandy
                      shower…
                    </p>
                  </div>
                </div>
                <div className="single_post post_type6 xs-mb30">
                  <div className="post_img gradient1">
                    <img src="assets/img/header/sider-top.jpg" alt="" />{" "}
                    <span className="tranding">
                      <i className="fas fa-play" />
                    </span>
                  </div>
                  <div className="single_post_text">
                    <div className="meta meta_separator1">
                      {" "}
                      <a href="#">TECHNOLOGY</a>
                      <a href="#">March 26, 2020</a>
                    </div>
                    <h4>
                      <a className="play_btn" href="video_post1.html">
                        Copa America: Luis Suarez from devastated US America
                      </a>
                    </h4>
                    <div className="space-10" />
                    <p className="post-p">
                      The property, complete with 30-seat screening from room, a
                      100-seat amphitheater and a swimming pond with sandy
                      shower…
                    </p>
                  </div>
                </div>
                <div className="single_post post_type6 xs-mb30">
                  <div className="post_img gradient1">
                    <img src="assets/img/header/sider-top2.jpg" alt="" />{" "}
                    <span className="tranding">
                      <i className="fas fa-play" />
                    </span>
                  </div>
                  <div className="single_post_text">
                    <div className="meta meta_separator1">
                      {" "}
                      <a href="#">TECHNOLOGY</a>
                      <a href="#">March 26, 2020</a>
                    </div>
                    <h4>
                      <a className="play_btn" href="video_post1.html">
                        Japan’s virus success has puzzled the world. Is its luck
                        running out?
                      </a>
                    </h4>
                    <div className="space-10" />
                    <p className="post-p">
                      The property, complete with 30-seat screening from room, a
                      100-seat amphitheater and a swimming pond with sandy
                      shower…
                    </p>
                  </div>
                </div>
                <div className="single_post post_type6 xs-mb30">
                  <div className="post_img gradient1">
                    <img src="assets/img/header/sider-top2.jpg" alt="" />{" "}
                    <span className="tranding">
                      <i className="fas fa-play" />
                    </span>
                  </div>
                  <div className="single_post_text">
                    <div className="meta meta_separator1">
                      {" "}
                      <a href="#">TECHNOLOGY</a>
                      <a href="#">March 26, 2020</a>
                    </div>
                    <h4>
                      <a className="play_btn" href="video_post1.html">
                        Copa America: Luis Suarez from devastated US America
                      </a>
                    </h4>
                    <div className="space-10" />
                    <p className="post-p">
                      The property, complete with 30-seat screening from room, a
                      100-seat amphitheater and a swimming pond with sandy
                      shower…
                    </p>
                  </div>
                </div>
              </div>
              <div className="slider_demo1">
                <div className="single_gallary_item">
                  <img src="assets/img/blog/post_gsi1.jpg" alt="image" />
                </div>
                <div className="single_gallary_item">
                  <img src="assets/img/blog/post_gsi2.jpg" alt="image" />
                </div>
                <div className="single_gallary_item">
                  <img src="assets/img/blog/post_gsi3.jpg" alt="image" />
                </div>
                <div className="single_gallary_item">
                  <img src="assets/img/blog/post_gsi4.jpg" alt="image" />
                </div>
                <div className="single_gallary_item">
                  <img src="assets/img/blog/post_gsi5.jpg" alt="image" />
                </div>
                <div className="single_gallary_item">
                  <img src="assets/img/blog/post_gsi6.jpg" alt="image" />
                </div>
                <div className="single_gallary_item">
                  <img src="assets/img/blog/post_gsi7.jpg" alt="image" />
                </div>
                <div className="single_gallary_item">
                  <img src="assets/img/blog/post_gsi4.jpg" alt="" />
                </div>
                <div className="single_gallary_item">
                  <img src="assets/img/blog/post_gsi3.jpg" alt="" />
                </div>
              </div>
            </div>
            <div className="col-xl-4">
              <div className="widget_tab md-mt-30">
                <ul className="nav nav-tabs">
                  <li>
                    <a className="active" data-toggle="tab" href="#post1">
                      RELATED
                    </a>
                  </li>
                  <li>
                    <a data-toggle="tab" href="#post2">
                      RELATED
                    </a>
                  </li>
                  <li>
                    <a data-toggle="tab" href="#post3">
                      POPULAR
                    </a>
                  </li>
                </ul>
                <div className="tab-content">
                  <div id="post1" className="tab-pane fade show in active">
                    <div className="widget tab_widgets mb30">
                      <div className="single_post widgets_small">
                        <div className="post_img">
                          <div className="img_wrap">
                            <a href="#">
                              <img
                                src="assets/img/header/widget/tab1.jpg"
                                alt=""
                              />
                            </a>
                          </div>
                        </div>
                        <div className="single_post_text">
                          <div className="meta2 meta_separator1">
                            {" "}
                            <a href="#">TECHNOLOGY</a>
                            <a href="#">March 26, 2020</a>
                          </div>
                          <h4>
                            <a href="post1.html">
                              Copa America: Luis Suarez from devastated US
                            </a>
                          </h4>
                        </div>
                      </div>
                      <div className="space-15" />
                      <div className="border_black" />
                      <div className="space-15" />
                      <div className="single_post widgets_small">
                        <div className="post_img">
                          <div className="img_wrap">
                            <a href="#">
                              <img
                                src="assets/img/header/widget/tab2.jpg"
                                alt=""
                              />
                            </a>
                          </div>
                        </div>
                        <div className="single_post_text">
                          <div className="meta2 meta_separator1">
                            {" "}
                            <a href="#">TECHNOLOGY</a>
                            <a href="#">March 26, 2020</a>
                          </div>
                          <h4>
                            <a href="post1.html">
                              Nancy Zhang a Chinese busy woman and Dhaka
                            </a>
                          </h4>
                        </div>
                      </div>
                      <div className="space-15" />
                      <div className="border_black" />
                      <div className="space-15" />
                      <div className="single_post widgets_small">
                        <div className="post_img">
                          <div className="img_wrap">
                            <a href="#">
                              <img
                                src="assets/img/header/widget/tab3.jpg"
                                alt=""
                              />
                            </a>
                          </div>
                        </div>
                        <div className="single_post_text">
                          <div className="meta2 meta_separator1">
                            {" "}
                            <a href="#">TECHNOLOGY</a>
                            <a href="#">March 26, 2020</a>
                          </div>
                          <h4>
                            <a href="post1.html">
                              U.S. Response subash says he will label regions by
                              risk of…
                            </a>
                          </h4>
                        </div>
                      </div>
                      <div className="space-15" />
                      <div className="border_black" />
                      <div className="space-15" />
                      <div className="single_post widgets_small">
                        <div className="post_img">
                          <div className="img_wrap">
                            <a href="#">
                              <img
                                src="assets/img/header/widget/tab4.jpg"
                                alt=""
                              />
                            </a>
                          </div>
                        </div>
                        <div className="single_post_text">
                          <div className="meta2 meta_separator1">
                            {" "}
                            <a href="#">TECHNOLOGY</a>
                            <a href="#">March 26, 2020</a>
                          </div>
                          <h4>
                            <a href="post1.html">
                              Venezuela elan govt and opposit the property
                              collect
                            </a>
                          </h4>
                        </div>
                      </div>
                      <div className="space-15 ldnane" />
                      <div className="border_black ldnane" />
                      <div className="space-15 ldnane" />
                      <div className="single_post widgets_small ldnane">
                        <div className="post_img">
                          <div className="img_wrap">
                            <a href="#">
                              <img
                                src="assets/img/header/widget/tab5.jpg"
                                alt=""
                              />
                            </a>
                          </div>
                        </div>
                        <div className="single_post_text">
                          <div className="meta2 meta_separator1">
                            {" "}
                            <a href="#">TECHNOLOGY</a>
                            <a href="#">March 26, 2020</a>
                          </div>
                          <h4>
                            <a href="post1.html">
                              Cheap smartphone sensor could help you old food
                              safe
                            </a>
                          </h4>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div id="post2" className="tab-pane fade">
                    <div className="widget tab_widgets mb30">
                      <div className="single_post widgets_small">
                        <div className="post_img">
                          <div className="img_wrap">
                            <a href="#">
                              <img
                                src="assets/img/header/widget/tab1.jpg"
                                alt=""
                              />
                            </a>
                          </div>
                        </div>
                        <div className="single_post_text">
                          <div className="meta2 meta_separator1">
                            {" "}
                            <a href="#">TECHNOLOGY</a>
                            <a href="#">March 26, 2020</a>
                          </div>
                          <h4>
                            <a href="post1.html">
                              Copa America: Luis Suarez from devastated US
                            </a>
                          </h4>
                        </div>
                      </div>
                      <div className="space-15" />
                      <div className="border_black" />
                      <div className="space-15" />
                      <div className="single_post widgets_small">
                        <div className="post_img">
                          <div className="img_wrap">
                            <a href="#">
                              <img
                                src="assets/img/header/widget/tab2.jpg"
                                alt=""
                              />
                            </a>
                          </div>
                        </div>
                        <div className="single_post_text">
                          <div className="meta2 meta_separator1">
                            {" "}
                            <a href="#">TECHNOLOGY</a>
                            <a href="#">March 26, 2020</a>
                          </div>
                          <h4>
                            <a href="post1.html">
                              Nancy Zhang a Chinese busy woman and Dhaka
                            </a>
                          </h4>
                        </div>
                      </div>
                      <div className="space-15" />
                      <div className="border_black" />
                      <div className="space-15" />
                      <div className="single_post widgets_small">
                        <div className="post_img">
                          <div className="img_wrap">
                            <a href="#">
                              <img
                                src="assets/img/header/widget/tab3.jpg"
                                alt=""
                              />
                            </a>
                          </div>
                        </div>
                        <div className="single_post_text">
                          <div className="meta2 meta_separator1">
                            {" "}
                            <a href="#">TECHNOLOGY</a>
                            <a href="#">March 26, 2020</a>
                          </div>
                          <h4>
                            <a href="post1.html">
                              U.S. Response subash says he will label regions by
                              risk of…
                            </a>
                          </h4>
                        </div>
                      </div>
                      <div className="space-15" />
                      <div className="border_black" />
                      <div className="space-15" />
                      <div className="single_post widgets_small">
                        <div className="post_img">
                          <div className="img_wrap">
                            <a href="#">
                              <img
                                src="assets/img/header/widget/tab4.jpg"
                                alt=""
                              />
                            </a>
                          </div>
                        </div>
                        <div className="single_post_text">
                          <div className="meta2 meta_separator1">
                            {" "}
                            <a href="#">TECHNOLOGY</a>
                            <a href="#">March 26, 2020</a>
                          </div>
                          <h4>
                            <a href="post1.html">
                              Venezuela elan govt and opposit the property
                              collect
                            </a>
                          </h4>
                        </div>
                      </div>
                      <div className="space-15 ldnane" />
                      <div className="border_black ldnane" />
                      <div className="space-15 ldnane" />
                      <div className="single_post widgets_small ldnane">
                        <div className="post_img">
                          <div className="img_wrap">
                            <a href="#">
                              <img
                                src="assets/img/header/widget/tab5.jpg"
                                alt=""
                              />
                            </a>
                          </div>
                        </div>
                        <div className="single_post_text">
                          <div className="meta2 meta_separator1">
                            {" "}
                            <a href="#">TECHNOLOGY</a>
                            <a href="#">March 26, 2020</a>
                          </div>
                          <h4>
                            <a href="post1.html">
                              Cheap smartphone sensor could help you old food
                              safe
                            </a>
                          </h4>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div id="post3" className="tab-pane fade">
                    <div className="widget tab_widgets mb30">
                      <div className="single_post widgets_small">
                        <div className="post_img">
                          <div className="img_wrap">
                            <a href="#">
                              <img
                                src="assets/img/header/widget/tab1.jpg"
                                alt=""
                              />
                            </a>
                          </div>
                        </div>
                        <div className="single_post_text">
                          <div className="meta2 meta_separator1">
                            {" "}
                            <a href="#">TECHNOLOGY</a>
                            <a href="#">March 26, 2020</a>
                          </div>
                          <h4>
                            <a href="post1.html">
                              Copa America: Luis Suarez from devastated US
                            </a>
                          </h4>
                        </div>
                      </div>
                      <div className="space-15" />
                      <div className="border_black" />
                      <div className="space-15" />
                      <div className="single_post widgets_small">
                        <div className="post_img">
                          <div className="img_wrap">
                            <a href="#">
                              <img
                                src="assets/img/header/widget/tab2.jpg"
                                alt=""
                              />
                            </a>
                          </div>
                        </div>
                        <div className="single_post_text">
                          <div className="meta2 meta_separator1">
                            {" "}
                            <a href="#">TECHNOLOGY</a>
                            <a href="#">March 26, 2020</a>
                          </div>
                          <h4>
                            <a href="post1.html">
                              Nancy Zhang a Chinese busy woman and Dhaka
                            </a>
                          </h4>
                        </div>
                      </div>
                      <div className="space-15" />
                      <div className="border_black" />
                      <div className="space-15" />
                      <div className="single_post widgets_small">
                        <div className="post_img">
                          <div className="img_wrap">
                            <a href="#">
                              <img
                                src="assets/img/header/widget/tab3.jpg"
                                alt=""
                              />
                            </a>
                          </div>
                        </div>
                        <div className="single_post_text">
                          <div className="meta2 meta_separator1">
                            {" "}
                            <a href="#">TECHNOLOGY</a>
                            <a href="#">March 26, 2020</a>
                          </div>
                          <h4>
                            <a href="post1.html">
                              U.S. Response subash says he will label regions by
                              risk of…
                            </a>
                          </h4>
                        </div>
                      </div>
                      <div className="space-15" />
                      <div className="border_black" />
                      <div className="space-15" />
                      <div className="single_post widgets_small">
                        <div className="post_img">
                          <div className="img_wrap">
                            <a href="#">
                              <img
                                src="assets/img/header/widget/tab4.jpg"
                                alt=""
                              />
                            </a>
                          </div>
                        </div>
                        <div className="single_post_text">
                          <div className="meta2 meta_separator1">
                            {" "}
                            <a href="#">TECHNOLOGY</a>
                            <a href="#">March 26, 2020</a>
                          </div>
                          <h4>
                            <a href="post1.html">
                              Venezuela elan govt and opposit the property
                              collect
                            </a>
                          </h4>
                        </div>
                      </div>
                      <div className="space-15 ldnane" />
                      <div className="border_black ldnane" />
                      <div className="space-15 ldnane" />
                      <div className="single_post widgets_small ldnane">
                        <div className="post_img">
                          <div className="img_wrap">
                            <a href="#">
                              <img
                                src="assets/img/header/widget/tab5.jpg"
                                alt=""
                              />
                            </a>
                          </div>
                        </div>
                        <div className="single_post_text">
                          <div className="meta2 meta_separator1">
                            {" "}
                            <a href="#">TECHNOLOGY</a>
                            <a href="#">March 26, 2020</a>
                          </div>
                          <h4>
                            <a href="post1.html">
                              Cheap smartphone sensor could help you old food
                              safe
                            </a>
                          </h4>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/*::::: POST GALLARY AREA END :::::::*/}
  {/*::::: FEATURE_POST AREA START :::::::*/}
  <div className="feature_carousel_area mb40">
    <div className="container">
      <div className="row">
        <div className="col-12">
          <div className="heading">
            <h2 className="widget-title">Feature News</h2>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-12">
          <div className="feature_carousel owl-carousel nav_style1">
            {/*CAROUSEL START*/}
            <div className="single_post post_type6 post_type7">
              <div className="post_img gradient1">
                <a href="#">
                  <img src="assets/img/feature/feature2.jpg" alt="" />
                </a>
              </div>
              <div className="single_post_text">
                <div className="meta5">
                  {" "}
                  <a href="#">TECHNOLOGY</a>
                  <a href="#">March 26, 2020</a>
                </div>
                <h4>
                  <a href="post1.html">
                    Best garden wing supplies for the horticu ltural
                  </a>
                </h4>
              </div>
            </div>
            <div className="single_post post_type6 post_type7">
              <div className="post_img gradient1">
                <img src="assets/img/feature/feature3.jpg" alt="" />
              </div>
              <div className="single_post_text">
                <div className="meta5">
                  {" "}
                  <a href="#">TECHNOLOGY</a>
                  <a href="#">March 26, 2020</a>
                </div>
                <h4>
                  <a href="post1.html">
                    Copa America: Luis Suarez from devastated US
                  </a>
                </h4>
              </div>
            </div>
            <div className="single_post post_type6 post_type7">
              <div className="post_img gradient1">
                <img src="assets/img/feature/feature4.jpg" alt="" />
              </div>
              <div className="single_post_text">
                <div className="meta5">
                  {" "}
                  <a href="#">TECHNOLOGY</a>
                  <a href="#">March 26, 2020</a>
                </div>
                <h4>
                  <a href="post1.html">
                    Best garden wing supplies for the horticu ltural
                  </a>
                </h4>
              </div>
            </div>
            <div className="single_post post_type6 post_type7">
              <div className="post_img gradient1">
                <img src="assets/img/feature/feature3.jpg" alt="" />
              </div>
              <div className="single_post_text">
                <div className="meta5">
                  {" "}
                  <a href="#">TECHNOLOGY</a>
                  <a href="#">March 26, 2020</a>
                </div>
                <h4>
                  <a href="post1.html">
                    Copa America: Luis Suarez from devastated US
                  </a>
                </h4>
              </div>
            </div>
            <div className="single_post post_type6 post_type7">
              <div className="post_img gradient1">
                <img src="assets/img/feature/feature2.jpg" alt="" />
              </div>
              <div className="single_post_text">
                <div className="meta5">
                  {" "}
                  <a href="#">TECHNOLOGY</a>
                  <a href="#">March 26, 2020</a>
                </div>
                <h4>
                  <a href="post1.html">
                    Best garden wing supplies for the horticu ltural
                  </a>
                </h4>
              </div>
            </div>
          </div>
          {/*CAROUSEL END*/}
        </div>
      </div>
    </div>
  </div>
  {/*::::: FEATURE POST AREA END :::::::*/}
  {/*::::: TRANDING CAROUSEL AREA START :::::::*/}
  <div className="container">
    <div className="row">
      <div className="col-lg-6 col-lg-8">
        <h2 className="widget-title">Trending News</h2>
        <div className="carousel_post2_type3 nav_style1 owl-carousel">
          {/*CAROUSEL START*/}
          <div className="single_post post_type3">
            <div className="post_img">
              <div className="img_wrap">
                <img src="assets/img/trending/trendbig1.jpg" alt="" />
              </div>{" "}
              <span className="tranding">
                <i className="fas fa-bolt" />
              </span>
            </div>
            <div className="single_post_text">
              <div className="meta3">
                {" "}
                <a href="#">TECHNOLOGY</a>
                <a href="#">March 26, 2020</a>
              </div>
              <h4>
                <a href="post1.html">
                  There may be no consoles in the future ea exec says
                </a>
              </h4>
              <div className="space-10" />
              <p className="post-p">
                The property, complete with 30-seat screening from room, a
                100-seat amphitheater and a swimming pond with sandy shower…
              </p>
            </div>
          </div>
          <div className="single_post post_type3">
            <div className="post_img">
              <div className="img_wrap">
                <img src="assets/img/trending/trendbig2.jpg" alt="" />
              </div>
            </div>
            <div className="single_post_text">
              <div className="meta3">
                {" "}
                <a href="#">TECHNOLOGY</a>
                <a href="#">March 26, 2020</a>
              </div>
              <h4>
                <a href="post1.html">
                  Japan’s virus success has puzzled the world. Is its luck
                  running out?
                </a>
              </h4>
              <div className="space-10" />
              <p className="post-p">
                The property, complete with 30-seat screening from room, a
                100-seat amphitheater and a swimming pond with sandy shower…
              </p>
            </div>
          </div>
          <div className="single_post post_type3">
            <div className="post_img">
              <div className="img_wrap">
                <img src="assets/img/trending/trendbig2.jpg" alt="" />
              </div>
            </div>
            <div className="single_post_text">
              <div className="meta3">
                {" "}
                <a href="#">TECHNOLOGY</a>
                <a href="#">March 26, 2020</a>
              </div>
              <h4>
                <a href="post1.html">
                  Copa America: Luis Suarez from devastated US
                </a>
              </h4>
              <div className="space-10" />
              <p className="post-p">
                The property, complete with 30-seat screening from room, a
                100-seat amphitheater and a swimming pond with sandy shower…
              </p>
            </div>
          </div>
        </div>
        <div className="border_black" />
        <div className="space-30" />
        <div className="row">
          <div className="col-lg-6">
            <div className="single_post widgets_small">
              <div className="post_img">
                <div className="img_wrap">
                  <img src="assets/img/trending/transm4.jpg" alt="" />
                </div>{" "}
                <span className="tranding">
                  <i className="fas fa-bolt" />
                </span>
              </div>
              <div className="single_post_text">
                <div className="meta2">
                  {" "}
                  <a href="#">TECHNOLOGY</a>
                  <a href="#">March 26, 2020</a>
                </div>
                <h4>
                  <a href="post1.html">
                    Nancy Zhang a Chinese busy woman and Dhaka
                  </a>
                </h4>
              </div>
            </div>
            <div className="space-15" />
            <div className="border_black" />
            <div className="space-15" />
            <div className="single_post widgets_small">
              <div className="post_img">
                <div className="img_wrap">
                  <img src="assets/img/trending/transm5.jpg" alt="" />
                </div>{" "}
                <span className="tranding">
                  <i className="fas fa-bolt" />
                </span>
              </div>
              <div className="single_post_text">
                <div className="meta2">
                  {" "}
                  <a href="#">TECHNOLOGY</a>
                  <a href="#">March 26, 2020</a>
                </div>
                <h4>
                  <a href="post1.html">
                    U.S. Response subash says he will label regions by risk of…
                  </a>
                </h4>
              </div>
            </div>
            <div className="space-15" />
            <div className="border_black" />
            <div className="space-15" />
            <div className="single_post widgets_small">
              <div className="post_img">
                <div className="img_wrap">
                  <img src="assets/img/trending/transm6.jpg" alt="" />
                </div>{" "}
                <span className="tranding">
                  <i className="fas fa-bolt" />
                </span>
              </div>
              <div className="single_post_text">
                <div className="meta2">
                  {" "}
                  <a href="#">TECHNOLOGY</a>
                  <a href="#">March 26, 2020</a>
                </div>
                <h4>
                  <a href="post1.html">
                    Venezuela elan govt and opposit the property collect
                  </a>
                </h4>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="single_post widgets_small">
              <div className="post_img">
                <div className="img_wrap">
                  <img src="assets/img/trending/transm1.jpg" alt="" />
                </div>{" "}
                <span className="tranding">
                  <i className="fas fa-bolt" />
                </span>
              </div>
              <div className="single_post_text">
                <div className="meta2">
                  {" "}
                  <a href="#">TECHNOLOGY</a>
                  <a href="#">March 26, 2020</a>
                </div>
                <h4>
                  <a href="post1.html">
                    Nancy Zhang a Chinese busy woman and Dhaka
                  </a>
                </h4>
              </div>
            </div>
            <div className="space-15" />
            <div className="border_black" />
            <div className="space-15" />
            <div className="single_post widgets_small">
              <div className="post_img">
                <div className="img_wrap">
                  <img src="assets/img/trending/transm2.jpg" alt="" />
                </div>{" "}
                <span className="tranding">
                  <i className="fas fa-bolt" />
                </span>
              </div>
              <div className="single_post_text">
                <div className="meta2">
                  {" "}
                  <a href="#">TECHNOLOGY</a>
                  <a href="#">March 26, 2020</a>
                </div>
                <h4>
                  <a href="post1.html">
                    U.S. Response subash says he will label regions by risk of…
                  </a>
                </h4>
              </div>
            </div>
            <div className="space-15" />
            <div className="border_black" />
            <div className="space-15" />
            <div className="single_post widgets_small">
              <div className="post_img">
                <div className="img_wrap">
                  <img src="assets/img/trending/transm6.jpg" alt="" />
                </div>{" "}
                <span className="tranding">
                  <i className="fas fa-bolt" />
                </span>
              </div>
              <div className="single_post_text">
                <div className="meta2">
                  {" "}
                  <a href="#">TECHNOLOGY</a>
                  <a href="#">March 26, 2020</a>
                </div>
                <h4>
                  <a href="post1.html">
                    Venezuela elan govt and opposit the property collect
                  </a>
                </h4>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-md-12 col-lg-4">
        <div className="follow_box widget mb30 mt-md-60">
          <h2 className="widget-title">Follow Us</h2>
          <div className="social_shares">
            <a className="single_social social_facebook" href="#">
              {" "}
              <span className="follow_icon">
                <i className="fab fa-facebook-f" />
              </span>
              34,456 <span className="icon_text">Fans</span>
            </a>
            <a className="single_social social_twitter" href="#">
              {" "}
              <span className="follow_icon">
                <i className="fab fa-twitter" />
              </span>
              34,456 <span className="icon_text">Followers</span>
            </a>
            <a className="single_social social_youtube" href="#">
              {" "}
              <span className="follow_icon">
                <i className="fab fa-youtube" />
              </span>
              34,456 <span className="icon_text">Subscribers</span>
            </a>
            <a className="single_social social_instagram" href="#">
              {" "}
              <span className="follow_icon">
                <i className="fab fa-instagram" />
              </span>
              34,456 <span className="icon_text">Followers</span>
            </a>
            <a className="single_social social_vimeo" href="#">
              {" "}
              <span className="follow_icon">
                <i className="fab fa-vimeo-v" />
              </span>
              34,456 <span className="icon_text">Followers</span>
            </a>
            <a className="single_social social_medium" href="#">
              {" "}
              <span className="follow_icon">
                <i className="fab fa-medium-m" />
              </span>
              34,456 <span className="icon_text">Followers</span>
            </a>
          </div>
        </div>
        {/*:::::: POST TYPE 2 START :::::::*/}
        <div className="widget tab_widgets mb30">
          <h2 className="widget-title">Most View</h2>
          <div className="post_type2_carousel owl-carousel nav_style1">
            {/*CAROUSEL START*/}
            <div className="single_post2_carousel">
              <div className="single_post widgets_small type8">
                <div className="post_img">
                  <div className="img_wrap">
                    <img src="assets/img/most_view/mostsm1.jpg" alt="" />
                  </div>{" "}
                  <span className="tranding">
                    <i className="fas fa-bolt" />
                  </span>
                </div>
                <div className="single_post_text">
                  <div className="meta2">
                    {" "}
                    <a href="#">TECHNOLOGY</a>
                    <a href="#">March 26, 2020</a>
                  </div>
                  <h4>
                    <a href="post1.html">
                      Nancy zhang a chinese busy woman and dhaka
                    </a>
                  </h4>
                </div>
                <div className="type8_count">
                  <h2>1</h2>
                </div>
              </div>
              <div className="space-15" />
              <div className="border_black" />
              <div className="space-15" />
              <div className="single_post widgets_small type8">
                <div className="post_img">
                  <div className="img_wrap">
                    <img src="assets/img/most_view/mostsm2.jpg" alt="" />
                  </div>
                </div>
                <div className="single_post_text">
                  <div className="meta2">
                    {" "}
                    <a href="#">TECHNOLOGY</a>
                    <a href="#">March 26, 2020</a>
                  </div>
                  <h4>
                    <a href="post1.html">
                      The billionaire Philan thropist read to learn
                    </a>
                  </h4>
                </div>
                <div className="type8_count">
                  <h2>2</h2>
                </div>
              </div>
              <div className="space-15" />
              <div className="border_black" />
              <div className="space-15" />
              <div className="single_post widgets_small type8">
                <div className="post_img">
                  <div className="img_wrap">
                    <img src="assets/img/most_view/mostsm3.jpg" alt="" />
                  </div>{" "}
                  <span className="tranding">
                    <i className="fas fa-bolt" />
                  </span>
                </div>
                <div className="single_post_text">
                  <div className="meta2">
                    {" "}
                    <a href="#">TECHNOLOGY</a>
                    <a href="#">March 26, 2020</a>
                  </div>
                  <h4>
                    <a href="post1.html">
                      Cheap smartphone sensor could help you
                    </a>
                  </h4>
                </div>
                <div className="type8_count">
                  <h2>3</h2>
                </div>
              </div>
              <div className="space-15" />
              <div className="border_black" />
              <div className="space-15" />
              <div className="single_post widgets_small type8">
                <div className="post_img">
                  <div className="img_wrap">
                    <img src="assets/img/most_view/mostsm4.jpg" alt="" />
                  </div>{" "}
                  <span className="tranding">
                    <i className="fas fa-bolt" />
                  </span>
                </div>
                <div className="single_post_text">
                  <div className="meta2">
                    {" "}
                    <a href="#">TECHNOLOGY</a>
                    <a href="#">March 26, 2020</a>
                  </div>
                  <h4>
                    <a href="post1.html">
                      Class property employ ancho red multi
                    </a>
                  </h4>
                </div>
                <div className="type8_count">
                  <h2>4</h2>
                </div>
              </div>
              <div className="space-15" />
              <div className="border_black" />
              <div className="space-15" />
              <div className="single_post widgets_small type8">
                <div className="post_img">
                  <div className="img_wrap">
                    <img src="assets/img/most_view/mostsm5.jpg" alt="" />
                  </div>
                </div>
                <div className="single_post_text">
                  <div className="meta2">
                    {" "}
                    <a href="#">TECHNOLOGY</a>
                    <a href="#">March 26, 2020</a>
                  </div>
                  <h4>
                    <a href="post1.html">
                      Best garden wing supplies for the horticu
                    </a>
                  </h4>
                </div>
                <div className="type8_count">
                  <h2>5</h2>
                </div>
              </div>
              <div className="space-15 ldnane" />
              <div className="border_black ldnane" />
              <div className="space-15 ldnane" />
              <div className="single_post widgets_small type8 ldnane">
                <div className="post_img">
                  <div className="img_wrap">
                    <img src="assets/img/blog/blog_small3.jpg" alt="" />
                  </div>
                </div>
                <div className="single_post_text">
                  <div className="meta2">
                    {" "}
                    <a href="#">TECHNOLOGY</a>
                    <a href="#">March 26, 2020</a>
                  </div>
                  <h4>
                    <a href="post1.html">
                      Ratiffe to be Director of nation talent Trump
                    </a>
                  </h4>
                </div>
                <div className="type8_count">
                  <h2>6</h2>
                </div>
              </div>
            </div>
            <div className="single_post2_carousel">
              <div className="single_post widgets_small type8">
                <div className="post_img">
                  <div className="img_wrap">
                    <img src="assets/img/most_view/mostsm1.jpg" alt="" />
                  </div>{" "}
                  <span className="tranding">
                    <i className="fas fa-bolt" />
                  </span>
                </div>
                <div className="single_post_text">
                  <div className="meta2">
                    {" "}
                    <a href="#">TECHNOLOGY</a>
                    <a href="#">March 26, 2020</a>
                  </div>
                  <h4>
                    <a href="post1.html">
                      Nancy zhang a chinese busy woman and dhaka
                    </a>
                  </h4>
                </div>
                <div className="type8_count">
                  <h2>1</h2>
                </div>
              </div>
              <div className="space-15" />
              <div className="border_black" />
              <div className="space-15" />
              <div className="single_post widgets_small type8">
                <div className="post_img">
                  <div className="img_wrap">
                    <img src="assets/img/most_view/mostsm2.jpg" alt="" />
                  </div>
                </div>
                <div className="single_post_text">
                  <div className="meta2">
                    {" "}
                    <a href="#">TECHNOLOGY</a>
                    <a href="#">March 26, 2020</a>
                  </div>
                  <h4>
                    <a href="post1.html">
                      The billionaire Philan thropist read to learn
                    </a>
                  </h4>
                </div>
                <div className="type8_count">
                  <h2>2</h2>
                </div>
              </div>
              <div className="space-15" />
              <div className="border_black" />
              <div className="space-15" />
              <div className="single_post widgets_small type8">
                <div className="post_img">
                  <div className="img_wrap">
                    <img src="assets/img/most_view/mostsm3.jpg" alt="" />
                  </div>{" "}
                  <span className="tranding">
                    <i className="fas fa-bolt" />
                  </span>
                </div>
                <div className="single_post_text">
                  <div className="meta2">
                    {" "}
                    <a href="#">TECHNOLOGY</a>
                    <a href="#">March 26, 2020</a>
                  </div>
                  <h4>
                    <a href="post1.html">
                      Cheap smartphone sensor could help you
                    </a>
                  </h4>
                </div>
                <div className="type8_count">
                  <h2>3</h2>
                </div>
              </div>
              <div className="space-15" />
              <div className="border_black" />
              <div className="space-15" />
              <div className="single_post widgets_small type8">
                <div className="post_img">
                  <div className="img_wrap">
                    <img src="assets/img/most_view/mostsm4.jpg" alt="" />
                  </div>{" "}
                  <span className="tranding">
                    <i className="fas fa-bolt" />
                  </span>
                </div>
                <div className="single_post_text">
                  <div className="meta2">
                    {" "}
                    <a href="#">TECHNOLOGY</a>
                    <a href="#">March 26, 2020</a>
                  </div>
                  <h4>
                    <a href="post1.html">
                      Class property employ ancho red multi
                    </a>
                  </h4>
                </div>
                <div className="type8_count">
                  <h2>4</h2>
                </div>
              </div>
              <div className="space-15" />
              <div className="border_black" />
              <div className="space-15" />
              <div className="single_post widgets_small type8">
                <div className="post_img">
                  <div className="img_wrap">
                    <img src="assets/img/most_view/mostsm5.jpg" alt="" />
                  </div>
                </div>
                <div className="single_post_text">
                  <div className="meta2">
                    {" "}
                    <a href="#">TECHNOLOGY</a>
                    <a href="#">March 26, 2020</a>
                  </div>
                  <h4>
                    <a href="post1.html">
                      Best garden wing supplies for the horticu
                    </a>
                  </h4>
                </div>
                <div className="type8_count">
                  <h2>5</h2>
                </div>
              </div>
              <div className="space-15 ldnane" />
              <div className="border_black ldnane" />
              <div className="space-15 ldnane" />
              <div className="single_post widgets_small type8 ldnane">
                <div className="post_img">
                  <div className="img_wrap">
                    <img src="assets/img/blog/blog_small3.jpg" alt="" />
                  </div>
                </div>
                <div className="single_post_text">
                  <div className="meta2">
                    {" "}
                    <a href="#">TECHNOLOGY</a>
                    <a href="#">March 26, 2020</a>
                  </div>
                  <h4>
                    <a href="post1.html">
                      Ratiffe to be Director of nation talent Trump
                    </a>
                  </h4>
                </div>
                <div className="type8_count">
                  <h2>6</h2>
                </div>
              </div>
            </div>
          </div>
          {/*CAROUSEL END*/}
        </div>
      </div>
    </div>
  </div>
  {/*::::: TRANDING CAROUSEL AREA END :::::::*/}
  {/*::::: MIX CAROUSEL AREA START :::::::*/}
  <div className="half_bg1 mix_area">
    <div className="container">
      <div className="row">
        <div className="col-12">
          <div className="mix_carousel">
            {/*CAROUSEL START*/}
            <div className="single_mix_carousel owl-carousel nav_style3">
              <div className="single_post post_type6 post_type9">
                <div className="post_img gradient1">
                  <div className="img_wrap">
                    <a className="play_btn" href="#">
                      <img src="assets/img/bg/black_white1.jpg" alt="" />
                    </a>
                  </div>{" "}
                  <span className="tranding">
                    <i className="fas fa-play" />
                  </span>
                </div>
                <div className="single_post_text">
                  <div className="meta">
                    {" "}
                    <a href="#">TECHNOLOGY</a>
                    <a href="#">March 26, 2020</a>
                  </div>
                  <h4>
                    <a href="video_post1.html">
                      Success is not a good food failure makes you humble
                    </a>
                  </h4>
                </div>
              </div>
              <div className="single_post post_type6 post_type9">
                <div className="post_img gradient1">
                  <div className="img_wrap">
                    <a href="#" className="play_btn">
                      <img src="assets/img/bg/black_white2.jpg" alt="" />
                    </a>
                  </div>{" "}
                  <span className="tranding left">
                    <i className="fas fa-bolt" />
                  </span>
                </div>
                <div className="single_post_text">
                  <div className="meta">
                    {" "}
                    <a href="#">TECHNOLOGY</a>
                    <a href="#">March 26, 2020</a>
                  </div>
                  <h4>
                    <a href="post1.html">
                      Success is not a good food failure makes you humble
                    </a>
                  </h4>
                </div>
              </div>
              <div className="single_post post_type6 post_type9">
                <div className="post_img gradient1">
                  <div className="img_wrap">
                    <a href="#" className="play_btn">
                      <img src="assets/img/bg/black_white2.jpg" alt="" />
                    </a>
                  </div>{" "}
                  <span className="tranding left">
                    <i className="fas fa-bolt" />
                  </span>
                </div>
                <div className="single_post_text">
                  <div className="meta">
                    {" "}
                    <a href="#">TECHNOLOGY</a>
                    <a href="#">March 26, 2020</a>
                  </div>
                  <h4>
                    <a href="post1.html">
                      Success is not a good food failure makes you humble
                    </a>
                  </h4>
                </div>
              </div>
            </div>
          </div>
          {/*CAROUSEL END*/}
        </div>
      </div>
    </div>
    <div className="space-60" />
  </div>
  {/*::::: MIX CAROUSEL AREA END :::::::*/}
  {/*::::: VIDEO POST AREA START :::::::*/}
  <div className="video_posts pt30 half_bg60">
    <div className="container">
      <div className="row">
        <div className="col-12">
          <div className="heading white">
            <h2 className="widget-title">Video News</h2>
          </div>
        </div>
      </div>
      <div className="space-50" />
      <div className="viceo_posts_wrap">
        <div className="row">
          <div className="col-lg-8">
            <div className="single_post post_type3 post_type11 margintop-60- xs-mb30">
              <div className="post_img">
                <div className="img_wrap">
                  <a href="#" className="play_btn">
                    <img src="assets/img/video/video1.jpg" alt="" />
                  </a>
                </div>{" "}
                <a href="#" className="youtube_middle">
                  <i className="fab fa-youtube" />
                </a>
              </div>
              <div className="single_post_text padding30 fourth_bg">
                <div className="meta3">
                  {" "}
                  <a href="#">TECHNOLOGY</a>
                  <a href="#">March 26, 2020</a>
                </div>
                <h4>
                  <a href="post1.html">
                    Riots Report Shows London Needs To Maintain Police Numbers,
                    Says Mayor
                  </a>
                </h4>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="popular_carousel_area mb30 md-mt-30">
              <h2 className="widget-title">Popular Posts</h2>
              <div className="popular_carousel owl-carousel nav_style1">
                {/*CAROUSEL START*/}
                <div className="popular_items">
                  <div className="single_post type10 widgets_small mb15">
                    <div className="post_img">
                      <div className="img_wrap">
                        <a href="#">
                          <img src="assets/img/popular/popularsm1.jpg" alt="" />
                        </a>
                      </div>{" "}
                      <span className="tranding tranding_border">1</span>
                    </div>
                    <div className="single_post_text">
                      <h4>
                        <a href="post1.html">
                          The property complete with a 30 seat screen room.
                        </a>
                      </h4>
                      <div className="meta4">
                        {" "}
                        <a href="#">TECHNOLOGY</a>
                      </div>
                    </div>
                  </div>
                  <div className="single_post type10 widgets_small mb15">
                    <div className="post_img">
                      <div className="img_wrap">
                        <a href="#">
                          <img src="assets/img/popular/popularsm2.jpg" alt="" />
                        </a>
                      </div>{" "}
                      <span className="tranding tranding_border">2</span>
                    </div>
                    <div className="single_post_text">
                      <h4>
                        <a href="post1.html">
                          Cheap smartphone sensor could help you old.
                        </a>
                      </h4>
                      <div className="meta4">
                        {" "}
                        <a href="#">TECHNOLOGY</a>
                      </div>
                    </div>
                  </div>
                  <div className="single_post type10 widgets_small mb15">
                    <div className="post_img">
                      <div className="img_wrap">
                        <a href="#">
                          <img src="assets/img/popular/popularsm3.jpg" alt="" />
                        </a>
                      </div>{" "}
                      <span className="tranding tranding_border">3</span>
                    </div>
                    <div className="single_post_text">
                      <h4>
                        <a href="post1.html">
                          Harbour amid a Slowen the down in singer city
                        </a>
                      </h4>
                      <div className="meta4">
                        {" "}
                        <a href="#">TECHNOLOGY</a>
                      </div>
                    </div>
                  </div>
                  <div className="single_post type10 widgets_small mb15">
                    <div className="post_img">
                      <div className="img_wrap">
                        <a href="#">
                          <img src="assets/img/popular/popularsm4.jpg" alt="" />
                        </a>
                      </div>{" "}
                      <span className="tranding tranding_border">4</span>
                    </div>
                    <div className="single_post_text">
                      <h4>
                        <a href="post1.html">
                          The secret to moving this from sphinx screening
                        </a>
                      </h4>
                      <div className="meta4">
                        {" "}
                        <a href="#">TECHNOLOGY</a>
                      </div>
                    </div>
                  </div>
                  <div className="single_post type10 widgets_small ldnane">
                    <div className="post_img">
                      <div className="img_wrap">
                        <a href="#">
                          <img src="assets/img/popular/popularsm5.jpg" alt="" />
                        </a>
                      </div>{" "}
                      <span className="tranding tranding_border">5</span>
                    </div>
                    <div className="single_post_text">
                      <h4>
                        <a href="post1.html">
                          The secret to moving this from sphinx screening
                        </a>
                      </h4>
                      <div className="meta4">
                        {" "}
                        <a href="#">TECHNOLOGY</a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="popular_items">
                  <div className="single_post type10 widgets_small mb15">
                    <div className="post_img">
                      <div className="img_wrap">
                        <a href="#">
                          <img src="assets/img/popular/popularsm1.jpg" alt="" />
                        </a>
                      </div>{" "}
                      <span className="tranding tranding_border">1</span>
                    </div>
                    <div className="single_post_text">
                      <h4>
                        <a href="post1.html">
                          The property complete with a 30 seat screen room.
                        </a>
                      </h4>
                      <div className="meta4">
                        {" "}
                        <a href="#">TECHNOLOGY</a>
                      </div>
                    </div>
                  </div>
                  <div className="single_post type10 widgets_small mb15">
                    <div className="post_img">
                      <div className="img_wrap">
                        <a href="#">
                          <img src="assets/img/popular/popularsm2.jpg" alt="" />
                        </a>
                      </div>{" "}
                      <span className="tranding tranding_border">2</span>
                    </div>
                    <div className="single_post_text">
                      <h4>
                        <a href="post1.html">
                          Cheap smartphone sensor could help you old.
                        </a>
                      </h4>
                      <div className="meta4">
                        {" "}
                        <a href="#">TECHNOLOGY</a>
                      </div>
                    </div>
                  </div>
                  <div className="single_post type10 widgets_small mb15">
                    <div className="post_img">
                      <div className="img_wrap">
                        <a href="#">
                          <img src="assets/img/popular/popularsm3.jpg" alt="" />
                        </a>
                      </div>{" "}
                      <span className="tranding tranding_border">3</span>
                    </div>
                    <div className="single_post_text">
                      <h4>
                        <a href="post1.html">
                          Harbour amid a Slowen the down in singer city
                        </a>
                      </h4>
                      <div className="meta4">
                        {" "}
                        <a href="#">TECHNOLOGY</a>
                      </div>
                    </div>
                  </div>
                  <div className="single_post type10 widgets_small mb15">
                    <div className="post_img">
                      <div className="img_wrap">
                        <a href="#">
                          <img src="assets/img/popular/popularsm4.jpg" alt="" />
                        </a>
                      </div>{" "}
                      <span className="tranding tranding_border">4</span>
                    </div>
                    <div className="single_post_text">
                      <h4>
                        <a href="post1.html">
                          The secret to moving this from sphinx screening
                        </a>
                      </h4>
                      <div className="meta4">
                        {" "}
                        <a href="#">TECHNOLOGY</a>
                      </div>
                    </div>
                  </div>
                  <div className="single_post type10 widgets_small ldnane">
                    <div className="post_img">
                      <div className="img_wrap">
                        <a href="#">
                          <img src="assets/img/popular/popularsm5.jpg" alt="" />
                        </a>
                      </div>{" "}
                      <span className="tranding tranding_border">5</span>
                    </div>
                    <div className="single_post_text">
                      <h4>
                        <a href="post1.html">
                          The secret to moving this from sphinx screening
                        </a>
                      </h4>
                      <div className="meta4">
                        {" "}
                        <a href="#">TECHNOLOGY</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/*CAROUSEL END*/}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/*::::: VIDEO POST AREA END :::::::*/}
  {/*::::: ENTERTAINMENT AREA START :::::::*/}
  <div className="entertrainments">
    <div className="container">
      <div className="row">
        <div className="col-lg-8">
          <div className="row">
            <div className="col-12">
              <div className="heading">
                <h2 className="widget-title">Entertrainment News</h2>
              </div>
            </div>
          </div>
          <div className="entertrainment_carousel mb30">
            {/*CAROUSEL START*/}
            <div className="entertrainment_item">
              <div className="row justify-content-center">
                <div className="col-md-6">
                  <div className="single_post post_type3 mb30">
                    <div className="post_img">
                      <div className="img_wrap">
                        <a href="#">
                          <img
                            src="assets/img/entertrainment/enter1.jpg"
                            alt=""
                          />
                        </a>
                      </div>
                    </div>
                    <div className="single_post_text">
                      <div className="meta3">
                        {" "}
                        <a href="#">TECHNOLOGY</a>
                        <a href="#">March 26, 2020</a>
                      </div>
                      <h4>
                        <a href="post1.html">
                          There may be no consoles in the future ea exec says
                        </a>
                      </h4>
                      <div className="space-10" />
                      <p className="post-p">
                        The property, complete with 30-seat screening from room,
                        a 100-seat amphitheater and a swimming pond with sandy
                        shower…
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="single_post post_type3 mb30">
                    <div className="post_img">
                      <div className="img_wrap">
                        <a href="#">
                          <img
                            src="assets/img/entertrainment/enter2.jpg"
                            alt=""
                          />
                        </a>
                      </div>
                    </div>
                    <div className="single_post_text">
                      <div className="meta3">
                        {" "}
                        <a href="#">TECHNOLOGY</a>
                        <a href="#">March 26, 2020</a>
                      </div>
                      <h4>
                        <a href="post1.html">
                          There may be no consoles in the future ea exec says
                        </a>
                      </h4>
                      <div className="space-10" />
                      <p className="post-p">
                        The property, complete with 30-seat screening from room,
                        a 100-seat amphitheater and a swimming pond with sandy
                        shower…
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="single_post post_type3 mb30">
                    <div className="post_img">
                      <div className="img_wrap">
                        <a href="#">
                          <img
                            src="assets/img/entertrainment/enter3.jpg"
                            alt=""
                          />
                        </a>
                      </div>
                    </div>
                    <div className="single_post_text">
                      <div className="meta3">
                        {" "}
                        <a href="#">TECHNOLOGY</a>
                        <a href="#">March 26, 2020</a>
                      </div>
                      <h4>
                        <a href="post1.html">
                          Copa America: Luis Suarez from devastated US
                        </a>
                      </h4>
                      <div className="space-10" />
                      <p className="post-p">
                        The property, complete with 30-seat screening from room,
                        a 100-seat amphitheater and a swimming pond with sandy
                        shower…
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="single_post post_type3 mb30">
                    <div className="post_img">
                      <div className="img_wrap">
                        <a href="#">
                          <img
                            src="assets/img/entertrainment/enter4.jpg"
                            alt=""
                          />
                        </a>
                      </div>
                    </div>
                    <div className="single_post_text">
                      <div className="meta3">
                        {" "}
                        <a href="#">TECHNOLOGY</a>
                        <a href="#">March 26, 2020</a>
                      </div>
                      <h4>
                        <a href="post1.html">
                          There may be no consoles in the future ea exec says
                        </a>
                      </h4>
                      <div className="space-10" />
                      <p className="post-p">
                        The property, complete with 30-seat screening from room,
                        a 100-seat amphitheater and a swimming pond with sandy
                        shower…
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/*CAROUSEL END*/}
          <div className="row">
            <div className="col-12">
              <div className="sports">
                <div className="row">
                  <div className="col-12">
                    <div className="heading">
                      <h2 className="widget-title">Sports News</h2>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6">
                    <div className="single_post post_type3 mb30">
                      <div className="post_img">
                        <a href="#">
                          <img src="assets/img/sports/sportsbig1.jpg" alt="" />
                        </a>{" "}
                        <span className="tranding">
                          <i className="fas fa-bolt" />
                        </span>
                      </div>
                      <div className="single_post_text">
                        <div className="meta3">
                          {" "}
                          <a href="#">TECHNOLOGY</a>
                          <a href="#">March 26, 2020</a>
                        </div>
                        <h4>
                          <a href="post1.html">
                            Copa America: Luis Suarez from devastated US
                          </a>
                        </h4>
                        <div className="space-10" />
                        <p className="post-p">
                          The property, complete with 30-seat screening from
                          room, a 100-seat amphitheater and a swimming pond with
                          sandy shower…
                        </p>
                        <div className="space-20" />{" "}
                        <a href="#" className="readmore">
                          Read More
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="sports_carousel owl-carousel nav_style1">
                      {/*CAROUSEL START*/}
                      <div className="sports_carousel_item">
                        <div className="single_post widgets_small">
                          <div className="post_img">
                            <div className="img_wrap">
                              <a href="#">
                                <img
                                  src="assets/img/sports/sports2.jpg"
                                  alt=""
                                />
                              </a>
                            </div>
                          </div>
                          <div className="single_post_text">
                            <div className="meta2">
                              {" "}
                              <a href="#">TECHNOLOGY</a>
                              <a href="#">March 26, 2020</a>
                            </div>
                            <h4>
                              <a href="post1.html">
                                Copa America: Luis Suarez from devastated US
                              </a>
                            </h4>
                          </div>
                        </div>
                        <div className="space-15" />
                        <div className="border_black" />
                        <div className="space-15" />
                        <div className="single_post widgets_small">
                          <div className="post_img">
                            <div className="img_wrap">
                              <a href="#">
                                <img
                                  src="assets/img/sports/sports3.jpg"
                                  alt=""
                                />
                              </a>
                            </div>{" "}
                            <span className="tranding">
                              <i className="fas fa-bolt" />
                            </span>
                          </div>
                          <div className="single_post_text">
                            <div className="meta2">
                              {" "}
                              <a href="#">TECHNOLOGY</a>
                              <a href="#">March 26, 2020</a>
                            </div>
                            <h4>
                              <a href="post1.html">
                                Copa America: Luis Suarez from devastated US
                              </a>
                            </h4>
                          </div>
                        </div>
                        <div className="space-15" />
                        <div className="border_black" />
                        <div className="space-15" />
                        <div className="single_post widgets_small">
                          <div className="post_img">
                            <div className="img_wrap">
                              <a href="#">
                                <img
                                  src="assets/img/sports/sports4.jpg"
                                  alt=""
                                />
                              </a>
                            </div>
                          </div>
                          <div className="single_post_text">
                            <div className="meta2">
                              {" "}
                              <a href="#">TECHNOLOGY</a>
                              <a href="#">March 26, 2020</a>
                            </div>
                            <h4>
                              <a href="post1.html">
                                Copa America: Luis Suarez from devastated US
                              </a>
                            </h4>
                          </div>
                        </div>
                        <div className="space-15" />
                        <div className="border_black" />
                        <div className="space-15" />
                        <div className="single_post widgets_small">
                          <div className="post_img">
                            <div className="img_wrap">
                              <a href="#">
                                <img
                                  src="assets/img/sports/sports5.jpg"
                                  alt=""
                                />
                              </a>
                            </div>{" "}
                            <span className="tranding">
                              <i className="fas fa-bolt" />
                            </span>
                          </div>
                          <div className="single_post_text">
                            <div className="meta2">
                              {" "}
                              <a href="#">TECHNOLOGY</a>
                              <a href="#">March 26, 2020</a>
                            </div>
                            <h4>
                              <a href="post1.html">
                                Copa America: Luis Suarez from devastated US
                              </a>
                            </h4>
                          </div>
                        </div>
                        <div className="space-15" />
                        <div className="border_black" />
                        <div className="space-15" />
                        <div className="single_post widgets_small">
                          <div className="post_img">
                            <div className="img_wrap">
                              <a href="#">
                                <img
                                  src="assets/img/sports/sports6.jpg"
                                  alt=""
                                />
                              </a>
                            </div>
                          </div>
                          <div className="single_post_text">
                            <div className="meta2">
                              {" "}
                              <a href="#">TECHNOLOGY</a>
                              <a href="#">March 26, 2020</a>
                            </div>
                            <h4>
                              <a href="post1.html">
                                Copa America: Luis Suarez from devastated US
                              </a>
                            </h4>
                          </div>
                        </div>
                      </div>
                      <div className="sports_carousel_item">
                        <div className="single_post widgets_small">
                          <div className="post_img">
                            <div className="img_wrap">
                              <a href="#">
                                <img
                                  src="assets/img/blog/blog_small1.jpg"
                                  alt=""
                                />
                              </a>
                            </div>
                          </div>
                          <div className="single_post_text">
                            <div className="meta2">
                              {" "}
                              <a href="#">TECHNOLOGY</a>
                              <a href="#">March 26, 2020</a>
                            </div>
                            <h4>
                              <a href="post1.html">
                                Copa America: Luis Suarez from devastated US
                              </a>
                            </h4>
                          </div>
                        </div>
                        <div className="space-15" />
                        <div className="border_black" />
                        <div className="space-15" />
                        <div className="single_post widgets_small">
                          <div className="post_img">
                            <div className="img_wrap">
                              <a href="#">
                                <img
                                  src="assets/img/blog/blog_small2.jpg"
                                  alt=""
                                />
                              </a>
                            </div>{" "}
                            <span className="tranding">
                              <i className="fas fa-bolt" />
                            </span>
                          </div>
                          <div className="single_post_text">
                            <div className="meta2">
                              {" "}
                              <a href="#">TECHNOLOGY</a>
                              <a href="#">March 26, 2020</a>
                            </div>
                            <h4>
                              <a href="post1.html">
                                Copa America: Luis Suarez from devastated US
                              </a>
                            </h4>
                          </div>
                        </div>
                        <div className="space-15" />
                        <div className="border_black" />
                        <div className="space-15" />
                        <div className="single_post widgets_small">
                          <div className="post_img">
                            <div className="img_wrap">
                              <a href="#">
                                <img
                                  src="assets/img/blog/blog_small3.jpg"
                                  alt=""
                                />
                              </a>
                            </div>
                          </div>
                          <div className="single_post_text">
                            <div className="meta2">
                              {" "}
                              <a href="#">TECHNOLOGY</a>
                              <a href="#">March 26, 2020</a>
                            </div>
                            <h4>
                              <a href="post1.html">
                                Copa America: Luis Suarez from devastated US
                              </a>
                            </h4>
                          </div>
                        </div>
                        <div className="space-15" />
                        <div className="border_black" />
                        <div className="space-15" />
                        <div className="single_post widgets_small">
                          <div className="post_img">
                            <div className="img_wrap">
                              <a href="#">
                                <img
                                  src="assets/img/blog/blog_small4.jpg"
                                  alt=""
                                />
                              </a>
                            </div>
                            <span className="tranding">
                              <i className="fas fa-bolt" />
                            </span>
                          </div>
                          <div className="single_post_text">
                            <div className="meta2">
                              {" "}
                              <a href="#">TECHNOLOGY</a>
                              <a href="#">March 26, 2020</a>
                            </div>
                            <h4>
                              <a href="post1.html">
                                Copa America: Luis Suarez from devastated US
                              </a>
                            </h4>
                          </div>
                        </div>
                        <div className="space-15" />
                        <div className="border_black" />
                        <div className="space-15" />
                        <div className="single_post widgets_small">
                          <div className="post_img">
                            <div className="img_wrap">
                              <a href="#">
                                <img
                                  src="assets/img/blog/blog_small5.jpg"
                                  alt=""
                                />
                              </a>
                            </div>
                          </div>
                          <div className="single_post_text">
                            <div className="meta2">
                              {" "}
                              <a href="#">TECHNOLOGY</a>
                              <a href="#">March 26, 2020</a>
                            </div>
                            <h4>
                              <a href="post1.html">
                                Copa America: Luis Suarez from devastated US
                              </a>
                            </h4>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/*CAROUSEL END*/}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="banner_area mt50 mb60 xs-mt60">
            <a href="#">
              <img src="assets/img/bg/banner1.png" alt="" />
            </a>
          </div>
          <div className="row">
            <div className="col-12">
              <div className="businerss_news">
                <div className="row">
                  <div className="col-6 align-self-center">
                    <h2 className="widget-title">Business News</h2>
                  </div>
                  <div className="col-6 text-right align-self-center">
                    {" "}
                    <a href="#" className="see_all mb20">
                      See All
                    </a>
                  </div>
                </div>
                <div className="row">
                  <div className="col-12">
                    <div className="single_post post_type3 post_type12 mb30">
                      <div className="post_img">
                        <div className="img_wrap">
                          <a href="#">
                            <img
                              src="assets/img/business/business1.jpg"
                              alt=""
                            />
                          </a>
                        </div>
                      </div>
                      <div className="single_post_text">
                        <div className="meta3">
                          {" "}
                          <a href="#">uiux.subash</a>
                          <a href="#">March 26, 2020</a>
                        </div>
                        <h4>
                          <a href="post1.html">
                            Copa America: Luis Suarez from devastated US
                          </a>
                        </h4>
                        <div className="space-10" />
                        <p className="post-p">
                          The property, complete with 30-seat screening from
                          room, a 100-seat amphitheater and a swimming pond
                          with…
                        </p>
                        <div className="space-20" />{" "}
                        <a href="#" className="readmore">
                          Read more
                        </a>
                      </div>
                    </div>
                    <div className="single_post post_type3 post_type12 mb30">
                      <div className="post_img">
                        <div className="img_wrap">
                          <a href="#">
                            <img
                              src="assets/img/business/business2.jpg"
                              alt=""
                            />
                          </a>
                        </div>
                      </div>
                      <div className="single_post_text">
                        <div className="meta3">
                          {" "}
                          <a href="#">uiux.subash</a>
                          <a href="#">March 26, 2020</a>
                        </div>
                        <h4>
                          <a href="post1.html">
                            Copa America: Luis Suarez from devastated US
                          </a>
                        </h4>
                        <div className="space-10" />
                        <p className="post-p">
                          The property, complete with 30-seat screening from
                          room, a 100-seat amphitheater and a swimming pond
                          with…
                        </p>
                        <div className="space-20" />{" "}
                        <a href="#" className="readmore">
                          Read more
                        </a>
                      </div>
                    </div>
                    <div className="single_post post_type3 post_type12 mb30">
                      <div className="post_img">
                        <div className="img_wrap">
                          <a href="#">
                            <img
                              src="assets/img/business/business3.jpg"
                              alt=""
                            />
                          </a>
                        </div>
                      </div>
                      <div className="single_post_text">
                        <div className="meta3">
                          {" "}
                          <a href="#">uiux.subash</a>
                          <a href="#">March 26, 2020</a>
                        </div>
                        <h4>
                          <a href="post1.html">
                            Copa America: Luis Suarez from devastated US
                          </a>
                        </h4>
                        <div className="space-10" />
                        <p className="post-p">
                          The property, complete with 30-seat screening from
                          room, a 100-seat amphitheater and a swimming pond
                          with…
                        </p>
                        <div className="space-20" />{" "}
                        <a href="#" className="readmore">
                          Read more
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-4">
          <div className="row">
            <div className="col-lg-6 col-lg-12">
              {/*:::::: POST TYPE 4 START :::::::*/}
              <div className="widget mb30">
                <h2 className="widget-title">Most share</h2>
                <div className="widget4_carousel owl-carousel nav_style1">
                  {/*CAROUSEL START*/}
                  <div className="carousel_items">
                    <div className="single_post widgets_small widgets_type4">
                      <div className="post_img number">
                        <h2>1</h2>
                      </div>
                      <div className="single_post_text">
                        <div className="meta2">
                          {" "}
                          <a href="#">TECHNOLOGY</a>
                          <a href="#">March 26, 2020</a>
                        </div>
                        <h4>
                          <a href="post1.html">
                            Nancy zhang a chinese busy woman and dhaka
                          </a>
                        </h4>
                        <ul className="inline socail_share">
                          <li>
                            {" "}
                            <a href="#">
                              <i className="fab fa-twitter" />
                              2.2K
                            </a>
                          </li>
                          <li>
                            {" "}
                            <a href="#">
                              <i className="fab fa-facebook-f" />
                              2.2K
                            </a>
                          </li>
                        </ul>
                        <div className="space-15" />
                        <div className="border_black" />
                      </div>
                    </div>
                    <div className="space-15" />
                    <div className="single_post widgets_small widgets_type4">
                      <div className="post_img number">
                        <h2>2</h2>
                      </div>
                      <div className="single_post_text">
                        <div className="meta2">
                          {" "}
                          <a href="#">TECHNOLOGY</a>
                          <a href="#">March 26, 2020</a>
                        </div>
                        <h4>
                          <a href="post1.html">
                            Harbour amid a Slowen down in singer city
                          </a>
                        </h4>
                        <ul className="inline socail_share">
                          <li>
                            {" "}
                            <a href="#">
                              <i className="fab fa-twitter" />
                              2.2K
                            </a>
                          </li>
                          <li>
                            {" "}
                            <a href="#">
                              <i className="fab fa-facebook-f" />
                              2.2K
                            </a>
                          </li>
                        </ul>
                        <div className="space-15" />
                        <div className="border_black" />
                      </div>
                    </div>
                    <div className="space-15" />
                    <div className="single_post widgets_small widgets_type4">
                      <div className="post_img number">
                        <h2>3</h2>
                      </div>
                      <div className="single_post_text">
                        <div className="meta2">
                          {" "}
                          <a href="#">TECHNOLOGY</a>
                          <a href="#">March 26, 2020</a>
                        </div>
                        <h4>
                          <a href="post1.html">
                            Cheap smartphone sensor could help you old food safe
                          </a>
                        </h4>
                        <ul className="inline socail_share">
                          <li>
                            {" "}
                            <a href="#">
                              <i className="fab fa-twitter" />
                              2.2K
                            </a>
                          </li>
                          <li>
                            {" "}
                            <a href="#">
                              <i className="fab fa-facebook-f" />
                              2.2K
                            </a>
                          </li>
                        </ul>
                        <div className="space-15" />
                        <div className="border_black" />
                      </div>
                    </div>
                    <div className="space-15" />
                    <div className="single_post widgets_small widgets_type4">
                      <div className="post_img number">
                        <h2>4</h2>
                      </div>
                      <div className="single_post_text">
                        <div className="meta2">
                          {" "}
                          <a href="#">TECHNOLOGY</a>
                          <a href="#">March 26, 2020</a>
                        </div>
                        <h4>
                          <a href="post1.html">
                            Nancy zhang a chinese busy woman and dhaka
                          </a>
                        </h4>
                        <ul className="inline socail_share">
                          <li>
                            {" "}
                            <a href="#">
                              <i className="fab fa-twitter" />
                              2.2K
                            </a>
                          </li>
                          <li>
                            {" "}
                            <a href="#">
                              <i className="fab fa-facebook-f" />
                              2.2K
                            </a>
                          </li>
                        </ul>
                        <div className="space-15" />
                        <div className="border_black" />
                      </div>
                    </div>
                    <div className="space-15" />
                    <div className="single_post widgets_small widgets_type4">
                      <div className="post_img number">
                        <h2>5</h2>
                      </div>
                      <div className="single_post_text">
                        <div className="meta2">
                          {" "}
                          <a href="#">TECHNOLOGY</a>
                          <a href="#">March 26, 2020</a>
                        </div>
                        <h4>
                          <a href="post1.html">
                            The secret to moving this ancient sphinx screening
                          </a>
                        </h4>
                        <ul className="inline socail_share">
                          <li>
                            {" "}
                            <a href="#">
                              <i className="fab fa-twitter" />
                              2.2K
                            </a>
                          </li>
                          <li>
                            {" "}
                            <a href="#">
                              <i className="fab fa-facebook-f" />
                              2.2K
                            </a>
                          </li>
                        </ul>
                        <div className="space-15" />
                        <div className="border_black" />
                      </div>
                    </div>
                  </div>
                  <div className="carousel_items">
                    <div className="single_post widgets_small widgets_type4">
                      <div className="post_img number">
                        <h2>1</h2>
                      </div>
                      <div className="single_post_text">
                        <div className="meta2">
                          {" "}
                          <a href="#">TECHNOLOGY</a>
                          <a href="#">March 26, 2020</a>
                        </div>
                        <h4>
                          <a href="post1.html">
                            Nancy zhang a chinese busy woman and dhaka
                          </a>
                        </h4>
                        <ul className="inline socail_share">
                          <li>
                            {" "}
                            <a href="#">
                              <i className="fab fa-twitter" />
                              2.2K
                            </a>
                          </li>
                          <li>
                            {" "}
                            <a href="#">
                              <i className="fab fa-facebook-f" />
                              2.2K
                            </a>
                          </li>
                        </ul>
                        <div className="space-15" />
                        <div className="border_black" />
                      </div>
                    </div>
                    <div className="space-15" />
                    <div className="single_post widgets_small widgets_type4">
                      <div className="post_img number">
                        <h2>2</h2>
                      </div>
                      <div className="single_post_text">
                        <div className="meta2">
                          {" "}
                          <a href="#">TECHNOLOGY</a>
                          <a href="#">March 26, 2020</a>
                        </div>
                        <h4>
                          <a href="post1.html">
                            Harbour amid a Slowen down in singer city
                          </a>
                        </h4>
                        <ul className="inline socail_share">
                          <li>
                            {" "}
                            <a href="#">
                              <i className="fab fa-twitter" />
                              2.2K
                            </a>
                          </li>
                          <li>
                            {" "}
                            <a href="#">
                              <i className="fab fa-facebook-f" />
                              2.2K
                            </a>
                          </li>
                        </ul>
                        <div className="space-15" />
                        <div className="border_black" />
                      </div>
                    </div>
                    <div className="space-15" />
                    <div className="single_post widgets_small widgets_type4">
                      <div className="post_img number">
                        <h2>3</h2>
                      </div>
                      <div className="single_post_text">
                        <div className="meta2">
                          {" "}
                          <a href="#">TECHNOLOGY</a>
                          <a href="#">March 26, 2020</a>
                        </div>
                        <h4>
                          <a href="post1.html">
                            Cheap smartphone sensor could help you old food safe
                          </a>
                        </h4>
                        <ul className="inline socail_share">
                          <li>
                            {" "}
                            <a href="#">
                              <i className="fab fa-twitter" />
                              2.2K
                            </a>
                          </li>
                          <li>
                            {" "}
                            <a href="#">
                              <i className="fab fa-facebook-f" />
                              2.2K
                            </a>
                          </li>
                        </ul>
                        <div className="space-15" />
                        <div className="border_black" />
                      </div>
                    </div>
                    <div className="space-15" />
                    <div className="single_post widgets_small widgets_type4">
                      <div className="post_img number">
                        <h2>4</h2>
                      </div>
                      <div className="single_post_text">
                        <div className="meta2">
                          {" "}
                          <a href="#">TECHNOLOGY</a>
                          <a href="#">March 26, 2020</a>
                        </div>
                        <h4>
                          <a href="post1.html">
                            Nancy zhang a chinese busy woman and dhaka
                          </a>
                        </h4>
                        <ul className="inline socail_share">
                          <li>
                            {" "}
                            <a href="#">
                              <i className="fab fa-twitter" />
                              2.2K
                            </a>
                          </li>
                          <li>
                            {" "}
                            <a href="#">
                              <i className="fab fa-facebook-f" />
                              2.2K
                            </a>
                          </li>
                        </ul>
                        <div className="space-15" />
                        <div className="border_black" />
                      </div>
                    </div>
                    <div className="space-15" />
                    <div className="single_post widgets_small widgets_type4">
                      <div className="post_img number">
                        <h2>5</h2>
                      </div>
                      <div className="single_post_text">
                        <div className="meta2">
                          {" "}
                          <a href="#">TECHNOLOGY</a>
                          <a href="#">March 26, 2020</a>
                        </div>
                        <h4>
                          <a href="post1.html">
                            The secret to moving this ancient sphinx screening
                          </a>
                        </h4>
                        <ul className="inline socail_share">
                          <li>
                            {" "}
                            <a href="#">
                              <i className="fab fa-twitter" />
                              2.2K
                            </a>
                          </li>
                          <li>
                            {" "}
                            <a href="#">
                              <i className="fab fa-facebook-f" />
                              2.2K
                            </a>
                          </li>
                        </ul>
                        <div className="space-15" />
                        <div className="border_black" />
                      </div>
                    </div>
                    <div className="space-15" />
                  </div>
                </div>
                {/*CAROUSEL END*/}
              </div>
              {/*:::::: POST TYPE 4 END :::::::*/}
            </div>
            <div className="col-lg-6 col-lg-12">
              {/*:::::: POST TYPE 13 START:::::::*/}
              <div className="widget upcomming_macth mb30">
                <div className="row">
                  <div className="col-8 align-self-center">
                    <h2 className="widget-title">Upcoming Matches</h2>
                  </div>
                  <div className="col-4 text-right align-self-center">
                    {" "}
                    <a href="#" className="see_all mb20">
                      See All
                    </a>
                  </div>
                </div>
                <div className="single_post post_type13 widgets_small">
                  <div className="post_img">
                    <a href="#">
                      <img src="assets/img/flag/match1.png" alt="" />
                    </a>
                  </div>
                  <div className="single_post_text">
                    <h4>
                      <a href="#" className="playing_teams">
                        Germany <span>VS &nbsp;</span>France
                      </a>
                    </h4>
                    <p className="meta macth_meta">
                      Tomorrow &nbsp;|&nbsp;<span> M22:30 (CST) </span> &nbsp;
                    </p>
                  </div>
                  <div className="circle_match_time">
                    <div className="first_circle circle" />
                  </div>
                </div>
                <div className="space-10" />
                <div className="border_black" />
                <div className="space-10" />
                <div className="single_post post_type13 widgets_small">
                  <div className="post_img">
                    <a href="#">
                      <img src="assets/img/flag/match2.png" alt="" />
                    </a>
                  </div>
                  <div className="single_post_text">
                    <h4>
                      <a href="#" className="playing_teams">
                        Spain <span>VS &nbsp;</span>Portugal
                      </a>
                    </h4>
                    <p className="meta macth_meta">
                      Tomorrow&nbsp;|&nbsp;<span> M22:30 (CST) </span> &nbsp;
                    </p>
                  </div>
                  <div className="circle_match_time">
                    <div className="second_circle circle" />
                  </div>
                </div>
                <div className="space-10" />
                <div className="border_black" />
                <div className="space-10" />
                <div className="single_post post_type13 widgets_small">
                  <div className="post_img">
                    <a href="#">
                      <img src="assets/img/flag/match3.png" alt="" />
                    </a>
                  </div>
                  <div className="single_post_text">
                    <h4>
                      <a href="#" className="playing_teams">
                        Russia <span>VS &nbsp;</span>Italy
                      </a>
                    </h4>
                    <p className="meta macth_meta">
                      Tomorrow&nbsp;|&nbsp;<span> M22:30 (CST) </span> &nbsp;
                    </p>
                  </div>
                  <div className="circle_match_time">
                    <div className="third_circle circle" />
                  </div>
                </div>
                <div className="space-10" />
                <div className="border_black" />
                <div className="space-10" />
                <div className="single_post post_type13 widgets_small">
                  <div className="post_img">
                    <a href="#">
                      <img src="assets/img/flag/match4.png" alt="" />
                    </a>
                  </div>
                  <div className="single_post_text">
                    <h4>
                      <a href="#" className="playing_teams">
                        Croatia <span>VS &nbsp;</span>England
                      </a>
                    </h4>
                    <p className="meta macth_meta">
                      Tomorrow&nbsp;|&nbsp;<span> M22:30 (CST) </span> &nbsp;
                    </p>
                  </div>
                  <div className="circle_match_time">
                    <div className="fourth_circle circle" />
                  </div>
                </div>
                <div className="space-10" />
                <div className="border_black" />
                <div className="space-10" />
                <div className="single_post post_type13 widgets_small">
                  <div className="post_img">
                    <a href="#">
                      <img src="assets/img/flag/match5.png" alt="" />
                    </a>
                  </div>
                  <div className="single_post_text">
                    <h4>
                      <a href="#" className="playing_teams">
                        Germany <span>VS &nbsp;</span>France
                      </a>
                    </h4>
                    <p className="meta macth_meta">
                      Tomorrow&nbsp;|&nbsp;<span> M22:30 (CST) </span> &nbsp;
                    </p>
                  </div>
                  <div className="circle_match_time">
                    <div className="fifth_circle circle" />
                  </div>
                </div>
              </div>
              {/*:::::: POST TYPE 13 END:::::::*/}
            </div>
            <div className="col-lg-6 col-lg-12">
              <div className="box widget news_letter mb30">
                <h2 className="widget-title">News Letter</h2>
                <p>
                  Your email address will not be this published. Required fields
                  are News Today.
                </p>
                <div className="space-20" />
                <div className="signup_form">
                  <form action="index.html">
                    <input
                      className="signup"
                      type="email"
                      placeholder="Your email"
                    />
                    <input
                      type="button"
                      className="cbtn"
                      defaultValue="sign up"
                    />
                  </form>
                  <div className="space-10" />
                  <p>We hate spam as much as you do</p>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-lg-12">
              <div className="widget category mb30">
                <div className="row">
                  <div className="col-6 align-self-center">
                    <h2 className="widget-title">Categories</h2>
                  </div>
                  <div className="col-6 text-right align-self-center">
                    {" "}
                    <a href="#" className="see_all mb20">
                      See All
                    </a>
                  </div>
                </div>
                <ul>
                  <li>
                    <a
                      href="#"
                      style={{
                        background: "url(assets/img/categories/category1.jpg)"
                      }}
                    >
                      {" "}
                      <span>Restaurant</span>
                      <img src="assets/img/icon/union.png" alt="" />
                    </a>
                  </li>
                  <li>
                    <a
                      href="entertrainment.html"
                      style={{
                        background: "url(assets/img/categories/category2.jpg)"
                      }}
                    >
                      {" "}
                      <span>Entertainment</span>
                      <img src="assets/img/icon/union.png" alt="" />
                    </a>
                  </li>
                  <li>
                    <a
                      href="feature.html"
                      style={{
                        background: "url(assets/img/categories/category3.jpg)"
                      }}
                    >
                      {" "}
                      <span>Feature</span>
                      <img src="assets/img/icon/union.png" alt="" />
                    </a>
                  </li>
                  <li>
                    <a
                      href="business.html"
                      style={{
                        background: "url(assets/img/categories/category4.jpg)"
                      }}
                    >
                      {" "}
                      <span>Business</span>
                      <img src="assets/img/icon/union.png" alt="" />
                    </a>
                  </li>
                  <li>
                    <a
                      href="trending.html"
                      style={{
                        background: "url(assets/img/categories/category5.jpg)"
                      }}
                    >
                      {" "}
                      <span>Trending</span>
                      <img src="assets/img/icon/union.png" alt="" />
                    </a>
                  </li>
                  <li>
                    <a
                      href="sports.html"
                      style={{
                        background: "url(assets/img/categories/category6.jpg)"
                      }}
                    >
                      {" "}
                      <span>Sports</span>
                      <img src="assets/img/icon/union.png" alt="" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-6 col-lg-12">
              <div className="banner2 mb30">
                <a href="#">
                  <img src="assets/img/bg/sidebar-1.png" alt="" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/*::::: ENTERTAINMENT AREA END :::::::*/}
  <div className="space-70" />
  {/*::::: FOOTER AREA START :::::::*/}
  <div className="footer footer_area1 primay_bg">
    <div className="container">
      <div className="cta">
        <div className="row">
          <div className="col-md-6 align-self-center">
            <div className="footer_logo logo">
              <a href="index.html">
                <img src="assets/img/logo/footer_logo.png" alt="logo" />
              </a>
            </div>
            <div className="social2">
              <ul className="inline">
                <li>
                  <a href="#">
                    <i className="fab fa-instagram" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fab fa-facebook-f" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fab fa-youtube" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fab fa-instagram" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-md-6 col-lg-4 offset-lg-2 align-self-center">
            <div className="signup_form">
              <form action="index.html" method="post">
                <input
                  className="signup"
                  type="email"
                  placeholder="Your email address"
                />
                <input type="button" className="cbtn" defaultValue="sign up" />
              </form>
              <p>We hate spam as much as you do</p>
            </div>
          </div>
        </div>
      </div>
      <div className="border_white" />
      <div className="space-40" />
      <div className="row justify-content-center">
        <div className="col-lg-8">
          <div className="row">
            <div className="col-sm-6 col-lg">
              <div className="single_footer_nav border_white_right">
                <h3 className="widget-title2">News categories</h3>
                <div className="row">
                  <div className="col-lg-6">
                    <ul>
                      <li>
                        <a href="#">Politics</a>
                      </li>
                      <li>
                        <a href="#">Business</a>
                      </li>
                      <li>
                        <a href="#">TECHNOLOGY</a>
                      </li>
                      <li>
                        <a href="#">Science</a>
                      </li>
                      <li>
                        <a href="#">Health</a>
                      </li>
                      <li>
                        <a href="#">Sports</a>
                      </li>
                      <li>
                        <a href="#">Entertainment</a>
                      </li>
                    </ul>
                  </div>
                  <div className="col-lg-6">
                    <ul>
                      <li>
                        <a href="#">Education</a>
                      </li>
                      <li>
                        <a href="#">Obituaries</a>
                      </li>
                      <li>
                        <a href="#">Corrections</a>
                      </li>
                      <li>
                        <a href="#">Education</a>
                      </li>
                      <li>
                        <a href="#">Today’s Paper</a>
                      </li>
                      <li>
                        <a href="#">Corrections</a>
                      </li>
                      <li>
                        <a href="#">Foods</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-lg">
              <div className="single_footer_nav">
                <h3 className="widget-title2">Living</h3>
                <div className="row">
                  <div className="col-lg-6">
                    <ul>
                      <li>
                        <a href="#">Crossword</a>
                      </li>
                      <li>
                        <a href="#">Food</a>
                      </li>
                      <li>
                        <a href="#">Automobiles</a>
                      </li>
                      <li>
                        <a href="#">Education</a>
                      </li>
                      <li>
                        <a href="#">Health</a>
                      </li>
                      <li>
                        <a href="#">Magazine</a>
                      </li>
                      <li>
                        <a href="#">Weddings</a>
                      </li>
                    </ul>
                  </div>
                  <div className="col-lg-6">
                    <ul>
                      <li>
                        <a href="#">Classifieds</a>
                      </li>
                      <li>
                        <a href="#">Photographies</a>
                      </li>
                      <li>
                        <a href="#">NYT Store</a>
                      </li>
                      <li>
                        <a href="#">Journalisms</a>
                      </li>
                      <li>
                        <a href="#">Public Editor</a>
                      </li>
                      <li>
                        <a href="#">Tools &amp; Services</a>
                      </li>
                      <li>
                        <a href="#">My Account</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="space-40" />
          <div className="border_white" />
          <div className="space-40" />
          <div className="row">
            <div className="col-sm-6 col-lg-5">
              <div className="single_footer_nav border_white_right">
                <h3 className="widget-title2">Opinion</h3>
                <div className="row">
                  <div className="col-lg-6">
                    <ul>
                      <li>
                        <a href="#">Today’s Opinion</a>
                      </li>
                      <li>
                        <a href="#">Op-Ed Contributing</a>
                      </li>
                      <li>
                        <a href="#">Contributing Writers</a>
                      </li>
                      <li>
                        <a href="#">Business News</a>
                      </li>
                      <li>
                        <a href="#">Collections</a>
                      </li>
                      <li>
                        <a href="#">Today’s Paper</a>
                      </li>
                      <li>
                        <a href="#">Saturday Review</a>
                      </li>
                      <li>
                        <a href="#">Product Review</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-lg-7">
              <div className="twitter_feeds">
                <h3 className="widget-title2">Twitter feed</h3>
                <div className="single_twitter_feed border_white_bottom">
                  <div className="twitter_feed_icon">
                    {" "}
                    <i className="fab fa-twitter" />
                  </div>
                  <h6>
                    Cyber Monday Sale, Save 33% on Jannah theme during our
                    year-end Sale, Purchase a new license for your next project…{" "}
                    <span>
                      @newspark #TECHNOLOGY https://dribbble.com/subash_chandra
                    </span>
                  </h6>
                  <p>March 26, 2020</p>
                </div>
                <div className="single_twitter_feed">
                  <div className="twitter_feed_icon">
                    {" "}
                    <i className="fab fa-twitter" />
                  </div>
                  <h6>
                    Cyber Monday Sale, Save 33% on Jannah theme during our
                    year-end Sale, Purchase a new license for your next project…{" "}
                    <span>
                      @newspark #TECHNOLOGY https://dribbble.com/subash_chandra
                    </span>
                  </h6>
                  <p>March 26, 2020</p>
                </div>
                <div className="single_twitter_feed">
                  <div className="twitter_feed_icon">
                    {" "}
                    <i className="fab fa-twitter" />
                  </div>
                  <h6>
                    Cyber Monday Sale, Save 33% on Jannah theme during our
                    year-end Sale, Purchase a new license for your next project…{" "}
                    <span>
                      @newspark #TECHNOLOGY https://dribbble.com/subash_chandra
                    </span>
                  </h6>
                  <p>March 26, 2020</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-4">
          <div className="extra_newss border_white_left pl-4">
            <h3 className="widget-title2">More news</h3>
            <div className="single_extra_news border_white_bottom">
              <p>
                TECHNOLOGY <span> / March 26, 2020</span>
              </p>{" "}
              <a href="#">Nancy zhang a chinese busy woman and dhaka</a>
              <span className="news_counter">1</span>
            </div>
            <div className="single_extra_news border_white_bottom">
              <p>
                TECHNOLOGY <span> / March 26, 2020</span>
              </p>{" "}
              <a href="#">Nancy zhang a chinese busy woman and dhaka</a>
              <span className="news_counter">2</span>
            </div>
            <div className="single_extra_news border_white_bottom">
              <p>
                TECHNOLOGY <span> / March 26, 2020</span>
              </p>{" "}
              <a href="#">Nancy zhang a chinese busy woman and dhaka</a>
              <span className="news_counter">3</span>
            </div>
            <div className="single_extra_news border_white_bottom">
              <p>
                TECHNOLOGY <span> / March 26, 2020</span>
              </p>{" "}
              <a href="#">Nancy zhang a chinese busy woman and dhaka</a>
              <span className="news_counter">4</span>
            </div>
            <div className="single_extra_news">
              <p>
                TECHNOLOGY <span> / March 26, 2020</span>
              </p>{" "}
              <a href="#">Nancy zhang a chinese busy woman and dhaka</a>
              <span className="news_counter">5</span>
            </div>
            <div className="space-40" />
            <div className="border_white_bottom" />
            <div className="space-40" />
            <div className="footer_contact">
              <h3 className="widget-title2">Newspark news services</h3>
              <div className="single_fcontact">
                <div className="fcicon">
                  <img src="assets/img/icon/mobile.png" alt="" />
                </div>{" "}
                <a href="#">On your mobile</a>
              </div>
              <div className="single_fcontact">
                <div className="fcicon">
                  <img src="assets/img/icon/speacker.png" alt="" />
                </div>{" "}
                <a href="#">On smart speakers</a>
              </div>
              <div className="single_fcontact">
                <div className="fcicon">
                  <img src="assets/img/icon/evelope.png" alt="" />
                </div>{" "}
                <a href="#">Contact Newspark news</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="copyright">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 align-self-center">
            <p>© Copyright 2020, All Rights Reserved</p>
          </div>
          <div className="col-lg-6 align-self-center">
            <div className="copyright_menus text-right">
              <div className="language" />
              <div className="copyright_menu inline">
                <ul>
                  <li>
                    <a href="#">About</a>
                  </li>
                  <li>
                    <a href="#">Advertise</a>
                  </li>
                  <li>
                    <a href="#">Privacy &amp; Policy</a>
                  </li>
                  <li>
                    <a href="#">Contact Us</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/*::::: FOOTER AREA END :::::::*/}
  {/*::::: ALL JS FILES :::::::*/}
</>

  )
}
