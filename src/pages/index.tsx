import { NextPage } from "next";
import { useState, useEffect } from "react";
import Hr from "../components/Hr";
import ImageSlider from "../components/ImageSlider";
import Layout from "../layout/Layout";

const Home: NextPage = () => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/api/images/get")
      .then((res) => res.json())
      .then((data) => setImages(data.data));
  }, []);

  return (
    <Layout admin={false}>
      <h1 className="text-center text-info display-3 font-weight-bold cursive">
        From Italy, With Love
      </h1>
      <Hr />
      <ImageSlider images={images} />
    </Layout>
  );
}

export default Home;
