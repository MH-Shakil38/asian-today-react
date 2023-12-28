import React, { useEffect, useState } from "react";
import axiosClient from "../../api/axiox";

export default function MainNews() {
  const [news, setNews] = useState(false);
  const getMainNews = async () => {
    // setLoader(true);
    const { data } = await axiosClient.get("asian/main-newses");
    // setLoader(false);
    setNews(data.data);
    console.log(data.data);
  };

  useEffect(() => {
    getMainNews();
  }, []);
  return (
    <>
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
              <div className="feature_carousel owl-carousel nav_style1 owl-loaded owl-drag">
                {/*CAROUSEL START*/}
                <div className="owl-stage-outer">
                  <div
                    className="owl-stage"
                    style={{
                      width: 3705,
                      transform: "translate3d(-1140px, 0px, 0px)",
                      transition: "all 0s ease 0s",
                    }}
                  >
                    <div
                      className="owl-item cloned"
                      style={{ width: 255, marginRight: 30 }}
                    >
                      <div className="single_post post_type6 post_type7">
                        <div className="post_img gradient1">
                          <img src="assets/img/feature/feature3.jpg" alt />
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
                    </div>
                    <div
                      className="owl-item cloned"
                      style={{ width: 255, marginRight: 30 }}
                    >
                      <div className="single_post post_type6 post_type7">
                        <div className="post_img gradient1">
                          <img src="assets/img/feature/feature4.jpg" alt />
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
                    <div
                      className="owl-item cloned"
                      style={{ width: 255, marginRight: 30 }}
                    >
                      <div className="single_post post_type6 post_type7">
                        <div className="post_img gradient1">
                          <img src="assets/img/feature/feature3.jpg" alt />
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
                    </div>
                    <div
                      className="owl-item cloned"
                      style={{ width: 255, marginRight: 30 }}
                    >
                      <div className="single_post post_type6 post_type7">
                        <div className="post_img gradient1">
                          <img src="assets/img/feature/feature2.jpg" alt />
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
                    {Object.keys(news).map((key, index) => {
                  const newsObject = news[key];
                  console.log(newsObject)
                  if(index < 5){
                  return (
                        <>
                    <div
                      className="owl-item active"
                      style={{ width: 255, marginRight: 30 }}
                    >
                      <div className="single_post post_type6 post_type7">
                        <div className="post_img gradient1">
                          <a href="#">
                            <img src={newsObject.path_link} alt height={"300px"}/>
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
                    </div>
                    </>
                        );
                    }
                    })}
                    
                  
                    <div
                      className="owl-item"
                      style={{ width: 255, marginRight: 30 }}
                    >
                      <div className="single_post post_type6 post_type7">
                        <div className="post_img gradient1">
                          <img src="assets/img/feature/feature2.jpg" alt />
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
                    <div
                      className="owl-item cloned"
                      style={{ width: 255, marginRight: 30 }}
                    >
                      <div className="single_post post_type6 post_type7">
                        <div className="post_img gradient1">
                          <a href="#">
                            <img src="assets/img/feature/feature2.jpg" alt />
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
                    </div>
                    <div
                      className="owl-item cloned"
                      style={{ width: 255, marginRight: 30 }}
                    >
                      <div className="single_post post_type6 post_type7">
                        <div className="post_img gradient1">
                          <img src="assets/img/feature/feature3.jpg" alt />
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
                    </div>
                    <div
                      className="owl-item cloned"
                      style={{ width: 255, marginRight: 30 }}
                    >
                      <div className="single_post post_type6 post_type7">
                        <div className="post_img gradient1">
                          <img src="assets/img/feature/feature4.jpg" alt />
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
                    <div
                      className="owl-item cloned"
                      style={{ width: 255, marginRight: 30 }}
                    >
                      <div className="single_post post_type6 post_type7">
                        <div className="post_img gradient1">
                          <img src="assets/img/feature/feature3.jpg" alt />
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
                    </div>
                  </div>
                </div>
                <div className="owl-nav">
                  <div className="owl-prev">
                    <i className="fal fa-angle-left" />
                  </div>
                  <div className="owl-next">
                    <i className="fal fa-angle-right" />
                  </div>
                </div>
                <div className="owl-dots">
                  <div className="owl-dot active">
                    <span />
                  </div>
                  <div className="owl-dot">
                    <span />
                  </div>
                </div>
              </div>
              {/*CAROUSEL END*/}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
