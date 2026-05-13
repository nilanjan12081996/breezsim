
// import { useEffect, useState } from "react";
// import Vector from "../../assets/Vector.svg";
// import { useDispatch, useSelector } from "react-redux";
// import { getBreezData } from "../../slice/ListSlice";

// const LandingPage = () => {
//   const { breezData,searchData } = useSelector((state) => state?.lists);
//   const dispatch = useDispatch();

//   useEffect(() => {
//     dispatch(getBreezData());
//   }, [dispatch]);

//   const [activeTab, setActiveTab] = useState("regional");
//   // New state to manage how many items are visible
//   const [showAll, setShowAll] = useState(false);

//   // Safely extract the array from Redux
//   const dynamicItems = Array.isArray(breezData) ? breezData : breezData?.data || [];

//   // Filter the API data based on the active tab
//   const displayData = dynamicItems.filter((item) => {
//     // Categorization logic: If it covers more than 1 region or has "global" in the name, it's regional.
//     const isGlobalOrMulti = item.planName?.toLowerCase().includes("global") || item.coverages?.length > 1;
    
//     if (activeTab === "country") {
//       return !isGlobalOrMulti; // Show single-country plans
//     } else {
//       return isGlobalOrMulti; // Show multi-country/regional plans
//     }
//   });

//   // Limit to 12 items initially. If showAll is true, show the whole array.
//   const visibleData = showAll ? displayData : displayData.slice(0, 12);

//   // Helper function to handle tab switching and resetting the "View All" state
//   const handleTabSwitch = (tab) => {
//     setActiveTab(tab);
//     setShowAll(false); // Reset to showing only 12 when switching tabs
//   };

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
//               onClick={() => handleTabSwitch("country")}
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
//               onClick={() => handleTabSwitch("regional")}
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
//           {visibleData.length > 0 ? (
//             visibleData.map((item, index) => (
//               <a
//                 key={item.sku || index}
//                 href={item.link || "#"}
//                 target="_blank"
//                 rel="noreferrer"
//                 className="
//                   group
//                   relative
//                   block
//                   bg-[#eef8eb]
//                   border-[3px]
//                   border-[#f4c7c3]
//                   rounded-tr-[32px]
//                   rounded-bl-[32px]
//                   rounded-tl-none
//                   rounded-br-none
//                   min-h-[120px]
//                   px-5
//                   py-4
//                   shadow-[0_8px_14px_rgba(0,0,0,0.18)]
//                   hover:shadow-[0_10px_18px_rgba(0,0,0,0.22)]
//                   transition
//                   overflow-hidden
//                   no-underline
//                 "
//               >
//                 {/* Decorative top-right Vector */}
//                 <img
//                   src={Vector}
//                   alt=""
//                   className="absolute top-3 right-3 w-10 h-10 object-contain opacity-100 pointer-events-none"
//                 />

//                 {/* Title */}
//                 <h3 className="relative z-10 text-[#006b5b] font-bold text-base md:text-lg leading-snug pr-10">
//                   {item.planName} →
//                 </h3>

//                 {/* Bottom Row */}
//                 <div className="relative z-10 mt-6 flex items-end justify-between gap-4">
//                   {/* API Image placeholder */}
//                   {item.imageUrl ? (
//                     <img
//                       src={item.imageUrl}
//                       alt={item.planName}
//                       className="w-14 h-9 object-contain"
//                     />
//                   ) : (
//                     <div></div>
//                   )}

//                   <p className="text-[#006b5b] text-sm md:text-base whitespace-nowrap">
//                     from{" "}
//                     <span className="text-[#006b5b] text-2xl md:text-3xl font-medium">
//                       {/* Using INR data to match the "Rs." symbol */}
//                       Rs. {item.prices?.INR || "N/A"}
//                     </span>
//                   </p>
//                 </div>
//               </a>
//             ))
//           ) : (
//             <p className="text-[#006b5b] text-center col-span-full">
//               {dynamicItems.length === 0 ? "Loading destinations..." : "No destinations found for this category."}
//             </p>
//           )}
//         </div>

//         {/* View All Button - Only shows if there are more than 12 items and they aren't all visible yet */}
//         {!showAll && displayData.length > 12 && (
//           <div className="flex justify-center mt-12">
//             <button
//               onClick={() => setShowAll(true)}
//               className="
//                 border
//                 border-[#006b5b]
//                 text-[#006b5b]
//                 bg-transparent
//                 px-8
//                 py-3
//                 rounded-full
//                 text-sm
//                 md:text-base
//                 hover:bg-[#006b5b]
//                 hover:text-white
//                 transition
//                 font-medium
//                 cursor-pointer
//               "
//             >
//               VIEW ALL DESTINATIONS →
//             </button>
//           </div>
//         )}
//       </div>
//     </section>
//   );
// };

