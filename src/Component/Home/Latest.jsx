import React, { useEffect, useState } from 'react'
import axiosClient from '../../api/axiox';
import { Link, useParams } from 'react-router-dom';

export default function Latest() {
  const param = useParams()
    const [news, setLatest] = useState(false);
  const getLatestPost = async () => {
      // setLoader(true);
      const { data } = await axiosClient.get("asian/slider-posts");
      // setLoader(false);
      setLatest(data.data)
      console.log(data.data);
    };
  const scrollTop = () =>{
    window.scrollTo({ top: 0, behavior: 'smooth' });
  } 
    useEffect(() => {
        getLatestPost();
    }, [param]);
  return (
    <>
      <div id="latest" className="tab-pane fade show in active">
                      <div className="widget tab_widgets mb30">

                      {Object.keys(news).map((key, index) => {
                  const newsObject = news[key];
                  console.log(newsObject)
                  if(index < 5){
                  return (
                        <>
                        <a>
                        <Link className='btn p-0 text-left' to={`/${newsObject.name}/news/${newsObject.id}/${newsObject.uuid}`}>
                        <div className="single_post widgets_small">
                          <div className="post_img">
                            <div className="img_wrap">
                              <a href="#">
                                <img  onclick={scrollTop} src={newsObject.path_link} alt />
                              </a>
                            </div>
                          </div>
                          <div className="single_post_text">
                            <div className="meta2 meta_separator1">	<a href="#">{newsObject.name}</a>
                              <a href="#">{newsObject.create}</a>
                            </div>
                            <h4><a href="#news">Copa America: Luis Suarez from devastated US</a></h4>
                          </div>
                        </div>
                        <div className="space-15" />
                        <div className="border_black" />
                        <div className="space-15" />
                        </Link>
                        </a>
                        </>
                        );
                    }
                    })}

                      </div>
                    </div>
    </>
  )
}
