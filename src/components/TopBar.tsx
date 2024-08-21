import { CiMapPin, CiPhone, CiMail } from "react-icons/ci";

function TopBar() {
  return (
    <div className="py-3 bg-gray-600 flex flex-row justify-between text-white px-5 md:px-10">
      <div className="flex flex-row items-center gap-x-10">
        <div className="flex flex-row items-center gap-x-3">
          <CiMapPin className="text-xl" />
          <div className="text-sm">Location</div>
        </div>

        <div className="flex flex-row items-center gap-x-3">
          <CiPhone />
          <div className="text-sm">Phone</div>
        </div>
      </div>
      <div className="flex flex-row items-center gap-x-10">
        <div className="flex flex-row items-center gap-x-3">
          <CiMail />
          <div className="text-sm">Email</div>
        </div>
      </div>
    </div>
  );
}

export default TopBar;
