const fifa_scorers= [
    { name: 'Kylian Mbappe'},
    { name: 'Messi' },
    { name: 'Olivier' },
    { name: 'Julain' },
    { name: 'Marcus' }
];
console.log(fifa_scorers);
var x=5;
fifa_scorers.map(n=>
{
    n.goals=x;
    if(n.name=='Messi')
    {
     n.goals=x+1;
    }
    n.hero=n.name; 
    delete n.name; 
    x=x-1;
})
console.log("Output");
console.log(fifa_scorers);