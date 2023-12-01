

function HandleTweets ({tweets} ) {
    return (
        <>
            <div className="tweets">
                {tweets.map((element, id) => (
                    <div className="tweet" key={id}>
                        <aside className="tweet-avatar">
                            <img src={element.photoProfile} alt="" />
                        </aside>
                        <div className="tweet-content">
                            <div className="tweet-body">
                                <h2 className="tweet-title">
                                    <span className="tweet-title-author">{element.name} </span>
                                    <img className="tweet-title-author" src={element.iconeCertification} alt="" />
                                    <span className="tweet-title-details">{element.mail} </span>
                                    <span className="tweet-title-details">{ element.timeTweet} </span>
                                </h2>
                                <p className="tweet-text">{element.textTweet} </p>
                                    <div className="tweet-image">
                                        <img src={element.imgTweet} alt="" />
                                    </div>
                            </div>
                            <div className="tweet-actions">
                                    {element.actionIcon.map((like, index)=>(
                                        <div key={index} className="tweet-action">
                                            <img src={like.iconeReply} alt="" />
                                            <span>{like.replyNumber} </span>
                                        </div>
                                    ))}
                            </div>

                        </div>

                    </div>
                
                ))}
            </div>   
        </>
    )
}

export default HandleTweets;