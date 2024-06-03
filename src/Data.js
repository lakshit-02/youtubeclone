 export const API_KEY ='AIzaSyBxDJQh8m1rhFMPb5EEkP50nzXU1PZTuGE';

 //views simple no me aara tha usko m or k kra
 export const value_converter = (value) => {
    if(value>=1000000)
    {
        return Math.floor(value/1000000)+"M";
    }
    else if(value>=1000)
    {
        return Math.floor(value/1000)+"K";
    }
    else{
        return value;
    }
}