import PhProfileCnn from "../images/Profile-photoCNN.png";
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
        photoProfile: PhProfileCnn,
        name:"CNN",
        iconeCertification: Certificat,
        mail:"@cnn",
        timeTweet: "7m",
        textTweet:"President Joe Biden touted a new agreement reached with the European Union to ease Trump-era tariffs on aluminum and steel as a major breakthrough that would serve to both strengthen the US steel industry and combat the global climate crisis.",
        imgTweet: null,
        actionIcon: 
        [
            {
                iconeReply: Reply,
                replyNumber: 57 ,
            },
            {
                iconeReply: Retweet,
                replyNumber: 144,
            },
            {
                iconeReply: ReactLike,
                replyNumber: 184,
            },
            {
                iconeReply: Share,
                
            }
        ]
    },
    {
        photoProfile: NytProfile,
        name:"The New York Times",
        iconeCertification: Certificat,
        mail:"@nytimes",
        timeTweet: "2h",
        textTweet:"Gardening boomed during the pandemic. Six Black writers share how it has helped them re-establish, and reimagine, a connection to cultivation and the land",
        imgTweet: ImageTweet1,
        actionIcon: 
            [
                {
                    iconeReply: Reply,
                    replyNumber: 19 ,
                },
                {
                    iconeReply: Retweet,
                    replyNumber: 48,
                },
                {
                    iconeReply: ReactLike,
                    replyNumber: 482,
                },
                {
                    iconeReply: Share,
                    
                }
            ]  
    },
    {
        photoProfile: XProfile,
        name:"Tweeter",
        iconeCertification: Certificat,
        mail:"@Tweeter",
        timeTweet: "Oct 29",
        textTweet:"BIG NEWS lol jk still Twitter",
        imgTweet: null,
        actionIcon: 
        [
            {
                iconeReply: Reply,
                replyNumber: "6.8K" ,
            },
            {
                iconeReply: Retweet,
                replyNumber: "36.6K",
            },
            {
                iconeReply: ReactLike,
                replyNumber: "267.1K",
            },
            {
                iconeReply: Share,
                
            }
        ]
    },
    {
        photoProfile: XProfile,
        name:"Tweeter",
        iconeCertification: Certificat,
        mail:"@Tweeter",
        timeTweet: "Oct 4",
        textTweet:"hello literally everyone",
        imgTweet: null,
        actionIcon: 
        [
            {
                iconeReply: Reply,
                replyNumber: "118.7K" ,
            },
            {
                iconeReply: Retweet,
                replyNumber: "785.4K",
            },
            {
                iconeReply: ReactLike,
                replyNumber: "3.3M",
            },
            {
                iconeReply: Share,
                
            }
        ] 
    },
    {
        photoProfile: XProfile,
        name:"Tweeter",
        iconeCertification: Certificat,
        mail:"@Tweeter",
        timeTweet: "Oct 4",
        textTweet:"Kinshasa, Mbok'Elengi",
        imgTweet: Mbokelengi,
        actionIcon: 
        [
            {
                iconeReply: Reply,
                replyNumber: "100.5K" ,
            },
            {
                iconeReply: Retweet,
                replyNumber: "144.8M",
            },
            {
                iconeReply: ReactLike,
                replyNumber: "555M",
            },
            {
                iconeReply: Share,
                
            }
        ]
    }
];