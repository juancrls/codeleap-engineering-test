export const getTimeElapsed = (timestamp) => {
  const timeDiff = Date.now() - timestamp;
  const minute = 60 * 1000;
  const hour = 60 * minute;
  const day = 24 * hour;

  if (timeDiff < minute) {
    return "less than a minute ago";
  } else if (timeDiff < hour) {
    const minutes = Math.floor(timeDiff / minute);
    if(minutes == 1) {
      return `${minutes} minute ago`;
    } else {
      return `${minutes} minutes ago`;
    }
  } else if (timeDiff < day) {
    const hours = Math.floor(timeDiff / hour);
    if(hours == 1) {
      return `${hours} hour ago`;
    } else {
      return `${hours} hours ago`;
    }
  } else {
    const days = Math.floor(timeDiff / day);
    if(days == 1) {
      return `${days} day ago`;
    } else {
      return `${days} days ago`;
    }
  }
};