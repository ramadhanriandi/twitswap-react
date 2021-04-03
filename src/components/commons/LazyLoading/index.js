import React, { lazy, Suspense } from "react";

import { CircularProgress } from "@material-ui/core";

const LazyLoading = (loader) => {
  const LazyComponent = lazy(loader);

  const AsyncComponent = (props) => {
    return (
      <Suspense
        fallback={
          <div className="flex flex-col justify-center items-center h-full">
            <CircularProgress />
          </div>
        }
      >
        <LazyComponent {...props} />
      </Suspense>
    );
  };

  return AsyncComponent;
};

export default LazyLoading;
