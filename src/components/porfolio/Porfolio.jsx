import { useEffect, useState } from "react";
import PortfolioList from "../portfolioList/PortfolioList"
import "./portfolio.scss"
import {
    studentProjectsPortfolio,
    personalProjectsPortfolio,
    professionalProjects,
} from "../../data";
import Modal from "../modal/Modal";

export default function Porfolio() {

    const [selected,setSelected] = useState("studentProjects");
    const [data,setData] = useState([]);
    const [openModal, setOpenModal] = useState(false);
    const [modalData] = useState([]);

    const list = [
        {
            id: "studentProjects",
            title: "Student Projects",
        },
        {
            id: "personalProjects",
            title: "Personal Projects",
        },
        // -- uncomment if professional projects added.
        // {
        //     id: "professionalProjects",
        //     title: "Professional Projects",
        // }
    ];

    useEffect(()=>{

        switch(selected){
            case "studentProjects":
                setData(studentProjectsPortfolio)
                break;
            case "personalProjects":
                setData(personalProjectsPortfolio)
                break;
            case "professionalProjects":
                setData(professionalProjects)
                break;
            default:
                setData(studentProjectsPortfolio)
        }
    },[selected])

    return (
        <div className="portfolio" id="portfolio">
            <h1>Portfolio</h1>
            {openModal && <Modal closeModal={setOpenModal} modalData={modalData}/>}
            <ul>
                {list.map(item=>(
                    <PortfolioList 
                        title={item.title} 
                        active={selected === item.id} 
                        setSelected={setSelected}
                        id={item.id}
                    />
                ))}
            </ul>
            <div className="container">
                {data.map((d) => (
                    <div className="item" 
                        onClick={()=> {
                            setOpenModal(true);
                            modalData.title = d.title;
                            modalData.img = d.img;
                            modalData.link = d.link;
                            modalData.desc = d.desc
                        }}
                    >
                        <h3>{d.title}</h3>
                        <img 
                            src={d.img}
                            alt={d.title}
                        />
                    </div>
                ))}
            </div>
        </div>
    )
}
