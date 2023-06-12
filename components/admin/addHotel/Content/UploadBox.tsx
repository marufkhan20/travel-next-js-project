const UploadBox = () => {
  return (
    <div className="text-center">
      <div className="bg-[#E5F0FD] rounded-md flex flex-col items-center justify-center h-[200px] border border-dashed border-primary cursor-pointer">
        <img src="/icons/upload.png" alt="upload" />
        <h3 className="text-base font-medium text-primary mt-3">
          Upload Images
        </h3>
      </div>

      <span className="text-body text-sm mt-3 block">
        PNG or JPG no bigger than <br /> 800px wide and tall.
      </span>
    </div>
  );
};

export default UploadBox;
