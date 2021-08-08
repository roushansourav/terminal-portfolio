import {
  AiFillCloseCircle,
  AiFillMinusCircle,
  AiFillPlusCircle,
} from "react-icons/ai";

const ToolTab = () => {
  return (
    <div style={{ marginBottom: "1rem" }}>
      <span>
        <AiFillCloseCircle
          style={{
            color: "red",
            marginRight: "0.25rem",
            cursor: "pointer",
          }}
        />
      </span>
      <span>
        <AiFillMinusCircle
          style={{
            color: "orange",
            marginRight: "0.25rem",
            cursor: "pointer",
          }}
        />
      </span>
      <span>
        <AiFillPlusCircle
          style={{
            color: "green",
            marginRight: "0.25rem",
            cursor: "pointer",
          }}
        />
      </span>
    </div>
  );
};

export default ToolTab;
