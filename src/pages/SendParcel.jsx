import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { useLoaderData } from "react-router";
import toast, { Toaster } from "react-hot-toast";

const SendParcel = () => {
  const warehouseData = useLoaderData();
  const [parcelType, setParcelType] = useState("Document");
  const [senderRegion, setSenderRegion] = useState("");
  const [senderCity, setSenderCity] = useState("");
  const [receiverRegion, setReceiverRegion] = useState("");
  const [receiverCity, setReceiverCity] = useState("");
  const [cost, setCost] = useState(0);

  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm();

  const weight = watch("weight");

  // --- Sender warehouse filters ---
  const senderCities = warehouseData
    ?.filter((item) => item.region === senderRegion)
    ?.map((item) => item.city)
    ?.filter((v, i, a) => a.indexOf(v) === i);

  const senderCoveredAreas = warehouseData.find(
    (item) => item.region === senderRegion && item.city === senderCity
  )?.covered_area;

  // --- Receiver warehouse filters ---
  const receiverCities = warehouseData
    ?.filter((item) => item.region === receiverRegion)
    ?.map((item) => item.city)
    ?.filter((v, i, a) => a.indexOf(v) === i);

  const receiverCoveredAreas = warehouseData.find(
    (item) => item.region === receiverRegion && item.city === receiverCity
  )?.covered_area;

  // --- Cost Calculation ---
  useEffect(() => {
    if (parcelType === "Document") {
      setCost(100);
    } else if (parcelType === "Not-Document") {
      const parcelWeight = parseFloat(weight) || 0;
      setCost(120 + parcelWeight * 20);
    }
  }, [parcelType, weight]);

  // --- Submit ---
  const onSubmit = (data) => {
    toast.success("Parcel booking submitted successfully!");
    console.log("Submitted:", data);
    reset();
  };

  return (
    <div className="bg-white shadow p-8 rounded-4xl my-14">
      <Toaster position="top-right" reverseOrder={false} />
      <h2 className="text-[56px] font-extrabold text-[#03373d] mb-6">
        Add Parcel
      </h2>

      <hr className="mb-6 text-gray-200" />
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        {/* Parcel Type */}
        <div>
          <h3 className="text-[28px] font-extrabold mb-4 text-[#03373d]">
            Enter your parcel details
          </h3>
          <div className="flex items-center gap-6 mb-4">
            <label className="flex items-center gap-2">
              <input
                type="radio"
                value="Document"
                {...register("parcelType")}
                checked={parcelType === "Document"}
                onChange={() => setParcelType("Document")}
                className="accent-green-600"
              />
              Document
            </label>
            <label className="flex items-center gap-2">
              <input
                type="radio"
                value="Not-Document"
                {...register("parcelType")}
                checked={parcelType === "Not-Document"}
                onChange={() => setParcelType("Not-Document")}
                className="accent-green-600"
              />
              Not-Document
            </label>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="text-sm font-medium">
                Parcel Name
                <input
                  {...register("parcelName", { required: true })}
                  type="text"
                  placeholder="Parcel Name"
                  className="border border-gray-300 p-2 rounded-md w-full outline-0"
                />
                {errors.parcelName && (
                  <span className="text-red-500 text-xs">
                    Parcel name required
                  </span>
                )}
              </label>
            </div>
            <div>
              <label className="text-sm font-medium">
                Parcel Weight (KG)
                <input
                  {...register("weight")}
                  type="number"
                  placeholder="Parcel Weight (KG)"
                  className={`border border-gray-300 outline-0 p-2 rounded-md w-full ${
                    parcelType === "Document"
                      ? "bg-gray-100 cursor-not-allowed"
                      : ""
                  }`}
                  disabled={parcelType === "Document"}
                />
              </label>
            </div>
          </div>
        </div>

        {/* Cost Display */}
        <div className="mt-4 bg-[#f9f9f9] border border-gray-200 rounded-md p-3">
          <p className="text-lg font-semibold text-[#03373d]">
            Estimated Cost: <span className="text-green-600">{cost} BDT</span>
          </p>
        </div>

        <hr className="mb-6 text-gray-200" />

        {/* Sender & Receiver Details */}
        <div className="grid grid-cols-2 gap-8">
          {/* Sender */}
          <div>
            <h4 className="font-extrabold text-[#03373d] mb-6 text-[18px]">
              Sender Details
            </h4>

            <div className="md:grid grid-cols-2 gap-4 space-y-4 md:space-y-0">
              <div>
                <label className="block text-sm font-medium text-gray-600 mb-1">
                  Sender Name
                </label>
                <input
                  {...register("senderName", { required: true })}
                  type="text"
                  placeholder="Enter sender name"
                  className="border border-gray-300 p-2 rounded w-full outline-0 text-gray-600"
                />
              </div>

              {/* Region */}
              <div>
                <label className="block text-sm font-medium text-gray-600 mb-1">
                  Region
                </label>
                <select
                  {...register("senderRegion")}
                  value={senderRegion}
                  onChange={(e) => {
                    setSenderRegion(e.target.value);
                    setSenderCity("");
                  }}
                  className="border border-gray-300 p-2 rounded w-full outline-0 text-gray-600"
                >
                  <option value="">Select region</option>
                  {[...new Set(warehouseData.map((d) => d.region))].map(
                    (region) => (
                      <option key={region} value={region}>
                        {region}
                      </option>
                    )
                  )}
                </select>
              </div>

              {/* Warehouse (City) */}
              <div>
                <label className="block text-sm font-medium text-gray-600 mb-1">
                  Warehouse (City)
                </label>
                <select
                  {...register("senderCity")}
                  value={senderCity}
                  onChange={(e) => setSenderCity(e.target.value)}
                  disabled={!senderRegion}
                  className="border border-gray-300 p-2 rounded w-full outline-0 text-gray-600 disabled:bg-gray-100"
                >
                  <option value="">Select warehouse</option>
                  {senderCities?.map((city) => (
                    <option key={city} value={city}>
                      {city}
                    </option>
                  ))}
                </select>
              </div>

              {/* Covered Area */}
              <div>
                <label className="block text-sm font-medium text-gray-600 mb-1">
                  Covered Area
                </label>
                <select
                  {...register("senderCoveredArea")}
                  disabled={!senderCity}
                  className="border border-gray-300 p-2 rounded w-full outline-0 text-gray-600 disabled:bg-gray-100"
                >
                  <option value="">Select covered area</option>
                  {senderCoveredAreas?.map((area) => (
                    <option key={area} value={area}>
                      {area}
                    </option>
                  ))}
                </select>
              </div>

              {/* Address */}
              <div className="col-span-2">
                <label className="block text-sm font-medium text-gray-600 mb-1">
                  Address
                </label>
                <input
                  {...register("senderAddress")}
                  type="text"
                  placeholder="Sender address"
                  className="border border-gray-300 p-2 rounded w-full outline-0 text-gray-600"
                />
              </div>

              {/* Contact */}
              <div className="col-span-2">
                <label className="block text-sm font-medium text-gray-600 mb-1">
                  Sender Contact No
                </label>
                <input
                  {...register("senderContact")}
                  type="text"
                  placeholder="Contact number"
                  className="border border-gray-300 p-2 rounded w-full outline-0 text-gray-600"
                />
              </div>
            </div>
          </div>

          {/* Receiver */}
          <div>
            <h4 className="font-extrabold text-[#03373d] mb-6 text-[18px]">
              Receiver Details
            </h4>

            <div className="md:grid grid-cols-2 gap-4 space-y-4 md:space-y-0">
              <div>
                <label className="block text-sm font-medium text-gray-600 mb-1">
                  Receiver Name
                </label>
                <input
                  {...register("receiverName")}
                  type="text"
                  placeholder="Enter receiver name"
                  className="border border-gray-300 p-2 rounded w-full outline-0 text-gray-600"
                />
              </div>
              {/* Region */}
              <div>
                <label className="block text-sm font-medium text-gray-600 mb-1">
                  Region
                </label>
                <select
                  {...register("receiverRegion")}
                  value={receiverRegion}
                  onChange={(e) => {
                    setReceiverRegion(e.target.value);
                    setReceiverCity("");
                  }}
                  className="border border-gray-300 p-2 rounded w-full outline-0 text-gray-600"
                >
                  <option value="">Select region</option>
                  {[...new Set(warehouseData.map((d) => d.region))].map(
                    (region) => (
                      <option key={region} value={region}>
                        {region}
                      </option>
                    )
                  )}
                </select>
              </div>
              {/* Warehouse (City) */}
              <div>
                <label className="block text-sm font-medium text-gray-600 mb-1">
                  Warehouse (City)
                </label>
                <select
                  {...register("receiverCity")}
                  value={receiverCity}
                  onChange={(e) => setReceiverCity(e.target.value)}
                  disabled={!receiverRegion}
                  className="border border-gray-300 p-2 rounded w-full outline-0 text-gray-600 disabled:bg-gray-100"
                >
                  <option value="">Select warehouse</option>
                  {receiverCities?.map((city) => (
                    <option key={city} value={city}>
                      {city}
                    </option>
                  ))}
                </select>
              </div>
              {/* Covered Area */}
              <div>
                <label className="block text-sm font-medium text-gray-600 mb-1">
                  Covered Area
                </label>
                <select
                  {...register("receiverCoveredArea")}
                  disabled={!receiverCity}
                  className="border border-gray-300 p-2 rounded w-full outline-0 text-gray-600 disabled:bg-gray-100"
                >
                  <option value="">Select covered area</option>
                  {receiverCoveredAreas?.map((area) => (
                    <option key={area} value={area}>
                      {area}
                    </option>
                  ))}
                </select>
              </div>
              {/* Address */}
              <div className="col-span-2">
                <label className="block text-sm font-medium text-gray-600 mb-1">
                  Address
                </label>
                <input
                  {...register("receiverAddress")}
                  type="text"
                  placeholder="Receiver address"
                  className="border border-gray-300 p-2 rounded w-full outline-0 text-gray-600"
                />
              </div>
              {/* Contact */}
              <div className="col-span-2">
                <label className="block text-sm font-medium text-gray-600 mb-1">
                  Receiver Contact No
                </label>
                <input
                  {...register("receiverContact")}
                  type="text"
                  placeholder="Contact number"
                  className="border border-gray-300 p-2 rounded w-full outline-0 text-gray-600"
                />
              </div>
            </div>
          </div>
        </div>

        <p className="text-sm italic text-gray-600 mt-4">
          * PickUp Time 4pm – 7pm Approx.
        </p>

        <div className="pt-4">
          <button
            type="submit"
            className="bg-[#caeb66] cursor-pointer hover:bg-lime-500 text-black font-semibold px-6 py-2 rounded-md shadow transition duration-300"
          >
            Proceed to Confirm Booking
          </button>
        </div>
      </form>
    </div>
  );
};

export default SendParcel;
