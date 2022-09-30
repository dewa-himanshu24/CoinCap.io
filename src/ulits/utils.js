export const processData = (data) => {
  return data.map((row) => {
    row.priceUsd = (+row.priceUsd).toFixed(2);
    row.marketCapUsd = intToString((+row.marketCapUsd).toFixed(2));
    row.supply = intToString((+row.supply).toFixed(2));
    row.volumeUsd24Hr = intToString((+row.volumeUsd24Hr).toFixed(2));
    row.vwap24Hr = (+row.vwap24Hr).toFixed(2);
    row.changePercent24Hr = (+row.changePercent24Hr).toFixed(2);
    return row
  })
}

function intToString(num) {
  num = num.toString().replace(/[^0-9.]/g, '');
  if (num < 1000) {
      return num;
  }
  let si = [
    {v: 1E3, s: "K"},
    {v: 1E6, s: "M"},
    {v: 1E9, s: "B"},
    {v: 1E12, s: "T"},
    {v: 1E15, s: "P"},
    {v: 1E18, s: "E"}
    ];
  let index;
  for (index = si.length - 1; index > 0; index--) {
      if (num >= si[index].v) {
          break;
      }
  }
  return (num / si[index].v).toFixed(2).replace(/\.0+$|(\.[0-9]*[1-9])0+$/, "$1") + si[index].s;
}

