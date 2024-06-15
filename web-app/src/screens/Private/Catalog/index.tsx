import { useProducts } from "@/hooks"
import { Product } from "@helebba/entities";
import styles from "./Catalog.module.css";
import { Link } from "react-router-dom";
import { Image } from "react-feather";

const Catalog = () => {
    const { products } = useProducts();
  return (
    <div className={styles.container} >

        <div className={styles.box} >
            <h3>Productos con Catálogo</h3>

            <p>{products?.items?.filter((product: Product) => product.inCatalog).length}</p>
        </div>

        <div className={styles.box_cat} >
            <span>
                <Image color="var(--main-color)" size={60}  />
        </span>
            <h3>Catálogo Helebba</h3>
            <p>Previsualiza el aspecto de tu catálogo</p>
            <Link to="/" >Ver catálogo</Link>
        </div>

    </div>
  )
}

export default Catalog