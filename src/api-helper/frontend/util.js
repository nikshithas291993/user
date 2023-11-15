import axios from "axios"

export const signUpApi = async(data) =>{
    const header = {
        "Content-Type": "application/json",
        //token: token,
        //"Access-Control-Allow-Origin": "http://localhost:3000/" ,
        //'x-rapidapi-host': 'localhost:8000',// Host header to identify domain, most likely without header request will throw 400 error
      };
    const res = await axios.post("http://localhost:5000/adduser",{
        user_id: data.user_id,
        name: data.name,
        email: data.email,
        age: Number(data.age),
        address: data.address,
        phone: Number(data.phone),
        password: data.password,
        confirm_password: data.confirm_password
    });
       const resdata = await res.data;
       console.log("data" + resdata);
       return resdata;
}

export const signInApi = async(data) =>{
    const header = {
        "Content-Type": "application/json",
        };
    const res = await axios.post("http://localhost:5000/login",{
        email: data.email,
        password: data.password,
    });
       const resdata = await res.data;
       console.log("data" + resdata);
       return resdata;
}

export const sendProduct = async (data) =>{

    const header = {
        "Content-Type": "application/json",
        };
    const res = await axios({
        url: 'http://localhost:8000/graphql',
        method: 'post',
       // headers: header,
        data: {
         query: `mutation{
            createProduct( productId:"${data.productId}",productName:"${data.productName}", productDescription:"${data.productDescription}",
            productImage:"${data.productImage}", listPrice:${data.listPrice} ,slaesPrice:${data.slaesPrice},
            productStock:"${data.productStock}",productFeatures:"${data.productFeatures}",currency:"${data.currency}"
            ){
              success
              product{
                 productId,
              productName,
              productDescription,
              listPrice,
              slaesPrice
              }
            }
          }`
        }
       });
       const resdata = await res.data;
       console.log("data" + resdata);
       return resdata;
}

export const getAllProduct = async(data) =>{
    const header = {
        "Content-Type": "application/json",
        };
    const res = await axios({
        url: 'http://localhost:8000/graphql',
        method: 'post',
        headers: header,
        data: {
         query: `{
            products{
               productId,
               productName,
               productDescription,
               listPrice
               slaesPrice
               productImage
              }
           }`
        }
       });
       const resdata = await res.data;
       console.log("data" + resdata.data);
       return resdata;
}
export const getProductById = async (id) =>{
    const header = {
        "Content-Type": "application/json",
        };
    const res = await axios({
        url: 'http://localhost:8000/graphql',
        method: 'post',
        headers: header,
        data: {
         query: `{
            product(productId:"${id}"){
                productId,
                productName,
                productDescription,
                listPrice,
                slaesPrice,
                productImage
              }
            }`
        }
       });
       const resdata = await res.data;
       console.log("data" + resdata.data);
       return resdata;
}