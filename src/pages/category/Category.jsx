import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';
import axiosClient from '../../api/axiox';
import '../../../public/assets/css/category.css'
import ReletedPopularLatest from '../../Component/Home/ReletedPopularLatest';

export default function Category() {
  const param = useParams()
  const [news, setCatNews] = useState(false);
  const [category, setCategory] = useState(false);
  const getCatNews = async () => {
      // setLoader(true);
      const { data } = await axiosClient.get(`asian/news-based-on-category/${param.id}`);
      // setLoader(false);
      setCatNews(data.data.categoriesNews)
      setCategory(data.data.category)
      console.log(category);
    };

    useEffect(() => {
      getCatNews();
    }, [param]);

  return (
    <>
      <div>
  {/*::::: INNER TABLE AREA START :::::::*/}
  <div className="inner_table">
    <div className="container">
      <div className="row">
        <div className="col-12">
          <div className="bridcrumb">	<a href="#">Home</a> / {category.name}</div>
        </div>
      </div>
    </div>
  </div>
  {/*::::: INNER TABLE AREA END :::::::*/}
  {/*::::: ARCHIVE AREA START :::::::*/}
  <div className="archives padding-top-30">
    <div className="container">
      <div className="row">
        <div className="col-md-6 col-lg-8">
          <div className="row">
            <div className="row">
              <div className="col-12 align-self-center">
                <div className="categories_title">
                  <h5>Category: <a href="#">{category.name}</a></h5>
                </div>
              </div>
            </div>
          </div>
          <div className="entertrainment_carousel mb30">
            {/*CAROUSEL START*/}
            <div className="entertrainment_item">
              <div className="row justify-content-center">
              {Object.keys(news).map((key, index) => {
                  const info = news[key];
                  console.log(info)
                  if(index < 20){
                  return (
                        <>
                        
                       <div className="col-lg-6">
                  <Link to={`/${info.name}/news/${info.id}/${info.uuid}`}>
                  <div className="single_post post_type3 mb30">
                    <div className="post_img">
                      <div className="img_wrap categories">
                        <a >
                          <img src={info.path_link} alt />
                        </a>
                      </div>
                    </div>
                    <div className="single_post_text">
                      <div className="meta3">	<a >{info.name}</a>
                        <a >March 26, 2020</a>
                      </div>
                      <h4><a >{info.title}</a></h4>
                      <div className="space-10" />
                      <p className="post-p">{info.details}</p>
                    </div>
                  </div>
                  </Link>

                </div>
                        </>
                        );
                    }
                    })}
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <div className="cpagination padding5050">
                <nav aria-label="Page navigation example">
                  <ul className="pagination">
                    <li className="page-item">
                      <a className="page-link" href="#" aria-label="Previous"> <span aria-hidden="true"><i className="fas fa-caret-left" /></span>
                      </a>
                    </li>
                    <li className="page-item"><a className="page-link" href="#">1</a>
                    </li>
                    <li className="page-item"><a className="page-link" href="#">..</a>
                    </li>
                    <li className="page-item"><a className="page-link" href="#">5</a>
                    </li>
                    <li className="page-item">
                      <a className="page-link" href="#" aria-label="Next"> <span aria-hidden="true"><i className="fas fa-caret-right" /></span>
                      </a>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-6 col-lg-4">
          <ReletedPopularLatest />
          <div className="trending_widget mb30">
            <h2 className="widget-title">Tending News</h2>
            <div className="single_post post_type3">
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
            </div>
            <div className="space-15" />
            <div className="border_black" />
            <div className="space-30" />
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
          {/*:::::: POST TYPE 4 END :::::::*/}
          <div className="box widget news_letter mb30">
            <h2 className="widget-title">News Letter</h2>
            <p>Your email address will not be this published. Required fields are News Today.</p>
            <div className="space-20" />
            <div className="signup_form">
              <form action="index.html">
                <input className="signup" type="email" placeholder="Your email address" />
                <input type="button" className="cbtn" defaultValue="sign up" />
              </form>
              <div className="space-10" />
              <p>We hate spam as much as you do</p>
            </div>
          </div>
          <div className="follow_box widget mb30">
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
          {/*:::::: POST TYPE 2 END:::::::*/}
          <div className="banner2 mb30">
            <a href="#">
              <img src="assets/img/bg/sidebar-1.png" alt />
            </a>
          </div>
          {/*:::::: POST TYPE 4 START :::::::*/}
        </div>
      </div>
    </div>
  </div>
  {/*::::: ARCHIVE AREA END :::::::*/}
  {/*::::: BANNER AREA START :::::::*/}
  <div className="padding5050 fourth_bg">
    <div className="container">
      <div className="row">
        <div className="col-lg-8 m-auto">
          <div className="banner1">
            <a href="#">
              <img src="assets/img/bg/banner1.png" alt />
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/*::::: BANNER AREA END :::::::*/}
</div>

    </>
  )
}
