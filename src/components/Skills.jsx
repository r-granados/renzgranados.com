import React from "react";
import SkillBar from "./SkillBar";

const Skills = () => {
  return (
    <div name="skills" className="w-full h-[600px] bg-[#0d012c] pt-[75px]">
      <div className="flex flex-col gap-2 w-full max-w-[1000px] h-full mx-auto p-8 ">
        <div className="my-4">
          <h1 className="text-[#03C03C] text-xl">SKILLS</h1>
          <h1 className="text-white text-4xl sm:text-5xl font-semibold py-2">
            My Current Skillset
          </h1>
        </div>

        <div className="grid md:grid-cols-2 gap-4 w-full h-full text-gray-50 text-xl font-[monospace]">
          <SkillBar
            skill="Backend Development"
            percent="95"
            techs="Python, Javascript, SQL, PHP"
          />

          <SkillBar
            skill="Frontend Development"
            percent="40"
            techs="Javascript, HTML, CSS"
          />

          <SkillBar
            skill="DevOps"
            percent="60"
            techs="AWS, Docker, Kubernetes, Terraform"
          />

          <SkillBar
            skill="Data Engineering | ETL"
            percent="80"
            techs="Python, Spark, Airflow, SQL"
          />

          <SkillBar
            skill="BI | Data Visualization"
            percent="90"
            techs="PowerBI, Plotly, TIBCO Spotfire"
          />

          <SkillBar skill="Data Analytics" percent="45" techs="JMP, SAS, R" />

          <SkillBar
            skill="DB Management"
            percent="65"
            techs="MySQL, PostgreSQL, IBM DB2, MSSQL Server"
          />
        </div>
      </div>
    </div>
  );
};

export default Skills;
