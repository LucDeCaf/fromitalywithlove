import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Layout from "../../../../layout/Layout";
import CardPanel from "../../../../components/CardPanel";
import Heading from "../../../../components/Heading";
import { NextPage } from "next";

const Page: NextPage = () => {
  const router = useRouter();
  const [images, setImages] = useState([]);
  const [pageTitle, setPageTitle] = useState("Loading...");

  useEffect(() => {
    if (!router.isReady) return;

    const { subGalleryId } = router.query;
    if (subGalleryId && typeof subGalleryId === "string") {
      setPageTitle(subGalleryId.charAt(0).toUpperCase() + subGalleryId.slice(1));
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
}

export default Page;
