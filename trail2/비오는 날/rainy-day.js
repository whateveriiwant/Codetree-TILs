const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const forecasts = input.slice(1, n + 1).map(line => line.split(' '));

const data = forecasts.map(([date, day, weather]) => ({ date, day, weather }));

data.sort((a, b) => (a.date < b.date ? -1 : a.date > b.date ? 1 : 0));

const rainyDays = data.filter(d => d.weather === "Rain");
rainyDays.sort((a, b) => a.date.localeCompare(b.date));
console.log(rainyDays[0].date, rainyDays[0].day, rainyDays[0].weather);