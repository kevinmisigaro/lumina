const ProductCard = ({ image, uniqueI, title, description }: { image: string, uniqueI: string, title: string, description: string }) => {
  return (
    <>
      <div
        onClick={() => {
          const dialog = document.getElementById(
            uniqueI
          ) as HTMLDialogElement;
          if (dialog) {
            dialog.showModal();
          }
        }}
        className="border-2 rounded-md max-w-md border-[#401716] cursor-pointer group"
      >
        <div
          style={{
            backgroundImage: `url("${image}")`,
          }}
          className="h-[28vh] bg-cover bg-center"
        />
        <div className="p-6">
          <div className="group-hover:underline">
            {title}
          </div>
        </div>
      </div>

      <dialog id={uniqueI} className="modal">
        <div className="modal-box w-11/12 max-w-5xl bg-white">
          <h3 className="font-bold text-lg mb-4">
            {title}
          </h3>
          <div
          style={{
            backgroundImage: `url("${image}")`,
          }}
          className="h-[35vh] bg-cover bg-center"
        />
          <p className="py-4 text-justify">
            {description}
          </p>
          <div className="modal-action">
            <form method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <button className="btn">Close</button>
            </form>
          </div>
        </div>
      </dialog>
    </>
  );
};

export default ProductCard;
