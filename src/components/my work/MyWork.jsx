import "./MyWork.scss";
import theme_pattern from "../../assets/theme_pattern.svg";
import mywork_data from "../../helper/mywork_data";
import arrow_icon from "../../assets/arrow_icon.svg";

const MyWork = () => {
  return (
    <div>
      <div id="mywork" className="mywork">
        <div className="mywork-title">
          <h1>My Latest Work</h1>
          <img src={theme_pattern} alt="theme_pattern" />
        </div>

        <div className="mywork-container">
          {mywork_data.map((work, idx) => {
            return (
              <div
                key={idx}
                className="mywork-item"
                onClick={() => {
                  window.open(work.w_link);
                }}
              >
                <img src={work.w_img} alt="work_image" />
                <div className="mywork-item-description">
                  <h3>{work.w_name}</h3>
                  <p>{work.w_desc}</p>
                </div>
              </div>
            );
          })}
        </div>

        <div
          className="mywork-showmore"
          onClick={() => {
            window.open(
              "https://github.com/Zasim1074?tab=repositories",
              "_blank",
            );
          }}
        >
          <p>Show More</p>
          <img src={arrow_icon} alt="arrow_icon" />
        </div>
      </div>
    </div>
  );
};

export default MyWork;
