// import { useEffect, useState } from "react";
// import Vector from "../../assets/Vector.svg";
// import { useDispatch, useSelector } from "react-redux";
// import { getBreezData } from "../../slice/ListSlice";

// // Country data with image paths + links
// // const countryData = [
// //   {
// //     name: "Canada",
// //     price: "400.00",
// //     img: "/src/assets/country/ca.svg",
// //     link: "https://breezesim.com/products/esim-canada?view=sl-6706D30D",
// //   },
// //   {
// //     name: "United States of America",
// //     price: "400.00",
// //     img: "/src/assets/country/us.svg",
// //     link: "https://breezesim.com/products/esim-usa?view=sl-6706D30D",
// //   },
// //   {
// //     name: "Morocco",
// //     price: "600.00",
// //     img: "/src/assets/country/ma.svg",
// //     link: "https://breezesim.com/products/esim-morocco?view=sl-6706D30D",
// //   },
// //   {
// //     name: "Turkey",
// //     price: "400.00",
// //     img: "/src/assets/country/tr.svg",
// //     link: "https://breezesim.com/products/esim-turkey?view=sl-6706D30D",
// //   },
// //   {
// //     name: "United Kingdom",
// //     price: "400.00",
// //     img: "/src/assets/country/gb.svg",
// //     link: "https://breezesim.com/products/esim-united-kingdom?view=sl-6706D30D",
// //   },
// //   {
// //     name: "Spain",
// //     price: "400.00",
// //     img: "/src/assets/country/es.svg",
// //     link: "https://breezesim.com/products/esim-spain?view=sl-6706D30D",
// //   },
// //   {
// //     name: "United Arab Emirates",
// //     price: "400.00",
// //     img: "/src/assets/country/ae.svg",
// //     link: "https://breezesim.com/products/esim-united-arab-emirates?view=sl-6706D30D",
// //   },
// //   {
// //     name: "Italy",
// //     price: "400.00",
// //     img: "/src/assets/country/it.svg",
// //     link: "https://breezesim.com/products/esim-italy?view=sl-6706D30D",
// //   },
// // ];

// // Regional data with images + links
// // const regionalData = [
// //   {
// //     name: "EU+",
// //     price: "400.00",
// //     img: "/src/assets/regional/EU.webp",
// //     link: "https://breezesim.com/products/esim-europe?view=sl-6706D30D",
// //   },
// //   {
// //     name: "North America",
// //     price: "400.00",
// //     img: "/src/assets/regional/North_America.png",
// //     link: "https://breezesim.com/products/esim-north-america?view=sl-6706D30D",
// //   },
// //   {
// //     name: "Middle East",
// //     price: "700.00",
// //     img: "/src/assets/regional/Middle_East.webp",
// //     link: "https://breezesim.com/products/esimg_rme_v2?view=sl-6706D30D",
// //   },
// //   {
// //     name: "Asia",
// //     price: "400.00",
// //     img: "/src/assets/regional/Asia.webp",
// //     link: "https://breezesim.com/products/esim-asia?view=sl-6706D30D",
// //   },
// //   {
// //     name: "Global",
// //     price: "1000.00",
// //     img: "/src/assets/regional/Global.webp",
// //     link: "https://breezesim.com/products/esim-global?view=sl-6706D30D",
// //   },
// //   {
// //     name: "Africa",
// //     price: "900.00",
// //     img: "/src/assets/regional/Africa.webp",
// //     link: "https://breezesim.com/products/esimg_raf_v2?view=sl-6706D30D",
// //   },
// //   {
// //     name: "Middle East and North Africa",
// //     price: "400.00",
// //     img: null,
// //     link: "https://breezesim.com/products/esim-middle-east-and-north-africa?view=sl-6706D30D",
// //   },
// //   {
// //     name: "Balkans",
// //     price: "900.00",
// //     img: null,
// //     link: "https://breezesim.com/products/esim-balkans?view=sl-6706D30D",
// //   },
// // ];




// const LandingPage = () => {
//   const{breezData}=useSelector((state)=>state?.lists)
//   const dispatch=useDispatch()
//   useEffect(()=>{
//     dispatch(getBreezData())
//   },[])

//   console.log("breezData",breezData);
  
//   const [activeTab, setActiveTab] = useState("regional");

//   const data = activeTab === "country" ? countryData : regionalData;

//   const dynamicItems = Array.isArray(breezData) ? breezData : breezData?.data || [];

//   const displayData = dynamicItems.filter((item) => {
//     const isGlobalOrMulti = item.planName.toLowerCase().includes("global") || item.coverages?.length > 1;
    
//     if (activeTab === "country") {
//       return !isGlobalOrMulti; // Show single-country plans
//     } else {
//       return isGlobalOrMulti; // Show multi-country/regional plans
//     }
//   });

