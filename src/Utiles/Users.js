import PhProfileCnn from "../images/Profile-photoCNN.svg";
import Certificat from "../images/Certificat.svg";
import BannerCnn from "../images/cnn-com-logo-png-transparent.png";
import NytProfile from "../images/Profile-Photo-NYTimes.svg";
import BannerNyt from "../images/The_New_York_Times_logo.png";
import XProfile from "../images/Profile-Photo-X.svg";
import BannerX from "../images/pngimg.com - twitter_PNG11.png";

export const userProfil = [
    {
        userId: 1,
        avatar: PhProfileCnn,
        userName: "CNN",
        iconCertification : Certificat,
        banner:BannerCnn,
        lienProfil: "@CNN",
        description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Excepturi eos quo aspernatur enim reprehenderit, fugit velit magnam amet cum, molestias doloribus, quaerat adipisci ipsa fuga sunt voluptatem dolorem dolores. Enim.",
        points : "...",
        linkWeb:"cnn.com",
        dateCreated : "A rejoint Twitter en février 2007",
        abonnemets : 1086,
        abonne : 62 + " M",
        suiviPar : "Suivi par Benito et PlayStation",
        posts : 420.5 + " k"
    },
    {
        userId: 2,
        avatar: NytProfile,
        userName: "The New York Times",
        iconCertification : Certificat,
        banner:BannerNyt,
        lienProfil: "@nytimes",
        description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
        points : "...",
        linkWeb:"nytimes.com",
        dateCreated : "A rejoint Twitter en février 2012",
        abonnemets : 2086,
        abonne : 72 + " M",
        suiviPar : "Suivi par Matthieu et Ligue des champions",
        posts : 252.5 + " k"
    },
    {
        userId: 3,
        avatar: XProfile,
        userName: "Twitter",
        iconCertification : Certificat,
        banner:BannerX,
        lienProfil: "@Twitter",
        description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
        points : "...",
        linkWeb:"twitter.com",
        dateCreated : "A rejoint Twitter en février 2005",
        abonnemets : 9850,
        abonne : 995 + " M",
        suiviPar : "Suivi par Sacre et Sylvin",
        posts : 850.6 + " k"
    }
]