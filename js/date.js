export default dateISOString => {
  const MONTHS = ['months-short'];
  const date = new Date(dateISOString);
  const minutes = date.getMinutes();

  return `${date.getHours()}:${minutes > 9 ? minutes : '0' + minutes}, 
    ${MONTHS[date.getMonth()]} ${date.getDate()}`;
};
