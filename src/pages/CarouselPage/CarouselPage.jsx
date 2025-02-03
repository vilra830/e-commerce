
import { Carousel } from "react-responsive-carousel";
import { useContext } from "react";
import { ProductsContext } from "../../context/ProductsContextProvider";
import 'react-responsive-carousel/lib/styles/carousel.min.css'; 
import Loading from "../../components/Loading/Loading.jsx";
import classes from "./CarouselPage.module.scss";


const CarouselPage = () => {
    const {fetchStatus, error, products } = useContext(ProductsContext);

    console.log("Fetch Status:", fetchStatus);
    console.log("Products Data:", products);


return (
    <div>
               <h1> Our Favourites</h1>
               {fetchStatus === "LOADING" && <Loading />}
               {fetchStatus === "FAILURE" && <p>{error.message}</p>}

               {fetchStatus === "SUCCESS" && (

<Carousel autoPlay infiniteLoop showThumbs={false} className={classes.carousel}>

    {/* <Carousel transitionTime={200} emulateTouch useKeyboardArrows> */}
              {products.filter((product) => product.isFavourite).map((product) => ( 
<div key={product.id} className={classes.slide}><img src={product.imageUrl} alt={product.name} className={classes.img}/> <p>{product.name}</p></div>  ))}
            

    </Carousel>
      )}

    </div>

); 

};

export default CarouselPage;


