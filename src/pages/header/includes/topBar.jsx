import React from 'react'

export default function topBar() {
  return (
    <>
      <div className="main-menu" id="header">	<a href="#top" className="up_btn up_btn1"><i className="far fa-chevron-double-up" /></a>
        <div className="main-nav clearfix is-ts-sticky">
            <div className="container">
            <div className="row justify-content-between">
                <div className="col-6 col-lg-8">
                <div className="newsprk_nav stellarnav light right desktop"><a href="#" className="menu-toggle"><span className="bars"><span /><span /><span /></span> </a>
                    <ul id="newsprk_menu"><a href="#" className="close-menu full"><span className="icon-close" />Close</a>
                    <li className="has-sub"><a href="#">Home <i className="fal fa-angle-down" /></a>
                        <ul style={{display: 'none'}}>
                        <li className="has-sub"><a href="index.html">Home 1 <i className="fal fa-angle-right" /></a>
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
                            <a className="dd-toggle" href="#"><span className="icon-plus" /></a></li>
                        <li className="has-sub"><a href="dark/index.html">Home 2 <i className="fal fa-angle-right" /></a>
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
                            <a className="dd-toggle" href="#"><span className="icon-plus" /></a></li>
                        <li className="has-sub"><a href="theme-3/index.html">Home 3 <i className="fal fa-angle-right" /></a>
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
                            <a className="dd-toggle" href="#"><span className="icon-plus" /></a></li>
                        <li className="has-sub"><a href="theme-4/index.html">Home 4 <i className="fal fa-angle-right" /></a>
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
                            <a className="dd-toggle" href="#"><span className="icon-plus" /></a></li>
                        </ul>
                        <a className="dd-toggle" href="#"><span className="icon-plus" /></a></li>
                    <li className="has-sub"><a href="#">Pages <i className="fal fa-angle-down" /></a>
                        <ul style={{display: 'none'}}>
                        <li><a href="about.html">About</a>
                        </li>
                        <li><a href="archive.html">Archive</a>
                        </li>
                        <li><a href="contact.html">Contact Us</a>
                        </li>
                        <li><a href="404.html">404</a>
                        </li>
                        </ul>
                        <a className="dd-toggle" href="#"><span className="icon-plus" /></a></li>
                    <li className="has-sub"><a href="#">Posts <i className="fal fa-angle-down" /></a>
                        <ul style={{display: 'none'}}>
                        <li className="has-sub"><a href="#">General Posts <i className="fal fa-angle-right" /></a>
                            <ul>
                            <li><a href="post1.html">Post 1</a>
                            </li>
                            <li><a href="post2.html">Post 2</a>
                            </li>
                            <li><a href="post3.html">Post 3</a>
                            </li>
                            </ul>
                            <a className="dd-toggle" href="#"><span className="icon-plus" /></a></li>
                        <li className="has-sub"><a href="#">Video Posts <i className="fal fa-angle-right" /></a>
                            <ul>
                            <li><a href="video_post1.html">Video Style 1</a>
                            </li>
                            <li><a href="video_post2.html">Video Style 2</a>
                            </li>
                            <li><a href="video_post3.html">Video Style 3</a>
                            </li>
                            </ul>
                            <a className="dd-toggle" href="#"><span className="icon-plus" /></a></li>
                        <li className="has-sub"><a href="#">Audio Posts <i className="fal fa-angle-right" /></a>
                            <ul>
                            <li><a href="audio_post1.html">Audio Style 1</a>
                            </li>
                            <li><a href="audio_post2.html">Audio Style 2</a>
                            </li>
                            <li><a href="audio_post3.html">Audio Style 3</a>
                            </li>
                            </ul>
                            <a className="dd-toggle" href="#"><span className="icon-plus" /></a></li>
                        <li className="has-sub"><a href="#">Sidebars <i className="fal fa-angle-right" /></a>
                            <ul>
                            <li><a href="post1.html">Right Sidebar</a>
                            </li>
                            <li><a href="left_post2.html">Left Sidebar</a>
                            </li>
                            <li className="has-sub"><a href="post2.html">No Sidebar <i className="fal fa-angle-right" /></a>
                                <ul>
                                <li><a href="#">Simple menu</a></li>
                                </ul>
                                <a className="dd-toggle" href="#"><span className="icon-plus" /></a></li>
                            </ul>
                            <a className="dd-toggle" href="#"><span className="icon-plus" /></a></li>
                        </ul>
                        <a className="dd-toggle" href="#"><span className="icon-plus" /></a></li>
                    <li className="has-sub"><a href="#">Categories <i className="fal fa-angle-down" /></a>
                        <ul style={{display: 'none'}}>
                        <li className="active"><a href="business.html">Business</a>
                        </li>
                        <li><a href="entertainment.html">Entertainment</a>
                        </li>
                        <li><a href="feature.html">Features</a>
                        </li>
                        <li><a href="sports.html">Sports</a>
                        </li>
                        <li><a href="trending.html">Trending</a>
                        </li>
                        </ul>
                        <a className="dd-toggle" href="#"><span className="icon-plus" /></a></li>
                    <li><a href="#world">World</a></li>
                    <li><a href="#sports">Sports</a></li>
                    <li><a href="contact.html">Contact</a></li>
                    </ul>
                </div>
                </div>
                <div className="col-6 col-lg-4 align-self-center">
                <div className="menu_right">
                    <div className="users_area">
                    <ul className="inline">
                        <li className="search_btn"><i className="far fa-search" />
                        </li>
                        <li><i className="fal fa-user-circle" />
                        </li>
                    </ul>
                    </div>
                    <div className="lang d-none d-xl-block">
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
                        <div className="temp_icon">
                        <img src="assets/img/icon/temp.png" alt />
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

    </>
  )
}
