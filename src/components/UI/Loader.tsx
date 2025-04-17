import React from "react";

const Loader: React.FC = () => {
  return (
    <div className="absolute left-1/2 top-1/2 flex h-[60vh] -translate-x-1/2 -translate-y-1/2 items-center justify-center">
      <div className="flex flex-col items-center space-y-4">
        {/* Spinner */}
        <div className="relative flex h-16 w-16 items-center justify-center">
          <div className="absolute h-full w-full animate-spin rounded-full border-4 border-dashed border-green-400 border-t-transparent"></div>
        </div>

        {/* Text */}
        <p className="text-muted-foreground text-center text-sm tracking-wide">
          Just a moment, fetching your data...
        </p>
      </div>
    </div>
  );
};

export default Loader;
