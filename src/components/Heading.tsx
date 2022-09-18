import Hr from "./Hr";

interface Props {
  children: string;
}

const Heading = ({ children }: Props): JSX.Element => {
  return (
    <>
      <h1 className="text-center text-info display-3 font-weight-bold">
        {children}
      </h1>
      <Hr />
    </>
  );
}

export default Heading;
