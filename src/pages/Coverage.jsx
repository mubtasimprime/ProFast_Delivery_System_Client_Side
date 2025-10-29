import React, { useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import { useLoaderData } from "react-router";

// Default Leaflet icon fix for React
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png",
  iconUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png",
  shadowUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png",
});

const Coverage = () => {
  const servicesData = useLoaderData();
  const [searchTerm, setSearchTerm] = useState("");

  const filteredDistricts = servicesData.filter((d) =>
    d.district.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <section className="p-20 bg-white rounded-4xl my-15">
      <div className="mb-10 t">
        <h1 className="text-[40px] md:text-[56px] font-extrabold primary-green mb-6">
          We are available in 64 districts
        </h1>

        {/* Search Bar */}
        <div className="flex mb-6">
          <input
            type="text"
            placeholder="Search district..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="border border-gray-300 rounded-l-3xl px-4 py-2 w-80 outline-none"
          />
          <button className="bg-lime-500 text-white px-5 py-2 rounded-3xl font-semibold hover:bg-lime-600 -ml-4 cursor-pointer">
            Search
          </button>
        </div>
      </div>

      <div className="mb-5">
        <h2 className="text-xl font-semibold text-gray-700">
          We deliver almost all over Bangladesh
        </h2>
      </div>

      {/* Map Section */}
      <div className="h-[600px] w-full rounded-2xl overflow-hidden shadow-lg">
        <MapContainer
          center={[23.685, 90.3563]} // Center on Bangladesh
          zoom={7}
          scrollWheelZoom={true}
          style={{ height: "100%", width: "100%" }}
        >
          <TileLayer
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a>'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />

          {filteredDistricts.map((district, i) => (
            <Marker key={i} position={[district.latitude, district.longitude]}>
              <Popup>
                <div className="text-sm">
                  <h3 className="font-bold text-base mb-1">
                    {district.district}
                  </h3>
                  <p className="mb-1">
                    <strong>Region:</strong> {district.region}
                  </p>
                  <p className="mb-1">
                    <strong>City:</strong> {district.city}
                  </p>
                  {district.covered_area && (
                    <p className="mb-1">
                      <strong>Areas:</strong> {district.covered_area.join(", ")}
                    </p>
                  )}
                </div>
              </Popup>
            </Marker>
          ))}
        </MapContainer>
      </div>
    </section>
  );
};

export default Coverage;
