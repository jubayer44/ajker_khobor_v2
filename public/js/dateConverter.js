const numBd = ["০", "১", "২", "৩", "৪", "৫", "৬", "৭", "৮", "৯"];
const convertNumber = (n) =>
  n
    .toString()
    .split("")
    .map((num) => numBd[num])
    .join("");

// Existing Bengali date conversion logic
function getDatebd(arg) {
  const esheAdd = { e: " ই", she: " শে" };
  const monthName = [
    "বৈশাখ",
    "জ্যৈষ্ঠ",
    "আষাঢ়",
    "শ্রাবণ",
    "ভাদ্র",
    "আশ্বিন",
    "কার্তিক",
    "অগ্রহায়ণ",
    "পৌষ",
    "মাঘ",
    "ফাল্গুন",
    "চৈত্র",
  ];

  const addEe = (n) => {
    let x, y;
    x = n >= 10 && n < 20 ? esheAdd.e : "";
    y = n >= 20 && n <= 31 ? esheAdd.she : "";
    return x || y ? y + x : "";
  };

  const getYear = (dmy) =>
    dmy.month <= 4 && dmy.date <= 13 ? dmy.year - 594 : dmy.year - 593;

  const getMonthDate = (d, m) => {
    switch (true) {
      case m == 1 && d <= 13:
        m = 8;
        d = d + 17;
        break;
      case m == 1 && d > 13:
        m = 9;
        d = d - 13;
        break;
      case m == 2 && d <= 12:
        m = 9;
        d = d + 18;
        break;
      case m == 2 && d > 12:
        m = 10;
        d = d - 12;
        break;
      case m == 3 && d <= 14:
        m = 10;
        d = d + 16;
        break;
      case m == 3 && d > 14:
        m = 11;
        d = d - 14;
        break;
      case m == 4 && d <= 13:
        m = 11;
        d = d + 17;
        break;
      case m == 4 && d > 13:
        m = 0;
        d = d - 13;
        break;
      case m == 5 && d <= 14:
        m = 0;
        d = d + 17;
        break;
      case m == 5 && d > 14:
        m = 1;
        d = d - 14;
        break;
      case m == 6 && d <= 14:
        m = 1;
        d = d + 17;
        break;
      case m == 6 && d > 14:
        m = 2;
        d = d - 14;
        break;
      case m == 7 && d <= 15:
        m = 2;
        d = d + 16;
        break;
      case m == 7 && d > 15:
        m = 3;
        d = d - 15;
        break;
      case m == 8 && d <= 15:
        m = 3;
        d = d + 16;
        break;
      case m == 8 && d > 15:
        m = 4;
        d = d - 15;
        break;
      case m == 9 && d <= 15:
        m = 4;
        d = d + 16;
        break;
      case m == 9 && d > 15:
        m = 5;
        d = d - 15;
        break;
      case m == 10 && d <= 15:
        m = 5;
        d = d + 15;
        break;
      case m == 10 && d > 15:
        m = 6;
        d = d - 15;
        break;
      case m == 11 && d <= 14:
        m = 6;
        d = d + 16;
        break;
      case m == 11 && d > 14:
        m = 7;
        d = d - 14;
        break;
      case m == 12 && d <= 14:
        m = 7;
        d = d + 16;
        break;
      case m == 12 && d > 14:
        m = 8;
        d = d - 14;
        break;
      default:
        (m = false), (d = false);
    }

    return { month: m, date: d };
  };

  let daymon = getMonthDate(arg.date, arg.month);

  return {
    date: convertNumber(daymon.date) + addEe(daymon.date),
    month: monthName[daymon.month],
    year: convertNumber(getYear(arg)),
  };
}

// Existing English date conversion logic
const setDateEng = (tarik) => {
  let dayName = [
    "রবিবার",
    "সোমবার",
    "মঙ্গলবার",
    "বুধবার",
    "বৃহস্পতিবার",
    "শুক্রবার",
    "শনিবার",
  ];
  let monthName = [
    "জানুয়ারি",
    "ফেব্রুয়ারি",
    "মার্চ",
    "এপ্রিল",
    "মে",
    "জুন",
    "জুলাই",
    "আগস্ট",
    "সেপ্টেম্বর",
    "অক্টোবর",
    "নভেম্বর",
    "ডিসেম্বর",
  ];
  const arg = {
    date: tarik.getDate(),
    month: tarik.getMonth() + 1,
    year: tarik.getFullYear(),
  };
  const dateEn = {
    day: dayName[tarik.getDay()],
    date: convertNumber(arg.date),
    month: monthName[arg.month - 1],
    year: convertNumber(arg.year),
  };

  const dateBd = getDatebd(arg);
  return { dateEn, dateBd };
};

// New Hijri date function
function hijriDate(date) {
  const hijriMonths = [
    "মুহররম",
    "সফর",
    "রবিউল আউয়াল",
    "রবিউস সানি",
    "জমাদিউল আউয়াল",
    "জমাদিউস সানি",
    "রজব",
    "শাবান",
    "রমজান",
    "শাওয়াল",
    "জ্বিলকদ",
    "জ্বিলহজ্জ",
  ];

  const jd = (date) => {
    return (
      (1461 *
        (date.getFullYear() + 4800 + Math.floor((date.getMonth() - 14) / 12))) /
        4 +
      (367 *
        (date.getMonth() - 2 - 12 * Math.floor((date.getMonth() - 14) / 12))) /
        12 -
      (3 *
        Math.floor(
          (date.getFullYear() +
            4900 +
            Math.floor((date.getMonth() - 14) / 12)) /
            100
        )) /
        4 +
      date.getDate() -
      32075
    );
  };

  const j = jd(date) - 1948440 + 10632;
  const n = Math.floor((j - 1) / 10631);
  const r = j - 10631 * n + 354;
  const q =
    Math.floor((10985 - r) / 5316) * Math.floor((50 * r) / 17719) +
    Math.floor(r / 5670) * Math.floor((43 * r) / 15238);
  const h =
    r -
    Math.floor((30 - q) / 15) * Math.floor((17719 * q) / 50) -
    Math.floor(q / 16) * Math.floor((15238 * q) / 43) +
    29;

  const month = Math.floor((24 * h) / 709);
  const day = h - Math.floor((709 * month) / 24);
  const year = 30 * n + q - 30;

  return { day: Math.floor(day), month: hijriMonths[month], year };
}

// Update setDatetimeHtml function to include Hijri date
function setDatetimeHtml(dateVal) {
  let { dateEn, dateBd } = setDateEng(new Date(dateVal));
  const hijri = hijriDate(new Date(dateVal));
  const arabicDate = `${convertNumber(hijri.day)} ${
    hijri.month
  } ${convertNumber(hijri.year)}`;

  const app = document.getElementById("app");
  const dtext = app.querySelectorAll("[d-text]");
  for (let i = 0; i < dtext.length; i++) {
    let att = dtext[i].getAttribute("d-text");
    if (att) {
      dtext[i].textContent = eval(att);
    }
  }
}

// Initialize date and add flatpickr for date selection
setDatetimeHtml(new Date());
// flatpickr("#indate");

document.getElementById("indate").onchange = function () {
  setDatetimeHtml(this.value);
};
