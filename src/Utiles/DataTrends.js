import reglageicone from '../images/IconesTrends/PointsReglage.svg'

export const dataTrends = [
    
  {
        id : 0,
        title :'Trending in Tutkey',
        name :'#SQUID',
        numberOfTwit:'2,066 Tweets',
        points: reglageicone
    },
    {
      id : 1,
        title:'Trending in Tutkey',
        name:'#SQUID',
        numberOfTwit:'2,066 Tweets',
        points: reglageicone
    },
    {
      id : 2,  
      title:'Trending in Tutkey',
        name:'#SQUID',
        numberOfTwit:'2,066 Tweets',
        points: reglageicone
    },
    {
      id : 3,  
      title:'Trending in Tutkey',
        name:'#SQUID',
        numberOfTwit:'2,066 Tweets',
        points: reglageicone
    }
];

export function formatTweetDate(date) {
    const tweetDate = new Date(date);
    const currentDate = new Date();
    const timeDifference = (currentDate - tweetDate) / (1000 * 60);
    if (timeDifference < 60) {
      return `${Math.round(timeDifference)} min`;
    } else if (timeDifference < 24 * 60) {
      return `${Math.round(timeDifference / 60)} h`;
    } else {
      const options = { year: 'numeric', month: 'short', day: 'numeric' };
      return tweetDate.toLocaleDateString('en-US', options);
    }
  }