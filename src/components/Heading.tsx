import { FC } from "react";
import Hr from "./Hr";

interface Props {
  children: string;
}

const Heading: FC<Props> = (props) => {
  return (
    <>
      <h1 className="text-center text-info display-3 font-weight-bold">
        {props.children}
      </h1>
      <Hr />
    </>
  );
}

export default Heading;
