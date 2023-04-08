export const getTimeElapsed = (timestamp) => {
  const timeDiff = Date.now() - timestamp;
  const minute = 60 * 1000;
  const hour = 60 * minute;
  const day = 24 * hour;

  if (timeDiff < minute) {
    return "agora";
  } else if (timeDiff < hour) {
    const minutes = Math.floor(timeDiff / minute);
    return `${minutes} minutes ago`;
  } else if (timeDiff < day) {
    const hours = Math.floor(timeDiff / hour);
    return `${hours} hours ago`;
  } else {
    const days = Math.floor(timeDiff / day);
    return `${days} days ago`;
  }
};
