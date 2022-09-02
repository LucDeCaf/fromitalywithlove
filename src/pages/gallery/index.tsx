import { useState, useEffect } from "react";
import Layout from "../../layout/Layout";
import Heading from "../../components/Heading";
import CardPanel from "../../components/CardPanel";
import { NextPage } from "next";

const Page: NextPage = () => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    fetch("https://fromitalywithlove-git-testing-ldecafmeyer-gmailcom.vercel.app/api/images/get")
      .then((res) => res.json())
      .then((data) => setImages(data.data));
  }, []);

  return (
    <Layout admin={false}>
      <Heading>Gallery</Heading>
      <CardPanel images={images} img={false} />
    </Layout>
  );
}

export default Page;
