import React, { Component } from "react";

class SkillBar extends Component {
  render() {
    return (
      <div className="flex flex-col px-4">
        <p>{this.props.skill}</p>
        <div class="w-full bg-white dark:bg-gray-200 rounded-full">
          <div
            className="bg-[#5414ac] text-[#ecedf3] dark: text-xs font-medium text-center p-0.5 leading-none rounded-l-full duration-1000"
            style={{ width: this.props.percent + "%" }}>
            {this.props.percent}%
          </div>
        </div>
        <p className="text-sm">{this.props.techs}</p>
      </div>
    );
  }
}

export default SkillBar;
