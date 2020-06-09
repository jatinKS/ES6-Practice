function addressMaker(address){
    const {city,state} = address;
    const newAddress = {
        city,
        state,
        country:"India"
    };
    console.log(`${newAddress.city}, ${newAddress.state}, ${newAddress.country}`);
}

addressMaker({city:'Noda',state:'UP'});