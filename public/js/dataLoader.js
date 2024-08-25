const latestNews = async () => {
  return await fetch("https://ajkerkhobor.news/api/latest")
    .then((response) => response.json())
    .then((data) => {
      return data;
    })
    .catch((error) => console.log(error));
};

// Fetch Banner News Data
const bannerNews = async () => {
  return await fetch("https://ajkerkhobor.news/api/leadNews")
    .then((response) => response.json())
    .then(async (data) => {
      const latestData = await latestNews();
      const filterData = latestData?.filter((item) => item?._id !== data?._id);
      const leftSideData = filterData?.slice(0, 6);
      const rightSideData = filterData?.slice(6, 12);
      return {
        leadNews: data,
        leftSideData,
        rightSideData,
      };
    })
    .catch((error) => console.log(error));
};

const categoryNews = async (param, cateName, limitNum) => {
  return await fetch(
    `https://ajkerkhobor.news/api/${
      param === "all-news" ? "allNews" : "category"
    }?number=${limitNum}&category=${cateName}`
  )
    .then((response) => response.json())
    .then((data) => {
      return data;
    })
    .catch((error) => console.log(error));
};

const mostViewed = async () => {
  return await fetch(`https://ajkerkhobor.news/api/highestView`)
    .then((response) => response.json())
    .then((data) => {
      return data;
    })
    .catch((error) => console.log(error));
};

module.exports = { latestNews, bannerNews, categoryNews, mostViewed };
