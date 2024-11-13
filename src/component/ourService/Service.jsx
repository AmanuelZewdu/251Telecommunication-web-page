import Creative from "../aboutpages/creative/Creative"
import Digital from "../aboutpages/digital/Digital";
import Expermental from "../aboutpages/expermental/Expermental";
import Pr from "../aboutpages/Pr/Pr";
import Production from "../aboutpages/production/Production";
import Research from "../aboutpages/research/Research";

import Experential from "../aboutpages/experential/Experential"
import Vas from "../aboutpages/Vas/Vas"
import Footer from "../footer/Footer";
    


// const Services = ()=>{
//     return(<>
   
// <Experential/>

//     <Creative/>
//     <Digital/>
//     <Pr/>
//     <Production/>
//     <Research/>
//     </>


//     );
// }
// export default Services;

    const Services = () => {
        return (
        <>
            <section id="experential">
            <Experential />
            </section>
    
            <section id="creative">
            <Creative />
            </section>
    
            <section id="digital">
            <Digital />
            </section>
    
            <section id="pr">
            <Pr />
            </section>
    
            <section id="production">
            <Production />
            </section>
    
            <section id="research">
            <Research />
            </section>
            <section id="vas">
            <Vas />
            </section>
            <Footer/>
        </>
        );
    };
    
    export default Services;
    
  