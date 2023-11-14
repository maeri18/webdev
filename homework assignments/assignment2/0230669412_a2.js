/*Object "Cars", with three properties : carNumber (the car's plate number)
checkInTime (The time at which the car was checked in the parking), checkOutTime (the time at which 
the car was checked out the parking)  */
function Cars(carNumber, checkInTime,  checkOutTime) {
    this.carNumber=carNumber;
    this.checkInTime= checkInTime;
    this.checkOutTime = checkOutTime;
};
/*Object Drivers representing a driver, with three properties : the driver's name (driverName)
the driver's license (driverLicense), and the list of cars the driver has parked in the parking (cars) */
function Drivers(driverName,driverLicense,cars) {
        this.driverName = driverName;
        this.driverLicense = driverLicense;
        this.cars = cars ;
};

/*Object ParkingManager simulating the functionning of a parking manager. Is initialized with the list of 
drivers (Drivers array)*/
function ParkingManager(driver) 
{
    this.driver = driver;

/* Method listParkedCars : lists all cars that are currently parked in the parking lot.
It returns an array of Cars objects.*/
    this.listParkedCars = function() 
    {
        let listparked = []; //result array
        for (let d of this.driver)
        {   
            for (let c of d.cars)
            {
                /*checking if the car is parked : a car is parked if its check-in time 
                is not equal to "null", and its check out time is equal to "null". If the car is parked,
                we push it into "listparked" */
                if (c.checkOutTime == null && c.checkInTime!=null) 
                {
                    listparked.push(c);
                }
            }
        }
        return listparked;
    };
/*Method parkCar : parks a car in a parking space given the driver's name,
the driver's license, the car's plate number and the check-in time*/
    this.parkCar = function(driverName, driverLicense, carNumber, checkInTime)
    {
        let parkedCars = this.listParkedCars(); //list of parked cars

        /*first, we pass through all the cars parked to check if the car is already in the parking
        If so, we return "false" : we can't park a car that is already parked*/  
            for (let c of parkedCars)
            {
                if (c.carNumber==carNumber)
                {
                    return false;
                }
            }
        
        /*Then, we search the driver of the car in the list of drivers, and check if that driver 
         has a car that is already parked. We return false if the driver already has a car parked. */
        for (let d of this.driver)
        {   
            if ((d.driverLicense==driverLicense) && (d.driverName == driverName))
            {
                for (let c of d.cars)
            {
                if ((c.checkInTime != null) &&(c.checkOutTime ==null))
                {
                    return false;
                }
            }
            /*If the driver of the car has no car currently parked, 
            we push the car in the list of cars of that driver with correct check-in and check-out times.
            Then we return "true" for succesful parkCar*/
            d.cars.push(new Cars(carNumber,checkInTime,null));
            return true;
            }   
        }
        /*If the driver of the car we want to park is not found in the list of drivers, we push that driver in the list of
        drivers of the parking. And we push the car in the list of cars of the driver. 
        We return "true" for successful parkCar */
        this.driver.push(new Drivers(driverName,driverLicense,[new Cars(carNumber,checkInTime,null)]));
        return true;
    };
/*Method unparkCar : unparks a car from the parking lot based on its plate number (carNumber) 
and the date and time of unparking(unparkDateTime)*/
    this.unparkCar =function(carNumber, unparkDateTime)
    {
        /*We pass through all the cars in the parking and if the car exists 
        in the parking list: (c.carNumber == carNumber)
        and the car is currently parked (c.checkOutTime==null), 
        we unpark the car by doing c.checkOutTime = unparkDateTime;  */
        for (let d of this.driver)
        {   
            for (let c of d.cars)
            {
                if ((c.carNumber == carNumber) && (c.checkOutTime==null))
                {
                    c.checkOutTime = unparkDateTime;
                    return true;
                }
            }
        }
        /*If the car do not exist, or the car has already been unparked, we return "false"  */
        return false;
    };
/*Method historyByDriver : provides a history of cars parked by a driver, based on 
their driver license (driverLicense).*/
    this.historyByDriver=function(driverLicense)
    {
        let history = [];//result array
        /*We pass through the list of drivers of the parking, and if we find the driver 
        we are looking for (d.driverLicense == driverLicense), we push in "history" each car the driver
         has ever parked, including eventually the car that is currently parked */
        for (let d of this.driver)
        {  
            if(d.driverLicense==driverLicense) 
            {
                for (let c of d.cars)
                {
                    history.push(c);
                }
                return history;
            }
        }
        /*If the driver is not in the list of drivers, we return "false"*/
        return false;
    };
/* Method historyByCarNumber:  provides a history of a specific car based on its plate number(carNumber)
The array this function returns also includes the car object with checkOutTime ==null*/
    this.historyByCarNumber=function(carNumber)
    {
        let historyCar = []; //result array
        /*We pass through the list of drivers, and if we find in a driver's list of cars
         the car we are looking for (c.carNumber==carNumber), we push the car into "historyCar"*/
            for (let d of this.driver)
            {   
                for (let c of d.cars)
                {
                    if (c.carNumber == carNumber)
                    {
                        historyCar.push(c);
                    }
                }
            }
            /*If no car history is found, we return "false", otherwise, we return "history"*/
            if (historyCar != [])
            {
                return historyCar;
            }
            return false;
        
    };
/*Method totalHoursByCar : calculates the total hours a car has been parked based on its plate number(carNumber)*/
    this.totalHoursByCar=function(carNumber)
    {
        //variable containing the car's history, without cars that are parked
        let history= [];
        //variable that will contain the total hours a car has been parked
        let totalHours = 0; //in hours
        /*Construction of the car's history : */
            for (let d of this.driver)
            {   
                for (let c of d.cars)
                {
                    if (c.carNumber == carNumber && c.checkOutTime!=null)
                    {
                        history.push(c);
                    }
                }
            }
        /*If the car's history is empty, then, whether the car is not found in the parking, 
        or it is still parked and has never been unparked. In both cases, we return "false"*/
        if(history == [])
        {
            return false;
        }
        /*If the car's history is not empty, we pass through the history, adding for each element 
        of the history, the amount of time the car spent in the parking.*/ 
        else
        {
        for (let c of history)
        {
            totalHours = totalHours + (c.checkOutTime.getTime() - c.checkInTime.getTime());//in milliseconds
        }
        }
        totalHours = totalHours/(1000*60*60); //conversion in hours
        //Now we truncate "totalHours" to only 2 decimal place :
            //variable containing the integer part of totalHours:
            let intPartTotalHours = Math.floor(totalHours);
            //variable containing the two first decimal places of totalHours:
            let decimals =  0.01* Math.floor(100*(totalHours - intPartTotalHours));
            //totalHours with only two decimal places:
            totalHours = intPartTotalHours + decimals;
        return totalHours;
    };
    

    
};

let parkingManager = new ParkingManager([]);
