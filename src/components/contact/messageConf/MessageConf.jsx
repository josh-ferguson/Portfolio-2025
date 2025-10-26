import "./messageConf.scss"

function MessageConf({closeConf}) {
    return (
        <div className="confBackground">
            <div className="confContainer">
                <div className="topCloseBtn">
                    <button onClick={()=> closeConf(false)}> X </button>
                </div>
                <div className="confTitle">
                    <h1>Message Sent</h1>
                </div>
                <div className="confBody">
                    <p>Thank you for your message, I will respond as soon as I can!</p>
                </div>
                <div className="confFooter">
                    <button id="confCloseBtn" onClick={()=> closeConf(false)}>Continue</button>
                </div>
            </div>
        </div>
    )
}

export default MessageConf
