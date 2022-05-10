import React, { useState } from 'react';
import './App.css'

function App() {

  const [data, setData] = useState(null);
  const [birth, setBirth] = useState(null);
  const [gender, setGender] = useState(null);
  const [religion, setReligion] = useState(null);
  const [message, setMessage] = useState(null);

  const [userinfo, setUserInfo] = useState({ 
    hobi: [], 
    response: [], 
  }); 
  const handleChange = (e) => { 
    // Destructuring 
    const { value, checked } = e.target; 
    const { hobi } = userinfo; 

    // Case 1 : The user checks the box 
    if (checked) { 
      setUserInfo({ 
        hobi: [...hobi, value], 
        response: [...hobi, value], 
      }); 
    } 
    // Case 2  : The user unchecks the box 
    else { 
      setUserInfo({ 
        hobi: hobi.filter((e) => e !== value), 
        response: hobi.filter((e) => e !== value), 
      }); 
    }
  } 
  const [print, setPrint] = useState(false);

  function getData(e){
    setData(e.target.value)
    setPrint(false)
  }

  function getBirth(e){
    setBirth(e.target.value)
    setPrint(false)
  }

  function getGender(e){
    setGender(e.target.value)
    setPrint(false)
  }

  function getReligion(e){
    setReligion(e.target.value)
    setPrint(false)
  }

  function getMessage(e){
    setMessage(e.target.value)
    setPrint(false)
  }

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
      <div className="container">
        <div className="header">
          <h1>BIODATA</h1>
        </div>
  
        <div className="form">
          <form name="myForm" onSubmit={handleSubmit} required>

            <div className="text">
              <label for="name">Nama Lengkap</label><br />
              <input type="text" name="name" id="name" onChange={getData} required/>
            </div>

            <div className="date">
              <label for="birth">Tanggal Lahir</label><br />
              <input type="date" name="birth" id="birth" onChange={getBirth} required/>
            </div>

            <div className="radio">
              <label for="gender">Jenis Kelamin</label>
              <div className="genderSelect" onChange={getGender} required>
                <label for="male">
                  <input type="radio" name="gender" id="male" value="Laki - laki"/>
                  Laki - laki</label
                >
                <label for="female">
                  <input type="radio" name="gender" id="female" value="Perempuan"/>
                  Perempuan</label
                >
                <label for="other">
                  <input type="radio" name="gender" id="other" value="Other"/>
                  Other</label
                >
              </div>
            </div>

            <div className="checkbox">
              <label for="hobi">Hobi</label>
              <div className="hobiSelect">
                <label for="hobi1">
                  <input type="checkbox" name="hobi" id="hobi1" value="Ngoding, " onChange={handleChange}/>
                  Ngoding</label
                >
                <label for="hobi2">
                  <input type="checkbox" name="hobi" id="hobi2" value="Rebahan, " onChange={handleChange}/>
                  Rebahan</label
                >
                <label for="hobi3">
                  <input type="checkbox" name="hobi" id="hobi3" value="Melamun, " onChange={handleChange}/>
                  Melamun</label
                >
                <label for="hobi4">
                  <input type="checkbox" name="hobi" id="hobi4" value="Baca Buku, " onChange={handleChange}/>
                  Baca buku</label
                >
                <label for="hobi5">
                  <input type="checkbox" name="hobi" id="hobi5" value="Nonton Youtube," onChange={handleChange}/>
                  Nonton Youtube</label
                >
                <label for="hobi6">
                  <input type="checkbox" name="hobi" id="hobi6" value="Dengerin lagu, " onChange={handleChange}/>
                  Dengerin lagu</label
                >
                <label for="hobi7">
                  <input type="checkbox" name="hobi" id="hobi7" value="Other" onChange={handleChange}/>
                  Other</label
                >
              </div>
            </div>

            <div className="select">
              <label for="agama">Agama</label><br />
              <select name="agama" id="agama" onChange={getReligion} required>
                <option hidden>Pilih Agamamu</option>
                <option value="Islam">Islam</option>
                <option value="Kristen">Kristen</option>
                <option value="Buddha">Buddha</option>
                <option value="Hindu">Hindu</option>
                <option value="Konghucu">Konghucu</option>
              </select>
            </div>

            <div className="textarea">
              <label for="pesan">Pesan</label><br/>
              <textarea name="pesan" id="pesan" onChange={getMessage} required></textarea>
            </div>
            {
            print?
            <div className="result" id="result">
                    <table className="result-table">
                        <thead>
                            <tr>
                            <th>Label</th>
                            <th>Value</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                            <td>Nama</td>
                            <td id="fname">{data}</td>
                            </tr>

                            <tr>
                            <td>Tanggal Lahir</td>
                            <td id="fbirth">{birth}</td>
                            </tr>

                            <tr>
                            <td>Jenis Kelamin</td>
                            <td id="fgender">{gender}</td>
                            </tr>

                            <tr>
                            <td>Hobi</td>
                            <td id="fhobi" onChange={handleChange}>{userinfo.response}</td>
                            </tr>

                            <tr>
                            <td>Agama</td>
                            <td id="fagama">{religion}</td>
                            </tr>
                            
                            <tr>
                            <td>Pesan</td>
                            <td id="fpesan">{message}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
              :null
              }
            <button onClick={()=>setPrint(true)}>Submit</button>
          </form>

        </div>
        
        </div>
        
  );
}

export default App;