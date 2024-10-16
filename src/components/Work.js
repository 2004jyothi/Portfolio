import { NavLink } from "react-router-dom";
import "./WorkCardStyles.css";
import WorkCard from "./WorkCard";
import WorkCradData from "./WorkCradData"
const Work = () => {
  return (
  <div className="work-container">
    <h1 className="project-heading">
      Projects
    </h1>
    <div className="project-container">
      {WorkCradData.map((val,ind)=>{
        return(
          <WorkCard 
          key={ind}
          title={val.title}
          text={val.text}
          view={val.view}
          />
        )
      })}
    </div>
  </div>
  );
};

export default Work;
