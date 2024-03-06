import React from "react";
import PropTypes from "prop-types";

const RightSidebar = () => {
  return (
    <section className="custom-scrollbar rightsidebar">
      <div className="flex flex-1 flex-col justify-start">
        <h3 className="text-heading4-medium text-light-1">
          Suggested Community
        </h3>
      </div>
      <div className="flex flex-1 flex-col justify-start">
        <h3 className="text-heading4-medium text-light-1">
          Suggested Users
        </h3>
      </div>
    </section>
  );
};

RightSidebar.propTypes = {};

export default RightSidebar;
