import React from "react";
import ReactDOM from "react-dom";

type Props = {
  title: string;
};

const CustomTitle: React.FC<Props> = (props) => {
  console.log(props);
  return (
    <div>
      <h1>{props.title}</h1>
    </div>
  );
};

export default CustomTitle;
