const moment = require("moment");

function getTimeAgo(date) {
  const now = moment();
  const postDate = moment(date);

  // Calculate the difference between the current time and the post's time
  const duration = moment.duration(now.diff(postDate));

  const formatBengaliNumber = (number) => {
    const digits = number.toString().split("");
    const bengaliDigits = {
      0: "০",
      1: "১",
      2: "২",
      3: "৩",
      4: "৪",
      5: "৫",
      6: "৬",
      7: "৭",
      8: "৮",
      9: "৯",
    };

    return digits.map((digit) => bengaliDigits[digit]).join("");
  };

  if (duration.asSeconds() < 60) {
    const seconds = formatBengaliNumber(Math.floor(duration.asSeconds()));
    return `${seconds} সেকেন্ড আগে`;
  } else if (duration.asMinutes() < 60) {
    const minutes = formatBengaliNumber(Math.floor(duration.asMinutes()));
    return `${minutes} মিনিট আগে`;
  } else if (duration.asHours() < 24) {
    const hours = formatBengaliNumber(Math.floor(duration.asHours()));
    return `${hours} ঘন্টা আগে`;
  } else if (duration.asDays() < 30) {
    const days = formatBengaliNumber(Math.floor(duration.asDays()));
    return `${days} দিন আগে`;
  } else if (duration.asMonths() < 12) {
    const months = formatBengaliNumber(Math.floor(duration.asMonths()));
    return `${months} মাস আগে`;
  } else {
    const years = formatBengaliNumber(Math.floor(duration.asYears()));
    return `${years} বছর আগে`;
  }
}

module.exports = { getTimeAgo };
