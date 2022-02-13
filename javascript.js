var songs=[

    {
        id:1,
        imageSrc:"./thumbnails/img_Faded.jpg",
        audioSrc:"./audio/Alan Walker - Faded (Lyrics).mp3",
        title:"Faded - Alan Walker"
    },

    {
        id:2,
        imageSrc:"./thumbnails/img_Unstoppable.jpg",
        audioSrc:"./audio/Sia - Unstoppable (Lyrics).mp3",
        title:"Sia - Unstoppable"
    },

    {
        id:3,
        imageSrc:"./thumbnails/img_Believer.jpg",
        audioSrc:"./audio/Imagine Dragons - Believer (Lyrics).mp3",
        title:"Imagine Dragons - Believer"
    },

    {
        id:4,
        imageSrc:"./thumbnails/img_GirlsLikeYou.jpg",
        audioSrc:"./audio/Maroon 5 - Girls Like You (Lyrics).mp3",
        title:"Maroon 5 - Girls Like You"
    },

    {
        id:5,
        imageSrc:"./thumbnails/img_Senorita.jpg",
        audioSrc:"./audio/Shawn Mendes, Camila Cabello - Señorita (Lyrics).mp3",
        title:"Shawn Mendes - Senorita"
    },

    {
        id:6,
        imageSrc:"./thumbnails/img_ScarsToBeautiful.jpg",
        audioSrc:"./audio/Alessia Cara - Scars To Your Beautiful (Lyrics).mp3",
        title:"Alessia Cara - Scars To Your Beautiful"
    },

    {
        id:7,
        imageSrc:"./thumbnails/img_WorkFromHome.jpg",
        audioSrc:"./audio/Fifth Harmony - Work from Home (Official Video) ft. Ty Dolla $ign.mp3",
        title:"Fifth Harmony - Work from Home"
    },

    {
        id:8,
        imageSrc:"./thumbnails/img_LoveMeLikeYouDo.jpg",
        audioSrc:"./audio/Ellie Goulding - Love Me Like You Do (Official Video).mp3",
        title:"Ellie Goulding - Love Me Like You Do"
    },

    {
        id:9,
        imageSrc:"./thumbnails/img_Friends.jpg",
        audioSrc:"./audio/Marshmello & Anne-Marie - FRIENDS (Music Video) _OFFICIAL FRIENDZONE ANTHEM.mp3",
        title:"Marshmello & Anne-Marie - FRIENDS"
    },

    {
        id:10,
        imageSrc:"./thumbnails/img_StealMyGirL.jpg",
        audioSrc:"./audio/Steal My Girl - One Direction (Lyrics).mp3",
        title:"Steal My Girl - One Direction"
    },

    {
        id:11,
        imageSrc:"./thumbnails/img_Surrender.jpg",
        audioSrc:"./audio/Natalie Taylor - Surrender (Lyrics).mp3",
        title:"Natalie Taylor - Surrender"
    },

    {
        id:12,
        imageSrc:"./thumbnails/img_SeeYouAgain.jpg",
        audioSrc:"./audio/Wiz Khalifa, Charlie Puth - See You Again (Lyrics).mp3",
        title:"Wiz Khalifa - See You Again"
    },

]


function playAudio(songid) 
{
    var song=songs.find(function(song,index){
        return song.id===songid
    });
    
    document.getElementById("thumbnail").src=song.imageSrc;
    document.getElementById("audio_player").src=song.audioSrc;
    document.getElementById("audio_player_title").innerText=song.title;
    document.getElementById("audio_player").play();
}










