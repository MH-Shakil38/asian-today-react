import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import TopDate from '../../Component/dateTime/TopDate'
import Weather from '../../Component/advance/Weather'
import axiosClient from '../../api/axiox'
export default function Header() {

  const param = useParams()
  const [menues, setMenues] = useState(false);
  const getMenu = async () => {
      // setLoader(true);
      const { data } = await axiosClient.get("asian/categories");
      // setLoader(false);
      setMenues(data.data)
      console.log(data.data);
    };

    useEffect(() => {
        getMenu();
    }, []);

    return (
        <>
        <div id='top'>
      
      {/*::::: SEARCH FORM START:::::::*/}
      <div className="searching">
        <div className="container">
          <div className="row">
            <div className="col-8 text-center m-auto">
              <div className="v1search_form">
                <form action="#">
                  <input type="search" placeholder="Search Here..." />
                  <button type="submit" className="cbtn1">Search</button>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div className="close_btn">	<i className="fal fa-times" />
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
                    <p><a href="#">Top 10 Best Movies of 2018 So Far: Great Movies</a>
                    </p>
                  </div>
                  <div className="trancarousel_item">
                    <p><a href="#">Top 10 Best Movies of 2018 So Far: Great Movies</a>
                    </p>
                  </div>
                  <div className="trancarousel_item">
                    <p><a href="#">Top 10 Best Movies of 2018 So Far: Great Movies</a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4 align-self-center">
              <div className="top_date_social text-right">
                <div className="paper_date">
                  <h1><TopDate /></h1>
                </div>
                <div className="social1">
                  <ul className="inline">
                    <li><a href="#"><i className="fab fa-twitter" /></a>
                    </li>
                    <li><a href="#"><i className="fab fa-facebook-f" /></a>
                    </li>
                    <li><a href="#"><i className="fab fa-youtube" /></a>
                    </li>
                    <li><a href="#"><i className="fab fa-instagram" /></a>
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
                  <h2 className='text-success'>AsianTv<spen className='text-danger'>Today</spen> </h2>
                </a>
              </div>
            </div>
            <div className="col-lg-8 align-self-center">
              <div className="banner1">
                <a href="#">
                  <img src="assets/img/bg/banner1.png" alt />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*::::: LOGO AREA END :::::::*/}
      {/*::::: MENU AREA START  :::::::*/}
      <div className="main-menu" id="header">	<a href="#top" className="up_btn up_btn1"><i className="far fa-chevron-double-up" /></a>
        <div className="main-nav clearfix is-ts-sticky">
          <div className="container">
            <div className="row justify-content-between">
              <div className="col-6 col-lg-10">
                <div className="newsprk_nav stellarnav">
                  <ul id="newsprk_menu">
                    <li><Link to={`/`}>Home <i className="fal fa-angle-down" /></Link>
                      <ul>
                        <li><a href="index.html">Home 1 <i className="fal fa-angle-right" /></a>
                          <ul>
                            <li><a href="index2.html">Version 1</a>
                            </li>
                            <li><a href="index3.html">Version 2</a>
                            </li>
                            <li><a href="index4.html">Version 3</a>
                            </li>
                            <li><a href="index5.html">Version 4</a>
                            </li>
                          </ul>
                        </li>
                        <li><a href="dark/index.html">Home 2 <i className="fal fa-angle-right" /></a>
                          <ul>
                            <li><a href="dark/index2.html">Version 1</a>
                            </li>
                            <li><a href="dark/index3.html">Version 2</a>
                            </li>
                            <li><a href="dark/index4.html">Version 3</a>
                            </li>
                            <li><a href="dark/index5.html">Version 4</a>
                            </li>
                          </ul>
                        </li>
                        <li><a href="theme-3/index.html">Home 3 <i className="fal fa-angle-right" /></a>
                          <ul>
                            <li><a href="theme-3/index2.html">Version 1</a>
                            </li>
                            <li><a href="theme-3/index3.html">Version 2</a>
                            </li>
                            <li><a href="theme-3/index4.html">Version 3</a>
                            </li>
                            <li><a href="theme-3/index5.html">Version 4</a>
                            </li>
                          </ul>
                        </li>
                        <li><a href="theme-4/index.html">Home 4 <i className="fal fa-angle-right" /></a>
                          <ul>
                            <li><a href="theme-4/index2.html">Version 1</a>
                            </li>
                            <li><a href="theme-4/index3.html">Version 2</a>
                            </li>
                            <li><a href="theme-4/index4.html">Version 3</a>
                            </li>
                            <li><a href="theme-4/index5.html">Version 4</a>
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </li>
                    {Object.keys(menues).map((key, index) => {
                  const menu = menues[key];
                  console.log(menu)
                  if(index < 13){
                  return (
                        <>
                          {/* <li><Link to={`/`}>{menu?.name} <i className="fal fa-angle-down" /></Link> */}
                          <li><Link to={`/category/${menu.id}`}>{menu?.name}</Link>
                            <ul>
                              <li><a href="about.html">About</a>
                              </li>
                              <li><a href="archive.html">Archive</a>
                              </li>
                              <li><a href="contact.html">Contact Us</a>
                              </li>
                              <li><a href="404.html">404</a>
                              </li>
                            </ul>
                          </li>
                        </>
                        );
                    }
                    })}
                  </ul>
                </div>
              </div>
              <div className="col-6 col-lg-2 align-self-center">
                <div className="menu_right">
                  <div className="users_area">
                    <ul className="inline">
                      <li className="search_btn"><i className="far fa-search" />
                      </li>
                      {/* <li><i className="fal fa-user-circle" />
                      </li> */}
                    </ul>
                  </div>
                  {/* <div className="lang d-none d-xl-block">
                    <ul>
                      <li><a href="#">English <i className="far fa-angle-down" /></a>
                        <ul>
                          <li><a href="#">Spanish</a>
                          </li>
                          <li><a href="#">China</a>
                          </li>
                          <li><a href="#">Hindi</a>
                          </li>
                          <li><a href="#">Corian</a>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </div>
                  <div className="temp d-none d-lg-block">
                    <div className="temp_wap">
                      <Weather />
                    </div>
                  </div> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*::::: MENU AREA END :::::::*/}
    
</div>

    </>
    
      )
}
