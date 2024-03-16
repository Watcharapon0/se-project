import "../Navbar/Navbar.css";
import Navbar from "../Navbar/Navbar";

const TravelSale = () => {
  return (
    <>
      <div>
        <div>
          <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
            <Navbar />
            <br />

            <div className="flex ">
              <div className=" flex-none w-10"></div>
              <div className="flex-1 w-64  text-center">
                <button className="rounded-lg  bg-green-600 mr-4 ">
                  รายงานการเดินทาง
                </button>
              </div>
              <div className="flex-1 w-64 text-right">
                <button className="rounded-lg  bg-green-600 mr-4 ">
                  +สร้าง
                </button>
              </div>
            </div>

            <br />
            <div className="flex ">
              <div className=" flex-none w-10"></div>
              <div className="flex-1 w-64  text-center">
                <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-red-700  table-auto">
                  <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400 ">
                    <tr>
                      <th scope="col" className="px-6 py-3">
                        วันที่เข้าพบ
                      </th>
                      <div className="px-6 py-3 text-center">
                        การเช็คอิน
                        <th scope="col "className="px-10 py-3">เริ่มต้น</th>
                        <th scope="col" className="px-10 py-3">สิ้นสุด</th>
                      </div>
                      <th scope="col" className="px-6 py-3">
                        ระยะทาง
                      </th>
                      <th scope="col" className="px-6 py-3">
                        ค่าใช้จ่าย
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                      <th
                        scope="row"
                        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                      >
                        Apple MacBook Pro 17"
                      </th>
                      <td className="px-6 py-4">Silver</td>
                      <td className="px-6 py-4">Laptop</td>
                      <td className="px-6 py-4">$2999</td>
                      
                      <td className="px-6 py-4">
                        <a
                          href="#"
                          className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                        >
                          Edit
                        </a>
                      </td>
                    </tr>
                    <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                      <th
                        scope="row"
                        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                      >
                        Microsoft Surface Pro
                      </th>
                      <td className="px-6 py-4">White</td>
                      <td className="px-6 py-4">Laptop PC</td>
                      <td className="px-6 py-4">$799</td>

                      <td className="px-6 py-4">
                        <a
                          href="#"
                          className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                        >
                          Edit
                        </a>
                      </td>
                    </tr>
                    <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                      <th
                        scope="row"
                        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                      >
                        Magic Mouse 2
                      </th>
                      <td className="px-6 py-4">Black</td>
                      <td className="px-6 py-4">Accessories</td>
                      <td className="px-6 py-4">$99</td>

                      <td className="px-6 py-4">
                        <a
                          href="#"
                          className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                        >
                          Edit
                        </a>
                      </td>
                    </tr>
                    <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                      <th
                        scope="row"
                        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                      >
                        Google Pixel Phone
                      </th>
                      <td className="px-6 py-4">Gray</td>
                      <td className="px-6 py-4">Phone</td>
                      <td className="px-6 py-4">$799</td>

                      <td className="px-6 py-4">
                        <a
                          href="#"
                          className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                        >
                          Edit
                        </a>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className=" flex-none w-10 "></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TravelSale;
