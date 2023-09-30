import { useState, useEffect, } from 'react';


import { SubHeading, MenuItem, } from '../components'




import {  data, images  } from '../constants';


import './FullMenu.css';
import Gallery1 from '../components/Gallery1/Gallery1';



const FullMenu = () => {

 

    const [drink, setDrink] = useState("selectDrink");

    const [defaultDrinkVisible, setDefaultDrinkVisible] = useState(false);
    const [coffeVisible, setCoffeVisible] = useState(false);

    const [mutilice_cedjeniVisible, setMutilice_cedjeniVisible] = useState(false);
    const [mineralneSokoviVisible, setMineralneSokoviVisible] = useState(false);
    const [smoothieZdravaPricaVisible, setSmoothieZdravaPricaVisible] = useState(false);
    const [dorucakPaketivisible, setDorucakPaketiVisible ] = useState(false)
    const [razonodaBerlinManifacture, setRazonodaBerlinManifacture ] = useState(false);

    const [vinaCider, setVinaCider] = useState(false);

    const [zestokaVisible, setZestokaVisible] = useState(false);
    const [pivaKokteliVisible, setPivaKokteliVisible] = useState(false);

 


    useEffect(() => {
        drink === "selectDrink" ? setDefaultDrinkVisible(true) : setDefaultDrinkVisible(false);
        drink === "coffe" ? setCoffeVisible(true) : setCoffeVisible(false);
        drink === "mutilice_cedjeni" ? setMutilice_cedjeniVisible(true) : setMutilice_cedjeniVisible(false);
        drink === "mineralne_sokovi" ? setMineralneSokoviVisible(true) : setMineralneSokoviVisible(false);
        drink === "zdrava_prica_smoothie" ? setSmoothieZdravaPricaVisible(true) : setSmoothieZdravaPricaVisible(false);

        drink === "dorucak_paketi" ? setDorucakPaketiVisible(true) : setDorucakPaketiVisible(false);

        drink === "razonoda_berlin" ? setRazonodaBerlinManifacture(true) : setRazonodaBerlinManifacture(false);

        drink === "vina_cider" ? setVinaCider(true) : setVinaCider(false);

        drink === "zestina" ? setZestokaVisible(true) : setZestokaVisible(false);

        drink === "piva_kokteli" ? setPivaKokteliVisible(true) : setPivaKokteliVisible(false);



    }, [drink]);

    const handleOnChange = (e) => {
        setDrink(e.target.value)
    }

    const makeFirstLetterCaptial = (str) => {
        return str.charAt(0).toUpperCase() + str.slice(1);
    };

    const renderResult = () => {
        let result;
        drink === "selectDrink"
            ? (result = "izaberite kategoriju iz menija")
            : (result = makeFirstLetterCaptial(drink));
        return result;
    };



    return (

        <>


            <div className="app__specialMenu flex__center section__padding" id="menu">
           

                <div className="app__specialMenu-title">
                    {/* <SubHeading title="Iz padajuće liste izaberite kategoriju pića" /> */}

                    

                    <div  className="custom-select">
                        <select className="form-select" value={drink} onChange={handleOnChange} >
                            <option value="selectDrink">Izaberite iz menija</option>

                            <option style={{ backgroundColor: 'black', color: 'white',  }} value="coffe">Kafe / topli napici </option>
                            <option style={{ backgroundColor: 'black', color: 'white', wordBreak: 'keep-all' }} value="mutilice_cedjeni">Slatke mutilice i cedjeni sokovi</option>
                            <option style={{ backgroundColor: 'black', color: 'white' }} value="mineralne_sokovi">Mineralne vode i sokovi</option>
                            <option style={{ backgroundColor: 'black', color: 'white' }} value="zdrava_prica_smoothie">Zdrava priča, smoothie</option>
                            <option style={{ backgroundColor: 'black', color: 'white' }} value="dorucak_paketi">Dorucak / paketi</option>
                            <option style={{ backgroundColor: 'black', color: 'white' }} value="razonoda_berlin">Razonoda / Berlin Manifacture</option>
                            <option style={{ backgroundColor: 'black', color: 'white' }} value="vina_cider">Vina / Cider</option>
                            <option style={{ backgroundColor: 'black', color: 'white' }} value="zestina">Žestoka pića</option>

                            <option style={{ backgroundColor: 'black', color: 'white' }} value="piva_kokteli">Piva / kokteli</option>

                        </select>
                    </div>

                    {/* <div className="mobile_contianer_logo">

                    <img className="rotating-logo mobile" src={images.logo1} alt="logo" />

                    </div>    */}

                
                </div>

                

                <div className="app__specialMenu-menu">

                    <div className="app__specialMenu-menu_wine flex__center">



                        <div className="app__specialMenu_menu_items">

                            {coffeVisible && <p style={{ fontSize: '32px' }} className="app__specialMenu-menu_heading custom_p">Kafa / coffe</p>}
                            {coffeVisible && data.coffe.map((coffe, index) => (
                                <MenuItem key={coffe.title + index} title={coffe.title} price={coffe.price} tags={coffe.tags} />
                            ))}

                            {defaultDrinkVisible && <p style={{ fontSize: '32px' }} className="app__specialMenu-menu_heading custom_p">Kafa / coffe </p>}
                            {defaultDrinkVisible && data.coffe.map((coffe, index) => (
                                <MenuItem key={coffe.title + index} title={coffe.title} price={coffe.price} tags={coffe.tags} />
                            ))}

                            {mutilice_cedjeniVisible && <p style={{ fontSize: '32px' }} className="app__specialMenu-menu_heading custom_p">Slatke mutilice</p>}
                            {mutilice_cedjeniVisible && data.slatke_mutilice?.map((slatke_mutilice, index) => (
                                <MenuItem key={slatke_mutilice.title + index} title={slatke_mutilice.title} price={slatke_mutilice.price} tags={slatke_mutilice.tags} />
                            ))} 

                            {mineralneSokoviVisible && <p style={{ fontSize: '32px' }} className="app__specialMenu-menu_heading custom_p">Mineralne Vode</p>}
                            {mineralneSokoviVisible && data.mineralne_vode?.map((mineralne_vode, index) => (
                                <MenuItem key={mineralne_vode.title + index} title={mineralne_vode.title} price={mineralne_vode.price} tags={mineralne_vode.tags} />
                            ))} 


                            {smoothieZdravaPricaVisible && <p style={{ fontSize: '32px' }} className="app__specialMenu-menu_heading custom_p">Smoothie</p>}
                            {smoothieZdravaPricaVisible && data.smoothie?.map((smoothie, index) => (
                                <MenuItem key={smoothie.title + index} title={smoothie.title} price={smoothie.price} tags={smoothie.tags} />
                            ))} 

                            {dorucakPaketivisible && <p style={{ fontSize: '32px' }} className="app__specialMenu-menu_heading custom_p">Doručak</p>}
                            {dorucakPaketivisible && data.dorucak?.map((dorucak, index) => (
                                <MenuItem key={dorucak.title + index} title={dorucak.title} price={dorucak.price} tags={dorucak.tags} />
                            ))} 

                            {razonodaBerlinManifacture && <p style={{ fontSize: '32px' }} className="app__specialMenu-menu_heading custom_p">Razonoda</p>}
                            {razonodaBerlinManifacture && data.razonoda?.map((razonoda, index) => (
                                <MenuItem key={razonoda.title + index} title={razonoda.title} price={razonoda.price} tags={razonoda.tags} />
                            ))} 

                            {vinaCider && <p style={{ fontSize: '32px' }} className="app__specialMenu-menu_heading custom_p">Vino Rose / Belo</p>}
                            {vinaCider && data.vina?.map((vina, index) => (
                                <MenuItem key={vina.title + index} title={vina.title} price={vina.price} tags={vina.tags} />
                            ))} 

                            {zestokaVisible && <p style={{ fontSize: '32px' }} className="app__specialMenu-menu_heading custom_p">Žestoka pića</p>}
                            {zestokaVisible && data.zestina?.map((zestina, index) => (
                                <MenuItem key={zestina.title + index} title={zestina.title} price={zestina.price} tags={zestina.tags} />
                            ))} 


                            {pivaKokteliVisible && <p style={{ fontSize: '32px' }} className="app__specialMenu-menu_heading custom_p">Pivo</p>}
                            {pivaKokteliVisible && data.piva?.map((piva, index) => (
                                <MenuItem key={piva.title + index} title={piva.title} price={piva.price} tags={piva.tags} />
                            ))} 

                        </div>


                    </div>


                   <div className="app__specialMenu-menu_img">

                        {/* <img className="rotating-logo" src={images.logo1} alt="logo" /> */}

                </div>


                 <div className="app__specialMenu-menu_cocktails flex__center">
             <div className="app__specialMenu_menu_items">


                            {coffeVisible && <p style={{ fontSize: '32px' }} className="app__specialMenu-menu_heading custom_p">Topli napici</p>}
                            {coffeVisible && data.topli_napici.map((topli_napici, index) => (
                                <MenuItem key={topli_napici.title + index} title={topli_napici.title} price={topli_napici.price} tags={topli_napici.tags} />
                            ))} 

                          
                        {defaultDrinkVisible && <p style={{ fontSize: '32px' }} className="app__specialMenu-menu_heading custom_p">Topli napici</p>}
                            {defaultDrinkVisible && data.topli_napici.map((topli_napici, index) => (
                                <MenuItem key={topli_napici.title + index} title={topli_napici.title} price={topli_napici.price} tags={topli_napici.tags} />
                            ))}



                            {mutilice_cedjeniVisible && <p style={{ fontSize: '32px' }} className="app__specialMenu-menu_heading custom_p">Cedjeni sokovi</p>}
                            {mutilice_cedjeniVisible && data.cedjeni_sokovi?.map((cedjeni_sokovi, index) => (
                                <MenuItem key={cedjeni_sokovi.title + index} title={cedjeni_sokovi.title} price={cedjeni_sokovi.price} tags={cedjeni_sokovi.tags} />
                            ))} 

                            {mineralneSokoviVisible && <p style={{ fontSize: '32px' }} className="app__specialMenu-menu_heading custom_p">Sokovi</p>}
                            {mineralneSokoviVisible && data.sokovi?.map((sokovi, index) => (
                                <MenuItem key={sokovi.title + index} title={sokovi.title} price={sokovi.price} tags={sokovi.tags} />
                            ))} 


                            {smoothieZdravaPricaVisible && <p style={{ fontSize: '32px' }} className="app__specialMenu-menu_heading custom_p">Zdrava priča slatko</p>}
                            {smoothieZdravaPricaVisible && data.zdrava_prica_slatko?.map((zdrava_prica_slatko, index) => (
                                <MenuItem key={zdrava_prica_slatko.title + index} title={zdrava_prica_slatko.title} price={zdrava_prica_slatko.price} tags={zdrava_prica_slatko.tags} />
                            ))} 


                            {dorucakPaketivisible && <p style={{ fontSize: '32px' }} className="app__specialMenu-menu_heading custom_p">Paketi</p>}
                            {dorucakPaketivisible && data.paketi?.map((paketi, index) => (
                                <MenuItem key={paketi.title + index} title={paketi.title} price={paketi.price} tags={paketi.tags} />
                            ))} 
                    

                    {razonodaBerlinManifacture && <p style={{ fontSize: '32px' }} className="app__specialMenu-menu_heading custom_p">Berlin Manifacture</p>}
                            {razonodaBerlinManifacture && data.berlin_manifacture?.map((berlin_manifacture, index) => (
                                <MenuItem key={berlin_manifacture.title + index} title={berlin_manifacture.title} price={berlin_manifacture.price} tags={berlin_manifacture.tags} />
                            ))} 


                    {vinaCider && <p style={{ fontSize: '32px' }} className="app__specialMenu-menu_heading custom_p">Crno vino</p>}
                            {vinaCider && data.vina_crvena?.map((vina_crvena, index) => (
                                <MenuItem key={vina_crvena.title + index} title={vina_crvena.title} price={vina_crvena.price} tags={vina_crvena.tags} />
                            ))}

                    {vinaCider && <p style={{ fontSize: '32px' }} className="app__specialMenu-menu_heading custom_p">Cider</p>}
                            {vinaCider && data.cider?.map((cider, index) => (
                                <MenuItem key={cider.title + index} title={cider.title} price={cider.price} tags={cider.tags} />
                            ))}



                            {zestokaVisible && <p style={{ fontSize: '32px' }} className="app__specialMenu-menu_heading custom_p">Rakije sa Cera</p>}
                            {zestokaVisible && data.rakije_sa_cera?.map((rakije_sa_cera, index) => (
                                <MenuItem key={rakije_sa_cera.title + index} title={rakije_sa_cera.title} price={rakije_sa_cera.price} tags={rakije_sa_cera.tags} />
                            ))}             


                            {zestokaVisible && <p style={{ fontSize: '32px' }} className="app__specialMenu-menu_heading custom_p">Aperitivi</p>}
                            {zestokaVisible && data.aperitivi?.map((aperitivi, index) => (
                                <MenuItem key={aperitivi.title + index} title={aperitivi.title} price={aperitivi.price} tags={aperitivi.tags} />
                            ))}  


{pivaKokteliVisible && <p style={{ fontSize: '32px' }} className="app__specialMenu-menu_heading custom_p">Kokteli</p>}
                            {pivaKokteliVisible && data.kokteli?.map((kokteli, index) => (
                                <MenuItem key={kokteli.title + index} title={kokteli.title} price={kokteli.price} tags={kokteli.tags} />
                            ))} 

                        </div>








                        {/* <p className="app__specialMenu-menu_heading">Rakije Sokolova</p>
                    <div className="app__specialMenu_menu_items">
                        {data.rakije_sokolova.map((cocktail, index) => (
                            <MenuItem key={cocktail.title + index} title={cocktail.title} price={cocktail.price} tags={cocktail.tags} />
                        ))}
                    </div>

                    <p className="app__specialMenu-menu_heading">Rakije Zlatna Dolina</p>
                    <div className="app__specialMenu_menu_items">
                        {data.rakije_zlatna_dolina.map((cocktail, index) => (
                            <MenuItem key={cocktail.title + index} title={cocktail.title} price={cocktail.price} tags={cocktail.tags} />
                        ))}
                    </div> */}

                    </div>





                </div>

                <div >




                </div>

            </div>
<Gallery1/>
            
        </>


    );
};
export default FullMenu;