// const square = function (x){
//     return x * x
// }

// const square = (x) => {
//     return x*x
// } 

const square = (x) => x*x

console.log(square(8))

const event = {
    name:'Birthday Party',
    guests:['Aman','Peter', 'Jen', 'Mike'],
    printGuestList(){
        console.log('Guest List For '+this.name+'\n');

        this.guests.forEach((guest) => {
            console.log(guest+' is attending '+this.name);
        });
    }
}

event.printGuestList()