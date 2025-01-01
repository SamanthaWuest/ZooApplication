/*import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Document, Page } from "react-pdf";
import { Worker, Viewer } from "@react-pdf-viewer/core";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import "react-pdf/dist/esm/Page/TextLayer.css";
import { PdfJs } from "@react-pdf-viewer/core";


PdfJs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${PdfJs.version}/pdf.worker.min.js`;


const Lageplan = () => {

    const [numPages, setNumPages] = useState(null);

    const onDocumentLoadSuccess = ({ numPages }) => {
        setNumPages(numPages);
    };

    return (
        <>
        <h1>Lageplan</h1>
    <main>

        <Document file="/Zooplan_A4_web_241212.pdf"
        onLoadSuccess={onDocumentLoadSuccess}>

        {numPages && 
            Array.from(new Array(numPages), (el, index) => (
                <Page key={`page_${index + 1}`} pageNumber={index + 1} />
            ))}

            </Document>

        <Link to="/Tickets">
        <button className="button">Tickets</button>
        </Link>
        <Link to="/Audioguides">
        <button className="button">Audioguides</button>
        </Link>
        <Link to="/">
        <button className="button">Home</button>
        </Link>
        <Link to="/Suchfeld">
        <button className="button">Suchfeld</button>
        </Link>
    </main>

    </>
    )
};

export default Lageplan;
*/