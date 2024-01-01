import './Top.css';
import IMG from './pngtree-trendy-cartoon-3d-isometric-view-home-living-room-decoration-decoration-png-image_9015352.png'

function Toppage(){
 return(
    
    <>
        <div className='medpart'>
            <div className='left-med'>
                <h1 className='text-head'>SKETCH LUXURY INTERIOR DESIGN</h1>
                <h3 className='text-bio'>Bauhaus text-biotext-biotext-biotext-biotext-biotext-biotext-biotext-biotext-biotext-biotext-biotext-biotext-biotext-biotext-biotext-biotext-bio. 93Bauhaus 93Bauhaus 93Bauhaus 93Bauhaus 93Bauhaus 93Bauhaus 93Bauhaus 93Bauhaus 93Bauhaus 93</h3>
                <div className='bution-manpart'>
                    <button id='GETSTART'>GET START</button>
                    <button id='contactus'>CONTACT US</button>
                </div>
            </div>
            <div className='right-med'>
             
                <img src={IMG} className='med-img' />

            </div>
        </div>
    </>
 );
}

export default Toppage;