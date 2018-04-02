db = connect("mongodb://root:laurea99@ds012178.mlab.com:12178/laurea_mean");

db.createCollection('singers', 
{
    firstname:String,
    lastname:String,
    avatar:String,
    description:String,
    songs:[{title:String, year:Number}]
});

db.createCollection('contacts', 
{
    firstname:String,
    lastname:String,
    subject:String,
    message:String,
    created:Date
});

db.singers.insertMany(
    [ 
        {
            firstname:"Isabelle", 
            lastname:"Gall",
            avatar:"/img/gall.png",
            description:"Isabelle Geneviève Marie Anne \"France\" Gall (9 October 1947 – 7 January 2018) was a French singer. She won the Eurovision Song Contest in 1965.",
            songs: [
                {title:"Poupée de cire", year:1965},
                {title:"N’écoute pas les idoles", year:1967},
                {title:"Résiste", year:1981}]
        },
        {
            firstname:"Jacques", 
            lastname:"Brel",
            avatar:"/img/brel.jpg",
            description:"Jacques Brel (8 April 1929 – 9 October 1978) was a Belgian singer, songwriter, actor and director who composed and performed literate, thoughtful, and theatrical songs that generated a large, devoted following—initially in Belgium and France, later throughout the world.",
            songs: [
                {title:"Ne me quitte pas", year:1959},
                {title:"Amsterdam", year:194},
                {title:"Ces gens-là", year:1965}] 
        }
    ]
 );

 db.contacts.insertOne(
     {
        firstname:"Vince",
        lastname:"William",
        subject:"Example of subject",
        message:"Example of message",
        created:new Date(),
     }
 );