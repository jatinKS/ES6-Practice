const appUrl = 'https://gstsuvidhakendra.org.in/api/get_gsk.php?pincode=201301';

async function getGsk(){
    const response = await fetch(appUrl);
    const json = await response.json();
    console.log(json[0]);
}



// function getGsk(){
//     fetch(appUrl)
//     .then((r)=>r.json())
//     .then((json)=>{
//         console.log(json[0].billing_company);
//     }).catch((error)=>{
//         console.log("Failed");
//     });
// };
getGsk();
