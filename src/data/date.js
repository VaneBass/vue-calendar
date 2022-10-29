/**
 * 计算日期的相关函数
 */

// 每一天的毫秒数，用于计算 dateTime
const DayMS = 24 * 60 * 60 * 1000;

/**
 * 获取当月第一天
 * @param date
 */
function getFirstDate(date) {
  return new Date(date.getFullYear(), date.getMonth(), 1);
}

/**
 * 获取当月最后一天
 * @param date
 */
function getLastDate(date) {
  return new Date(date.getFullYear(), date.getMonth() + 1, 0);
}

/**
 * 获取上个月末尾的日期数组(显示在当月前)
 * @param date
 * 1. 获取当月第一天 FD 是星期几 FW
 * 2. 以星期日为第 0 天, 得出上个月末尾日期数组长度为 FW
 */
function getPrevEndDateList(date) {
  const dateList = [];
  const firstDate = getFirstDate(date);
  const firstDateTime = firstDate.getTime();
  const firstDateWeek = firstDate.getDay();

  for (let i = 0; i < firstDateWeek; i++) {
    const currentDate = new Date(firstDateTime - (i + 1) * DayMS);

    dateList.unshift({
      date: currentDate,
      isPrevMonth: true,
    });
  }

  return dateList;
}

/**
 * 获取下个月开始的日期数组
 * @param date
 * 1. 获取当月最后一天 LD 是星期几 LW
 * 2. 下个月开始的日期数组长度 = 6 - LW
 */
function getNextDateStartDateList(date) {
  const dateList = [];
  const lastDate = getLastDate(date);
  const lastDateTime = lastDate.getTime();
  const lastDateWeek = lastDate.getDay();

  for (let i = 0; i < 6 - lastDateWeek; i++) {
    const currentDate = new Date(lastDateTime + (i + 1) * DayMS);

    dateList.push({
      date: currentDate,
      isNextMonth: true,
    });
  }

  return dateList;
}

/**
 * 获取当月所有日期
 * @param date
 */
function getCurrentMonthDateList(date) {
  const dateList = [];
  const firstDate = getFirstDate(date);
  const lastDate = getLastDate(date);

  for (let i = 1; i < lastDate.getDate() + 1; i++) {
    const currentDate = new Date(firstDate);
    currentDate.setDate(i);

    dateList.push({
      date: currentDate,
      isCurrentMonth: true,
    });
  }

  return dateList;
}

export {
  getFirstDate,
  getLastDate,
  getPrevEndDateList,
  getNextDateStartDateList,
  getCurrentMonthDateList,
};
