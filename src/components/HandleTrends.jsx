import reglage from '../images/IconesTrends/ReglageTrends.svg'


function HandleTrends ({trend} ) {
    return (
        <>
            <div className="trending-lists">
                <div className='trendsTitle'>
                    <h2>Trends for you</h2>
                    <img src={reglage} alt="" />
                </div>
                {trend.map((trends, key)=>(
                    <div className='trendhashtag' key={key}>
                        <div>
                        <p>{trends.title} </p>
                        <img src={trends.points} alt="" />
                        </div>
                        
                        <h2>{trends.name} </h2>
                        <p>{trends.numberOfTwit} </p>
                    </div>

                )
                ) }
                <h2 className='showmore'>Show more</h2>
            </div>
        </>
          
    );
}
export default HandleTrends;