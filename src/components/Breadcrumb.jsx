import React from 'react';
import { FaChevronRight } from 'react-icons/fa';

const Breadcrumb = ({ path }) => {
  return (
    <div className="text-gray-600 mb-6 flex items-center">
      {path.map((folder, index) => (
        <span key={index} className="flex items-center space-x-2">
          <span className="font-semibold">{folder}</span>
          {index < path.length - 1 && <FaChevronRight className="text-xs" />}
        </span>
      ))}
    </div>
  );
};

export default Breadcrumb;
