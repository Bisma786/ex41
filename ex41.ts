// Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(), which prints the name of each magician in the array.

const magicianNames:string[]=["Vikral aur Gabraal","Shakalaka","Hamoon Jadugar","Harry Potter","Ainak Wala Jin","Aladin"];
function show_magicians(magicians:string[]):void
{
    for (const magician of magicians){
        console.log(magician)
    }
}show_magicians(magicianNames);