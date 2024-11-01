import React from "react";
import { useSelector } from "react-redux";
import { clearData } from "../redux/details";
import { useDispatch } from "react-redux";


function Details() {
  const detailsList = useSelector((state) => state.cart.detailsState);
  const dispatch = useDispatch();
  const handleClear = () => {
  dispatch(clearData());
};
  return (
    <>
      <button
        className="bg-blue-400 hover:bg-blue-700 p-2 rounded-md"
        onClick={handleClear}
      >
        Clear All Data
      </button>

      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-lg">
          <h2 className="text-2xl font-bold text-center mb-6">
            Submitted Details
          </h2>

          {detailsList.length === 0 ? (
            <p className="text-gray-500 text-center">
              No details submitted yet.
            </p>
          ) : (
            detailsList.map((detail, index) => (
              <div key={index} className="mb-4 p-4 border-b border-gray-200">
                <h3 className="text-lg font-semibold text-gray-700">
                  Detail {index + 1}
                </h3>
                <p>
                  <strong>Name:</strong> {detail.name}
                </p>
                <p>
                  <strong>Email:</strong> {detail.email}
                </p>
                <p>
                  <strong>Message:</strong> {detail.message}
                </p>
              </div>
            ))
          )}
        </div>
      </div>
    </>
  );
}

export default Details;
