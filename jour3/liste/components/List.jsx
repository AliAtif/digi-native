import React, {useState} from "react";
import {useEffect} from "react";
import {View, FlatList,  Text, Image, Platform } from "react-native";
import { SvgUri } from 'react-native-svg';


const List = () => {
  const [countries, setCountries] = useState([]);
  
  useEffect(() => {
    fetch("http://restcountries.eu/rest/v2/all")
      .then((response) => response.json())
     
       .then((response) => {
        console.log(response)
        setCountries(response)
       })
  }, [])

 
    return (
      
        <FlatList
          data={countries}
          renderItem={({item}) =>
          <>
            
            <Text style={{fontWeight:"bold", color:"red" }}>Country : </Text> {item.name} 
            <Text style={{fontWeight:"bold", color:"red" }}> Capital : </Text> {item.capital}

            {Platform.OS === "web" ? (
              <Image
                style={{ width: 200, height: 200, resizeMode: "center" }}
                source={{ uri: item.flag }}
              ></Image>
            ) : (
              <SvgUri width={200} height={100} uri={item.flag} />
            )}
           
               {/* <SvgUri style={{width:150, height:100}} uri={`${item.flag}`}/> */}
         
          </>
          
          }
        />
     
    );
}

  export default List;