function isShortsWeather(temperature) {
  return temperature >= 35;
}
console.log(isShortsWeather(40));
if (isShortsWeather(40)) {
  console.log("Wear shorts!");
} else {
  console.log("Better wear pants.");
}
console.log(isShortsWeather(22));
if (isShortsWeather(22)) {
  console.log("Wear shorts!");
} else {
  console.log("Better wear pants.");
}
console.log(isShortsWeather(37));
if (isShortsWeather(37)) {
  console.log("Wear shorts!");
} else {
  console.log("Better wear pants.");
}

