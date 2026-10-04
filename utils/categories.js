const CATEGORIES = [
  { key: "trending",      label: "Trending",      icon: "fa-solid fa-fire" },
  { key: "rooms",         label: "Rooms",         icon: "fa-solid fa-bed" },
  { key: "iconic-cities", label: "Iconic Cities", icon: "fa-solid fa-mountain-city" },
  { key: "mountains",     label: "Mountains",     icon: "fa-solid fa-mountain" },
  { key: "castles",       label: "Castles",       icon: "fa-brands fa-fort-awesome" },
  { key: "pools",         label: "Amazing pools", icon: "fa-solid fa-person-swimming" },
  { key: "camping",       label: "Camping",       icon: "fa-solid fa-campground" },
  { key: "farms",         label: "Farms",         icon: "fa-solid fa-cow" },
  { key: "arctic",        label: "Arctic",        icon: "fa-regular fa-snowflake" },
  { key: "domes",         label: "Domes",         icon: "fa-solid fa-igloo" },
  { key: "boats",         label: "Boats",         icon: "fa-solid fa-ship" },
];
const CATEGORY_KEYS = CATEGORIES.map((c) => c.key);
module.exports = { CATEGORIES, CATEGORY_KEYS };