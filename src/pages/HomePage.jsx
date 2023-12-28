import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import axiosClient from '../api/axiox';
import ReletedPopularLatest from '../Component/Home/ReletedPopularLatest';
import MainNews from './mainNews/MainNews';

export default function HomePage() {

  const [slider, setSlider] = useState(false);
  const getSliderPost = async () => {
      // setLoader(true);
      const { data } = await axiosClient.get("asian/slider-posts");
      // setLoader(false);
      setSlider(data.data)
      console.log(data.data);
    };
  
    useEffect(() => {
      getSliderPost();
    }, []);
  return (
    <>
      <div>
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
                        <img src="assets/img/header/slider/hside4.jpg" alt />
                      </a>
                    </div>
                  </div>
                  <div className="single_post_text">
                    <h4><a href="post1.html">The home decorations document: photograph of an</a></h4>
                    <p>People have been infected</p>
                  </div>
                </div>
                <div className="single_post widgets_small post_type5">
                  <div className="post_img">
                    <div className="img_wrap">
                      <a href="#">
                        <img src="assets/img/header/slider/hside5.jpg" alt />
                      </a>
                    </div>
                  </div>
                  <div className="single_post_text">
                    <h4><a href="post1.html">U.S. Response subash says he will label regions by risk of…</a></h4>
                    <p>People have been infected</p>
                  </div>
                </div>
                <div className="single_post widgets_small post_type5">
                  <div className="post_img">
                    <div className="img_wrap">
                      <a href="#">
                        <img src="assets/img/header/slider/hside6.jpg" alt />
                      </a>
                    </div>
                  </div>
                  <div className="single_post_text">
                    <h4><a href="post1.html">Stimul package will transform the government fundamentally.</a></h4>
                    <p>People have been infected</p>
                  </div>
                </div>
                <div className="single_post widgets_small post_type5">
                  <div className="post_img">
                    <div className="img_wrap">
                      <a href="#">
                        <img src="assets/img/header/slider/hside1.jpg" alt />
                      </a>
                    </div>
                  </div>
                  <div className="single_post_text">
                    <h4><a href="post1.html">U.S. Response subash says he will label regions by risk of…</a></h4>
                    <p>People have been infected </p>
                  </div>
                </div>
                <div className="single_post widgets_small post_type5">
                  <div className="post_img">
                    <div className="img_wrap">
                      <a href="#">
                        <img src="assets/img/header/slider/hside2.jpg" alt />
                      </a>
                    </div>
                  </div>
                  <div className="single_post_text">
                    <h4><a href="post1.html">U.S. Response subash says he will label regions by risk of…</a></h4>
                    <p>People have been infected</p>
                  </div>
                </div>
                <div className="single_post widgets_small post_type5">
                  <div className="post_img">
                    <div className="img_wrap">
                      <a href="#">
                        <img src="assets/img/header/slider/hside3.jpg" alt />
                      </a>
                    </div>
                  </div>
                  <div className="single_post_text">
                    <h4><a href="post1.html">U.S. Response subash says he will label regions by risk of…</a></h4>
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
    </div>
    <div className="post_gallary_area fifth_bg mb40">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="row">
              <div className="col-xl-8">
              {Object.keys(slider).map((key, index) => {
                  const newsObject = slider[key];
                  console.log(newsObject)
                  if(index == 0){
                  return (
                <div className="slider_demo2 slick-initialized slick-slider">
                  <div className="slick-list draggable">
                    <div className="slick-track" style={{opacity: 1, width: 6570}}>
                      <div className="slick-slide slick-current slick-active" data-slick-index={0} aria-hidden="false" style={{width: 730, position: 'relative', left: 0, top: 0, zIndex: 999, opacity: 1}}>
                        <div>
                          <div className="single_post post_type6 xs-mb30" style={{width: '100%', display: 'inline-block'}}>
                            <div className="post_img gradient1">
                              <img src={newsObject.path_link} width={'100%'} height={`100%`} alt />	<span className="tranding">
                                <i className="fas fa-play" />
                              </span>
                            </div>
                            <div className="single_post_text">
                            {/* <Link className='btn' to={`/single/news/${newsObject.uuid}`}> */}
                            <Link className='btn' to={`/${newsObject.name}/news/${newsObject.id}/${newsObject.uuid}`}>
                              <div className="meta meta_separator1">	<a href="#" tabIndex={0}>TECHNOLOGY</a>
                                <a href="#" tabIndex={0}>March 26, 2020</a>
                              </div>
                              <h4><a className="play_btn" href="video_post1.html" tabIndex={0}>Japan’s virus success has puzzled the world. Is its luck running out?</a></h4>
                              <div className="space-10" />
                              <p className="post-p">The property, complete with 30-seat screening from room, a 100-seat amphitheater and a swimming pond with sandy shower…</p>
                              </Link>
                            </div>
                          </div></div></div><div className="slick-slide" data-slick-index={1} aria-hidden="true" style={{width: 730, position: 'relative', left: '-730px', top: 0, zIndex: 998, opacity: 0}} tabIndex={-1}><div><div className="single_post post_type6 xs-mb30" style={{width: '100%', display: 'inline-block'}}>
                            <div className="post_img gradient1">
                              <img src="assets/img/header/sider-top2.jpg" alt />	<span className="tranding">
                                <i className="fas fa-play" />
                              </span>
                            </div>
                            <div className="single_post_text">
                              <div className="meta meta_separator1">	<a href="#" tabIndex={-1}>TECHNOLOGY</a>
                                <a href="#" tabIndex={-1}>March 26, 2020</a>
                              </div>
                              <h4><a className="play_btn" href="video_post1.html" tabIndex={-1}>Copa America: Luis Suarez from devastated US America</a></h4>
                              <div className="space-10" />
                              <p className="post-p">The property, complete with 30-seat screening from room, a 100-seat amphitheater and a swimming pond with sandy shower…</p>
                            </div>
                          </div></div></div><div className="slick-slide" data-slick-index={2} aria-hidden="true" style={{width: 730, position: 'relative', left: '-1460px', top: 0, zIndex: 998, opacity: 0}} tabIndex={-1}><div><div className="single_post post_type6 xs-mb30" style={{width: '100%', display: 'inline-block'}}>
                            <div className="post_img gradient1">
                              <img src="assets/img/header/sider-top.jpg" alt />	<span className="tranding">
                                <i className="fas fa-play" />
                              </span>
                            </div>
                            <div className="single_post_text">
                              <div className="meta meta_separator1">	<a href="#" tabIndex={-1}>TECHNOLOGY</a>
                                <a href="#" tabIndex={-1}>March 26, 2020</a>
                              </div>
                              <h4><a className="play_btn" href="video_post1.html" tabIndex={-1}>Copa America: Luis Suarez from devastated US America</a></h4>
                              <div className="space-10" />
                              <p className="post-p">The property, complete with 30-seat screening from room, a 100-seat amphitheater and a swimming pond with sandy shower…</p>
                            </div>
                          </div></div></div><div className="slick-slide" data-slick-index={3} aria-hidden="true" style={{width: 730, position: 'relative', left: '-2190px', top: 0, zIndex: 998, opacity: 0}} tabIndex={-1}><div><div className="single_post post_type6 xs-mb30" style={{width: '100%', display: 'inline-block'}}>
                            <div className="post_img gradient1">
                              <img src="assets/img/header/sider-top2.jpg" alt />	<span className="tranding">
                                <i className="fas fa-play" />
                              </span>
                            </div>
                            <div className="single_post_text">
                              <div className="meta meta_separator1">	<a href="#" tabIndex={-1}>TECHNOLOGY</a>
                                <a href="#" tabIndex={-1}>March 26, 2020</a>
                              </div>
                              <h4><a className="play_btn" href="video_post1.html" tabIndex={-1}>Japan’s virus success has puzzled the world. Is its luck running out?</a></h4>
                              <div className="space-10" />
                              <p className="post-p">The property, complete with 30-seat screening from room, a 100-seat amphitheater and a swimming pond with sandy shower…</p>
                            </div>
                          </div></div></div><div className="slick-slide" data-slick-index={4} aria-hidden="true" style={{width: 730, position: 'relative', left: '-2920px', top: 0, zIndex: 998, opacity: 0}} tabIndex={-1}><div><div className="single_post post_type6 xs-mb30" style={{width: '100%', display: 'inline-block'}}>
                            <div className="post_img gradient1">
                              <img src="assets/img/header/sider-top.jpg" alt />	<span className="tranding">
                                <i className="fas fa-play" />
                              </span>
                            </div>
                            <div className="single_post_text">
                              <div className="meta meta_separator1">	<a href="#" tabIndex={-1}>TECHNOLOGY</a>
                                <a href="#" tabIndex={-1}>March 26, 2020</a>
                              </div>
                              <h4><a className="play_btn" href="video_post1.html" tabIndex={-1}>Copa America: Luis Suarez from devastated US America</a></h4>
                              <div className="space-10" />
                              <p className="post-p">The property, complete with 30-seat screening from room, a 100-seat amphitheater and a swimming pond with sandy shower…</p>
                            </div>
                          </div></div></div><div className="slick-slide" data-slick-index={5} aria-hidden="true" style={{width: 730, position: 'relative', left: '-3650px', top: 0, zIndex: 998, opacity: 0}} tabIndex={-1}><div><div className="single_post post_type6 xs-mb30" style={{width: '100%', display: 'inline-block'}}>
                            <div className="post_img gradient1">
                              <img src="assets/img/header/sider-top2.jpg" alt />	<span className="tranding">
                                <i className="fas fa-play" />
                              </span>
                            </div>
                            <div className="single_post_text">
                              <div className="meta meta_separator1">	<a href="#" tabIndex={-1}>TECHNOLOGY</a>
                                <a href="#" tabIndex={-1}>March 26, 2020</a>
                              </div>
                              <h4><a className="play_btn" href="video_post1.html" tabIndex={-1}>Japan’s virus success has puzzled the world. Is its luck running out?</a></h4>
                              <div className="space-10" />
                              <p className="post-p">The property, complete with 30-seat screening from room, a 100-seat amphitheater and a swimming pond with sandy shower…</p>
                            </div>
                          </div></div></div><div className="slick-slide" data-slick-index={6} aria-hidden="true" style={{width: 730, position: 'relative', left: '-4380px', top: 0, zIndex: 998, opacity: 0}} tabIndex={-1}><div><div className="single_post post_type6 xs-mb30" style={{width: '100%', display: 'inline-block'}}>
                            <div className="post_img gradient1">
                              <img src="assets/img/header/sider-top.jpg" alt />	<span className="tranding">
                                <i className="fas fa-play" />
                              </span>
                            </div>
                            <div className="single_post_text">
                              <div className="meta meta_separator1">	<a href="#" tabIndex={-1}>TECHNOLOGY</a>
                                <a href="#" tabIndex={-1}>March 26, 2020</a>
                              </div>
                              <h4><a className="play_btn" href="video_post1.html" tabIndex={-1}>Copa America: Luis Suarez from devastated US America</a></h4>
                              <div className="space-10" />
                              <p className="post-p">The property, complete with 30-seat screening from room, a 100-seat amphitheater and a swimming pond with sandy shower…</p>
                            </div>
                          </div></div></div><div className="slick-slide" data-slick-index={7} aria-hidden="true" style={{width: 730, position: 'relative', left: '-5110px', top: 0, zIndex: 998, opacity: 0}} tabIndex={-1}><div><div className="single_post post_type6 xs-mb30" style={{width: '100%', display: 'inline-block'}}>
                            <div className="post_img gradient1">
                              <img src="assets/img/header/sider-top2.jpg" alt />	<span className="tranding">
                                <i className="fas fa-play" />
                              </span>
                            </div>
                            <div className="single_post_text">
                              <div className="meta meta_separator1">	<a href="#" tabIndex={-1}>TECHNOLOGY</a>
                                <a href="#" tabIndex={-1}>March 26, 2020</a>
                              </div>
                              <h4><a className="play_btn" href="video_post1.html" tabIndex={-1}>Japan’s virus success has puzzled the world. Is its luck running out?</a></h4>
                              <div className="space-10" />
                              <p className="post-p">The property, complete with 30-seat screening from room, a 100-seat amphitheater and a swimming pond with sandy shower…</p>
                            </div>
                          </div></div></div><div className="slick-slide" data-slick-index={8} aria-hidden="true" style={{width: 730, position: 'relative', left: '-5840px', top: 0, zIndex: 998, opacity: 0}} tabIndex={-1}><div><div className="single_post post_type6 xs-mb30" style={{width: '100%', display: 'inline-block'}}>
                            <div className="post_img gradient1">
                              <img src="assets/img/header/sider-top2.jpg" alt />	<span className="tranding">
                                <i className="fas fa-play" />
                              </span>
                            </div>
                            <div className="single_post_text">
                              <div className="meta meta_separator1">	<a href="#" tabIndex={-1}>TECHNOLOGY</a>
                                <a href="#" tabIndex={-1}>March 26, 2020</a>
                              </div>
                              <h4><a className="play_btn" href="video_post1.html" tabIndex={-1}>Copa America: Luis Suarez from devastated US America</a></h4>
                              <div className="space-10" />
                              <p className="post-p">The property, complete with 30-seat screening from room, a 100-seat amphitheater and a swimming pond with sandy shower…</p>
                            </div>
                          </div>
                        </div>
                        </div>
                      </div>
                    </div>
                </div>
               );
              }

              })}
                <div className="slider_demo1 slick-initialized slick-slider"><div className="slider_arrow arrow_left slick-arrow" style={{display: 'block'}}><i className="fal fa-angle-left" /></div><div className="slick-list draggable" style={{padding: '0px 50px'}}><div className="slick-track" style={{opacity: 1, width: 2340, transform: 'translate3d(-450px, 0px, 0px)'}}><div className="slick-slide slick-cloned" data-slick-index={-8} aria-hidden="true" style={{width: 90}} tabIndex={-1}><div><div className="single_gallary_item" style={{width: '100%', display: 'inline-block'}}>
                            <img src="assets/img/blog/post_gsi2.jpg" alt="image" />
                          </div></div></div><div className="slick-slide slick-cloned" data-slick-index={-7} aria-hidden="true" style={{width: 90}} tabIndex={-1}><div><div className="single_gallary_item" style={{width: '100%', display: 'inline-block'}}>
                            <img src="assets/img/blog/post_gsi3.jpg" alt="image" />
                          </div></div></div><div className="slick-slide slick-cloned" data-slick-index={-6} aria-hidden="true" style={{width: 90}} tabIndex={-1}><div><div className="single_gallary_item" style={{width: '100%', display: 'inline-block'}}>
                            <img src="assets/img/blog/post_gsi4.jpg" alt="image" />
                          </div></div></div><div className="slick-slide slick-cloned" data-slick-index={-5} aria-hidden="true" style={{width: 90}} tabIndex={-1}><div><div className="single_gallary_item" style={{width: '100%', display: 'inline-block'}}>
                            <img src="assets/img/blog/post_gsi5.jpg" alt="image" />
                          </div></div></div><div className="slick-slide slick-cloned" data-slick-index={-4} aria-hidden="true" style={{width: 90}} tabIndex={-1}><div><div className="single_gallary_item" style={{width: '100%', display: 'inline-block'}}>
                            <img src="assets/img/blog/post_gsi6.jpg" alt="image" />
                          </div></div></div><div className="slick-slide slick-cloned slick-active" data-slick-index={-3} aria-hidden="false" style={{width: 90}} tabIndex={-1}><div><div className="single_gallary_item" style={{width: '100%', display: 'inline-block'}}>
                            <img src="assets/img/blog/post_gsi7.jpg" alt="image" />
                          </div></div></div><div className="slick-slide slick-cloned slick-active" data-slick-index={-2} aria-hidden="false" style={{width: 90}} tabIndex={-1}><div><div className="single_gallary_item" style={{width: '100%', display: 'inline-block'}}>
                            <img src="assets/img/blog/post_gsi4.jpg" alt />
                          </div></div></div><div className="slick-slide slick-cloned slick-active" data-slick-index={-1} aria-hidden="false" style={{width: 90}} tabIndex={-1}><div><div className="single_gallary_item" style={{width: '100%', display: 'inline-block'}}>
                            <img src="assets/img/blog/post_gsi3.jpg" alt />
                          </div></div></div><div className="slick-slide slick-current slick-active slick-center" data-slick-index={0} aria-hidden="false" style={{width: 90}}><div><div className="single_gallary_item" style={{width: '100%', display: 'inline-block'}}>
                            <img src="assets/img/blog/post_gsi1.jpg" alt="image" />
                          </div></div></div><div className="slick-slide slick-active" data-slick-index={1} aria-hidden="false" style={{width: 90}}><div><div className="single_gallary_item" style={{width: '100%', display: 'inline-block'}}>
                            <img src="assets/img/blog/post_gsi2.jpg" alt="image" />
                          </div></div></div><div className="slick-slide slick-active" data-slick-index={2} aria-hidden="false" style={{width: 90}}><div><div className="single_gallary_item" style={{width: '100%', display: 'inline-block'}}>
                            <img src="assets/img/blog/post_gsi3.jpg" alt="image" />
                          </div></div></div><div className="slick-slide slick-active" data-slick-index={3} aria-hidden="false" style={{width: 90}}><div><div className="single_gallary_item" style={{width: '100%', display: 'inline-block'}}>
                            <img src="assets/img/blog/post_gsi4.jpg" alt="image" />
                          </div></div></div><div className="slick-slide" data-slick-index={4} aria-hidden="true" style={{width: 90}}><div><div className="single_gallary_item" style={{width: '100%', display: 'inline-block'}}>
                            <img src="assets/img/blog/post_gsi5.jpg" alt="image" />
                          </div></div></div><div className="slick-slide" data-slick-index={5} aria-hidden="true" style={{width: 90}}><div><div className="single_gallary_item" style={{width: '100%', display: 'inline-block'}}>
                            <img src="assets/img/blog/post_gsi6.jpg" alt="image" />
                          </div></div></div><div className="slick-slide" data-slick-index={6} aria-hidden="true" style={{width: 90}}><div><div className="single_gallary_item" style={{width: '100%', display: 'inline-block'}}>
                            <img src="assets/img/blog/post_gsi7.jpg" alt="image" />
                          </div></div></div><div className="slick-slide" data-slick-index={7} aria-hidden="true" style={{width: 90}} tabIndex={-1}><div><div className="single_gallary_item" style={{width: '100%', display: 'inline-block'}}>
                            <img src="assets/img/blog/post_gsi4.jpg" alt />
                          </div></div></div><div className="slick-slide" data-slick-index={8} aria-hidden="true" style={{width: 90}} tabIndex={-1}><div><div className="single_gallary_item" style={{width: '100%', display: 'inline-block'}}>
                            <img src="assets/img/blog/post_gsi3.jpg" alt />
                          </div></div></div><div className="slick-slide slick-cloned" data-slick-index={9} aria-hidden="true" style={{width: 90}} tabIndex={-1}><div><div className="single_gallary_item" style={{width: '100%', display: 'inline-block'}}>
                            <img src="assets/img/blog/post_gsi1.jpg" alt="image" />
                          </div></div></div><div className="slick-slide slick-cloned slick-center" data-slick-index={10} aria-hidden="true" style={{width: 90}} tabIndex={-1}><div><div className="single_gallary_item" style={{width: '100%', display: 'inline-block'}}>
                            <img src="assets/img/blog/post_gsi2.jpg" alt="image" />
                          </div></div></div><div className="slick-slide slick-cloned" data-slick-index={11} aria-hidden="true" style={{width: 90}} tabIndex={-1}><div><div className="single_gallary_item" style={{width: '100%', display: 'inline-block'}}>
                            <img src="assets/img/blog/post_gsi3.jpg" alt="image" />
                          </div></div></div><div className="slick-slide slick-cloned" data-slick-index={12} aria-hidden="true" style={{width: 90}} tabIndex={-1}><div><div className="single_gallary_item" style={{width: '100%', display: 'inline-block'}}>
                            <img src="assets/img/blog/post_gsi4.jpg" alt="image" />
                          </div></div></div><div className="slick-slide slick-cloned" data-slick-index={13} aria-hidden="true" style={{width: 90}} tabIndex={-1}><div><div className="single_gallary_item" style={{width: '100%', display: 'inline-block'}}>
                            <img src="assets/img/blog/post_gsi5.jpg" alt="image" />
                          </div></div></div><div className="slick-slide slick-cloned" data-slick-index={14} aria-hidden="true" style={{width: 90}} tabIndex={-1}><div><div className="single_gallary_item" style={{width: '100%', display: 'inline-block'}}>
                            <img src="assets/img/blog/post_gsi6.jpg" alt="image" />
                          </div></div></div><div className="slick-slide slick-cloned" data-slick-index={15} aria-hidden="true" style={{width: 90}} tabIndex={-1}><div><div className="single_gallary_item" style={{width: '100%', display: 'inline-block'}}>
                            <img src="assets/img/blog/post_gsi7.jpg" alt="image" />
                          </div></div></div><div className="slick-slide slick-cloned" data-slick-index={16} aria-hidden="true" style={{width: 90}} tabIndex={-1}><div><div className="single_gallary_item" style={{width: '100%', display: 'inline-block'}}>
                            <img src="assets/img/blog/post_gsi4.jpg" alt />
                          </div></div></div><div className="slick-slide slick-cloned" data-slick-index={17} aria-hidden="true" style={{width: 90}} tabIndex={-1}><div><div className="single_gallary_item" style={{width: '100%', display: 'inline-block'}}>
                            <img src="assets/img/blog/post_gsi3.jpg" alt />
                          </div></div></div></div></div><div className="slider_arrow arrow_right slick-arrow" style={{display: 'block'}}><i className="fal fa-angle-right" /></div></div>
              </div>
              <div className="col-xl-4">
                <ReletedPopularLatest />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <MainNews />


  <div className="container">
  <div className="row">
    <div className="col-lg-6 col-lg-8">
      <h2 className="widget-title">Trending News</h2>
      <div className="carousel_post2_type3 nav_style1 owl-carousel owl-loaded owl-drag">
        {/*CAROUSEL START*/}
        <div className="owl-stage-outer"><div className="owl-stage" style={{width: 2660, transform: 'translate3d(-760px, 0px, 0px)', transition: 'all 0.25s ease 0s'}}><div className="owl-item cloned" style={{width: 350, marginRight: 30}}><div className="single_post post_type3">
                <div className="post_img">
                  <div className="img_wrap">
                    <img src="assets/img/trending/trendbig2.jpg" alt />
                  </div>
                </div>
                <div className="single_post_text">
                  <div className="meta3">	<a href="#">TECHNOLOGY</a>
                    <a href="#">March 26, 2020</a>
                  </div>
                  <h4><a href="post1.html">Japan’s virus success has puzzled the world. Is its luck running out?</a></h4>
                  <div className="space-10" />
                  <p className="post-p">The property, complete with 30-seat screening from room, a 100-seat amphitheater and a swimming pond with sandy shower…</p>
                </div>
              </div></div><div className="owl-item cloned" style={{width: 350, marginRight: 30}}><div className="single_post post_type3">
                <div className="post_img">
                  <div className="img_wrap">
                    <img src="assets/img/trending/trendbig2.jpg" alt />
                  </div>
                </div>
                <div className="single_post_text">
                  <div className="meta3">	<a href="#">TECHNOLOGY</a>
                    <a href="#">March 26, 2020</a>
                  </div>
                  <h4><a href="post1.html">Copa America: Luis Suarez from devastated US</a></h4>
                  <div className="space-10" />
                  <p className="post-p">The property, complete with 30-seat screening from room, a 100-seat amphitheater and a swimming pond with sandy shower…</p>
                </div>
              </div></div><div className="owl-item active" style={{width: 350, marginRight: 30}}><div className="single_post post_type3">
                <div className="post_img">
                  <div className="img_wrap">
                    <img src="assets/img/trending/trendbig1.jpg" alt />
                  </div>	<span className="tranding">
                    <i className="fas fa-bolt" />
                  </span>
                </div>
                <div className="single_post_text">
                  <div className="meta3">	<a href="#">TECHNOLOGY</a>
                    <a href="#">March 26, 2020</a>
                  </div>
                  <h4><a href="post1.html">There may be no consoles in the future ea exec says</a></h4>
                  <div className="space-10" />
                  <p className="post-p">The property, complete with 30-seat screening from room, a 100-seat amphitheater and a swimming pond with sandy shower…</p>
                </div>
              </div></div><div className="owl-item active" style={{width: 350, marginRight: 30}}><div className="single_post post_type3">
                <div className="post_img">
                  <div className="img_wrap">
                    <img src="assets/img/trending/trendbig2.jpg" alt />
                  </div>
                </div>
                <div className="single_post_text">
                  <div className="meta3">	<a href="#">TECHNOLOGY</a>
                    <a href="#">March 26, 2020</a>
                  </div>
                  <h4><a href="post1.html">Japan’s virus success has puzzled the world. Is its luck running out?</a></h4>
                  <div className="space-10" />
                  <p className="post-p">The property, complete with 30-seat screening from room, a 100-seat amphitheater and a swimming pond with sandy shower…</p>
                </div>
              </div></div><div className="owl-item" style={{width: 350, marginRight: 30}}><div className="single_post post_type3">
                <div className="post_img">
                  <div className="img_wrap">
                    <img src="assets/img/trending/trendbig2.jpg" alt />
                  </div>
                </div>
                <div className="single_post_text">
                  <div className="meta3">	<a href="#">TECHNOLOGY</a>
                    <a href="#">March 26, 2020</a>
                  </div>
                  <h4><a href="post1.html">Copa America: Luis Suarez from devastated US</a></h4>
                  <div className="space-10" />
                  <p className="post-p">The property, complete with 30-seat screening from room, a 100-seat amphitheater and a swimming pond with sandy shower…</p>
                </div>
              </div></div><div className="owl-item cloned" style={{width: 350, marginRight: 30}}><div className="single_post post_type3">
                <div className="post_img">
                  <div className="img_wrap">
                    <img src="assets/img/trending/trendbig1.jpg" alt />
                  </div>	<span className="tranding">
                    <i className="fas fa-bolt" />
                  </span>
                </div>
                <div className="single_post_text">
                  <div className="meta3">	<a href="#">TECHNOLOGY</a>
                    <a href="#">March 26, 2020</a>
                  </div>
                  <h4><a href="post1.html">There may be no consoles in the future ea exec says</a></h4>
                  <div className="space-10" />
                  <p className="post-p">The property, complete with 30-seat screening from room, a 100-seat amphitheater and a swimming pond with sandy shower…</p>
                </div>
              </div></div><div className="owl-item cloned" style={{width: 350, marginRight: 30}}><div className="single_post post_type3">
                <div className="post_img">
                  <div className="img_wrap">
                    <img src="assets/img/trending/trendbig2.jpg" alt />
                  </div>
                </div>
                <div className="single_post_text">
                  <div className="meta3">	<a href="#">TECHNOLOGY</a>
                    <a href="#">March 26, 2020</a>
                  </div>
                  <h4><a href="post1.html">Japan’s virus success has puzzled the world. Is its luck running out?</a></h4>
                  <div className="space-10" />
                  <p className="post-p">The property, complete with 30-seat screening from room, a 100-seat amphitheater and a swimming pond with sandy shower…</p>
                </div>
              </div></div></div></div><div className="owl-nav"><div className="owl-prev"><i className="fal fa-angle-left" /></div><div className="owl-next"><i className="fal fa-angle-right" /></div></div><div className="owl-dots"><div className="owl-dot active"><span /></div><div className="owl-dot"><span /></div></div></div>
      <div className="border_black" />
      <div className="space-30" />
      <div className="row">
        <div className="col-lg-6">
          <div className="single_post widgets_small">
            <div className="post_img">
              <div className="img_wrap">
                <img src="assets/img/trending/transm4.jpg" alt />
              </div>	<span className="tranding">
                <i className="fas fa-bolt" />
              </span>
            </div>
            <div className="single_post_text">
              <div className="meta2">	<a href="#">TECHNOLOGY</a>
                <a href="#">March 26, 2020</a>
              </div>
              <h4><a href="post1.html">Nancy Zhang a Chinese busy woman and Dhaka</a></h4>
            </div>
          </div>
          <div className="space-15" />
          <div className="border_black" />
          <div className="space-15" />
          <div className="single_post widgets_small">
            <div className="post_img">
              <div className="img_wrap">
                <img src="assets/img/trending/transm5.jpg" alt />
              </div>	<span className="tranding">
                <i className="fas fa-bolt" />
              </span>
            </div>
            <div className="single_post_text">
              <div className="meta2">	<a href="#">TECHNOLOGY</a>
                <a href="#">March 26, 2020</a>
              </div>
              <h4><a href="post1.html">U.S. Response subash says he will label regions by risk of…</a></h4>
            </div>
          </div>
          <div className="space-15" />
          <div className="border_black" />
          <div className="space-15" />
          <div className="single_post widgets_small">
            <div className="post_img">
              <div className="img_wrap">
                <img src="assets/img/trending/transm6.jpg" alt />
              </div>	<span className="tranding">
                <i className="fas fa-bolt" />
              </span>
            </div>
            <div className="single_post_text">
              <div className="meta2">	<a href="#">TECHNOLOGY</a>
                <a href="#">March 26, 2020</a>
              </div>
              <h4><a href="post1.html">Venezuela elan govt and opposit the property collect</a></h4>
            </div>
          </div>
        </div>
        <div className="col-lg-6">
          <div className="single_post widgets_small">
            <div className="post_img">
              <div className="img_wrap">
                <img src="assets/img/trending/transm1.jpg" alt />
              </div>	<span className="tranding">
                <i className="fas fa-bolt" />
              </span>
            </div>
            <div className="single_post_text">
              <div className="meta2">	<a href="#">TECHNOLOGY</a>
                <a href="#">March 26, 2020</a>
              </div>
              <h4><a href="post1.html">Nancy Zhang a Chinese busy woman and Dhaka</a></h4>
            </div>
          </div>
          <div className="space-15" />
          <div className="border_black" />
          <div className="space-15" />
          <div className="single_post widgets_small">
            <div className="post_img">
              <div className="img_wrap">
                <img src="assets/img/trending/transm2.jpg" alt />
              </div>	<span className="tranding">
                <i className="fas fa-bolt" />
              </span>
            </div>
            <div className="single_post_text">
              <div className="meta2">	<a href="#">TECHNOLOGY</a>
                <a href="#">March 26, 2020</a>
              </div>
              <h4><a href="post1.html">U.S. Response subash says he will label regions by risk of…</a></h4>
            </div>
          </div>
          <div className="space-15" />
          <div className="border_black" />
          <div className="space-15" />
          <div className="single_post widgets_small">
            <div className="post_img">
              <div className="img_wrap">
                <img src="assets/img/trending/transm6.jpg" alt />
              </div>	<span className="tranding">
                <i className="fas fa-bolt" />
              </span>
            </div>
            <div className="single_post_text">
              <div className="meta2">	<a href="#">TECHNOLOGY</a>
                <a href="#">March 26, 2020</a>
              </div>
              <h4><a href="post1.html">Venezuela elan govt and opposit the property collect</a></h4>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="col-md-12 col-lg-4">
      <div className="follow_box widget mb30 mt-md-60">
        <h2 className="widget-title">Follow Us</h2>
        <div className="social_shares">
          <a className="single_social social_facebook" href="#">	<span className="follow_icon"><i className="fab fa-facebook-f" /></span>
            34,456 <span className="icon_text">Fans</span>
          </a>
          <a className="single_social social_twitter" href="#">	<span className="follow_icon"><i className="fab fa-twitter" /></span>
            34,456 <span className="icon_text">Followers</span>
          </a>
          <a className="single_social social_youtube" href="#">	<span className="follow_icon"><i className="fab fa-youtube" /></span>
            34,456 <span className="icon_text">Subscribers</span>
          </a>
          <a className="single_social social_instagram" href="#">	<span className="follow_icon"><i className="fab fa-instagram" /></span>
            34,456 <span className="icon_text">Followers</span>
          </a>
          <a className="single_social social_vimeo" href="#">	<span className="follow_icon"><i className="fab fa-vimeo-v" /></span>
            34,456 <span className="icon_text">Followers</span>
          </a>
          <a className="single_social social_medium" href="#">	<span className="follow_icon"><i className="fab fa-medium-m" /></span>
            34,456 <span className="icon_text">Followers</span>
          </a>
        </div>
      </div>
      {/*:::::: POST TYPE 2 START :::::::*/}
      <div className="widget tab_widgets mb30">
        <h2 className="widget-title">Most View</h2>
        <div className="post_type2_carousel owl-carousel nav_style1 owl-loaded owl-drag">
          {/*CAROUSEL START*/}
          <div className="owl-stage-outer"><div className="owl-stage" style={{width: 2100, transform: 'translate3d(-700px, 0px, 0px)', transition: 'all 0s ease 0s'}}><div className="owl-item cloned" style={{width: 350}}><div className="single_post2_carousel">
                  <div className="single_post widgets_small type8">
                    <div className="post_img">
                      <div className="img_wrap">
                        <img src="assets/img/most_view/mostsm1.jpg" alt />
                      </div>	<span className="tranding">
                        <i className="fas fa-bolt" />
                      </span>
                    </div>
                    <div className="single_post_text">
                      <div className="meta2">	<a href="#">TECHNOLOGY</a>
                        <a href="#">March 26, 2020</a>
                      </div>
                      <h4><a href="post1.html">Nancy zhang a chinese busy woman and dhaka</a></h4>
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
                        <img src="assets/img/most_view/mostsm2.jpg" alt />
                      </div>
                    </div>
                    <div className="single_post_text">
                      <div className="meta2">	<a href="#">TECHNOLOGY</a>
                        <a href="#">March 26, 2020</a>
                      </div>
                      <h4><a href="post1.html">The billionaire Philan thropist read to learn</a></h4>
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
                        <img src="assets/img/most_view/mostsm3.jpg" alt />
                      </div>	<span className="tranding">
                        <i className="fas fa-bolt" />
                      </span>
                    </div>
                    <div className="single_post_text">
                      <div className="meta2">	<a href="#">TECHNOLOGY</a>
                        <a href="#">March 26, 2020</a>
                      </div>
                      <h4><a href="post1.html">Cheap smartphone sensor could help you</a></h4>
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
                        <img src="assets/img/most_view/mostsm4.jpg" alt />
                      </div>	<span className="tranding">
                        <i className="fas fa-bolt" />
                      </span>
                    </div>
                    <div className="single_post_text">
                      <div className="meta2">	<a href="#">TECHNOLOGY</a>
                        <a href="#">March 26, 2020</a>
                      </div>
                      <h4><a href="post1.html">Class property employ ancho red multi</a></h4>
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
                        <img src="assets/img/most_view/mostsm5.jpg" alt />
                      </div>
                    </div>
                    <div className="single_post_text">
                      <div className="meta2">	<a href="#">TECHNOLOGY</a>
                        <a href="#">March 26, 2020</a>
                      </div>
                      <h4><a href="post1.html">Best garden wing supplies for the horticu</a></h4>
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
                        <img src="assets/img/blog/blog_small3.jpg" alt />
                      </div>
                    </div>
                    <div className="single_post_text">
                      <div className="meta2">	<a href="#">TECHNOLOGY</a>
                        <a href="#">March 26, 2020</a>
                      </div>
                      <h4><a href="post1.html">Ratiffe to be Director of nation talent Trump</a></h4>
                    </div>
                    <div className="type8_count">
                      <h2>6</h2>
                    </div>
                  </div>
                </div></div><div className="owl-item cloned" style={{width: 350}}><div className="single_post2_carousel">
                  <div className="single_post widgets_small type8">
                    <div className="post_img">
                      <div className="img_wrap">
                        <img src="assets/img/most_view/mostsm1.jpg" alt />
                      </div>	<span className="tranding">
                        <i className="fas fa-bolt" />
                      </span>
                    </div>
                    <div className="single_post_text">
                      <div className="meta2">	<a href="#">TECHNOLOGY</a>
                        <a href="#">March 26, 2020</a>
                      </div>
                      <h4><a href="post1.html">Nancy zhang a chinese busy woman and dhaka</a></h4>
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
                        <img src="assets/img/most_view/mostsm2.jpg" alt />
                      </div>
                    </div>
                    <div className="single_post_text">
                      <div className="meta2">	<a href="#">TECHNOLOGY</a>
                        <a href="#">March 26, 2020</a>
                      </div>
                      <h4><a href="post1.html">The billionaire Philan thropist read to learn</a></h4>
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
                        <img src="assets/img/most_view/mostsm3.jpg" alt />
                      </div>	<span className="tranding">
                        <i className="fas fa-bolt" />
                      </span>
                    </div>
                    <div className="single_post_text">
                      <div className="meta2">	<a href="#">TECHNOLOGY</a>
                        <a href="#">March 26, 2020</a>
                      </div>
                      <h4><a href="post1.html">Cheap smartphone sensor could help you</a></h4>
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
                        <img src="assets/img/most_view/mostsm4.jpg" alt />
                      </div>	<span className="tranding">
                        <i className="fas fa-bolt" />
                      </span>
                    </div>
                    <div className="single_post_text">
                      <div className="meta2">	<a href="#">TECHNOLOGY</a>
                        <a href="#">March 26, 2020</a>
                      </div>
                      <h4><a href="post1.html">Class property employ ancho red multi</a></h4>
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
                        <img src="assets/img/most_view/mostsm5.jpg" alt />
                      </div>
                    </div>
                    <div className="single_post_text">
                      <div className="meta2">	<a href="#">TECHNOLOGY</a>
                        <a href="#">March 26, 2020</a>
                      </div>
                      <h4><a href="post1.html">Best garden wing supplies for the horticu</a></h4>
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
                        <img src="assets/img/blog/blog_small3.jpg" alt />
                      </div>
                    </div>
                    <div className="single_post_text">
                      <div className="meta2">	<a href="#">TECHNOLOGY</a>
                        <a href="#">March 26, 2020</a>
                      </div>
                      <h4><a href="post1.html">Ratiffe to be Director of nation talent Trump</a></h4>
                    </div>
                    <div className="type8_count">
                      <h2>6</h2>
                    </div>
                  </div>
                </div></div><div className="owl-item active" style={{width: 350}}><div className="single_post2_carousel">
                  <div className="single_post widgets_small type8">
                    <div className="post_img">
                      <div className="img_wrap">
                        <img src="assets/img/most_view/mostsm1.jpg" alt />
                      </div>	<span className="tranding">
                        <i className="fas fa-bolt" />
                      </span>
                    </div>
                    <div className="single_post_text">
                      <div className="meta2">	<a href="#">TECHNOLOGY</a>
                        <a href="#">March 26, 2020</a>
                      </div>
                      <h4><a href="post1.html">Nancy zhang a chinese busy woman and dhaka</a></h4>
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
                        <img src="assets/img/most_view/mostsm2.jpg" alt />
                      </div>
                    </div>
                    <div className="single_post_text">
                      <div className="meta2">	<a href="#">TECHNOLOGY</a>
                        <a href="#">March 26, 2020</a>
                      </div>
                      <h4><a href="post1.html">The billionaire Philan thropist read to learn</a></h4>
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
                        <img src="assets/img/most_view/mostsm3.jpg" alt />
                      </div>	<span className="tranding">
                        <i className="fas fa-bolt" />
                      </span>
                    </div>
                    <div className="single_post_text">
                      <div className="meta2">	<a href="#">TECHNOLOGY</a>
                        <a href="#">March 26, 2020</a>
                      </div>
                      <h4><a href="post1.html">Cheap smartphone sensor could help you</a></h4>
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
                        <img src="assets/img/most_view/mostsm4.jpg" alt />
                      </div>	<span className="tranding">
                        <i className="fas fa-bolt" />
                      </span>
                    </div>
                    <div className="single_post_text">
                      <div className="meta2">	<a href="#">TECHNOLOGY</a>
                        <a href="#">March 26, 2020</a>
                      </div>
                      <h4><a href="post1.html">Class property employ ancho red multi</a></h4>
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
                        <img src="assets/img/most_view/mostsm5.jpg" alt />
                      </div>
                    </div>
                    <div className="single_post_text">
                      <div className="meta2">	<a href="#">TECHNOLOGY</a>
                        <a href="#">March 26, 2020</a>
                      </div>
                      <h4><a href="post1.html">Best garden wing supplies for the horticu</a></h4>
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
                        <img src="assets/img/blog/blog_small3.jpg" alt />
                      </div>
                    </div>
                    <div className="single_post_text">
                      <div className="meta2">	<a href="#">TECHNOLOGY</a>
                        <a href="#">March 26, 2020</a>
                      </div>
                      <h4><a href="post1.html">Ratiffe to be Director of nation talent Trump</a></h4>
                    </div>
                    <div className="type8_count">
                      <h2>6</h2>
                    </div>
                  </div>
                </div></div><div className="owl-item" style={{width: 350}}><div className="single_post2_carousel">
                  <div className="single_post widgets_small type8">
                    <div className="post_img">
                      <div className="img_wrap">
                        <img src="assets/img/most_view/mostsm1.jpg" alt />
                      </div>	<span className="tranding">
                        <i className="fas fa-bolt" />
                      </span>
                    </div>
                    <div className="single_post_text">
                      <div className="meta2">	<a href="#">TECHNOLOGY</a>
                        <a href="#">March 26, 2020</a>
                      </div>
                      <h4><a href="post1.html">Nancy zhang a chinese busy woman and dhaka</a></h4>
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
                        <img src="assets/img/most_view/mostsm2.jpg" alt />
                      </div>
                    </div>
                    <div className="single_post_text">
                      <div className="meta2">	<a href="#">TECHNOLOGY</a>
                        <a href="#">March 26, 2020</a>
                      </div>
                      <h4><a href="post1.html">The billionaire Philan thropist read to learn</a></h4>
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
                        <img src="assets/img/most_view/mostsm3.jpg" alt />
                      </div>	<span className="tranding">
                        <i className="fas fa-bolt" />
                      </span>
                    </div>
                    <div className="single_post_text">
                      <div className="meta2">	<a href="#">TECHNOLOGY</a>
                        <a href="#">March 26, 2020</a>
                      </div>
                      <h4><a href="post1.html">Cheap smartphone sensor could help you</a></h4>
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
                        <img src="assets/img/most_view/mostsm4.jpg" alt />
                      </div>	<span className="tranding">
                        <i className="fas fa-bolt" />
                      </span>
                    </div>
                    <div className="single_post_text">
                      <div className="meta2">	<a href="#">TECHNOLOGY</a>
                        <a href="#">March 26, 2020</a>
                      </div>
                      <h4><a href="post1.html">Class property employ ancho red multi</a></h4>
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
                        <img src="assets/img/most_view/mostsm5.jpg" alt />
                      </div>
                    </div>
                    <div className="single_post_text">
                      <div className="meta2">	<a href="#">TECHNOLOGY</a>
                        <a href="#">March 26, 2020</a>
                      </div>
                      <h4><a href="post1.html">Best garden wing supplies for the horticu</a></h4>
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
                        <img src="assets/img/blog/blog_small3.jpg" alt />
                      </div>
                    </div>
                    <div className="single_post_text">
                      <div className="meta2">	<a href="#">TECHNOLOGY</a>
                        <a href="#">March 26, 2020</a>
                      </div>
                      <h4><a href="post1.html">Ratiffe to be Director of nation talent Trump</a></h4>
                    </div>
                    <div className="type8_count">
                      <h2>6</h2>
                    </div>
                  </div>
                </div></div><div className="owl-item cloned" style={{width: 350}}><div className="single_post2_carousel">
                  <div className="single_post widgets_small type8">
                    <div className="post_img">
                      <div className="img_wrap">
                        <img src="assets/img/most_view/mostsm1.jpg" alt />
                      </div>	<span className="tranding">
                        <i className="fas fa-bolt" />
                      </span>
                    </div>
                    <div className="single_post_text">
                      <div className="meta2">	<a href="#">TECHNOLOGY</a>
                        <a href="#">March 26, 2020</a>
                      </div>
                      <h4><a href="post1.html">Nancy zhang a chinese busy woman and dhaka</a></h4>
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
                        <img src="assets/img/most_view/mostsm2.jpg" alt />
                      </div>
                    </div>
                    <div className="single_post_text">
                      <div className="meta2">	<a href="#">TECHNOLOGY</a>
                        <a href="#">March 26, 2020</a>
                      </div>
                      <h4><a href="post1.html">The billionaire Philan thropist read to learn</a></h4>
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
                        <img src="assets/img/most_view/mostsm3.jpg" alt />
                      </div>	<span className="tranding">
                        <i className="fas fa-bolt" />
                      </span>
                    </div>
                    <div className="single_post_text">
                      <div className="meta2">	<a href="#">TECHNOLOGY</a>
                        <a href="#">March 26, 2020</a>
                      </div>
                      <h4><a href="post1.html">Cheap smartphone sensor could help you</a></h4>
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
                        <img src="assets/img/most_view/mostsm4.jpg" alt />
                      </div>	<span className="tranding">
                        <i className="fas fa-bolt" />
                      </span>
                    </div>
                    <div className="single_post_text">
                      <div className="meta2">	<a href="#">TECHNOLOGY</a>
                        <a href="#">March 26, 2020</a>
                      </div>
                      <h4><a href="post1.html">Class property employ ancho red multi</a></h4>
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
                        <img src="assets/img/most_view/mostsm5.jpg" alt />
                      </div>
                    </div>
                    <div className="single_post_text">
                      <div className="meta2">	<a href="#">TECHNOLOGY</a>
                        <a href="#">March 26, 2020</a>
                      </div>
                      <h4><a href="post1.html">Best garden wing supplies for the horticu</a></h4>
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
                        <img src="assets/img/blog/blog_small3.jpg" alt />
                      </div>
                    </div>
                    <div className="single_post_text">
                      <div className="meta2">	<a href="#">TECHNOLOGY</a>
                        <a href="#">March 26, 2020</a>
                      </div>
                      <h4><a href="post1.html">Ratiffe to be Director of nation talent Trump</a></h4>
                    </div>
                    <div className="type8_count">
                      <h2>6</h2>
                    </div>
                  </div>
                </div></div><div className="owl-item cloned" style={{width: 350}}><div className="single_post2_carousel">
                  <div className="single_post widgets_small type8">
                    <div className="post_img">
                      <div className="img_wrap">
                        <img src="assets/img/most_view/mostsm1.jpg" alt />
                      </div>	<span className="tranding">
                        <i className="fas fa-bolt" />
                      </span>
                    </div>
                    <div className="single_post_text">
                      <div className="meta2">	<a href="#">TECHNOLOGY</a>
                        <a href="#">March 26, 2020</a>
                      </div>
                      <h4><a href="post1.html">Nancy zhang a chinese busy woman and dhaka</a></h4>
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
                        <img src="assets/img/most_view/mostsm2.jpg" alt />
                      </div>
                    </div>
                    <div className="single_post_text">
                      <div className="meta2">	<a href="#">TECHNOLOGY</a>
                        <a href="#">March 26, 2020</a>
                      </div>
                      <h4><a href="post1.html">The billionaire Philan thropist read to learn</a></h4>
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
                        <img src="assets/img/most_view/mostsm3.jpg" alt />
                      </div>	<span className="tranding">
                        <i className="fas fa-bolt" />
                      </span>
                    </div>
                    <div className="single_post_text">
                      <div className="meta2">	<a href="#">TECHNOLOGY</a>
                        <a href="#">March 26, 2020</a>
                      </div>
                      <h4><a href="post1.html">Cheap smartphone sensor could help you</a></h4>
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
                        <img src="assets/img/most_view/mostsm4.jpg" alt />
                      </div>	<span className="tranding">
                        <i className="fas fa-bolt" />
                      </span>
                    </div>
                    <div className="single_post_text">
                      <div className="meta2">	<a href="#">TECHNOLOGY</a>
                        <a href="#">March 26, 2020</a>
                      </div>
                      <h4><a href="post1.html">Class property employ ancho red multi</a></h4>
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
                        <img src="assets/img/most_view/mostsm5.jpg" alt />
                      </div>
                    </div>
                    <div className="single_post_text">
                      <div className="meta2">	<a href="#">TECHNOLOGY</a>
                        <a href="#">March 26, 2020</a>
                      </div>
                      <h4><a href="post1.html">Best garden wing supplies for the horticu</a></h4>
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
                        <img src="assets/img/blog/blog_small3.jpg" alt />
                      </div>
                    </div>
                    <div className="single_post_text">
                      <div className="meta2">	<a href="#">TECHNOLOGY</a>
                        <a href="#">March 26, 2020</a>
                      </div>
                      <h4><a href="post1.html">Ratiffe to be Director of nation talent Trump</a></h4>
                    </div>
                    <div className="type8_count">
                      <h2>6</h2>
                    </div>
                  </div>
                </div></div></div></div><div className="owl-nav"><div className="owl-prev"><i className="fal fa-angle-left" /></div><div className="owl-next"><i className="fal fa-angle-right" /></div></div><div className="owl-dots"><div className="owl-dot active"><span /></div><div className="owl-dot"><span /></div></div></div>
        {/*CAROUSEL END*/}
      </div>
    </div>
  </div>
</div>

<div className="half_bg1 mix_area">
  <div className="container">
    <div className="row">
      <div className="col-12">
        <div className="mix_carousel">
          {/*CAROUSEL START*/}
          <div className="single_mix_carousel owl-carousel nav_style3 owl-loaded owl-drag">
            <div className="owl-stage-outer"><div className="owl-stage" style={{width: 3990, transform: 'translate3d(-570px, 0px, 0px)', transition: 'all 0.25s ease 0s'}}><div className="owl-item cloned" style={{width: 540, marginRight: 30}}><div className="single_post post_type6 post_type9">
                    <div className="post_img gradient1">
                      <div className="img_wrap">
                        <a href="#" className="play_btn">
                          <img src="assets/img/bg/black_white2.jpg" alt />
                        </a>
                      </div>	<span className="tranding left">
                        <i className="fas fa-bolt" />
                      </span>
                    </div>
                    <div className="single_post_text">
                      <div className="meta">	<a href="#">TECHNOLOGY</a>
                        <a href="#">March 26, 2020</a>
                      </div>
                      <h4><a href="post1.html">Success is not a good food failure makes you humble</a></h4>
                    </div>
                  </div></div><div className="owl-item cloned active" style={{width: 540, marginRight: 30}}><div className="single_post post_type6 post_type9">
                    <div className="post_img gradient1">
                      <div className="img_wrap">
                        <a href="#" className="play_btn">
                          <img src="assets/img/bg/black_white2.jpg" alt />
                        </a>
                      </div>	<span className="tranding left">
                        <i className="fas fa-bolt" />
                      </span>
                    </div>
                    <div className="single_post_text">
                      <div className="meta">	<a href="#">TECHNOLOGY</a>
                        <a href="#">March 26, 2020</a>
                      </div>
                      <h4><a href="post1.html">Success is not a good food failure makes you humble</a></h4>
                    </div>
                  </div></div><div className="owl-item active" style={{width: 540, marginRight: 30}}><div className="single_post post_type6 post_type9">
                    <div className="post_img gradient1">
                      <div className="img_wrap">
                        <a className="play_btn" href="#">
                          <img src="assets/img/bg/black_white1.jpg" alt />
                        </a>
                      </div>	<span className="tranding">
                        <i className="fas fa-play" />
                      </span>
                    </div>
                    <div className="single_post_text">
                      <div className="meta">	<a href="#">TECHNOLOGY</a>
                        <a href="#">March 26, 2020</a>
                      </div>
                      <h4><a href="video_post1.html">Success is not a good food failure makes you humble</a></h4>
                    </div>
                  </div></div><div className="owl-item" style={{width: 540, marginRight: 30}}><div className="single_post post_type6 post_type9">
                    <div className="post_img gradient1">
                      <div className="img_wrap">
                        <a href="#" className="play_btn">
                          <img src="assets/img/bg/black_white2.jpg" alt />
                        </a>
                      </div>	<span className="tranding left">
                        <i className="fas fa-bolt" />
                      </span>
                    </div>
                    <div className="single_post_text">
                      <div className="meta">	<a href="#">TECHNOLOGY</a>
                        <a href="#">March 26, 2020</a>
                      </div>
                      <h4><a href="post1.html">Success is not a good food failure makes you humble</a></h4>
                    </div>
                  </div></div><div className="owl-item" style={{width: 540, marginRight: 30}}><div className="single_post post_type6 post_type9">
                    <div className="post_img gradient1">
                      <div className="img_wrap">
                        <a href="#" className="play_btn">
                          <img src="assets/img/bg/black_white2.jpg" alt />
                        </a>
                      </div>	<span className="tranding left">
                        <i className="fas fa-bolt" />
                      </span>
                    </div>
                    <div className="single_post_text">
                      <div className="meta">	<a href="#">TECHNOLOGY</a>
                        <a href="#">March 26, 2020</a>
                      </div>
                      <h4><a href="post1.html">Success is not a good food failure makes you humble</a></h4>
                    </div>
                  </div></div><div className="owl-item cloned" style={{width: 540, marginRight: 30}}><div className="single_post post_type6 post_type9">
                    <div className="post_img gradient1">
                      <div className="img_wrap">
                        <a className="play_btn" href="#">
                          <img src="assets/img/bg/black_white1.jpg" alt />
                        </a>
                      </div>	<span className="tranding">
                        <i className="fas fa-play" />
                      </span>
                    </div>
                    <div className="single_post_text">
                      <div className="meta">	<a href="#">TECHNOLOGY</a>
                        <a href="#">March 26, 2020</a>
                      </div>
                      <h4><a href="video_post1.html">Success is not a good food failure makes you humble</a></h4>
                    </div>
                  </div></div><div className="owl-item cloned" style={{width: 540, marginRight: 30}}><div className="single_post post_type6 post_type9">
                    <div className="post_img gradient1">
                      <div className="img_wrap">
                        <a href="#" className="play_btn">
                          <img src="assets/img/bg/black_white2.jpg" alt />
                        </a>
                      </div>	<span className="tranding left">
                        <i className="fas fa-bolt" />
                      </span>
                    </div>
                    <div className="single_post_text">
                      <div className="meta">	<a href="#">TECHNOLOGY</a>
                        <a href="#">March 26, 2020</a>
                      </div>
                      <h4><a href="post1.html">Success is not a good food failure makes you humble</a></h4>
                    </div>
                  </div></div></div></div><div className="owl-nav"><div className="owl-prev"><i className="fal fa-angle-left" /></div><div className="owl-next"><i className="fal fa-angle-right" /></div></div><div className="owl-dots"><div className="owl-dot"><span /></div><div className="owl-dot active"><span /></div></div></div>
        </div>
        {/*CAROUSEL END*/}
      </div>
    </div>
  </div>
  <div className="space-60" />
</div>

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
                  <img src="assets/img/video/video1.jpg" alt />
                </a>
              </div>	<a href="#" className="youtube_middle"><i className="fab fa-youtube" /></a>
            </div>
            <div className="single_post_text padding30 fourth_bg">
              <div className="meta3">	<a href="#">TECHNOLOGY</a>
                <a href="#">March 26, 2020</a>
              </div>
              <h4><a href="post1.html">Riots Report Shows London Needs To Maintain Police Numbers, Says Mayor</a></h4>
            </div>
          </div>
        </div>
        <div className="col-lg-4">
          <div className="popular_carousel_area mb30 md-mt-30">
            <h2 className="widget-title">Popular Posts</h2>
            <div className="popular_carousel owl-carousel nav_style1 owl-loaded owl-drag">
              {/*CAROUSEL START*/}
              <div className="owl-stage-outer"><div className="owl-stage" style={{width: 2280, transform: 'translate3d(-760px, 0px, 0px)', transition: 'all 0s ease 0s'}}><div className="owl-item cloned" style={{width: 350, marginRight: 30}}><div className="popular_items">
                      <div className="single_post type10 widgets_small mb15">
                        <div className="post_img">
                          <div className="img_wrap">
                            <a href="#">
                              <img src="assets/img/popular/popularsm1.jpg" alt />
                            </a>
                          </div>	<span className="tranding tranding_border">
                            1
                          </span>
                        </div>
                        <div className="single_post_text">
                          <h4><a href="post1.html">The property complete with a 30 seat screen room.</a></h4>
                          <div className="meta4">	<a href="#">TECHNOLOGY</a>
                          </div>
                        </div>
                      </div>
                      <div className="single_post type10 widgets_small mb15">
                        <div className="post_img">
                          <div className="img_wrap">
                            <a href="#">
                              <img src="assets/img/popular/popularsm2.jpg" alt />
                            </a>
                          </div>	<span className="tranding tranding_border">
                            2
                          </span>
                        </div>
                        <div className="single_post_text">
                          <h4><a href="post1.html">Cheap smartphone sensor could help you old.</a></h4>
                          <div className="meta4">	<a href="#">TECHNOLOGY</a>
                          </div>
                        </div>
                      </div>
                      <div className="single_post type10 widgets_small mb15">
                        <div className="post_img">
                          <div className="img_wrap">
                            <a href="#">
                              <img src="assets/img/popular/popularsm3.jpg" alt />
                            </a>
                          </div>	<span className="tranding tranding_border">
                            3
                          </span>
                        </div>
                        <div className="single_post_text">
                          <h4><a href="post1.html">Harbour amid a Slowen the down in singer city</a></h4>
                          <div className="meta4">	<a href="#">TECHNOLOGY</a>
                          </div>
                        </div>
                      </div>
                      <div className="single_post type10 widgets_small mb15">
                        <div className="post_img">
                          <div className="img_wrap">
                            <a href="#">
                              <img src="assets/img/popular/popularsm4.jpg" alt />
                            </a>
                          </div>	<span className="tranding tranding_border">
                            4
                          </span>
                        </div>
                        <div className="single_post_text">
                          <h4><a href="post1.html">The secret to moving this from sphinx screening</a></h4>
                          <div className="meta4">	<a href="#">TECHNOLOGY</a>
                          </div>
                        </div>
                      </div>
                      <div className="single_post type10 widgets_small ldnane">
                        <div className="post_img">
                          <div className="img_wrap">
                            <a href="#">
                              <img src="assets/img/popular/popularsm5.jpg" alt />
                            </a>
                          </div>	<span className="tranding tranding_border">
                            5</span>
                        </div>
                        <div className="single_post_text">
                          <h4><a href="post1.html">The secret to moving this from sphinx screening</a></h4>
                          <div className="meta4">	<a href="#">TECHNOLOGY</a>
                          </div>
                        </div>
                      </div>
                    </div></div><div className="owl-item cloned" style={{width: 350, marginRight: 30}}><div className="popular_items">
                      <div className="single_post type10 widgets_small mb15">
                        <div className="post_img">
                          <div className="img_wrap">
                            <a href="#">
                              <img src="assets/img/popular/popularsm1.jpg" alt />
                            </a>
                          </div>	<span className="tranding tranding_border">
                            1
                          </span>
                        </div>
                        <div className="single_post_text">
                          <h4><a href="post1.html">The property complete with a 30 seat screen room.</a></h4>
                          <div className="meta4">	<a href="#">TECHNOLOGY</a>
                          </div>
                        </div>
                      </div>
                      <div className="single_post type10 widgets_small mb15">
                        <div className="post_img">
                          <div className="img_wrap">
                            <a href="#">
                              <img src="assets/img/popular/popularsm2.jpg" alt />
                            </a>
                          </div>	<span className="tranding tranding_border">
                            2
                          </span>
                        </div>
                        <div className="single_post_text">
                          <h4><a href="post1.html">Cheap smartphone sensor could help you old.</a></h4>
                          <div className="meta4">	<a href="#">TECHNOLOGY</a>
                          </div>
                        </div>
                      </div>
                      <div className="single_post type10 widgets_small mb15">
                        <div className="post_img">
                          <div className="img_wrap">
                            <a href="#">
                              <img src="assets/img/popular/popularsm3.jpg" alt />
                            </a>
                          </div>	<span className="tranding tranding_border">
                            3
                          </span>
                        </div>
                        <div className="single_post_text">
                          <h4><a href="post1.html">Harbour amid a Slowen the down in singer city</a></h4>
                          <div className="meta4">	<a href="#">TECHNOLOGY</a>
                          </div>
                        </div>
                      </div>
                      <div className="single_post type10 widgets_small mb15">
                        <div className="post_img">
                          <div className="img_wrap">
                            <a href="#">
                              <img src="assets/img/popular/popularsm4.jpg" alt />
                            </a>
                          </div>	<span className="tranding tranding_border">
                            4
                          </span>
                        </div>
                        <div className="single_post_text">
                          <h4><a href="post1.html">The secret to moving this from sphinx screening</a></h4>
                          <div className="meta4">	<a href="#">TECHNOLOGY</a>
                          </div>
                        </div>
                      </div>
                      <div className="single_post type10 widgets_small ldnane">
                        <div className="post_img">
                          <div className="img_wrap">
                            <a href="#">
                              <img src="assets/img/popular/popularsm5.jpg" alt />
                            </a>
                          </div>	<span className="tranding tranding_border">
                            5</span>
                        </div>
                        <div className="single_post_text">
                          <h4><a href="post1.html">The secret to moving this from sphinx screening</a></h4>
                          <div className="meta4">	<a href="#">TECHNOLOGY</a>
                          </div>
                        </div>
                      </div>
                    </div></div><div className="owl-item active" style={{width: 350, marginRight: 30}}><div className="popular_items">
                      <div className="single_post type10 widgets_small mb15">
                        <div className="post_img">
                          <div className="img_wrap">
                            <a href="#">
                              <img src="assets/img/popular/popularsm1.jpg" alt />
                            </a>
                          </div>	<span className="tranding tranding_border">
                            1
                          </span>
                        </div>
                        <div className="single_post_text">
                          <h4><a href="post1.html">The property complete with a 30 seat screen room.</a></h4>
                          <div className="meta4">	<a href="#">TECHNOLOGY</a>
                          </div>
                        </div>
                      </div>
                      <div className="single_post type10 widgets_small mb15">
                        <div className="post_img">
                          <div className="img_wrap">
                            <a href="#">
                              <img src="assets/img/popular/popularsm2.jpg" alt />
                            </a>
                          </div>	<span className="tranding tranding_border">
                            2
                          </span>
                        </div>
                        <div className="single_post_text">
                          <h4><a href="post1.html">Cheap smartphone sensor could help you old.</a></h4>
                          <div className="meta4">	<a href="#">TECHNOLOGY</a>
                          </div>
                        </div>
                      </div>
                      <div className="single_post type10 widgets_small mb15">
                        <div className="post_img">
                          <div className="img_wrap">
                            <a href="#">
                              <img src="assets/img/popular/popularsm3.jpg" alt />
                            </a>
                          </div>	<span className="tranding tranding_border">
                            3
                          </span>
                        </div>
                        <div className="single_post_text">
                          <h4><a href="post1.html">Harbour amid a Slowen the down in singer city</a></h4>
                          <div className="meta4">	<a href="#">TECHNOLOGY</a>
                          </div>
                        </div>
                      </div>
                      <div className="single_post type10 widgets_small mb15">
                        <div className="post_img">
                          <div className="img_wrap">
                            <a href="#">
                              <img src="assets/img/popular/popularsm4.jpg" alt />
                            </a>
                          </div>	<span className="tranding tranding_border">
                            4
                          </span>
                        </div>
                        <div className="single_post_text">
                          <h4><a href="post1.html">The secret to moving this from sphinx screening</a></h4>
                          <div className="meta4">	<a href="#">TECHNOLOGY</a>
                          </div>
                        </div>
                      </div>
                      <div className="single_post type10 widgets_small ldnane">
                        <div className="post_img">
                          <div className="img_wrap">
                            <a href="#">
                              <img src="assets/img/popular/popularsm5.jpg" alt />
                            </a>
                          </div>	<span className="tranding tranding_border">
                            5</span>
                        </div>
                        <div className="single_post_text">
                          <h4><a href="post1.html">The secret to moving this from sphinx screening</a></h4>
                          <div className="meta4">	<a href="#">TECHNOLOGY</a>
                          </div>
                        </div>
                      </div>
                    </div></div><div className="owl-item" style={{width: 350, marginRight: 30}}><div className="popular_items">
                      <div className="single_post type10 widgets_small mb15">
                        <div className="post_img">
                          <div className="img_wrap">
                            <a href="#">
                              <img src="assets/img/popular/popularsm1.jpg" alt />
                            </a>
                          </div>	<span className="tranding tranding_border">
                            1
                          </span>
                        </div>
                        <div className="single_post_text">
                          <h4><a href="post1.html">The property complete with a 30 seat screen room.</a></h4>
                          <div className="meta4">	<a href="#">TECHNOLOGY</a>
                          </div>
                        </div>
                      </div>
                      <div className="single_post type10 widgets_small mb15">
                        <div className="post_img">
                          <div className="img_wrap">
                            <a href="#">
                              <img src="assets/img/popular/popularsm2.jpg" alt />
                            </a>
                          </div>	<span className="tranding tranding_border">
                            2
                          </span>
                        </div>
                        <div className="single_post_text">
                          <h4><a href="post1.html">Cheap smartphone sensor could help you old.</a></h4>
                          <div className="meta4">	<a href="#">TECHNOLOGY</a>
                          </div>
                        </div>
                      </div>
                      <div className="single_post type10 widgets_small mb15">
                        <div className="post_img">
                          <div className="img_wrap">
                            <a href="#">
                              <img src="assets/img/popular/popularsm3.jpg" alt />
                            </a>
                          </div>	<span className="tranding tranding_border">
                            3
                          </span>
                        </div>
                        <div className="single_post_text">
                          <h4><a href="post1.html">Harbour amid a Slowen the down in singer city</a></h4>
                          <div className="meta4">	<a href="#">TECHNOLOGY</a>
                          </div>
                        </div>
                      </div>
                      <div className="single_post type10 widgets_small mb15">
                        <div className="post_img">
                          <div className="img_wrap">
                            <a href="#">
                              <img src="assets/img/popular/popularsm4.jpg" alt />
                            </a>
                          </div>	<span className="tranding tranding_border">
                            4
                          </span>
                        </div>
                        <div className="single_post_text">
                          <h4><a href="post1.html">The secret to moving this from sphinx screening</a></h4>
                          <div className="meta4">	<a href="#">TECHNOLOGY</a>
                          </div>
                        </div>
                      </div>
                      <div className="single_post type10 widgets_small ldnane">
                        <div className="post_img">
                          <div className="img_wrap">
                            <a href="#">
                              <img src="assets/img/popular/popularsm5.jpg" alt />
                            </a>
                          </div>	<span className="tranding tranding_border">
                            5</span>
                        </div>
                        <div className="single_post_text">
                          <h4><a href="post1.html">The secret to moving this from sphinx screening</a></h4>
                          <div className="meta4">	<a href="#">TECHNOLOGY</a>
                          </div>
                        </div>
                      </div>
                    </div></div><div className="owl-item cloned" style={{width: 350, marginRight: 30}}><div className="popular_items">
                      <div className="single_post type10 widgets_small mb15">
                        <div className="post_img">
                          <div className="img_wrap">
                            <a href="#">
                              <img src="assets/img/popular/popularsm1.jpg" alt />
                            </a>
                          </div>	<span className="tranding tranding_border">
                            1
                          </span>
                        </div>
                        <div className="single_post_text">
                          <h4><a href="post1.html">The property complete with a 30 seat screen room.</a></h4>
                          <div className="meta4">	<a href="#">TECHNOLOGY</a>
                          </div>
                        </div>
                      </div>
                      <div className="single_post type10 widgets_small mb15">
                        <div className="post_img">
                          <div className="img_wrap">
                            <a href="#">
                              <img src="assets/img/popular/popularsm2.jpg" alt />
                            </a>
                          </div>	<span className="tranding tranding_border">
                            2
                          </span>
                        </div>
                        <div className="single_post_text">
                          <h4><a href="post1.html">Cheap smartphone sensor could help you old.</a></h4>
                          <div className="meta4">	<a href="#">TECHNOLOGY</a>
                          </div>
                        </div>
                      </div>
                      <div className="single_post type10 widgets_small mb15">
                        <div className="post_img">
                          <div className="img_wrap">
                            <a href="#">
                              <img src="assets/img/popular/popularsm3.jpg" alt />
                            </a>
                          </div>	<span className="tranding tranding_border">
                            3
                          </span>
                        </div>
                        <div className="single_post_text">
                          <h4><a href="post1.html">Harbour amid a Slowen the down in singer city</a></h4>
                          <div className="meta4">	<a href="#">TECHNOLOGY</a>
                          </div>
                        </div>
                      </div>
                      <div className="single_post type10 widgets_small mb15">
                        <div className="post_img">
                          <div className="img_wrap">
                            <a href="#">
                              <img src="assets/img/popular/popularsm4.jpg" alt />
                            </a>
                          </div>	<span className="tranding tranding_border">
                            4
                          </span>
                        </div>
                        <div className="single_post_text">
                          <h4><a href="post1.html">The secret to moving this from sphinx screening</a></h4>
                          <div className="meta4">	<a href="#">TECHNOLOGY</a>
                          </div>
                        </div>
                      </div>
                      <div className="single_post type10 widgets_small ldnane">
                        <div className="post_img">
                          <div className="img_wrap">
                            <a href="#">
                              <img src="assets/img/popular/popularsm5.jpg" alt />
                            </a>
                          </div>	<span className="tranding tranding_border">
                            5</span>
                        </div>
                        <div className="single_post_text">
                          <h4><a href="post1.html">The secret to moving this from sphinx screening</a></h4>
                          <div className="meta4">	<a href="#">TECHNOLOGY</a>
                          </div>
                        </div>
                      </div>
                    </div></div><div className="owl-item cloned" style={{width: 350, marginRight: 30}}><div className="popular_items">
                      <div className="single_post type10 widgets_small mb15">
                        <div className="post_img">
                          <div className="img_wrap">
                            <a href="#">
                              <img src="assets/img/popular/popularsm1.jpg" alt />
                            </a>
                          </div>	<span className="tranding tranding_border">
                            1
                          </span>
                        </div>
                        <div className="single_post_text">
                          <h4><a href="post1.html">The property complete with a 30 seat screen room.</a></h4>
                          <div className="meta4">	<a href="#">TECHNOLOGY</a>
                          </div>
                        </div>
                      </div>
                      <div className="single_post type10 widgets_small mb15">
                        <div className="post_img">
                          <div className="img_wrap">
                            <a href="#">
                              <img src="assets/img/popular/popularsm2.jpg" alt />
                            </a>
                          </div>	<span className="tranding tranding_border">
                            2
                          </span>
                        </div>
                        <div className="single_post_text">
                          <h4><a href="post1.html">Cheap smartphone sensor could help you old.</a></h4>
                          <div className="meta4">	<a href="#">TECHNOLOGY</a>
                          </div>
                        </div>
                      </div>
                      <div className="single_post type10 widgets_small mb15">
                        <div className="post_img">
                          <div className="img_wrap">
                            <a href="#">
                              <img src="assets/img/popular/popularsm3.jpg" alt />
                            </a>
                          </div>	<span className="tranding tranding_border">
                            3
                          </span>
                        </div>
                        <div className="single_post_text">
                          <h4><a href="post1.html">Harbour amid a Slowen the down in singer city</a></h4>
                          <div className="meta4">	<a href="#">TECHNOLOGY</a>
                          </div>
                        </div>
                      </div>
                      <div className="single_post type10 widgets_small mb15">
                        <div className="post_img">
                          <div className="img_wrap">
                            <a href="#">
                              <img src="assets/img/popular/popularsm4.jpg" alt />
                            </a>
                          </div>	<span className="tranding tranding_border">
                            4
                          </span>
                        </div>
                        <div className="single_post_text">
                          <h4><a href="post1.html">The secret to moving this from sphinx screening</a></h4>
                          <div className="meta4">	<a href="#">TECHNOLOGY</a>
                          </div>
                        </div>
                      </div>
                      <div className="single_post type10 widgets_small ldnane">
                        <div className="post_img">
                          <div className="img_wrap">
                            <a href="#">
                              <img src="assets/img/popular/popularsm5.jpg" alt />
                            </a>
                          </div>	<span className="tranding tranding_border">
                            5</span>
                        </div>
                        <div className="single_post_text">
                          <h4><a href="post1.html">The secret to moving this from sphinx screening</a></h4>
                          <div className="meta4">	<a href="#">TECHNOLOGY</a>
                          </div>
                        </div>
                      </div>
                    </div></div></div></div><div className="owl-nav"><div className="owl-prev"><i className="fal fa-angle-left" /></div><div className="owl-next"><i className="fal fa-angle-right" /></div></div><div className="owl-dots"><div className="owl-dot active"><span /></div><div className="owl-dot"><span /></div></div></div>
            {/*CAROUSEL END*/}
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
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
                        <img src="assets/img/entertrainment/enter1.jpg" alt />
                      </a>
                    </div>
                  </div>
                  <div className="single_post_text">
                    <div className="meta3">	<a href="#">TECHNOLOGY</a>
                      <a href="#">March 26, 2020</a>
                    </div>
                    <h4><a href="post1.html">There may be no consoles in the future ea exec says</a></h4>
                    <div className="space-10" />
                    <p className="post-p">The property, complete with 30-seat screening from room, a 100-seat amphitheater and a swimming pond with sandy shower…</p>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="single_post post_type3 mb30">
                  <div className="post_img">
                    <div className="img_wrap">
                      <a href="#">
                        <img src="assets/img/entertrainment/enter2.jpg" alt />
                      </a>
                    </div>
                  </div>
                  <div className="single_post_text">
                    <div className="meta3">	<a href="#">TECHNOLOGY</a>
                      <a href="#">March 26, 2020</a>
                    </div>
                    <h4><a href="post1.html">There may be no consoles in the future ea exec says</a></h4>
                    <div className="space-10" />
                    <p className="post-p">The property, complete with 30-seat screening from room, a 100-seat amphitheater and a swimming pond with sandy shower…</p>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="single_post post_type3 mb30">
                  <div className="post_img">
                    <div className="img_wrap">
                      <a href="#">
                        <img src="assets/img/entertrainment/enter3.jpg" alt />
                      </a>
                    </div>
                  </div>
                  <div className="single_post_text">
                    <div className="meta3">	<a href="#">TECHNOLOGY</a>
                      <a href="#">March 26, 2020</a>
                    </div>
                    <h4><a href="post1.html">Copa America: Luis Suarez from devastated US</a></h4>
                    <div className="space-10" />
                    <p className="post-p">The property, complete with 30-seat screening from room, a 100-seat amphitheater and a swimming pond with sandy shower…</p>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="single_post post_type3 mb30">
                  <div className="post_img">
                    <div className="img_wrap">
                      <a href="#">
                        <img src="assets/img/entertrainment/enter4.jpg" alt />
                      </a>
                    </div>
                  </div>
                  <div className="single_post_text">
                    <div className="meta3">	<a href="#">TECHNOLOGY</a>
                      <a href="#">March 26, 2020</a>
                    </div>
                    <h4><a href="post1.html">There may be no consoles in the future ea exec says</a></h4>
                    <div className="space-10" />
                    <p className="post-p">The property, complete with 30-seat screening from room, a 100-seat amphitheater and a swimming pond with sandy shower…</p>
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
                        <img src="assets/img/sports/sportsbig1.jpg" alt />
                      </a>	<span className="tranding">
                        <i className="fas fa-bolt" />
                      </span>
                    </div>
                    <div className="single_post_text">
                      <div className="meta3">	<a href="#">TECHNOLOGY</a>
                        <a href="#">March 26, 2020</a>
                      </div>
                      <h4><a href="post1.html">Copa America: Luis Suarez from devastated US</a></h4>
                      <div className="space-10" />
                      <p className="post-p">The property, complete with 30-seat screening from room, a 100-seat amphitheater and a swimming pond with sandy shower…</p>
                      <div className="space-20" />	<a href="#" className="readmore">Read More</a>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="sports_carousel owl-carousel nav_style1 owl-loaded owl-drag">
                    {/*CAROUSEL START*/}
                    <div className="owl-stage-outer"><div className="owl-stage" style={{width: 2280, transform: 'translate3d(-760px, 0px, 0px)', transition: 'all 0s ease 0s'}}><div className="owl-item cloned" style={{width: 350, marginRight: 30}}><div className="sports_carousel_item">
                            <div className="single_post widgets_small">
                              <div className="post_img">
                                <div className="img_wrap">
                                  <a href="#">
                                    <img src="assets/img/sports/sports2.jpg" alt />
                                  </a>
                                </div>
                              </div>
                              <div className="single_post_text">
                                <div className="meta2">	<a href="#">TECHNOLOGY</a>
                                  <a href="#">March 26, 2020</a>
                                </div>
                                <h4><a href="post1.html">Copa America: Luis Suarez from devastated US</a></h4>
                              </div>
                            </div>
                            <div className="space-15" />
                            <div className="border_black" />
                            <div className="space-15" />
                            <div className="single_post widgets_small">
                              <div className="post_img">
                                <div className="img_wrap">
                                  <a href="#">
                                    <img src="assets/img/sports/sports3.jpg" alt />
                                  </a>
                                </div>	<span className="tranding">
                                  <i className="fas fa-bolt" />
                                </span>
                              </div>
                              <div className="single_post_text">
                                <div className="meta2">	<a href="#">TECHNOLOGY</a>
                                  <a href="#">March 26, 2020</a>
                                </div>
                                <h4>
                                  <a href="post1.html">Copa America: Luis Suarez from devastated US</a>
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
                                    <img src="assets/img/sports/sports4.jpg" alt />
                                  </a>
                                </div>
                              </div>
                              <div className="single_post_text">
                                <div className="meta2">	<a href="#">TECHNOLOGY</a>
                                  <a href="#">March 26, 2020</a>
                                </div>
                                <h4><a href="post1.html">Copa America: Luis Suarez from devastated US</a></h4>
                              </div>
                            </div>
                            <div className="space-15" />
                            <div className="border_black" />
                            <div className="space-15" />
                            <div className="single_post widgets_small">
                              <div className="post_img">
                                <div className="img_wrap">
                                  <a href="#">
                                    <img src="assets/img/sports/sports5.jpg" alt />
                                  </a>
                                </div>	<span className="tranding">
                                  <i className="fas fa-bolt" />
                                </span>
                              </div>
                              <div className="single_post_text">
                                <div className="meta2">	<a href="#">TECHNOLOGY</a>
                                  <a href="#">March 26, 2020</a>
                                </div>
                                <h4><a href="post1.html">Copa America: Luis Suarez from devastated US</a></h4>
                              </div>
                            </div>
                            <div className="space-15" />
                            <div className="border_black" />
                            <div className="space-15" />
                            <div className="single_post widgets_small">
                              <div className="post_img">
                                <div className="img_wrap">
                                  <a href="#">
                                    <img src="assets/img/sports/sports6.jpg" alt />
                                  </a>
                                </div>
                              </div>
                              <div className="single_post_text">
                                <div className="meta2">	<a href="#">TECHNOLOGY</a>
                                  <a href="#">March 26, 2020</a>
                                </div>
                                <h4><a href="post1.html">Copa America: Luis Suarez from devastated US</a></h4>
                              </div>
                            </div>
                          </div></div><div className="owl-item cloned" style={{width: 350, marginRight: 30}}><div className="sports_carousel_item">
                            <div className="single_post widgets_small">
                              <div className="post_img">
                                <div className="img_wrap">
                                  <a href="#">
                                    <img src="assets/img/blog/blog_small1.jpg" alt />
                                  </a>
                                </div>
                              </div>
                              <div className="single_post_text">
                                <div className="meta2">	<a href="#">TECHNOLOGY</a>
                                  <a href="#">March 26, 2020</a>
                                </div>
                                <h4><a href="post1.html">Copa America: Luis Suarez from devastated US</a></h4>
                              </div>
                            </div>
                            <div className="space-15" />
                            <div className="border_black" />
                            <div className="space-15" />
                            <div className="single_post widgets_small">
                              <div className="post_img">
                                <div className="img_wrap">
                                  <a href="#">
                                    <img src="assets/img/blog/blog_small2.jpg" alt />
                                  </a>
                                </div>	<span className="tranding">
                                  <i className="fas fa-bolt" />
                                </span>
                              </div>
                              <div className="single_post_text">
                                <div className="meta2">	<a href="#">TECHNOLOGY</a>
                                  <a href="#">March 26, 2020</a>
                                </div>
                                <h4>
                                  <a href="post1.html">Copa America: Luis Suarez from devastated US</a>
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
                                    <img src="assets/img/blog/blog_small3.jpg" alt />
                                  </a>
                                </div>
                              </div>
                              <div className="single_post_text">
                                <div className="meta2">	<a href="#">TECHNOLOGY</a>
                                  <a href="#">March 26, 2020</a>
                                </div>
                                <h4><a href="post1.html">Copa America: Luis Suarez from devastated US</a></h4>
                              </div>
                            </div>
                            <div className="space-15" />
                            <div className="border_black" />
                            <div className="space-15" />
                            <div className="single_post widgets_small">
                              <div className="post_img">
                                <div className="img_wrap">
                                  <a href="#"><img src="assets/img/blog/blog_small4.jpg" alt /></a>
                                </div>	
                                <span className="tranding">
                                  <i className="fas fa-bolt" />
                                </span>
                              </div>
                              <div className="single_post_text">
                                <div className="meta2">	<a href="#">TECHNOLOGY</a>
                                  <a href="#">March 26, 2020</a>
                                </div>
                                <h4><a href="post1.html">Copa America: Luis Suarez from devastated US</a></h4>
                              </div>
                            </div>
                            <div className="space-15" />
                            <div className="border_black" />
                            <div className="space-15" />
                            <div className="single_post widgets_small">
                              <div className="post_img">
                                <div className="img_wrap">
                                  <a href="#">
                                    <img src="assets/img/blog/blog_small5.jpg" alt />
                                  </a>
                                </div>
                              </div>
                              <div className="single_post_text">
                                <div className="meta2">	<a href="#">TECHNOLOGY</a>
                                  <a href="#">March 26, 2020</a>
                                </div>
                                <h4><a href="post1.html">Copa America: Luis Suarez from devastated US</a></h4>
                              </div>
                            </div>
                          </div></div><div className="owl-item active" style={{width: 350, marginRight: 30}}><div className="sports_carousel_item">
                            <div className="single_post widgets_small">
                              <div className="post_img">
                                <div className="img_wrap">
                                  <a href="#">
                                    <img src="assets/img/sports/sports2.jpg" alt />
                                  </a>
                                </div>
                              </div>
                              <div className="single_post_text">
                                <div className="meta2">	<a href="#">TECHNOLOGY</a>
                                  <a href="#">March 26, 2020</a>
                                </div>
                                <h4><a href="post1.html">Copa America: Luis Suarez from devastated US</a></h4>
                              </div>
                            </div>
                            <div className="space-15" />
                            <div className="border_black" />
                            <div className="space-15" />
                            <div className="single_post widgets_small">
                              <div className="post_img">
                                <div className="img_wrap">
                                  <a href="#">
                                    <img src="assets/img/sports/sports3.jpg" alt />
                                  </a>
                                </div>	<span className="tranding">
                                  <i className="fas fa-bolt" />
                                </span>
                              </div>
                              <div className="single_post_text">
                                <div className="meta2">	<a href="#">TECHNOLOGY</a>
                                  <a href="#">March 26, 2020</a>
                                </div>
                                <h4>
                                  <a href="post1.html">Copa America: Luis Suarez from devastated US</a>
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
                                    <img src="assets/img/sports/sports4.jpg" alt />
                                  </a>
                                </div>
                              </div>
                              <div className="single_post_text">
                                <div className="meta2">	<a href="#">TECHNOLOGY</a>
                                  <a href="#">March 26, 2020</a>
                                </div>
                                <h4><a href="post1.html">Copa America: Luis Suarez from devastated US</a></h4>
                              </div>
                            </div>
                            <div className="space-15" />
                            <div className="border_black" />
                            <div className="space-15" />
                            <div className="single_post widgets_small">
                              <div className="post_img">
                                <div className="img_wrap">
                                  <a href="#">
                                    <img src="assets/img/sports/sports5.jpg" alt />
                                  </a>
                                </div>	<span className="tranding">
                                  <i className="fas fa-bolt" />
                                </span>
                              </div>
                              <div className="single_post_text">
                                <div className="meta2">	<a href="#">TECHNOLOGY</a>
                                  <a href="#">March 26, 2020</a>
                                </div>
                                <h4><a href="post1.html">Copa America: Luis Suarez from devastated US</a></h4>
                              </div>
                            </div>
                            <div className="space-15" />
                            <div className="border_black" />
                            <div className="space-15" />
                            <div className="single_post widgets_small">
                              <div className="post_img">
                                <div className="img_wrap">
                                  <a href="#">
                                    <img src="assets/img/sports/sports6.jpg" alt />
                                  </a>
                                </div>
                              </div>
                              <div className="single_post_text">
                                <div className="meta2">	<a href="#">TECHNOLOGY</a>
                                  <a href="#">March 26, 2020</a>
                                </div>
                                <h4><a href="post1.html">Copa America: Luis Suarez from devastated US</a></h4>
                              </div>
                            </div>
                          </div></div><div className="owl-item" style={{width: 350, marginRight: 30}}><div className="sports_carousel_item">
                            <div className="single_post widgets_small">
                              <div className="post_img">
                                <div className="img_wrap">
                                  <a href="#">
                                    <img src="assets/img/blog/blog_small1.jpg" alt />
                                  </a>
                                </div>
                              </div>
                              <div className="single_post_text">
                                <div className="meta2">	<a href="#">TECHNOLOGY</a>
                                  <a href="#">March 26, 2020</a>
                                </div>
                                <h4><a href="post1.html">Copa America: Luis Suarez from devastated US</a></h4>
                              </div>
                            </div>
                            <div className="space-15" />
                            <div className="border_black" />
                            <div className="space-15" />
                            <div className="single_post widgets_small">
                              <div className="post_img">
                                <div className="img_wrap">
                                  <a href="#">
                                    <img src="assets/img/blog/blog_small2.jpg" alt />
                                  </a>
                                </div>	<span className="tranding">
                                  <i className="fas fa-bolt" />
                                </span>
                              </div>
                              <div className="single_post_text">
                                <div className="meta2">	<a href="#">TECHNOLOGY</a>
                                  <a href="#">March 26, 2020</a>
                                </div>
                                <h4>
                                  <a href="post1.html">Copa America: Luis Suarez from devastated US</a>
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
                                    <img src="assets/img/blog/blog_small3.jpg" alt />
                                  </a>
                                </div>
                              </div>
                              <div className="single_post_text">
                                <div className="meta2">	<a href="#">TECHNOLOGY</a>
                                  <a href="#">March 26, 2020</a>
                                </div>
                                <h4><a href="post1.html">Copa America: Luis Suarez from devastated US</a></h4>
                              </div>
                            </div>
                            <div className="space-15" />
                            <div className="border_black" />
                            <div className="space-15" />
                            <div className="single_post widgets_small">
                              <div className="post_img">
                                <div className="img_wrap">
                                  <a href="#"><img src="assets/img/blog/blog_small4.jpg" alt /></a>
                                </div>	
                                <span className="tranding">
                                  <i className="fas fa-bolt" />
                                </span>
                              </div>
                              <div className="single_post_text">
                                <div className="meta2">	<a href="#">TECHNOLOGY</a>
                                  <a href="#">March 26, 2020</a>
                                </div>
                                <h4><a href="post1.html">Copa America: Luis Suarez from devastated US</a></h4>
                              </div>
                            </div>
                            <div className="space-15" />
                            <div className="border_black" />
                            <div className="space-15" />
                            <div className="single_post widgets_small">
                              <div className="post_img">
                                <div className="img_wrap">
                                  <a href="#">
                                    <img src="assets/img/blog/blog_small5.jpg" alt />
                                  </a>
                                </div>
                              </div>
                              <div className="single_post_text">
                                <div className="meta2">	<a href="#">TECHNOLOGY</a>
                                  <a href="#">March 26, 2020</a>
                                </div>
                                <h4><a href="post1.html">Copa America: Luis Suarez from devastated US</a></h4>
                              </div>
                            </div>
                          </div></div><div className="owl-item cloned" style={{width: 350, marginRight: 30}}><div className="sports_carousel_item">
                            <div className="single_post widgets_small">
                              <div className="post_img">
                                <div className="img_wrap">
                                  <a href="#">
                                    <img src="assets/img/sports/sports2.jpg" alt />
                                  </a>
                                </div>
                              </div>
                              <div className="single_post_text">
                                <div className="meta2">	<a href="#">TECHNOLOGY</a>
                                  <a href="#">March 26, 2020</a>
                                </div>
                                <h4><a href="post1.html">Copa America: Luis Suarez from devastated US</a></h4>
                              </div>
                            </div>
                            <div className="space-15" />
                            <div className="border_black" />
                            <div className="space-15" />
                            <div className="single_post widgets_small">
                              <div className="post_img">
                                <div className="img_wrap">
                                  <a href="#">
                                    <img src="assets/img/sports/sports3.jpg" alt />
                                  </a>
                                </div>	<span className="tranding">
                                  <i className="fas fa-bolt" />
                                </span>
                              </div>
                              <div className="single_post_text">
                                <div className="meta2">	<a href="#">TECHNOLOGY</a>
                                  <a href="#">March 26, 2020</a>
                                </div>
                                <h4>
                                  <a href="post1.html">Copa America: Luis Suarez from devastated US</a>
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
                                    <img src="assets/img/sports/sports4.jpg" alt />
                                  </a>
                                </div>
                              </div>
                              <div className="single_post_text">
                                <div className="meta2">	<a href="#">TECHNOLOGY</a>
                                  <a href="#">March 26, 2020</a>
                                </div>
                                <h4><a href="post1.html">Copa America: Luis Suarez from devastated US</a></h4>
                              </div>
                            </div>
                            <div className="space-15" />
                            <div className="border_black" />
                            <div className="space-15" />
                            <div className="single_post widgets_small">
                              <div className="post_img">
                                <div className="img_wrap">
                                  <a href="#">
                                    <img src="assets/img/sports/sports5.jpg" alt />
                                  </a>
                                </div>	<span className="tranding">
                                  <i className="fas fa-bolt" />
                                </span>
                              </div>
                              <div className="single_post_text">
                                <div className="meta2">	<a href="#">TECHNOLOGY</a>
                                  <a href="#">March 26, 2020</a>
                                </div>
                                <h4><a href="post1.html">Copa America: Luis Suarez from devastated US</a></h4>
                              </div>
                            </div>
                            <div className="space-15" />
                            <div className="border_black" />
                            <div className="space-15" />
                            <div className="single_post widgets_small">
                              <div className="post_img">
                                <div className="img_wrap">
                                  <a href="#">
                                    <img src="assets/img/sports/sports6.jpg" alt />
                                  </a>
                                </div>
                              </div>
                              <div className="single_post_text">
                                <div className="meta2">	<a href="#">TECHNOLOGY</a>
                                  <a href="#">March 26, 2020</a>
                                </div>
                                <h4><a href="post1.html">Copa America: Luis Suarez from devastated US</a></h4>
                              </div>
                            </div>
                          </div></div><div className="owl-item cloned" style={{width: 350, marginRight: 30}}><div className="sports_carousel_item">
                            <div className="single_post widgets_small">
                              <div className="post_img">
                                <div className="img_wrap">
                                  <a href="#">
                                    <img src="assets/img/blog/blog_small1.jpg" alt />
                                  </a>
                                </div>
                              </div>
                              <div className="single_post_text">
                                <div className="meta2">	<a href="#">TECHNOLOGY</a>
                                  <a href="#">March 26, 2020</a>
                                </div>
                                <h4><a href="post1.html">Copa America: Luis Suarez from devastated US</a></h4>
                              </div>
                            </div>
                            <div className="space-15" />
                            <div className="border_black" />
                            <div className="space-15" />
                            <div className="single_post widgets_small">
                              <div className="post_img">
                                <div className="img_wrap">
                                  <a href="#">
                                    <img src="assets/img/blog/blog_small2.jpg" alt />
                                  </a>
                                </div>	<span className="tranding">
                                  <i className="fas fa-bolt" />
                                </span>
                              </div>
                              <div className="single_post_text">
                                <div className="meta2">	<a href="#">TECHNOLOGY</a>
                                  <a href="#">March 26, 2020</a>
                                </div>
                                <h4>
                                  <a href="post1.html">Copa America: Luis Suarez from devastated US</a>
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
                                    <img src="assets/img/blog/blog_small3.jpg" alt />
                                  </a>
                                </div>
                              </div>
                              <div className="single_post_text">
                                <div className="meta2">	<a href="#">TECHNOLOGY</a>
                                  <a href="#">March 26, 2020</a>
                                </div>
                                <h4><a href="post1.html">Copa America: Luis Suarez from devastated US</a></h4>
                              </div>
                            </div>
                            <div className="space-15" />
                            <div className="border_black" />
                            <div className="space-15" />
                            <div className="single_post widgets_small">
                              <div className="post_img">
                                <div className="img_wrap">
                                  <a href="#"><img src="assets/img/blog/blog_small4.jpg" alt /></a>
                                </div>	
                                <span className="tranding">
                                  <i className="fas fa-bolt" />
                                </span>
                              </div>
                              <div className="single_post_text">
                                <div className="meta2">	<a href="#">TECHNOLOGY</a>
                                  <a href="#">March 26, 2020</a>
                                </div>
                                <h4><a href="post1.html">Copa America: Luis Suarez from devastated US</a></h4>
                              </div>
                            </div>
                            <div className="space-15" />
                            <div className="border_black" />
                            <div className="space-15" />
                            <div className="single_post widgets_small">
                              <div className="post_img">
                                <div className="img_wrap">
                                  <a href="#">
                                    <img src="assets/img/blog/blog_small5.jpg" alt />
                                  </a>
                                </div>
                              </div>
                              <div className="single_post_text">
                                <div className="meta2">	<a href="#">TECHNOLOGY</a>
                                  <a href="#">March 26, 2020</a>
                                </div>
                                <h4><a href="post1.html">Copa America: Luis Suarez from devastated US</a></h4>
                              </div>
                            </div>
                          </div></div></div></div><div className="owl-nav"><div className="owl-prev"><i className="fal fa-angle-left" /></div><div className="owl-next"><i className="fal fa-angle-right" /></div></div><div className="owl-dots"><div className="owl-dot active"><span /></div><div className="owl-dot"><span /></div></div></div>
                  {/*CAROUSEL END*/}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="banner_area mt50 mb60 xs-mt60">
          <a href="#">
            <img src="assets/img/bg/banner1.png" alt />
          </a>
        </div>
        <div className="row">
          <div className="col-12">
            <div className="businerss_news">
              <div className="row">
                <div className="col-6 align-self-center">
                  <h2 className="widget-title">Business News</h2>
                </div>
                <div className="col-6 text-right align-self-center">	<a href="#" className="see_all mb20">See All</a>
                </div>
              </div>
              <div className="row">
                <div className="col-12">
                  <div className="single_post post_type3 post_type12 mb30">
                    <div className="post_img">
                      <div className="img_wrap">
                        <a href="#">
                          <img src="assets/img/business/business1.jpg" alt />
                        </a>
                      </div>
                    </div>
                    <div className="single_post_text">
                      <div className="meta3">	<a href="#">uiux.subash</a>
                        <a href="#">March 26, 2020</a>
                      </div>
                      <h4><a href="post1.html">Copa America: Luis Suarez from devastated US</a></h4>
                      <div className="space-10" />
                      <p className="post-p">The property, complete with 30-seat screening from room, a 100-seat amphitheater and a swimming pond with…</p>
                      <div className="space-20" />	<a href="#" className="readmore">Read more</a>
                    </div>
                  </div>
                  <div className="single_post post_type3 post_type12 mb30">
                    <div className="post_img">
                      <div className="img_wrap">
                        <a href="#">
                          <img src="assets/img/business/business2.jpg" alt />
                        </a>
                      </div>
                    </div>
                    <div className="single_post_text">
                      <div className="meta3">	<a href="#">uiux.subash</a>
                        <a href="#">March 26, 2020</a>
                      </div>
                      <h4><a href="post1.html">Copa America: Luis Suarez from devastated US</a></h4>
                      <div className="space-10" />
                      <p className="post-p">The property, complete with 30-seat screening from room, a 100-seat amphitheater and a swimming pond with…</p>
                      <div className="space-20" />	<a href="#" className="readmore">Read more</a>
                    </div>
                  </div>
                  <div className="single_post post_type3 post_type12 mb30">
                    <div className="post_img">
                      <div className="img_wrap">
                        <a href="#">
                          <img src="assets/img/business/business3.jpg" alt />
                        </a>
                      </div>
                    </div>
                    <div className="single_post_text">
                      <div className="meta3">	<a href="#">uiux.subash</a>
                        <a href="#">March 26, 2020</a>
                      </div>
                      <h4><a href="post1.html">Copa America: Luis Suarez from devastated US</a></h4>
                      <div className="space-10" />
                      <p className="post-p">The property, complete with 30-seat screening from room, a 100-seat amphitheater and a swimming pond with…</p>
                      <div className="space-20" />	<a href="#" className="readmore">Read more</a>
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
              <div className="widget4_carousel owl-carousel nav_style1 owl-loaded owl-drag">
                {/*CAROUSEL START*/}
                <div className="owl-stage-outer"><div className="owl-stage" style={{width: 2100, transform: 'translate3d(-700px, 0px, 0px)', transition: 'all 0s ease 0s'}}><div className="owl-item cloned" style={{width: 350}}><div className="carousel_items">
                        <div className="single_post widgets_small widgets_type4">
                          <div className="post_img number">
                            <h2>1</h2>
                          </div>
                          <div className="single_post_text">
                            <div className="meta2">	<a href="#">TECHNOLOGY</a>
                              <a href="#">March 26, 2020</a>
                            </div>
                            <h4><a href="post1.html">Nancy zhang a chinese busy woman and dhaka</a></h4>
                            <ul className="inline socail_share">
                              <li>	<a href="#"><i className="fab fa-twitter" />2.2K</a>
                              </li>
                              <li>	<a href="#"><i className="fab fa-facebook-f" />2.2K</a>
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
                            <div className="meta2">	<a href="#">TECHNOLOGY</a>
                              <a href="#">March 26, 2020</a>
                            </div>
                            <h4><a href="post1.html">Harbour amid a Slowen down in singer city</a></h4>
                            <ul className="inline socail_share">
                              <li>	<a href="#"><i className="fab fa-twitter" />2.2K</a>
                              </li>
                              <li>	<a href="#"><i className="fab fa-facebook-f" />2.2K</a>
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
                            <div className="meta2">	<a href="#">TECHNOLOGY</a>
                              <a href="#">March 26, 2020</a>
                            </div>
                            <h4><a href="post1.html">Cheap smartphone sensor could help you old food safe</a></h4>
                            <ul className="inline socail_share">
                              <li>	<a href="#"><i className="fab fa-twitter" />2.2K</a>
                              </li>
                              <li>	<a href="#"><i className="fab fa-facebook-f" />2.2K</a>
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
                            <div className="meta2">	<a href="#">TECHNOLOGY</a>
                              <a href="#">March 26, 2020</a>
                            </div>
                            <h4><a href="post1.html">Nancy zhang a chinese busy woman and dhaka</a></h4>
                            <ul className="inline socail_share">
                              <li>	<a href="#"><i className="fab fa-twitter" />2.2K</a>
                              </li>
                              <li>	<a href="#"><i className="fab fa-facebook-f" />2.2K</a>
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
                            <div className="meta2">	<a href="#">TECHNOLOGY</a>
                              <a href="#">March 26, 2020</a>
                            </div>
                            <h4><a href="post1.html">The secret to moving this ancient sphinx screening</a></h4>
                            <ul className="inline socail_share">
                              <li>	<a href="#"><i className="fab fa-twitter" />2.2K</a>
                              </li>
                              <li>	<a href="#"><i className="fab fa-facebook-f" />2.2K</a>
                              </li>
                            </ul>
                            <div className="space-15" />
                            <div className="border_black" />
                          </div>
                        </div>
                      </div></div><div className="owl-item cloned" style={{width: 350}}><div className="carousel_items">
                        <div className="single_post widgets_small widgets_type4">
                          <div className="post_img number">
                            <h2>1</h2>
                          </div>
                          <div className="single_post_text">
                            <div className="meta2">	<a href="#">TECHNOLOGY</a>
                              <a href="#">March 26, 2020</a>
                            </div>
                            <h4><a href="post1.html">Nancy zhang a chinese busy woman and dhaka</a></h4>
                            <ul className="inline socail_share">
                              <li>	<a href="#"><i className="fab fa-twitter" />2.2K</a>
                              </li>
                              <li>	<a href="#"><i className="fab fa-facebook-f" />2.2K</a>
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
                            <div className="meta2">	<a href="#">TECHNOLOGY</a>
                              <a href="#">March 26, 2020</a>
                            </div>
                            <h4><a href="post1.html">Harbour amid a Slowen down in singer city</a></h4>
                            <ul className="inline socail_share">
                              <li>	<a href="#"><i className="fab fa-twitter" />2.2K</a>
                              </li>
                              <li>	<a href="#"><i className="fab fa-facebook-f" />2.2K</a>
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
                            <div className="meta2">	<a href="#">TECHNOLOGY</a>
                              <a href="#">March 26, 2020</a>
                            </div>
                            <h4><a href="post1.html">Cheap smartphone sensor could help you old food safe</a></h4>
                            <ul className="inline socail_share">
                              <li>	<a href="#"><i className="fab fa-twitter" />2.2K</a>
                              </li>
                              <li>	<a href="#"><i className="fab fa-facebook-f" />2.2K</a>
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
                            <div className="meta2">	<a href="#">TECHNOLOGY</a>
                              <a href="#">March 26, 2020</a>
                            </div>
                            <h4><a href="post1.html">Nancy zhang a chinese busy woman and dhaka</a></h4>
                            <ul className="inline socail_share">
                              <li>	<a href="#"><i className="fab fa-twitter" />2.2K</a>
                              </li>
                              <li>	<a href="#"><i className="fab fa-facebook-f" />2.2K</a>
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
                            <div className="meta2">	<a href="#">TECHNOLOGY</a>
                              <a href="#">March 26, 2020</a>
                            </div>
                            <h4><a href="post1.html">The secret to moving this ancient sphinx screening</a></h4>
                            <ul className="inline socail_share">
                              <li>	<a href="#"><i className="fab fa-twitter" />2.2K</a>
                              </li>
                              <li>	<a href="#"><i className="fab fa-facebook-f" />2.2K</a>
                              </li>
                            </ul>
                            <div className="space-15" />
                            <div className="border_black" />
                          </div>
                        </div>
                        <div className="space-15" />
                      </div></div><div className="owl-item active" style={{width: 350}}><div className="carousel_items">
                        <div className="single_post widgets_small widgets_type4">
                          <div className="post_img number">
                            <h2>1</h2>
                          </div>
                          <div className="single_post_text">
                            <div className="meta2">	<a href="#">TECHNOLOGY</a>
                              <a href="#">March 26, 2020</a>
                            </div>
                            <h4><a href="post1.html">Nancy zhang a chinese busy woman and dhaka</a></h4>
                            <ul className="inline socail_share">
                              <li>	<a href="#"><i className="fab fa-twitter" />2.2K</a>
                              </li>
                              <li>	<a href="#"><i className="fab fa-facebook-f" />2.2K</a>
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
                            <div className="meta2">	<a href="#">TECHNOLOGY</a>
                              <a href="#">March 26, 2020</a>
                            </div>
                            <h4><a href="post1.html">Harbour amid a Slowen down in singer city</a></h4>
                            <ul className="inline socail_share">
                              <li>	<a href="#"><i className="fab fa-twitter" />2.2K</a>
                              </li>
                              <li>	<a href="#"><i className="fab fa-facebook-f" />2.2K</a>
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
                            <div className="meta2">	<a href="#">TECHNOLOGY</a>
                              <a href="#">March 26, 2020</a>
                            </div>
                            <h4><a href="post1.html">Cheap smartphone sensor could help you old food safe</a></h4>
                            <ul className="inline socail_share">
                              <li>	<a href="#"><i className="fab fa-twitter" />2.2K</a>
                              </li>
                              <li>	<a href="#"><i className="fab fa-facebook-f" />2.2K</a>
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
                            <div className="meta2">	<a href="#">TECHNOLOGY</a>
                              <a href="#">March 26, 2020</a>
                            </div>
                            <h4><a href="post1.html">Nancy zhang a chinese busy woman and dhaka</a></h4>
                            <ul className="inline socail_share">
                              <li>	<a href="#"><i className="fab fa-twitter" />2.2K</a>
                              </li>
                              <li>	<a href="#"><i className="fab fa-facebook-f" />2.2K</a>
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
                            <div className="meta2">	<a href="#">TECHNOLOGY</a>
                              <a href="#">March 26, 2020</a>
                            </div>
                            <h4><a href="post1.html">The secret to moving this ancient sphinx screening</a></h4>
                            <ul className="inline socail_share">
                              <li>	<a href="#"><i className="fab fa-twitter" />2.2K</a>
                              </li>
                              <li>	<a href="#"><i className="fab fa-facebook-f" />2.2K</a>
                              </li>
                            </ul>
                            <div className="space-15" />
                            <div className="border_black" />
                          </div>
                        </div>
                      </div></div><div className="owl-item" style={{width: 350}}><div className="carousel_items">
                        <div className="single_post widgets_small widgets_type4">
                          <div className="post_img number">
                            <h2>1</h2>
                          </div>
                          <div className="single_post_text">
                            <div className="meta2">	<a href="#">TECHNOLOGY</a>
                              <a href="#">March 26, 2020</a>
                            </div>
                            <h4><a href="post1.html">Nancy zhang a chinese busy woman and dhaka</a></h4>
                            <ul className="inline socail_share">
                              <li>	<a href="#"><i className="fab fa-twitter" />2.2K</a>
                              </li>
                              <li>	<a href="#"><i className="fab fa-facebook-f" />2.2K</a>
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
                            <div className="meta2">	<a href="#">TECHNOLOGY</a>
                              <a href="#">March 26, 2020</a>
                            </div>
                            <h4><a href="post1.html">Harbour amid a Slowen down in singer city</a></h4>
                            <ul className="inline socail_share">
                              <li>	<a href="#"><i className="fab fa-twitter" />2.2K</a>
                              </li>
                              <li>	<a href="#"><i className="fab fa-facebook-f" />2.2K</a>
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
                            <div className="meta2">	<a href="#">TECHNOLOGY</a>
                              <a href="#">March 26, 2020</a>
                            </div>
                            <h4><a href="post1.html">Cheap smartphone sensor could help you old food safe</a></h4>
                            <ul className="inline socail_share">
                              <li>	<a href="#"><i className="fab fa-twitter" />2.2K</a>
                              </li>
                              <li>	<a href="#"><i className="fab fa-facebook-f" />2.2K</a>
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
                            <div className="meta2">	<a href="#">TECHNOLOGY</a>
                              <a href="#">March 26, 2020</a>
                            </div>
                            <h4><a href="post1.html">Nancy zhang a chinese busy woman and dhaka</a></h4>
                            <ul className="inline socail_share">
                              <li>	<a href="#"><i className="fab fa-twitter" />2.2K</a>
                              </li>
                              <li>	<a href="#"><i className="fab fa-facebook-f" />2.2K</a>
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
                            <div className="meta2">	<a href="#">TECHNOLOGY</a>
                              <a href="#">March 26, 2020</a>
                            </div>
                            <h4><a href="post1.html">The secret to moving this ancient sphinx screening</a></h4>
                            <ul className="inline socail_share">
                              <li>	<a href="#"><i className="fab fa-twitter" />2.2K</a>
                              </li>
                              <li>	<a href="#"><i className="fab fa-facebook-f" />2.2K</a>
                              </li>
                            </ul>
                            <div className="space-15" />
                            <div className="border_black" />
                          </div>
                        </div>
                        <div className="space-15" />
                      </div></div><div className="owl-item cloned" style={{width: 350}}><div className="carousel_items">
                        <div className="single_post widgets_small widgets_type4">
                          <div className="post_img number">
                            <h2>1</h2>
                          </div>
                          <div className="single_post_text">
                            <div className="meta2">	<a href="#">TECHNOLOGY</a>
                              <a href="#">March 26, 2020</a>
                            </div>
                            <h4><a href="post1.html">Nancy zhang a chinese busy woman and dhaka</a></h4>
                            <ul className="inline socail_share">
                              <li>	<a href="#"><i className="fab fa-twitter" />2.2K</a>
                              </li>
                              <li>	<a href="#"><i className="fab fa-facebook-f" />2.2K</a>
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
                            <div className="meta2">	<a href="#">TECHNOLOGY</a>
                              <a href="#">March 26, 2020</a>
                            </div>
                            <h4><a href="post1.html">Harbour amid a Slowen down in singer city</a></h4>
                            <ul className="inline socail_share">
                              <li>	<a href="#"><i className="fab fa-twitter" />2.2K</a>
                              </li>
                              <li>	<a href="#"><i className="fab fa-facebook-f" />2.2K</a>
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
                            <div className="meta2">	<a href="#">TECHNOLOGY</a>
                              <a href="#">March 26, 2020</a>
                            </div>
                            <h4><a href="post1.html">Cheap smartphone sensor could help you old food safe</a></h4>
                            <ul className="inline socail_share">
                              <li>	<a href="#"><i className="fab fa-twitter" />2.2K</a>
                              </li>
                              <li>	<a href="#"><i className="fab fa-facebook-f" />2.2K</a>
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
                            <div className="meta2">	<a href="#">TECHNOLOGY</a>
                              <a href="#">March 26, 2020</a>
                            </div>
                            <h4><a href="post1.html">Nancy zhang a chinese busy woman and dhaka</a></h4>
                            <ul className="inline socail_share">
                              <li>	<a href="#"><i className="fab fa-twitter" />2.2K</a>
                              </li>
                              <li>	<a href="#"><i className="fab fa-facebook-f" />2.2K</a>
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
                            <div className="meta2">	<a href="#">TECHNOLOGY</a>
                              <a href="#">March 26, 2020</a>
                            </div>
                            <h4><a href="post1.html">The secret to moving this ancient sphinx screening</a></h4>
                            <ul className="inline socail_share">
                              <li>	<a href="#"><i className="fab fa-twitter" />2.2K</a>
                              </li>
                              <li>	<a href="#"><i className="fab fa-facebook-f" />2.2K</a>
                              </li>
                            </ul>
                            <div className="space-15" />
                            <div className="border_black" />
                          </div>
                        </div>
                      </div></div><div className="owl-item cloned" style={{width: 350}}><div className="carousel_items">
                        <div className="single_post widgets_small widgets_type4">
                          <div className="post_img number">
                            <h2>1</h2>
                          </div>
                          <div className="single_post_text">
                            <div className="meta2">	<a href="#">TECHNOLOGY</a>
                              <a href="#">March 26, 2020</a>
                            </div>
                            <h4><a href="post1.html">Nancy zhang a chinese busy woman and dhaka</a></h4>
                            <ul className="inline socail_share">
                              <li>	<a href="#"><i className="fab fa-twitter" />2.2K</a>
                              </li>
                              <li>	<a href="#"><i className="fab fa-facebook-f" />2.2K</a>
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
                            <div className="meta2">	<a href="#">TECHNOLOGY</a>
                              <a href="#">March 26, 2020</a>
                            </div>
                            <h4><a href="post1.html">Harbour amid a Slowen down in singer city</a></h4>
                            <ul className="inline socail_share">
                              <li>	<a href="#"><i className="fab fa-twitter" />2.2K</a>
                              </li>
                              <li>	<a href="#"><i className="fab fa-facebook-f" />2.2K</a>
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
                            <div className="meta2">	<a href="#">TECHNOLOGY</a>
                              <a href="#">March 26, 2020</a>
                            </div>
                            <h4><a href="post1.html">Cheap smartphone sensor could help you old food safe</a></h4>
                            <ul className="inline socail_share">
                              <li>	<a href="#"><i className="fab fa-twitter" />2.2K</a>
                              </li>
                              <li>	<a href="#"><i className="fab fa-facebook-f" />2.2K</a>
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
                            <div className="meta2">	<a href="#">TECHNOLOGY</a>
                              <a href="#">March 26, 2020</a>
                            </div>
                            <h4><a href="post1.html">Nancy zhang a chinese busy woman and dhaka</a></h4>
                            <ul className="inline socail_share">
                              <li>	<a href="#"><i className="fab fa-twitter" />2.2K</a>
                              </li>
                              <li>	<a href="#"><i className="fab fa-facebook-f" />2.2K</a>
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
                            <div className="meta2">	<a href="#">TECHNOLOGY</a>
                              <a href="#">March 26, 2020</a>
                            </div>
                            <h4><a href="post1.html">The secret to moving this ancient sphinx screening</a></h4>
                            <ul className="inline socail_share">
                              <li>	<a href="#"><i className="fab fa-twitter" />2.2K</a>
                              </li>
                              <li>	<a href="#"><i className="fab fa-facebook-f" />2.2K</a>
                              </li>
                            </ul>
                            <div className="space-15" />
                            <div className="border_black" />
                          </div>
                        </div>
                        <div className="space-15" />
                      </div></div></div></div><div className="owl-nav"><div className="owl-prev"><i className="fal fa-angle-left" /></div><div className="owl-next"><i className="fal fa-angle-right" /></div></div><div className="owl-dots"><div className="owl-dot active"><span /></div><div className="owl-dot"><span /></div></div></div>
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
                <div className="col-4 text-right align-self-center">	<a href="#" className="see_all mb20">See All</a>
                </div>
              </div>
              <div className="single_post post_type13 widgets_small">
                <div className="post_img">
                  <a href="#">
                    <img src="assets/img/flag/match1.png" alt />
                  </a>
                </div>
                <div className="single_post_text">
                  <h4><a href="#" className="playing_teams">Germany <span>VS &nbsp;</span>France</a></h4>
                  <p className="meta macth_meta">Tomorrow &nbsp;|&nbsp;<span> M22:30 (CST) </span> &nbsp;</p>
                </div>
                <div className="circle_match_time">
                  <div className="first_circle circle"><canvas width={36} height={36} /></div>
                </div>
              </div>
              <div className="space-10" />
              <div className="border_black" />
              <div className="space-10" />
              <div className="single_post post_type13 widgets_small">
                <div className="post_img">
                  <a href="#">
                    <img src="assets/img/flag/match2.png" alt />
                  </a>
                </div>
                <div className="single_post_text">
                  <h4><a href="#" className="playing_teams">Spain <span>VS &nbsp;</span>Portugal</a></h4>
                  <p className="meta macth_meta">Tomorrow&nbsp;|&nbsp;<span> M22:30 (CST) </span> &nbsp;</p>
                </div>
                <div className="circle_match_time">
                  <div className="second_circle circle"><canvas width={36} height={36} /></div>
                </div>
              </div>
              <div className="space-10" />
              <div className="border_black" />
              <div className="space-10" />
              <div className="single_post post_type13 widgets_small">
                <div className="post_img">
                  <a href="#">
                    <img src="assets/img/flag/match3.png" alt />
                  </a>
                </div>
                <div className="single_post_text">
                  <h4><a href="#" className="playing_teams">Russia <span>VS &nbsp;</span>Italy</a></h4>
                  <p className="meta macth_meta">Tomorrow&nbsp;|&nbsp;<span> M22:30 (CST) </span> &nbsp;</p>
                </div>
                <div className="circle_match_time">
                  <div className="third_circle circle"><canvas width={36} height={36} /></div>
                </div>
              </div>
              <div className="space-10" />
              <div className="border_black" />
              <div className="space-10" />
              <div className="single_post post_type13 widgets_small">
                <div className="post_img">
                  <a href="#">
                    <img src="assets/img/flag/match4.png" alt />
                  </a>
                </div>
                <div className="single_post_text">
                  <h4><a href="#" className="playing_teams">Croatia <span>VS &nbsp;</span>England</a></h4>
                  <p className="meta macth_meta">Tomorrow&nbsp;|&nbsp;<span> M22:30 (CST) </span> &nbsp;</p>
                </div>
                <div className="circle_match_time">
                  <div className="fourth_circle circle"><canvas width={36} height={36} /></div>
                </div>
              </div>
              <div className="space-10" />
              <div className="border_black" />
              <div className="space-10" />
              <div className="single_post post_type13 widgets_small">
                <div className="post_img">
                  <a href="#">
                    <img src="assets/img/flag/match5.png" alt />
                  </a>
                </div>
                <div className="single_post_text">
                  <h4><a href="#" className="playing_teams">Germany <span>VS &nbsp;</span>France</a></h4>
                  <p className="meta macth_meta">Tomorrow&nbsp;|&nbsp;<span> M22:30 (CST) </span> &nbsp;</p>
                </div>
                <div className="circle_match_time">
                  <div className="fifth_circle circle"><canvas width={36} height={36} /></div>
                </div>
              </div>
            </div>
            {/*:::::: POST TYPE 13 END:::::::*/}
          </div>
          <div className="col-lg-6 col-lg-12">
            <div className="box widget news_letter mb30">
              <h2 className="widget-title">News Letter</h2>
              <p>Your email address will not be this published. Required fields are News Today.</p>
              <div className="space-20" />
              <div className="signup_form">
                <form action="index.html">
                  <input className="signup" type="email" placeholder="Your email" />
                  <input type="button" className="cbtn" defaultValue="sign up" />
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
                <div className="col-6 text-right align-self-center">	<a href="#" className="see_all mb20">See All</a>
                </div>
              </div>
              <ul>
                <li>
                  <a href="#" style={{background: 'url(assets/img/categories/category1.jpg)'}}>	<span>Restaurant</span>
                    <img src="assets/img/icon/union.png" alt />
                  </a>
                </li>
                <li>
                  <a href="entertrainment.html" style={{background: 'url(assets/img/categories/category2.jpg)'}}>	<span>Entertainment</span>
                    <img src="assets/img/icon/union.png" alt />
                  </a>
                </li>
                <li>
                  <a href="feature.html" style={{background: 'url(assets/img/categories/category3.jpg)'}}>	<span>Feature</span>
                    <img src="assets/img/icon/union.png" alt />
                  </a>
                </li>
                <li>
                  <a href="business.html" style={{background: 'url(assets/img/categories/category4.jpg)'}}>	<span>Business</span>
                    <img src="assets/img/icon/union.png" alt />
                  </a>
                </li>
                <li>
                  <a href="trending.html" style={{background: 'url(assets/img/categories/category5.jpg)'}}>	<span>Trending</span>
                    <img src="assets/img/icon/union.png" alt />
                  </a>
                </li>
                <li>
                  <a href="sports.html" style={{background: 'url(assets/img/categories/category6.jpg)'}}>	<span>Sports</span>
                    <img src="assets/img/icon/union.png" alt />
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-6 col-lg-12">
            <div className="banner2 mb30">
              <a href="#">
                <img src="assets/img/bg/sidebar-1.png" alt />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
      <Link to={'/'} className='btn btn-primary'> Home</Link>
        <Link className='btn btn-danger ml-2 mr-2' to={'/single/news'}>About</Link>
        This is a home page
</>
  )
}
