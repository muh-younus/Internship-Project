import React from "react";

function Description() {
  return (
    <>
      <section className="w-[1180px]    mx-auto  flex flex-row gap-3 p-3  rounded mb-3 ">
        <div className="w-[880px] h-[618px] bg-white p-2 rounded">
          <ul className="flex flex-row gap-8">
            {["Description", "Review", "Shipping", "About Seller"].map(
              (item) => (
                <li
                  key={item}
                  className="relative font-weight-[500] styke-medium text-[16px] cursor-pointer 
      hover:text-blue-500 transition-colors duration-300
      after:content-[''] after:absolute after:left-0 after:-bottom-1 
      after:h-[2px] after:w-0 after:bg-blue-500 after:transition-all after:duration-300 
      hover:after:w-full"
                >
                  {item}
                </li>
              )
            )}
          </ul>
          <hr className="my-2" />
          <p className="text-[16px] line-height-[24px] font-weight-[400] font-inter leading-[-0.2px] ">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Lorem ipsum dolor sit amet, consectetur adipisicing elit,
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Ut enim ad minim veniam, Quis nostrud exercitation ullamco laboris
            nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur.
          </p>
          <div>
            <table className="table-auto border-collapse border border-gray-300 w-[567px] mt-6 h-[180px]">
              <tbody>
                {[1, 2, 3, 4, 5].map((num) => (
                  <tr key={num}>
                    <td className="border border-gray-300 px-4 py-2 bg-gray-200">
                      Row {num}
                    </td>
                    <td className="border border-gray-300 px-4 py-2">
                      Data {num}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div
          className="mt-4 flex flex-col gap-2"
          >
            <p 
            className="text-[#505050] text-[16px] line-height-[24px] font-weight-[400] font-inter leading-[-0.2px] "
            >
              &#10003; Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Laudantium, hic!
            </p>
            <p 
            className="text-[#505050] text-[16px] line-height-[24px] font-weight-[400] font-inter leading-[-0.2px] "
            >
              &#10003; Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Laudantium, hic!
            </p>
            <p 
            className="text-[#505050] text-[16px] line-height-[24px] font-weight-[400] font-inter leading-[-0.2px] "
            >
              &#10003; Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Laudantium, hic!
            </p>
            <p 
            className="text-[#505050] text-[16px] line-height-[24px] font-weight-[400] font-inter leading-[-0.2px] "
            >
              &#10003; Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Laudantium, hic!
            </p>
          </div>
        </div>

        <div></div>
      </section>
    </>
  );
}

export default Description;
