import { NextPage } from "next";
import Layout from "../../layout/Layout";
import styles from "../../styles/Admin.module.scss";

const Page: NextPage = () => {
  return (
    <Layout admin={true}>
      <main className={styles.main}>
        <h1 className="display-4 text-decoration-underline">Welcome, MG</h1>
      </main>
    </Layout>
  )
}

export default Page;
