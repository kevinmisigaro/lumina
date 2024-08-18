import {
  CiBrightnessUp,
  CiUser,
  CiAlignLeft,
  CiBookmarkCheck,
} from "react-icons/ci";

function ValueCard({
  title,
  customClass,
  description,
}: {
  title: string;
  customClass?: string;
  description: string;
}) {
  const iconDisplay = (str: string) => {
    switch (str) {
      case "Customer Focus":
        return <CiUser className="text-6xl" />;
      case "⁠Innovation":
        return <CiBrightnessUp className="text-6xl" />;
      case "Sustainability":
        return <CiAlignLeft className="text-6xl" />;
      case "⁠Quality":
        return <CiBookmarkCheck className="text-6xl" />;
      default:
        return <CiUser className="text-6xl" />;
    }
  };

  return (
    <div
      className={`${customClass} p-8 border rounded-md max-w-md border-[#401716] flex flex-col gap-y-5`}
    >
      {iconDisplay(title)}
      <div>
        <span className="underline">{title}</span>: {description}
      </div>
    </div>
  );
}

export default ValueCard;
