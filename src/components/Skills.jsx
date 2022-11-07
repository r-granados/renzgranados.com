import React from "react";
import SkillBar from "./SkillBar";
import { certList } from "../data/Data";
import { useInView } from "react-intersection-observer";

const Skills = () => {
  const { ref, inView } = useInView({
    /* Optional options */
    threshold: 0,
  });

  return (
    <div name="skills" className="page-container">
      <div className="page-content flex flex-col gap-8">
        <div>
          <h1 className="page-title">SKILLS</h1>
          <h1 className="text-4xl sm:text-5xl font-semibold">My Current Skillset</h1>
        </div>

        <div ref={ref} className="grid md:grid-cols-2 gap-4 w-full  text-xl font-[monospace]">
          <SkillBar skill="Backend Development" percent={inView ? "95" : "0"} techs="Python, Javascript, SQL, PHP" />

          <SkillBar skill="Frontend Development" percent={inView ? "45" : "0"} techs="Javascript, HTML, CSS" />

          <SkillBar skill="DevOps" percent={inView ? "60" : "0"} techs="AWS, Docker, Kubernetes, Terraform" />

          <SkillBar skill="Data Engineering | ETL" percent={inView ? "80" : "0"} techs="Python, Spark, Airflow, SQL" />

          <SkillBar
            skill="BI | Data Visualization"
            percent={inView ? "90" : "0"}
            techs="PowerBI, Plotly, TIBCO Spotfire"
          />

          <SkillBar skill="Data Analytics" percent={inView ? "45" : "0"} techs="JMP, SAS, R" />

          <SkillBar
            skill="DB Management"
            percent={inView ? "65" : "0"}
            techs="MySQL, PostgreSQL, IBM DB2, MSSQL Server"
          />
        </div>

        <div className="px-4">
          <h1 className="text-2xl colored-title font-semibold">Certificates</h1>
          <div className="grid md:grid-cols-3 gap-4 w-full h-full my-4 font-[monospace]">
            {certList.map(([cert, thumbnail, title]) => (
              <div className="flex flex-col justify-center items-center text-center">
                <a href={cert} target="_blank" rel="noreferrer">
                  <img src={thumbnail} alt="aws-cert" />
                  <p className="sm:text-sm">{title}</p>
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
