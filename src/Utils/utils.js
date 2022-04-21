export const formatDate = (time) => {

    let a, b, date
    a = time.split('T');
    b = a[0].split('-');
    date = b[1] + '/' + b[2] + '/' + b[0];
    return date
  }

  export const formatDateURL = (time) => {
    let a, b, date, year, cutYear
    a = time.split('T');
    b = a[0].split('-');
    year = b[0].split('')
    cutYear = `${year[2] + year[3]}`.toString()
    date = cutYear + b[1] + b[2];
    return date
  }

