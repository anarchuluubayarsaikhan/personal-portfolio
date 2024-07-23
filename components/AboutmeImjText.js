import { Aboutmeimg } from "./Aboutmeimg";
import { AboutmeText } from "./AboutmeText";


export function AboutmeImgText() {
    return (
      <div className="flex flex-col gap-12  xl:flex-row xl:gap-20">
            <Aboutmeimg/>
            <AboutmeText/>
      </div>
    )
}