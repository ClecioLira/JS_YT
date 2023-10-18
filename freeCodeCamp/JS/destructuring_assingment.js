let voxel = {x: 3.6, y: 7.4, z: 6.54}
//maneira antiga
// let x = voxel.x
// let y = voxel.y
// let z = voxel.z

//nova maneira
const {x : a, y : b, z : c} = voxel

const AVG_TEMPERATURES = {
    today: 77.5,
    tomorrow: 79
}
function getTempOfTmrw(avgTemperatures) {
    const {tomorrow: tempOfTomorrow} = avgTemperatures

    return tempOfTomorrow
}
console.log(getTempOfTmrw(AVG_TEMPERATURES))


const LOCAL_FORECAST = {
    today: {min: 72, max: 83},
    tomorrow: {min: 73.3, max: 84.6}
}
function getMaxOfTmrw(forecast) {
    const {tomorrow: {min: maxOfTomorrow}} = forecast
    return maxOfTomorrow
}
console.log(getMaxOfTmrw(LOCAL_FORECAST))