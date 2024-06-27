# kj-Product-Card

Este es un paquete de despligue en NPM

### Kevin Guzman

## Ejemplo

```
import { ProductCard, ProductImage, ProductTitle, ProductButtons,} from "kj-Product-Card";
```


```
<ProductCard
          product={product}
          initialValues={{
            count: 4,
            maxCount: 15
          }}
 >
          {
            ( { reset, isMaxCountReached, maxCount, increaseBy, count } ) => (
              <>
                <ProductImage />
                <ProductTitle  />
                <ProductButtons  />
              </>
            )
          }

</ProductCard>



```
