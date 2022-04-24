const setDate = (ISO: Date, Type: String) => {
  const isoConverted = new Date(ISO);

  const months = [
    'JANEIRO',
    'FEVEREIRO',
    'MARÇO',
    'ABRIL',
    'MAIO',
    'JUNHO',
    'JULHO',
    'AGOSTO',
    'SETEMBRO',
    'OUTUBRO',
    'NOVEMBRO',
    'DEZEMBRO',
  ];
  const month = isoConverted.getMonth();
  const monthName = months[isoConverted.getMonth()];
  const date = isoConverted.getDate();
  const hour = isoConverted.getHours();
  const min = isoConverted.getMinutes();

  if (Type === 'initialCard') {
    return `0${date}/0${month} às ${hour}:${min}`;
  }
  if (Type === 'finalCard') {
    return `${date}/0${month}`;
  }
  if (Type === 'initialAccordion') {
    return `${date} DE ${monthName}`;
  }
  if (Type === 'finalAccordion') {
    return `${hour}:${min}`;
  }
};

export default setDate;
