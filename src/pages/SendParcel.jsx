import React, { useState } from "react";

const SendParcel = () => {
  const [parcelType, setParcelType] = useState("Document");
  console.log(parcelType);

  return (
    <div className="bg-white shadow p-8 rounded-4xl my-14">
      <h2 className="text-[56px] font-extrabold text-[#03373d] mb-6">
        Add Parcel
      </h2>

      <hr className="mb-6 text-gray-200" />
      <form className="space-y-6">
        {/* Parcel Type */}
        <div>
          <h3 className="text-[28px] font-extrabold mb-4 text-[#03373d]">
            Enter your parcel details
          </h3>
          <div className="flex items-center gap-6 mb-4">
            <label className="flex items-center gap-2">
              <input
                type="radio"
                name="parcelType"
                checked={parcelType === "Document"}
                onChange={() => setParcelType("Document")}
                className="accent-green-600"
              />
              Document
            </label>
            <label className="flex items-center gap-2">
              <input
                type="radio"
                name="parcelType"
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
                  type="text"
                  placeholder="Parcel Name"
                  className="border border-gray-300 p-2 rounded-md w-full outline-0"
                />
              </label>
            </div>
            <div>
              <label className="text-sm font-medium">
                Parcel Weight (KG)
                <input
                  type="number"
                  placeholder="Parcel Weight (KG)"
                  className="border border-gray-300 outline-0 p-2 rounded-md w-full"
                />
              </label>
            </div>
          </div>
        </div>
        <hr className="mb-6 text-gray-200" />

        {/* Sender & Receiver Details */}
        <div className="grid grid-cols-2 gap-8">
          {/* Sender */}
          <div>
            <h4 className="font-extrabold text-[#03373d] mb-6 text-[18px]">
              Sender Details
            </h4>

            <div className="grid grid-cols-2 gap-4">
              {/* Sender Name */}
              <div>
                <label className="block text-sm font-medium text-gray-600 mb-1">
                  Sender Name
                </label>
                <input
                  type="text"
                  placeholder="Enter sender name"
                  className="border border-gray-300 p-2 rounded w-full text-gray-600 placeholder-gray-400 outline-0"
                />
              </div>

              {/* Wire house */}
              <div>
                <label className="block text-sm font-medium text-gray-600 mb-1">
                  Sender Pickup Wire house
                </label>
                <select className="border border-gray-300 p-2 rounded w-full text-gray-600 placeholder-gray-400 outline-0">
                  <option>Select Wire house</option>
                </select>
              </div>

              {/* Address */}
              <div>
                <label className="block text-sm font-medium text-gray-600 mb-1">
                  Address
                </label>
                <input
                  type="text"
                  placeholder="Sender address"
                  className="border border-gray-300 p-2 rounded w-full text-gray-600 placeholder-gray-400 outline-0"
                />
              </div>

              {/* Contact */}
              <div>
                <label className="block text-sm font-medium text-gray-600 mb-1">
                  Sender Contact No
                </label>
                <input
                  type="text"
                  placeholder="Contact number"
                  className="border border-gray-300 p-2 rounded w-full text-gray-600 placeholder-gray-400 outline-0"
                />
              </div>

              {/* Region */}
              <div className="col-span-2">
                <label className="block text-sm font-medium text-gray-600 mb-1">
                  Your Region
                </label>
                <select className="border border-gray-300 p-2 rounded w-full text-gray-600 placeholder-gray-400 outline-0">
                  <option>Select your region</option>
                </select>
              </div>

              {/* Pickup Instruction */}
              <div className="col-span-2">
                <label className="block text-sm font-medium text-gray-600 mb-1">
                  Pickup Instruction
                </label>
                <textarea
                  placeholder="Write pickup instructions"
                  rows="2"
                  className="border border-gray-300 p-2 rounded w-full text-gray-600 placeholder-gray-400 outline-0"
                ></textarea>
              </div>
            </div>
          </div>

          {/* Receiver */}
          <div>
            <h4 className="font-extrabold text-[#03373d] mb-6 text-[18px]">
              Receiver Details
            </h4>

            <div className="grid grid-cols-2 gap-4">
              {/* Receiver Name */}
              <div>
                <label className="block text-sm font-medium text-gray-600 mb-1">
                  Receiver Name
                </label>
                <input
                  type="text"
                  placeholder="Enter receiver name"
                  className="border border-gray-300 p-2 rounded w-full text-gray-600 placeholder-gray-400 outline-0"
                />
              </div>

              {/* Wire house */}
              <div>
                <label className="block text-sm font-medium text-gray-600 mb-1">
                  Receiver Delivery Wire house
                </label>
                <select className="border border-gray-300 p-2 rounded w-full text-gray-600 placeholder-gray-400 outline-0">
                  <option>Select Wire house</option>
                </select>
              </div>

              {/* Address */}
              <div>
                <label className="block text-sm font-medium text-gray-600 mb-1">
                  Receiver Address
                </label>
                <input
                  type="text"
                  placeholder="Receiver address"
                  className="border border-gray-300 p-2 rounded w-full text-gray-600 placeholder-gray-400 outline-0"
                />
              </div>

              {/* Contact */}
              <div>
                <label className="block text-sm font-medium text-gray-600 mb-1">
                  Receiver Contact No
                </label>
                <input
                  type="text"
                  placeholder="Contact number"
                  className="border border-gray-300 p-2 rounded w-full text-gray-600 placeholder-gray-400 outline-0"
                />
              </div>

              {/* Region */}
              <div className="col-span-2">
                <label className="block text-sm font-medium text-gray-600 mb-1">
                  Receiver Region
                </label>
                <select className="border border-gray-300 p-2 rounded w-full text-gray-600 placeholder-gray-400 outline-0">
                  <option>Select your region</option>
                </select>
              </div>

              {/* Delivery Instruction */}
              <div className="col-span-2">
                <label className="block text-sm font-medium text-gray-600 mb-1">
                  Delivery Instruction
                </label>
                <textarea
                  placeholder="Write delivery instructions"
                  rows="2"
                  className="border border-gray-300 p-2 rounded w-full text-gray-600 placeholder-gray-400 outline-0"
                ></textarea>
              </div>
            </div>
          </div>
        </div>

        {/* Pickup Time */}
        <p className="text-sm italic text-gray-600 mt-4">
          * PickUp Time 4pm - 7pm Approx.
        </p>

        {/* Button */}
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