//   return (
//     <section className="bg-[#f6f8f6] py-10 md:py-14 min-h-screen">
//       <div className="max-w-7xl mx-auto px-4">
//         {/* Heading */}
//         <div className="text-center mb-8">
//           <h2 className="text-3xl md:text-4xl font-bold text-[#006b5b]">
//             Global coverage
//           </h2>

//           <p className="text-[#006b5b] mt-4 text-sm md:text-base">
//             Choose a country or region
//           </p>
//         </div>

//         {/* Tabs */}
//         <div className="flex justify-center mb-8">
//           <div className="flex rounded-tr-[24px] rounded-bl-[24px] overflow-hidden border border-[#5aa79b] shadow-sm">
//             <button
//               type="button"
//               onClick={() => setActiveTab("country")}
//               className={`w-[140px] md:w-[170px] py-3 text-sm md:text-base font-semibold transition ${
//                 activeTab === "country"
//                   ? "bg-[#009944] text-white"
//                   : "bg-white text-[#7aa9a1]"
//               }`}
//             >
//               COUNTRY
//             </button>

//             <button
//               type="button"
//               onClick={() => setActiveTab("regional")}
//               className={`w-[140px] md:w-[170px] py-3 text-sm md:text-base font-semibold transition ${
//                 activeTab === "regional"
//                   ? "bg-[#009944] text-white"
//                   : "bg-white text-[#006b5b]"
//               }`}
//             >
//               REGIONAL
//             </button>
//           </div>
//         </div>

//         {/* Divider */}
//         <div className="border-t-2 border-[#d7eadc] mb-8"></div>

//         {/* Cards */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-7">
//           {data.map((item, index) => (
//             <a
//               key={index}
//               href={item.link}
//               target="_blank"
//               className="
//                 group
//                 relative
//                 block
//                 bg-[#eef8eb]
//                 border-[3px]
//                 border-[#f4c7c3]
//                 rounded-tr-[32px]
//                 rounded-bl-[32px]
//                 rounded-tl-none
//                 rounded-br-none
//                 min-h-[120px]
//                 px-5
//                 py-4
//                 shadow-[0_8px_14px_rgba(0,0,0,0.18)]
//                 hover:shadow-[0_10px_18px_rgba(0,0,0,0.22)]
//                 transition
//                 overflow-hidden
//                 no-underline
//               "
//             >
//               {/* Decorative top-right Vector */}
//               <img
//                 src={Vector}
//                 alt=""
//                 className="absolute top-3 right-3 w-10 h-10 object-contain opacity-100 pointer-events-none"
//               />

//               {/* Title */}
//               <h3 className="relative z-10 text-[#006b5b] font-bold text-base md:text-lg leading-snug pr-10">
//                 {item.name} →
//               </h3>

//               {/* Bottom Row */}
//               <div className="relative z-10 mt-6 flex items-end justify-between gap-4">
//                 {/* Image only when available */}
//                 {item.img ? (
//                   <img
//                     src={item.img}
//                     alt={item.name}
//                     className="w-14 h-9 object-contain"
//                   />
//                 ) : (
//                   <div></div>
//                 )}

//                 <p className="text-[#006b5b] text-sm md:text-base whitespace-nowrap">
//                   from{" "}
//                   <span className="text-[#006b5b] text-2xl md:text-3xl font-medium">
//                     Rs. {item.price}
//                   </span>
//                 </p>
//               </div>
//             </a>
//           ))}
//         </div>

//         {/* Button */}
//         <div className="flex justify-center mt-12">
//           <a
//             href="/destinations"
//             className="
//               border
//               border-[#006b5b]
//               text-[#006b5b]
//               px-8
//               py-3
//               rounded-full
//               text-sm
//               md:text-base
//               hover:bg-[#006b5b]
//               hover:text-white
//               transition
//               font-medium
//               no-underline
//             "
//           >
//             VIEW ALL DESTINATIONS →
//           </a>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default LandingPage;









import { useEffect, useState } from "react";
import Vector from "../../assets/Vector.svg";
import { useDispatch, useSelector } from "react-redux";
import { getBreezData } from "../../slice/ListSlice";

