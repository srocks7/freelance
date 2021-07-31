import React, { useState, useEffect } from "react";
import MaterialTable from "material-table";
import './App.css';
import api from './services/api'


function App() {

  const [data, setData] = useState([]);
 

  async function getUserData() {

    const getData = await api.getUserData();
    console.log("user data", getData);
    setData(getData);
   
    let u=Object.values(getData);
  
    console.log('dsadsa',u)
  
}

useEffect(() => {
  getUserData();
}, []);


  return (
    <div className="App">
     <MaterialTable
            title="User Hobbies"
            columns={[
            
              { title: "Name", field: "userName" },
              { title: "Passion Level", field: "hobbies.passionLevel" },
              { title: "Hobby Name", field: "hobbies.hobbyName" },
              { title: "Year", field: "hobbies.year" },
            ]}
            
            data={data}
            editable={{
              onRowAdd: async(newData) =>
                new Promise(async(resolve, reject) => {
                  console.log('bb',newData);
                  let addh={
                    passionLevel:newData.hobbies.passionLevel,                   
                    hobbyName:newData.hobbies.hobbyName,                   
                    year:newData.hobbies.year,                   
                  }
                  const hobbyAdd = await api.addHobbyData(addh);
                  console.log('a',hobbyAdd);
                  let merged = {
                          userName:newData.userName,
                          hobbies:hobbyAdd._id
                    };
                  const userAdd = await api.addUserData(merged);
                  console.log('b',userAdd);
                  let dataToAdd = [...data];
                  dataToAdd.push(newData);
                  setData(dataToAdd);
                  resolve()
                }),
           
              onRowUpdate: async (newData, oldData) =>
                new Promise(async(resolve, reject) => {
                  // console.log(newData.hobbies._id);
                  let mh={
                    passionLevel:newData.hobbies.passionLevel,
                    hobbyName:newData.hobbies.hobbyName,
                    year:newData.hobbies.year,
                  }
                 
                  const hobbyUpdate =await api.updateHobbyData(newData.hobbies._id,mh);
                  const userUpdate =await api.updateUserData(newData._id,newData);
                     
                    const dataUpdate = [...data];
                    const index = oldData.tableData.id;
                    dataUpdate[index] = newData;
                    setData([...dataUpdate]);
                    resolve()
                }),
                
              onRowDelete: (oldData) =>
                new Promise((resolve, reject) => {
                  // console.log(oldData);
                  const hobbyDelete = api.deleteHobbyData(oldData.hobbies._id);
                  const userDelete = api.deleteUserData(oldData._id);
                  const dataDelete = [...data];
                  const index = oldData.tableData.id;
                  dataDelete.splice(index, 1);
                  setData([...dataDelete]);
                  resolve()
                }),
            }}
            
          />
    </div>
  );
}

export default App;
