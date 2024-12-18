import { useEffect } from "react";
import {OpenSheetMusicDisplay} from "opensheetmusicdisplay";



const OSMDRenderer = () => {
  console.log(`OSMD Version: ${OpenSheetMusicDisplay.Version}`);

  useEffect(() => {
    const renderSheetMusic = async () => {
      try {
        const osmdContainer = document.getElementById("osmd-container");
        const osmd = new OpenSheetMusicDisplay(osmdContainer, {
          // OSMD configuration options
          autoResize: true,
          backend: "svg",
          ignoreTempo: true,
        });

        // Load the MusicXML file
        //const response = await fetch("/src/assets/mugunghwa.xml");
        const response = await fetch("/src/assets/output.xml");

        if (!response.ok) {
          throw new Error("Failed to load MusicXML file");
        }
        const musicXML = await response.text();



        console.log(musicXML);

        await osmd.load(musicXML); // Load MusicXML into OSMD
        osmd.render(); // Render the sheet music
        console.log("MusicXML 파일 렌더링 성공");
      } catch (error) {
        console.error("Error rendering sheet music:", error);
      }
    };

    renderSheetMusic(); // Call the function to render the music
  }, []);

  return (<div
            id="osmd-container"
          ></div>
        );
};

export default OSMDRenderer;