const LandingPage = () => {
  const { breezData } = useSelector((state) => state?.lists);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getBreezData());
  }, [dispatch]);

  const [activeTab, setActiveTab] = useState("regional");
  // New state to manage how many items are visible
  const [showAll, setShowAll] = useState(false);

  // Safely extract the array from Redux
  const dynamicItems = Array.isArray(breezData) ? breezData : breezData?.data || [];

  // Filter the API data based on the active tab
  const displayData = dynamicItems.filter((item) => {
    // Categorization logic: If it covers more than 1 region or has "global" in the name, it's regional.
    const isGlobalOrMulti = item.planName?.toLowerCase().includes("global") || item.coverages?.length > 1;
    
    if (activeTab === "country") {
      return !isGlobalOrMulti; // Show single-country plans
    } else {
      return isGlobalOrMulti; // Show multi-country/regional plans
    }
  });

  // Limit to 12 items initially. If showAll is true, show the whole array.
  const visibleData = showAll ? displayData : displayData.slice(0, 12);

  // Helper function to handle tab switching and resetting the "View All" state
  const handleTabSwitch = (tab) => {
    setActiveTab(tab);
    setShowAll(false); // Reset to showing only 12 when switching tabs
  };

  return (
    <section className="bg-[#f6f8f6] py-10 md:py-14 min-h-screen">
      <div className="max-w-7xl mx-auto px-4">
        {/* Heading */}
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-[#006b5b]">
            Global coverage
          </h2>

          <p className="text-[#006b5b] mt-4 text-sm md:text-base">
            Choose a country or region
          </p>
        </div>

        {/* Tabs */}
        <div className="flex justify-center mb-8">
          <div className="flex rounded-tr-[24px] rounded-bl-[24px] overflow-hidden border border-[#5aa79b] shadow-sm">
            <button
              type="button"
              onClick={() => handleTabSwitch("country")}
              className={`w-[140px] md:w-[170px] py-3 text-sm md:text-base font-semibold transition ${
                activeTab === "country"
                  ? "bg-[#009944] text-white"
                  : "bg-white text-[#7aa9a1]"
              }`}
            >
              COUNTRY
            </button>

            <button
              type="button"
              onClick={() => handleTabSwitch("regional")}
              className={`w-[140px] md:w-[170px] py-3 text-sm md:text-base font-semibold transition ${
                activeTab === "regional"
                  ? "bg-[#009944] text-white"
                  : "bg-white text-[#006b5b]"
              }`}
            >
              REGIONAL
            </button>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t-2 border-[#d7eadc] mb-8"></div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-7">
          {visibleData.length > 0 ? (
            visibleData.map((item, index) => (
              <a
                key={item.sku || index}
                href={item.link || "#"}
                target="_blank"
                rel="noreferrer"
                className="
                  group
                  relative
                  block
                  bg-[#eef8eb]
                  border-[3px]
                  border-[#f4c7c3]
                  rounded-tr-[32px]
                  rounded-bl-[32px]
                  rounded-tl-none
                  rounded-br-none
                  min-h-[120px]
                  px-5
                  py-4
                  shadow-[0_8px_14px_rgba(0,0,0,0.18)]
                  hover:shadow-[0_10px_18px_rgba(0,0,0,0.22)]
                  transition
                  overflow-hidden
                  no-underline
                "
              >
                {/* Decorative top-right Vector */}
                <img
                  src={Vector}
                  alt=""
                  className="absolute top-3 right-3 w-10 h-10 object-contain opacity-100 pointer-events-none"
                />

                {/* Title */}
                <h3 className="relative z-10 text-[#006b5b] font-bold text-base md:text-lg leading-snug pr-10">
                  {item.planName} →
                </h3>

                {/* Bottom Row */}
                <div className="relative z-10 mt-6 flex items-end justify-between gap-4">
                  {/* API Image placeholder */}
                  {item.imageUrl ? (
                    <img
                      src={item.imageUrl}
                      alt={item.planName}
                      className="w-14 h-9 object-contain"
                    />
                  ) : (
                    <div></div>
                  )}

                  <p className="text-[#006b5b] text-sm md:text-base whitespace-nowrap">
                    from{" "}
                    <span className="text-[#006b5b] text-2xl md:text-3xl font-medium">
                      {/* Using INR data to match the "Rs." symbol */}
                      Rs. {item.prices?.INR || "N/A"}
                    </span>
                  </p>
                </div>
              </a>
            ))
          ) : (
            <p className="text-[#006b5b] text-center col-span-full">
              {dynamicItems.length === 0 ? "Loading destinations..." : "No destinations found for this category."}
            </p>
          )}
        </div>

        {/* View All Button - Only shows if there are more than 12 items and they aren't all visible yet */}
        {!showAll && displayData.length > 12 && (
          <div className="flex justify-center mt-12">
            <button
              onClick={() => setShowAll(true)}
              className="
                border
                border-[#006b5b]
                text-[#006b5b]
                bg-transparent
                px-8
                py-3
                rounded-full
                text-sm
                md:text-base
                hover:bg-[#006b5b]
                hover:text-white
                transition
                font-medium
                cursor-pointer
              "
            >
              VIEW ALL DESTINATIONS →
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default LandingPage;
