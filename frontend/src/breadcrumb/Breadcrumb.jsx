import React from "react";
import { Link } from "react-router-dom";

function Breadcrumb({ paths }) {
  // paths = [{ name: "Home", link: "/" }, { name: "Clothes" }]
  return (
    <nav className="text-gray-700 text-sm ">
      <ol className="flex ">
        {paths.map((item, index) => (
          <li key={index} className="flex items-center">
            {item.link ? (
              <Link to={item.link} className="hover:underline hover:text-blue-500 text-gray-300">
                {item.name}
              </Link>
            ) : (
              <span className="font-semibold text-gray-300">{item.name}</span>
            )}
            {index < paths.length - 1 && <span className="mx-2 text-gray-300">{">"}</span>}
          </li>
        ))}
      </ol>
    </nav>
  );
}

export default Breadcrumb;
