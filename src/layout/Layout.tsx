import PublicNavbar from "../components/PublicNavbar";
import AdminNavbar from "../components/AdminNavbar";
import { FC, ReactNode } from "react";

interface Props {
  admin: boolean;
  children: ReactNode;
}

const Layout: FC<Props> = (props) => {
  return (
    <>
      {props.admin ? <AdminNavbar /> : <PublicNavbar />}
      <main>
        {props.children}
      </main>
    </>
  )
}

export default Layout;
