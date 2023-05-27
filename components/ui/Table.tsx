const Table = () => {
  return (
    <div className="w-full overflow-hidden">
      <div className="flex flex-col">
        <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
            <div className="overflow-hidden">
              <div className="grid grid-cols-3 bg-[#f5f5f5] rounded-xl">
                <div className="px-6 py-4 whitespace-nowrap font-medium text-gray-700">
                  Description
                </div>
                <div className="px-6 py-4 whitespace-nowrap font-medium text-gray-700">
                  Hour
                </div>
                <div className="px-6 py-4 whitespace-nowrap font-medium text-gray-700">
                  Quantity
                </div>
              </div>
              <div className="grid grid-cols-3 text-[15px] border-b border-dashed border-gray-300">
                <div className="px-6 py-6 whitespace-nowrap">
                  Design UX and UI{" "}
                </div>
                <div className="px-6 py-6 whitespace-nowrap">14</div>
                <div className="px-6 py-6 whitespace-nowrap">3</div>
              </div>
              <div className="grid grid-cols-3 text-[15px] border-b border-dashed border-gray-300">
                <div className="px-6 py-6 whitespace-nowrap">
                  Design UX and UI{" "}
                </div>
                <div className="px-6 py-6 whitespace-nowrap">14</div>
                <div className="px-6 py-6 whitespace-nowrap">3</div>
              </div>
              <div className="grid grid-cols-3 text-[15px] border-b border-dashed border-gray-300 last:border-none">
                <div className="px-6 py-6 whitespace-nowrap">
                  Design UX and UI{" "}
                </div>
                <div className="px-6 py-6 whitespace-nowrap">14</div>
                <div className="px-6 py-6 whitespace-nowrap">3</div>
              </div>
              <div className="grid grid-cols-3 text-[15px] border-b border-dashed border-gray-300 last:border-none">
                <div className="px-6 py-6 whitespace-nowrap">
                  Design UX and UI{" "}
                </div>
                <div className="px-6 py-6 whitespace-nowrap">14</div>
                <div className="px-6 py-6 whitespace-nowrap">3</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Table;
