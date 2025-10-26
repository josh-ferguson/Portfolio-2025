import "./modal.scss"

function Modal({closeModal, modalData}) {
    return (
        <div className="modalBackground">
            <div className="modalContainer">
                <div className="left">
                    <img src={modalData.img} alt="project" />
                </div>
                <div className="right">
                    <div className="titleCloseBtn">
                        <button className="titleCloseBtn" onClick={()=> closeModal(false)}> X </button>
                    </div>
                    <div className="title">
                        <h1>{modalData.title}</h1>
                    </div>
                    <div className="body">
                        <p>{modalData.desc}</p>
                    </div>
                    <div className="footer">
                        <button
                        onClick={()=> window.open(modalData.link, "_blank")}
                        id="toCodeBtn"
                        >
                        View Code
                        </button>                        
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Modal
