function calculateTubeVolume(r, h) {
    let circleArea = Math.PI * r ** 2;
    let tubeVolume = circleArea * h;

    return tubeVolume;
  }
  
  let tubeA = calculateTubeVolume(5, 8);
  let tubeB = calculateTubeVolume(10, 25);
  let resultAB = tubeA + tubeB;
  
  console.log("Volume of Tube A is " + tubeA + " cm3" );
  console.log("Volume of Tube B is " + tubeB + " cm3" );
  console.log("Total volume of Tube A and Tube B is " + resultAB + " cm3.");
  
  function CalculateSphere(rad) {
    let spherevolume = (4/3) * Math.PI * Math.pow(rad, 3);
    
    return spherevolume
 } 

 let sphereX = CalculateSphere (10);
 let sphereY = CalculateSphere (20);
 let resultXY = sphereX + sphereY
  console.log("Volume of Sphere X is " + sphereX + " cm3" );
  console.log("Volume of Sphere Y is " + sphereY + " cm3" );
  console.log("Total volume of Sphere X and Sphere Y is " + resultXY + " cm3.");