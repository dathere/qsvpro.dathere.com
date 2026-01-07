import React from 'react'
import flowDemo from "../assets/images/v1/flow-demo.gif";
import apiDemo from "../assets/images/v1/api-demo.gif";
import configuratorDemo from "../assets/images/v1/configurator-demo.gif";
import workflowDemo from "../assets/images/v1/drag-and-drop.gif";
import commandDemo from "../assets/images/v1/qsv-pro-command-demo.gif";
import toolboxDemo from "../assets/images/v1/toolbox-demo.gif";
import EmblaCarousel from './EmblaCarousel';
import Autoplay from 'embla-carousel-autoplay'

const FeatureCarousel = () => {

    const SLIDES = [
        {
            title: "Workflow - Explore your spreadsheet data with interactive data tables",
            description:
                "Drag and drop your spreadsheet data into the qsv pro Workflow. Once imported successfully, you may browse statistics, frequency, and metadata about your file. Run Polars SQL queries and recipes, view your file with csvlens on Windows, search your file (optionally by regex), export to multiple file formats, download/upload from/to compatible CKAN instances, and more.",
            image: workflowDemo,
        },
        {
            title: "Flow - Build custom node-based flows and data pipelines",
            description:
                "Engineer data pipelines using an interactive node-based UI. Access multiple qsv commands and pipe them together along with custom nodes to architect data pipelines. Share or import your pipelines with other paid qsv pro users.",
            image: flowDemo,
        },
        {
            title: "Toolbox - Run scripts on your data based on use cases",
            description:
                'Run tools in qsv pro\'s Toolbox including scripts such as Copy CSV to clipboard, Sort CSV rows, Get CSV row count, and more.',
            image: toolboxDemo,
        },
        {
            title: "API - Interact with qsv pro using external services",
            description:
                "Interact with the local qsv pro API server from other apps and services such as importing a file path into the qsv pro Workflow or on Windows launching an Alacritty terminal running csvlens on a provided file path. Explore the API's capabilities through locally served API documentation or through the qsv pro command available on the qsv command-line tool. qsv pro closes to the system tray so that you may continue to use the API with the window closed (some endpoints may have conditions to work properly such as having the Workflow open for the Workflow endpoint).",
            image: apiDemo,
        },
        {
            title: "qsv pro command - Interact with qsv pro using the qsv command-line tool",
            description:
                "Use the qsv pro command available from the qsv command-line tool to import local files by their file path into the qsv pro Workflow or on Windows launch an Alacritty terminal running csvlens on the file.",
            image: commandDemo,
        },
        // {
        //     title: "Configurator (Experimental) - Run qsv commands in an interactive GUI",
        //     description:
        //         "Run qsv commands in a graphical user interface and explore its stdout and stderr as raw output. The command's elapsed time is also provided. Note: Not all commands are supported and this feature may be broken/outdated.",
        //     image: configuratorDemo,
        // },
    ];

    const OPTIONS = {}
    const PLUGINS = [Autoplay({ delay: 30000 })]

    return (
        <EmblaCarousel slides={SLIDES} options={OPTIONS} plugins={PLUGINS} />
        // <div className="embla" ref={emblaRef}>
        //   <div className="embla__container">
        //       <div className="embla__slide"><img src={flowDemo.src}  /></div>
        //       <div className="embla__slide"><img src={workflowDemo.src}  /></div>
        //       <div className="embla__slide"><img src={toolboxDemo.src}  /></div>
        //       <div className="embla__slide"><img src={commandDemo.src}  /></div>
        //       <div className="embla__slide"><img src={apiDemo.src}  /></div>
        //       <div className="embla__slide"><img src={configuratorDemo.src}  /></div>
        //   </div>
        // </div>
    )
}

export default FeatureCarousel;
