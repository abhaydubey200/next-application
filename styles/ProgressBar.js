const ProgressBar = ({ progress }) => {
    return (
      <div className="w-full bg-gray-200">
        <div
          className="bg-blue-500 text-xs font-medium text-blue-100 text-center p-0.5 leading-none"
          style={{ width: `${progress}%` }}
        >
          {progress}%
        </div>
      </div>
    );
  };
  
  export default ProgressBar;
  