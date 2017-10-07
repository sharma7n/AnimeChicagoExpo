const StandardTime = (time, duration) => {

  const start = (time) => {
    const parsedStartTime = new Date(time);
    const startHour = parsedStartTime.getHours();
    let startMinute = `${parsedStartTime.getMinutes()}`;
    startMinute = startMinute.length === 1 ? `0${startMinute}` : startMinute;

    const startDisplay = (startHour, startMinute) => {
      if (startHour === 24) {
        return `12:${startMinute}am`;
      } else if (startHour > 12) {
        return `${startHour - 12}:${startMinute}pm`;
      } else if (startHour === 12) {
        return `12:${startMinute}pm`;
      } else {
        return `${startHour}:${startMinute}am`;
      }
    };

    return startDisplay(startHour, startMinute);
  };

  const end = (time, duration) => {
    if (duration) {
      const parsedEndTime = new Date(time+duration);
      const endHour = parsedEndTime.getHours();
      let endMinute = `${parsedEndTime.getMinutes()}`;
      endMinute = endMinute.length === 1 ? `0${endMinute}` : endMinute;

      const endDisplay = (endHour, endMinute) => {
        if (endHour === 24) {
          return `12:${endMinute}am`;
        } else if (endHour > 12) {
          return `${endHour - 12}:${endMinute}pm`;
        } else if (endHour === 12) {
          return `12:${endMinute}pm`;
        } else {
          return `${endHour}:${endMinute}am`;
        }
      };

      return endDisplay(endHour, endMinute);
    } else {
      return "¯\\_(ツ)_/¯";
    }
  };

  return `${start(time)} - ${end(time, duration)}`;
};

export default StandardTime;
