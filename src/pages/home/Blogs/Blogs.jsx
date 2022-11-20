import React from "react";

//img
import blog1 from "../../../assets/Images/blogs/img-3.jpg";
import blog2 from "../../../assets/Images/blogs/img-4.jpg";
import blog3 from "../../../assets/Images/blogs/img-5.jpg";

//css
import "./blog.css";

const Blogs = () => {
  return (
    <section id="blog">
      <div
        className="container"
        data-aos="fade-down"
        data-aos-easing="linear"
        data-aos-duration="1500"
      >
        <div className="blog-title-box">
          <h2 className="text-center  blog-title"> Explore our foods </h2>
          <p className="Explore-lorem  text-lg-start text-center ">
            {" "}
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur
            illum labore, iure modi reprehenderit impedit nemo quas odit
            voluptates beatae consequuntur soluta hic corporis itaque
            exercitationem eum magnam assumenda ab porro sunt. Doloribus quos
            modi rem. Aliquid nostrum corrupti perferendisbeatae consequuntur
            soluta hic eum magnam assumenda ab porro sunt. Doloribus quos modi
            rem. Aliquid nostrum corrupt.
          </p>
        </div>

        <div className="row  align-items-center row-blog text-lg-start text-center ">
          {/* col 1 */}
          <div className="col-lg-4  ">
            <img
              className="img-fluid card-Img"
              src={blog1}
              alt=" blog article "
            />
            <div className="p-3 text-lg-start text-center ">
              <h5> 10 Reason to do a digital detox challenge </h5>
              <p>
                {" "}
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum,
                perferendis dolor. Dolores sit delectus recusandae!
              </p>
            </div>
          </div>

          {/* col 2 */}

          <div className="col-lg-4  ">
            <img
              className="img-fluid card-Img"
              src={blog2}
              alt=" blog article "
            />
            <div className="p-3">
              <h5>The ultimate burger: Egg in a hole burger</h5>
              <p>
                {" "}
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum,
                perferendis dolor. Dolores sit delectus recusandae!
              </p>
            </div>
          </div>

          {/* col 3 */}
          <div className="col-lg-4  ">
            <img
              className="img-fluid card-Img"
              src={blog3}
              alt=" blog article "
            />
            <div className="p-3">
              <h5>Traditional soft pretzels with sweet lemon </h5>
              <p>
                {" "}
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum,
                perferendis dolor. Dolores sit delectus recusandae!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blogs;
