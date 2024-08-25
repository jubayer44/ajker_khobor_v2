const {
  latestNews,
  bannerNews,
  categoryNews,
  mostViewed,
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

  const news = await categoryNews(param, cateName, limitNum);
  const mostViewedNews = await mostViewed();

  if (news) {
    news?.forEach((item) => {
      item["postTime"] = getTimeAgo(item?.postTime);
    });
  }

  res.render("category", { categories, news, pathName, mostViewedNews });
};

module.exports = { homepage, categoryPage };
