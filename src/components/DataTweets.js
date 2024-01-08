import PhProfileCnn from "../images/Profile-photoCNN.svg";
import NytProfile from "../images/Profile-Photo-NYTimes.svg";
import XProfile from "../images/Profile-Photo-X.svg";
import Certificat from "../images/Certificat.svg";
import Reply from "../images/ActionIcone/Reply.svg";
import Retweet from "../images/ActionIcone/Retweet.svg";
import ReactLike from "../images/ActionIcone/ReactLike.svg";
import Share from "../images/ActionIcone/Share.svg";
import ImageTweet1 from "../images/tweet-image.png";
import Mbokelengi from "../images/Mbok'Elengi.jpg";


export const dataTweets = [
    {
        userId: 1,
        photoProfile: PhProfileCnn,
        name:"CNN",
        iconeCertification: Certificat,
        mail:"@cnn",
        timeTweet: "7m",
        textTweet:"President Joe Biden touted a new agreement reached with the European Union to ease Trump-era tariffs on aluminum and steel as a major breakthrough that would serve to both strengthen the US steel industry and combat the global climate crisis.",
        imgTweet: null,
        
            
                iconeComment: Reply,
                NumberComment: 57 ,
            
            
                iconeTweet: Retweet,
                NumberTweet: 144,
            
            
                iconeLike: ReactLike,
                NumberLike: 184,
            
            
                iconeShare: Share,
                
            
        
    },
    {
        userId: 2,
        photoProfile: NytProfile,
        name:"The New York Times",
        iconeCertification: Certificat,
        mail:"@nytimes",
        timeTweet: "2h",
        textTweet:"Gardening boomed during the pandemic. Six Black writers share how it has helped them re-establish, and reimagine, a connection to cultivation and the land",
        imgTweet: ImageTweet1,
        
        iconeComment: Reply,
        NumberComment: 19 ,
    
    
        iconeTweet: Retweet,
        NumberTweet: 48,
    
    
        iconeLike: ReactLike,
        NumberLike: 482,
    
    
        iconeShare: Share,  
    },
    {
        userId: 3,
        photoProfile: XProfile,
        name:"Tweeter",
        iconeCertification: Certificat,
        mail:"@Tweeter",
        timeTweet: "Oct 29",
        textTweet:"BIG NEWS lol jk still Twitter",
        imgTweet: null,
        
        iconeComment: Reply,
        NumberComment: "6.8K" ,
    
    
        iconeTweet: Retweet,
        NumberTweet: "36.6K",
    
    
        iconeLike: ReactLike,
        NumberLike: 87,
    
    
        iconeShare: Share,    },
    {
        userId: 3,
        photoProfile: XProfile,
        name:"Tweeter",
        iconeCertification: Certificat,
        mail:"@Tweeter",
        timeTweet: "Oct 4",
        textTweet:"hello literally everyone",
        imgTweet: null,
        
        iconeComment: Reply,
        NumberComment: "118.7K" ,
    
    
        iconeTweet: Retweet,
        NumberTweet: "785.4K",
    
    
        iconeLike: ReactLike,
        NumberLike: 300,
    
    
        iconeShare: Share, 
    },
    {
        userId: 3,
        photoProfile: XProfile,
        name:"Tweeter",
        iconeCertification: Certificat,
        mail:"@Tweeter",
        timeTweet: "Oct 4",
        textTweet:"Kinshasa, Mbok'Elengi",
        imgTweet: Mbokelengi,
        
        iconeComment: Reply,
        NumberComment: "3M" ,
    
    
        iconeTweet: Retweet,
        NumberTweet: "4.4M",
    
    
        iconeLike: ReactLike,
        NumberLike: 578,
    
    
        iconeShare: Share,
    }
];
