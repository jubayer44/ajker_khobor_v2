const getBanCategory = (category) => {
  if (category === "companiganj") {
    return "কোম্পানীগঞ্জ";
  }
  if (category === "sylhet") {
    return "সিলেট";
  }
  if (category === "national") {
    return "জাতীয়";
  }
  if (category === "international") {
    return "আন্তর্জাতিক";
  }
  if (category === "sports") {
    return "খেলা";
  }
  if (category === "health") {
    return "স্বাস্থ্য";
  }
  if (category === "business") {
    return "বাণিজ্য";
  }
  if (category === "entertainment") {
    return "বিনোদন";
  }
  if (category === "literature") {
    return "সাহিত্য";
  }
  if (category === "education") {
    return "শিক্ষা";
  }
  if (category === "technology") {
    return "প্রযুক্তি";
  }
  if (category === "religion") {
    return "ধর্ম";
  }
  if (category === "traveling") {
    return "ভ্রমণ";
  }
  if (category === "opinion") {
    return "মতামত";
  }
  if (category === "all-news") {
    return "সব খবর";
  }
};

module.exports = { getBanCategory };
