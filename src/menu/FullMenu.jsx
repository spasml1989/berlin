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
 



    useEffect(() => {
        drink === "selectDrink" ? setDefaultDrinkVisible(true) : setDefaultDrinkVisible(false);
        drink === "coffe" ? setCoffeVisible(true) : setCoffeVisible(false);
        drink === "mutilice_cedjeni" ? setMutilice_cedjeniVisible(true) : setMutilice_cedjeniVisible(false);
      
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

                    

                    <div className="custom-select">
                        <select className="form-select" value={drink} onChange={handleOnChange} >
                            <option value="selectDrink">Izaberite iz menija</option>

                            <option style={{ backgroundColor: 'black', color: 'white' }} value="coffe">Kafe / topli napici </option>
                            <option style={{ backgroundColor: 'black', color: 'white' }} value="mutilice_cedjeni">Slatke mutilice / cedjeni sokovi</option>
                            <option style={{ backgroundColor: 'black', color: 'white' }} value="Riblji specijaliteti čorbe i potaži">Riblji specijaliteti čorbe i potaži</option>
                            <option style={{ backgroundColor: 'black', color: 'white' }} value="Bezalkoholna pića">Bezalkoholna pića</option>
                            <option style={{ backgroundColor: 'black', color: 'white' }} value="Alkoholna pića">Alkoholna pića</option>
                            <option style={{ backgroundColor: 'black', color: 'white' }} value="Kuća vina">Kuća vina</option>
                            <option  style={{ backgroundColor: 'black', color: 'white' }} value="Dezerti">Dezerti</option>
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