const dog = {
  name: 'Gabar',
  activities: ['play', 'eat dog food'],
  dogFriends: [{
    name: 'Ira',
    activities: ['be grumpy', 'eat bread omlet'],
    weight: 8,
    furcolor: 'white'
},
{
  name: 'Snowy',
  activities: ['sleep', 'pre-sleep naps'],
  weight: 3
}]};

var x=JSON.stringify(dog);
console.log(x);

  dog.height=20;
  dog.weight=10;
 
  dog.name='Gabbar';
 
 var w=0;
 dog.dogFriends.forEach(n=>
 {
     console.log(n.name);
     console.log(n.activities);
     n.activities[2]="barking";
     n.activities[3]="resting";
     if(n.name=='Ira')
     {
         n.furcolor='brown';
     }
    w=w+n.weight;
 })
console.log("Total Weight="+w);
 
//   dog.dogFriends[0].furcolor='brown';
 
 var x=JSON.stringify(dog);
 console.log(x);