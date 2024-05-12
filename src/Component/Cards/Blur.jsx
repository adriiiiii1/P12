import './Blur.css'


function Blur (){

    return(
        <>
		<div id='services' className="blur-container">
            
      <div className="blur-cards" >      
        <div className="blur-card">
            <h1 className="blur-title">Modification de site</h1>
            <div className="blur-subtitle">
            <p>Changements sur site web déjà existant</p>
            </div>
        </div>
        <div className="blur-card">
            <h1 className="blur-title">Création de site</h1>
            <div className="blur-subtitle">
            <p>Création d{'\''}un site web dynamique et responsive de A a Z</p>
            <p>Site unique et prestation à l{'\''}écoute de votre projet</p>
            </div>
            </div>
        <div className="blur-card">
            <h1 className="blur-title">SEO</h1>
            <div className="blur-subtitle">
            <p>Optimisation du référencement</p>
            </div>
        </div>
      </div>
      <div className="blur-blob"></div>
    </div>
            </>
            );
        }
    export default Blur