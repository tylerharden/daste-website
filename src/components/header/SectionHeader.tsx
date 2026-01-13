import React from 'react';
import './SectionHeader.css';

type SectionHeaderProps = {
  leftHeading: string;
  rightHeading: string;
};

const SectionHeader = ({ leftHeading, rightHeading }: SectionHeaderProps) => {
  return (
    <div className="section-heading-container">
      <div className="section-headings">
        <h2 className="left-heading">{leftHeading}</h2>
        <h2 className="right-heading">{rightHeading}</h2>
      </div>
    </div>
  );
};

export default SectionHeader;
