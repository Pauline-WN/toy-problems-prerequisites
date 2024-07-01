/* limit speed - 70km/h
 vehicle speed - measured (80km/h)
 demerit points - 2 points, 5km/h - 1 point - 10km/h
 vehicle speed - limit speed
*/

const rl = require (`readline`)

// initialization, enabling reading and writing
// via the console
const io = rl.createinterface ({
input: process.stdin,
output: process.stdout
});

const limit_speed = 70;

function detect_speed(speed){
    let demerit_points = (speed - limit_speed)/5;
// testing demerit points
    if(demerit_points > 12) {
    // lisence suspended
    return `Lisence Suspended: Demerit points: ${demerit_points}`;
    } else if(demerit_points <= 0){
        // Keep Your License
    return `keep your license: Demerit points: ${demerit_points}`;
    } else {
    // General
    return `warning Demerit points: ${demerit_points}`; 
    }
}
io.question ("What is the Vehicle's speed: ", function (vehicles_speed){
    if(isNaN(vehicles_speed) || vehicles_speed <= 0) {
        console.log("Invalin input!");
    } else {
        console.log(detect_speed(vehicles_speed));
    }
    io.close();
});