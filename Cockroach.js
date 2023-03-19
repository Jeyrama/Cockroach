/*
The cockroach is one of the fastest insects. 
Write a function which takes its speed in km per hour 
and returns it in cm per second, rounded down to the integer.

Note! The input is a real number (actual type is language dependent) 
and is >= 0. The result should be an integer.
*/


// Solution

const cockroachSpeed = s => Math.floor(s / 0.036);

// 0r

function cockroachSpeed(s) {
  return Math.floor(s*100000/3600);
}