const datePosted = new Date('January 4 2022 7:30:59');
const dateRefreshed = new Date();

const dif = dateRefreshed.getTime() - datePosted.getTime();
mins = Math.round(dif / 1000/60);
hours = Math.round(mins /60);
days = Math.round(hours /24);
