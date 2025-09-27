import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Bus } from "lucide-react";
import RoutesData from "./RoutesData.js";
import backgroundImg from "../../assets/routesImage.png";

const Routes = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { source, destination } = location.state || {};

  // if source and destination are not provided
  if (!source || !destination) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen">
        <p className="text-red-500">No route selected!</p>
        <button
          onClick={() => navigate("/dashboard")}
          className="mt-4 px-4 py-2 bg-black text-white rounded-lg hover:bg-gray-800 transition"
        >
          Go Back
        </button>
      </div>
    );
  }

  // find route
  const route = RoutesData.find(
    (r) =>
      r.source.toLowerCase() === source.toLowerCase() &&
      r.destination.toLowerCase() === destination.toLowerCase()
  );

  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center p-6"
      style={{
        backgroundImage: `url(${backgroundImg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <h1 className="text-3xl font-bold mb-8 text-gray-800">
        🚌 Route: {source} ➝ {destination}
      </h1>

      {route ? (
        <ul className="relative space-y-6 w-full max-w-md">
          {route.stations.map((station, index) => (
            <li
              key={index}
              className="flex items-center gap-4 relative p-4 rounded-xl shadow-md bg-white/80 hover:shadow-xl transition-shadow duration-300 cursor-pointer"
            >
              {/* Circle for step number */}
              <span
                className={`w-10 h-10 flex items-center justify-center rounded-full shadow-md flex-shrink-0 ${
                  station === route.currentLocation
                    ? "bg-green-500 text-white animate-bounce"
                    : "bg-yellow-400 text-black"
                } font-bold`}
              >
                {index + 1}
              </span>

              {/* Vertical line connecting stations */}
              {index !== route.stations.length - 1 && (
                <span className="absolute left-14 top-14 w-1 h-full bg-gray-300"></span>
              )}

              {/* Station name */}
              <span className="ml-6 text-lg font-medium text-gray-700">
                {station}{" "}
                {station === route.currentLocation && (
                  <Bus
                    className="inline ml-2 text-green-600 animate-pulse"
                    size={20}
                  />
                )}
              </span>
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-gray-500 mt-4">No predefined route found.</p>
      )}
    </div>
  );
};

export default Routes;
