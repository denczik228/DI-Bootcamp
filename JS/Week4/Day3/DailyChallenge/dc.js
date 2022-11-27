const carInventory = [
    { id: 1, car_make: "Lincoln", car_model: "Navigator", car_year: 2009 },
    { id: 2, car_make: "Mazda", car_model: "Miata MX-5", car_year: 2001 },
    { id: 3, car_make: "Honda", car_model: "Accord", car_year: 1983 },
    { id: 4, car_make: "Land Rover", car_model: "Defender Ice Edition", car_year: 2010 },
    { id: 5, car_make: "Honda", car_model: "Accord", car_year: 1995 },
];


function getCarHonda(arr) {
    let firsth = arr.find(el => el.car_make === "Honda");
    console.log(firsth);
    const my = `this is a ${firsth.car_make} ${firsth.car_model} of ${firsth.car_year}`;
    console.log(my);
}
getCarHonda(carInventory);

const inventor = [
    { id: 1, car_make: "Lincoln", car_model: "Navigator", car_year: 2009 },
    { id: 2, car_make: "Mazda", car_model: "Miata MX-5", car_year: 2001 },
    { id: 3, car_make: "Honda", car_model: "Accord", car_year: 1983 },
    { id: 4, car_make: "Land Rover", car_model: "Defender Ice Edition", car_year: 2010 },
    { id: 5, car_make: "Honda", car_model: "Accord", car_year: 1995 },
];

function sortCarInventoryByYear(carInventor) {
    const sort = carInventor.sort((a, b) => a.car_year < b.car_year ? -1 : 1);
    console.log(sort);
}
sortCarInventoryByYear(inventor);

