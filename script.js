//https://github.com/rvsp/typescript-oops/blob/master/Practice/Movie.md
//1.question
class Movie{
    constructor(title,studio,rating)
    {
        this.title = title;
        this.studio = studio;
        if(rating==undefined)
        {
            this.rating = "PG";
        }    
        else{
            this.rating = rating;
        }    

}}
var movie= new Movie("ps1","red",9)
var movie2= new Movie("avathar","avm")
console.log(movie,movie2);
// //output
//Movie {title: 'ps1', studio: 'red', rating: 9}rating: 9studio: "red"title: "ps1"[[Prototype]]: Object Movie {title: 'avathar', studio: 'avm', rating: 'PG'}

class Movie{
    constructor(title,studio,rating)
    {
        this.title = title;
        this.studio = studio;
        if(rating==undefined)
        {
            this.rating = "PG";
        }    
        else{
            this.rating = rating;
        }    

}
getPG(array){
    var result = [];
    for(var i=0;i<array.length;i++){
        if(array[i].rating=="PG")
    {
        result.push(array[i]);
    }
}
return result;
}}
var movie= new Movie("ps1","red",9)
var movie2= new Movie("avathar","avm")
var movie3= new Movie("adfghj","sdffgh")
var movie4= new Movie("thirupachi","kpv","PG6")
var arr=[movie,movie2,movie3,movie4];
console.log(movie2.getPG(arr));
//output
// (2) [Movie, Movie]
// 0
// : 
// Movie {title: 'avathar', studio: 'avm', rating: 'PG'}
// 1
// : 
// Movie {title: 'adfghj', studio: 'sdffgh', rating: 'PG'}
// length
// : 
// 2
// [[Prototype]]
// : 
// Array(0)
//--------------------------
//2.question
class  Circle {
    constructor(radius,color){
        this.radius = radius;
        this.color = color;
    }

//var obj1=new Circle(1.0,"red");

get radiusCircle(){
    return this.radius;
}

get colorCircle(){
    return this.color;
}
set radiusCircle(radius) {
    this.radius = radius;
}
set colorCircle(color) {
    this.color = color;
}

get areaCircle(){
    return Math.PI * this.radius * this.radius;
}
get circumference(){
    return 2 * Math.PI * this.radius;
}
}
var obj1=new Circle(1.0,"red");
console.log(obj1.radiusCircle);
console.log(obj1.colorCircle);
obj1.radiusCircle=6;
console.log(obj1.radiusCircle);
obj1.colorCircle="brown"



console.log(obj1.areaCircle);   

console.log(obj1.circumference);
console.log(obj1.radius)
console.log(obj1.color)
//output
// 1
// script.js:32 red
// script.js:34 6
// script.js:39 113.09733552923255
// script.js:41 37.69911184307752
// script.js:42 6
// script.js:43 brown

//-------------------
//3.Write a “person” class to hold all the details.
class Person{
    constructor(name,age,gender,salary,location,qualification)
    {
        this.name = name;
        this.age = age;
        this.gender = gender;
        this.salary = salary;
        this.location = location;
        this.qualification = qualification;

}}
var ans= new Person("vijay","45","male","4c","chennai","BE");
console.log(ans.name,ans.age,ans.gender,ans.salary,ans.location,ans.qualification);
//output
//vijay 45 male 4c chennai BE
//4.uber Price 
var km=10
var timeinminute=10
var fixedprice=25
console.log(fixedprice*(timeinminute+km))
//output
//500