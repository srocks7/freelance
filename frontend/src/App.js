import React, { useState, useEffect } from "react";
import MaterialTable from "material-table";
import './App.css';
import api from './services/api'

function App() {

  const [data, setData] = useState([]);
  const [hobby, setHobby] = useState([]);

  async function getUserData() {

    const getData = await api.getUserData();
    console.log("user data", getData);
    setData(getData);
    const getHobby = await api.getHobbyData();
    console.log("hobby data", getHobby);
    setHobby(getHobby);
}

useEffect(() => {
  getUserData();
}, []);


  return (
    <div className="App">
     <MaterialTable
            title="User Hobbies"
            columns={[
              { title: "Id", field: "_id",hidden:'true' },
              { title: "Name", field: "userName" },
              { title: "Passion Level", field: "hobbies.passionLevel" },
              { title: "Hobby Name", field: "hobbies.hobbyName" },
              { title: "Year", field: "hobbies.year" },
            ]}
            
            data={data}
            editable={{
              onRowAdd: (newData) =>
                new Promise((resolve, reject) => {
                  // const hobbyAdd = api.addHobbyData(newData);
                  console.log('a',newData);
                  // const userAdd = api.addUserData(newData);
                  let dataToAdd = [...data];
                  dataToAdd.push(newData);
                  setData(dataToAdd);
                  resolve()
                }),
              onRowUpdate: (newData, oldData) =>
                new Promise((resolve, reject) => {
                  const userUpdate = api.updateUserData(newData._id,newData);
                    const dataUpdate = [...data];
                    const index = oldData.tableData.id;
                    dataUpdate[index] = newData;
                    setData([...dataUpdate]);
                    resolve()
                }),
              onRowDelete: (oldData) =>
                new Promise((resolve, reject) => {
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
