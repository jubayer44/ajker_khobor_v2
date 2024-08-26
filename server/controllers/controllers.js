const {
  latestNews,
  bannerNews,
  categoryNews,
  mostViewed,
  singleNews,
} = require("../../public/js/dataLoader");
const { getTimeAgo } = require("../../public/js/getTimeAgo");
const { categories } = require("../../src/constant/constant");
const { getBanCategory } = require("../../src/utils/generateCategories");

const homepage = async (req, res) => {
  const news = await latestNews();
  const bannerNewses = await bannerNews();
  const newsHeadlines = news?.slice(0, 5)?.map((item) => item?.title);

  res.render("index", {
    categories,
    newsHeadlines,
    news,
    bannerNewses,
  });
};

const categoryPage = async (req, res) => {
  const param = req.params?.name;
  const pathName = param;
  const limitNum = req.query?.limit || 7;
  const cateName = getBanCategory(param);

  let news = await categoryNews(param, cateName, limitNum);
  const mostViewedNews = await mostViewed();

  if (news) {
    news?.forEach((item) => {
      item["postTime"] = getTimeAgo(item?.postTime);
    });
  }
  res.render("category", { categories, news, pathName, mostViewedNews });
};

const newsDetailsPage = async (req, res) => {
  const id = req.params?.id;

  const news = await singleNews(id);

  const time = news?.postTime?.split("T")[0];
  const day = time?.split("-")[2];
  const month = time?.split("-")[1];
  const year = time?.split("-")[0];

  const time24h = news?.times ? news.times : "12:23:32";
  const [hours, minutes, seconds] = time24h?.split(":");
  const date = new Date();
  date.setHours(hours, minutes, seconds);

  const time12h = date.toLocaleString("en-US", {
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
    hour12: true,
  });

  news ? (news["postDate"] = `${day}-${month}-${year}`) : null;
  news ? (news["postTime"] = time12h) : null;

  res.render("newsDetails", { categories, news });
};

module.exports = { homepage, categoryPage, newsDetailsPage };
