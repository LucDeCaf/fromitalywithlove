import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Layout from "../../../layout/Layout";
import Heading from "../../../components/Heading";
import CardPanel from "../../../components/CardPanel";
import { NextPage } from "next";

const Page: NextPage = () => {
  const router = useRouter();
  const [images, setImages] = useState([]);
  const [pageTitle, setPageTitle] = useState("Loading...");

  useEffect(() => {
    if (!router.isReady) return;

    const { galleryId } = router.query;
    if (galleryId && typeof galleryId === "string") {
      setPageTitle(galleryId.charAt(0).toUpperCase() + galleryId.slice(1));
    }
  }, [router.isReady]);

  useEffect(() => {
    fetch("https://fromitalywithlove-git-testing-ldecafmeyer-gmailcom.vercel.app/api/images/get")
      .then((res) => res.json())
      .then((data) => setImages(data.data));
  }, []);

  return (
    <Layout admin={false}>
      <Heading>{pageTitle}</Heading>
      <CardPanel img={true} images={images} />
    </Layout>
  );
};

export default Page;
