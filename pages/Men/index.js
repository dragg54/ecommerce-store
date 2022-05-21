import Image from "next/image";

function menPage({ products }){
  return(
    <>
    {
      products.map(product=>{
        if(product.category==="men's clothing"){
          return(
            
            <Image src={product.image} width={300} height={400} alt="image" />
          )
        }
      }
      )
    }
    </>
)}

export default menPage

export async function getStaticProps(){
  const response = await fetch('https://fakestoreapi.com/products');
  const data = await response.json()

  return{
    props:{
      products:data
    }
  }
}