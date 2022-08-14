import Hr from "./Hr";

function Heading(props) {
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