// export default LandingPage;










import { useEffect, useState } from "react";
import Vector from "../../assets/Vector.svg";
import { useDispatch, useSelector } from "react-redux";
import { getBreezData, getBreezDataSearch } from "../../slice/ListSlice";

const LandingPage = () => {
  const { breezData, searchData, loading } = useSelector((state) => state?.lists);
  const dispatch = useDispatch();

  const [activeTab, setActiveTab] = useState("regional");
  const [showAll, setShowAll] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  // 1. Fetch initial data on mount
  useEffect(() => {
    dispatch(getBreezData());
  }, [dispatch]);

  // 2. Search API Integration with Debounce
  useEffect(() => {
    if (searchQuery.trim() === "") {
      return; // Do nothing if search is empty
    }

    // Wait 500ms after user stops typing before calling backend
    const delayDebounceFn = setTimeout(() => {
      dispatch(getBreezDataSearch(searchQuery));
    }, 500);

    return () => clearTimeout(delayDebounceFn);
  }, [searchQuery, dispatch]);

  // 3. Determine which data array to use
  let dynamicItems = [];
  
  if (searchQuery.trim() !== "") {
    // If searching, merge the two arrays returned by the backend
    const unlimited = searchData?.data?.unlimited_day_plans || [];
    const fixed = searchData?.data?.fixed_data_plans || [];
    dynamicItems = [...unlimited, ...fixed];
  } else {
    // If NOT searching, safely extract default data array from Redux
    dynamicItems = Array.isArray(breezData) ? breezData : breezData?.data || [];
  }

  // 4. Apply Tab Filters (Bypass filters if user is actively searching)
  const displayData = dynamicItems.filter((item) => {
    if (searchQuery.trim() !== "") return true; // Show all backend search results immediately

    const isGlobalOrMulti = item.planName?.toLowerCase().includes("global") || item.coverages?.length > 1;
    
    if (activeTab === "country") {
      return !isGlobalOrMulti; // Show single-country plans
    } else {
      return isGlobalOrMulti; // Show multi-country/regional plans
    }
  });

  // 5. Limit visible data
  // Show all if 'showAll' is true OR if the user is currently searching
  const visibleData = (showAll || searchQuery !== "") ? displayData : displayData.slice(0, 12);

  // Helper function to handle tab switching
  const handleTabSwitch = (tab) => {
    setActiveTab(tab);
    setShowAll(false);
    setSearchQuery(""); // Clear search when swapping tabs
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

        {/* Navigation & Search Row */}
        <div className="flex flex-col md:flex-row items-center justify-between mb-8 gap-4">
          {/* Spacer for desktop to keep tabs centered */}
          <div className="hidden md:block flex-1"></div>

          {/* Tabs */}
          <div className="flex justify-center flex-1">
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

          {/* Search Bar */}
          <div className="flex justify-end flex-1 w-full md:w-auto">
            <div className="relative w-full md:w-[260px]">
              <input
                type="text"
                placeholder="Search country..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="
                  w-full 
                  border border-[#5aa79b] 
                  rounded-full 
                  px-5 py-3 
                  text-sm text-[#006b5b] 
                  focus:outline-none focus:ring-2 focus:ring-[#009944] 
                  bg-white 
                  placeholder-[#7aa9a1]
                  shadow-sm
                "
              />
              {searchQuery && (
                <button 
                  onClick={() => setSearchQuery("")}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-[#5aa79b] hover:text-[#006b5b] font-bold"
                >
                  ✕
                </button>
              )}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t-2 border-[#d7eadc] mb-8"></div>

        {/* Loading Indicator for Search */}
        {loading && searchQuery !== "" && (
          <p className="text-center text-[#006b5b] mb-4">Searching...</p>
        )}

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
                      Rs. {item.prices?.INR || "N/A"}
                    </span>
                  </p>
                </div>
              </a>
            ))
          ) : (
            // Show empty state only if not loading
            !loading && (
              <p className="text-[#006b5b] text-center col-span-full">
                {dynamicItems.length === 0 && searchQuery === "" 
                  ? "Loading destinations..." 
                  : "No destinations found."}
              </p>
            )
          )}
        </div>

        {/* View All Button - Hide if searching, or if all items are already showing */}
        {!showAll && searchQuery === "" && displayData.length > 12 && (
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