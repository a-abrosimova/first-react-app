const normalizeDate = (date) => (date < 10 ? `0${date}` : date);

const formatDate = (strDate) => {
  const date = new Date(strDate);

  return `${normalizeDate(date.getDate())}.${normalizeDate(
    date.getMonth() + 1
  )}.${normalizeDate(date.getFullYear())}`;
};

export default formatDate;
