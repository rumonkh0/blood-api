import React, { useContext, useState } from "react";
import AuthContext from "../../context/auth/authContext";
import Spinner from "../layout/Spinner";
import { Navigate } from "react-router-dom";
import style from "./reg.module.css";

function Register() {
  const { state, register } = useContext(AuthContext);
  const [formData, setFormData] = useState({
    blood_group: "O+",
    gender: "male",
    permanent_zilla: "Dhaka",
    permanent_tahna: "Pabna",
    present_zilla: "Dhaka",
    present_thana: "Pabna",
  });
  const {
    name,
    mobile,
    permanent_zilla,
    permanent_tahna,
    // permanent_address,
    present_zilla,
    present_thana,
    // present_address,
    blood_group,
    // last_donate,
    password,
    password1,
  } = formData;
  const { form, loginpage, formsection, dateandtime, date, genderbtn } = style;

  const onChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (name == "" || mobile === "" || password === "") {
      // setAlert("Please fill in all fields");
    } else if (password != password1) {
      console.log("pass not match");
    } else {
      console.log(formData);
      register(formData);
    }
  };

  if (state.loading) {
    return <Spinner />;
  }

  if (state.isAuthenticated) {
    return <Navigate to="/" />;
  }

  return (
    <>
      <div className={loginpage}>
        <div className={"form-section" + " " + formsection}>
          <form className={form}>
            <h3>Sign Up</h3>
            <div className="mb-3">
              <label htmlFor="name" className="form-label">
                Your Name
              </label>
              <input
                type="text"
                className="form-control"
                id="name"
                name="name"
                onChange={onChange}
                required
              />
              <p>Please Text Your Name</p>
            </div>
            <fieldset className="border rounded-3 p-3">
              <legend className="float-none w-auto px-3">
                Permanent Address
              </legend>

              <div className="mb-3">
                <label htmlFor="zilla" className="form-label">
                  Zilla
                </label>
                <select
                  id="zilla"
                  className="form-control"
                  value={permanent_zilla}
                  name="permanent_zilla"
                  onChange={onChange}
                >
                  <option value="Bagerhat">Bagerhat</option>
                  <option value="Bandarban">Bandarban</option>
                  <option value="Barguna">Barguna</option>
                  <option value="Barisal">Barisal</option>
                  <option value="Bhola">Bhola</option>
                  <option value="Bogra">Bogra</option>
                  <option value="Brahmanbaria">Brahmanbaria</option>
                  <option value="Chandpur">Chandpur</option>
                  <option value="Chittagong">Chittagong</option>
                  <option value="Chuadanga">Chuadanga</option>
                  <option value="Comilla">Comilla</option>
                  <option value="Cox'sBazar">Cox'sBazar</option>
                  <option value="Dhaka">Dhaka</option>
                  <option value="Dinajpur">Dinajpur</option>
                  <option value="Faridpur">Faridpur</option>
                  <option value="Feni">Feni</option>
                  <option value="Gaibandha">Gaibandha</option>
                  <option value="Gazipur">Gazipur</option>
                  <option value="Gopalganj">Gopalganj</option>
                  <option value="Habiganj">Habiganj</option>
                  <option value="Jaipurhat">Jaipurhat</option>
                  <option value="Jamalpur">Jamalpur</option>
                  <option value="Jessore">Jessore</option>
                  <option value="Jhalokati">Jhalokati</option>
                  <option value="Jhenaidah">Jhenaidah</option>
                  <option value="Khagrachari">Khagrachari</option>
                  <option value="Khulna">Khulna</option>
                  <option value="Kishoreganj">Kishoreganj</option>
                  <option value="Kurigram">Kurigram</option>
                  <option value="Kushtia">Kushtia</option>
                  <option value="Lakshmipur">Lakshmipur</option>
                  <option value="Lalmonirhat">Lalmonirhat</option>
                  <option value="Madaripur">Madaripur</option>
                  <option value="Magura">Magura</option>
                  <option value="Manikganj">Manikganj</option>
                  <option value="Maulvibazar">Maulvibazar</option>
                  <option value="Meherpur">Meherpur</option>
                  <option value="Munshiganj">Munshiganj</option>
                  <option value="Mymensingh">Mymensingh</option>
                  <option value="Naogaon">Naogaon</option>
                  <option value="Narail">Narail</option>
                  <option value="Narayanganj">Narayanganj</option>
                  <option value="Narsingdi">Narsingdi</option>
                  <option value="Natore">Natore</option>
                  <option value="Nawabganj">Nawabganj</option>
                  <option value="Netrokona">Netrokona</option>
                  <option value="Nilphamari">Nilphamari</option>
                  <option value="Noakhali">Noakhali</option>
                  <option value="Pabna">Pabna</option>
                  <option value="Panchagarh">Panchagarh</option>
                  <option value="Patuakhali">Patuakhali</option>
                  <option value="Pirojpur">Pirojpur</option>
                  <option value="Rajbari">Rajbari</option>
                  <option value="Rajshahi">Rajshahi</option>
                  <option value="Rangamati">Rangamati</option>
                  <option value="Rangpur">Rangpur</option>
                  <option value="Satkhira">Satkhira</option>
                  <option value="Shariatpur">Shariatpur</option>
                  <option value="Sherpur">Sherpur</option>
                  <option value="Sirajganj">Sirajganj</option>
                  <option value="Sunamganj">Sunamganj</option>
                  <option value="Sylhet">Sylhet</option>
                  <option value="Tangail">Tangail</option>
                  <option value="Thakurgaon">Thakurgaon</option>
                </select>
                {/*<input type="name" className="form-control" id="zella" required> */}
              </div>
              <div className="mb-3">
                <label htmlFor="thana" className="form-label">
                  Thana
                </label>
                <select
                  id="thana"
                  className="form-control"
                  value={permanent_tahna}
                  name="permanent_tahna"
                  onChange={onChange}
                >
                  <option value="Noakhali">Noakhali</option>
                  <option value="Pabna">Pabna</option>
                  <option value="Panchagarh">Panchagarh</option>
                  <option value="Patuakhali">Patuakhali</option>
                  <option value="Pirojpur">Pirojpur</option>
                  <option value="Rajbari">Rajbari</option>
                  <option value="Rajshahi">Rajshahi</option>
                  <option value="Rangamati">Rangamati</option>
                  <option value="Rangpur">Rangpur</option>
                </select>
              </div>
              <div className="mb-3">
                <label htmlFor="address" className="form-label">
                  Address
                </label>
                <input
                  type="name"
                  name="permanent_address"
                  className="form-control"
                  id="address"
                  onChange={onChange}
                />
              </div>
            </fieldset>
            <fieldset className="border rounded-3 p-3">
              <legend className="float-none w-auto px-3">
                present Address
              </legend>
              <div className="mb-3">
                <label htmlFor="zella" className="form-label">
                  Zilla
                </label>
                <select
                  id="zilla"
                  className="form-control"
                  value={present_zilla}
                  name="present_zilla"
                  onChange={onChange}
                >
                  <option value="Bagerhat">Bagerhat</option>
                  <option value="Bandarban">Bandarban</option>
                  <option value="Barguna">Barguna</option>
                  <option value="Barisal">Barisal</option>
                  <option value="Bhola">Bhola</option>
                  <option value="Bogra">Bogra</option>
                  <option value="Brahmanbaria">Brahmanbaria</option>
                  <option value="Chandpur">Chandpur</option>
                  <option value="Chittagong">Chittagong</option>
                  <option value="Chuadanga">Chuadanga</option>
                  <option value="Comilla">Comilla</option>
                  <option value="Cox'sBazar">Cox'sBazar</option>
                  <option value="Dhaka">Dhaka</option>
                  <option value="Dinajpur">Dinajpur</option>
                  <option value="Faridpur">Faridpur</option>
                  <option value="Feni">Feni</option>
                  <option value="Gaibandha">Gaibandha</option>
                  <option value="Gazipur">Gazipur</option>
                  <option value="Gopalganj">Gopalganj</option>
                  <option value="Habiganj">Habiganj</option>
                  <option value="Jaipurhat">Jaipurhat</option>
                  <option value="Jamalpur">Jamalpur</option>
                  <option value="Jessore">Jessore</option>
                  <option value="Jhalokati">Jhalokati</option>
                  <option value="Jhenaidah">Jhenaidah</option>
                  <option value="Khagrachari">Khagrachari</option>
                  <option value="Khulna">Khulna</option>
                  <option value="Kishoreganj">Kishoreganj</option>
                  <option value="Kurigram">Kurigram</option>
                  <option value="Kushtia">Kushtia</option>
                  <option value="Lakshmipur">Lakshmipur</option>
                  <option value="Lalmonirhat">Lalmonirhat</option>
                  <option value="Madaripur">Madaripur</option>
                  <option value="Magura">Magura</option>
                  <option value="Manikganj">Manikganj</option>
                  <option value="Maulvibazar">Maulvibazar</option>
                  <option value="Meherpur">Meherpur</option>
                  <option value="Munshiganj">Munshiganj</option>
                  <option value="Mymensingh">Mymensingh</option>
                  <option value="Naogaon">Naogaon</option>
                  <option value="Narail">Narail</option>
                  <option value="Narayanganj">Narayanganj</option>
                  <option value="Narsingdi">Narsingdi</option>
                  <option value="Natore">Natore</option>
                  <option value="Nawabganj">Nawabganj</option>
                  <option value="Netrokona">Netrokona</option>
                  <option value="Nilphamari">Nilphamari</option>
                  <option value="Noakhali">Noakhali</option>
                  <option value="Pabna">Pabna</option>
                  <option value="Panchagarh">Panchagarh</option>
                  <option value="Patuakhali">Patuakhali</option>
                  <option value="Pirojpur">Pirojpur</option>
                  <option value="Rajbari">Rajbari</option>
                  <option value="Rajshahi">Rajshahi</option>
                  <option value="Rangamati">Rangamati</option>
                  <option value="Rangpur">Rangpur</option>
                  <option value="Satkhira">Satkhira</option>
                  <option value="Shariatpur">Shariatpur</option>
                  <option value="Sherpur">Sherpur</option>
                  <option value="Sirajganj">Sirajganj</option>
                  <option value="Sunamganj">Sunamganj</option>
                  <option value="Sylhet">Sylhet</option>
                  <option value="Tangail">Tangail</option>
                  <option value="Thakurgaon">Thakurgaon</option>
                </select>
              </div>
              <div className="mb-3">
                <label htmlFor="thana" className="form-label">
                  Thana
                </label>
                <select
                  id="thana"
                  className="form-control"
                  value={present_thana}
                  name="present_thana"
                  onChange={onChange}
                >
                  <option value="Noakhali">Noakhali</option>
                  <option value="Pabna">Pabna</option>
                  <option value="Panchagarh">Panchagarh</option>
                  <option value="Patuakhali">Patuakhali</option>
                  <option value="Pirojpur">Pirojpur</option>
                  <option value="Rajbari">Rajbari</option>
                  <option value="Rajshahi">Rajshahi</option>
                  <option value="Rangamati">Rangamati</option>
                  <option value="Rangpur">Rangpur</option>
                </select>
              </div>
              <div className="mb-3">
                <label htmlFor="address" className="form-label">
                  Address
                </label>
                <input
                  type="name"
                  className="form-control"
                  name="present_address"
                  id="address"
                  onChange={onChange}
                />
              </div>
            </fieldset>
            <div className="mb-3">
              <label htmlFor="num" className="form-label">
                Mobile Number
              </label>
              <input
                type="text"
                className="form-control"
                id="num"
                name="mobile"
                aria-describedby="emailHelp"
                onChange={onChange}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="fbid" className="form-label">
                FaceBook Id
              </label>
              <input
                type="text"
                className="form-control"
                id="fbid"
                name="fb_id"
                aria-describedby="emailHelp"
                onChange={onChange}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="blood_group" className="form-label">
                Blood Group
              </label>
              <select
                id="blood"
                className="form-control"
                name="blood_group"
                value={blood_group}
                onChange={onChange}
              >
                <option value="A+">A+</option>
                <option value="A-">A-</option>
                <option value="B+">B+</option>
                <option value="B-">B-</option>
                <option value="AB+">AB+</option>
                <option value="AB-">AB-</option>
                <option value="O+">O+</option>
                <option value="O-">O-</option>
              </select>
            </div>
            <div className="mb-3 blddonate">
              <label htmlFor="lastdonate" className="form-label">
                Date of Last Blood Donation
              </label>
              <div className={dateandtime}>
                <select className={"form-control" + " " + date} name="date">
                  <option value="01">1</option>
                  <option value="02">2</option>
                  <option value="03">3</option>
                  <option value="04">4</option>
                  <option value="05">5</option>
                  <option value="06">6</option>
                  <option value="07">7</option>
                  <option value="08">8</option>
                  <option value="09">9</option>
                  <option value="10">10</option>
                  <option value="11">11</option>
                  <option value="12">12</option>
                  <option value="13">13</option>
                  <option value="14">14</option>
                  <option value="15">15</option>
                  <option value="16">16</option>
                  <option value="17">17</option>
                  <option value="18">18</option>
                  <option value="19">19</option>
                  <option value="20">20</option>
                  <option value="21">21</option>
                  <option value="22">22</option>
                  <option value="23">23</option>
                  <option value="24">24</option>
                  <option value="25">25</option>
                  <option value="26">26</option>
                  <option value="27">27</option>
                  <option value="28">28</option>
                  <option value="29">29</option>
                  <option value="30">30</option>
                  <option value="31">31</option>
                </select>
                <select className={"form-control" + " " + date} name="month">
                  <option value="January">January</option>
                  <option value="February">February</option>
                  <option value="March">March</option>
                  <option value="April">April</option>
                  <option value="May">May</option>
                  <option value="June">June</option>
                  <option value="July">July</option>
                  <option value="August">August</option>
                  <option value="September">September</option>
                  <option value="October">October</option>
                  <option value="November">November</option>
                  <option value="December">December</option>
                </select>
                <select className={"form-control" + " " + date} name="year">
                  <option value="2015">2015</option>
                  <option value="2016">2016</option>
                  <option value="2017">2017</option>
                  <option value="2018">2018</option>
                  <option value="2019">2019</option>
                  <option value="2020">2020</option>
                  <option value="2021">2021</option>
                  <option value="2022">2022</option>
                </select>
              </div>
              <input
                type="radio"
                className="mt-3"
                name="gendermf"
                value="male"
                onChange={onChange}
              />{" "}
              Male
              <input
                className={genderbtn}
                type="radio"
                name="gendermf"
                value="female"
                onChange={onChange}
              />{" "}
              Female
            </div>
            <div className="mb-3">
              <label htmlFor="pass" className="form-label">
                Password
              </label>
              <input
                type="password"
                name="password"
                className="form-control"
                id="pass"
                onChange={onChange}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="pass" className="form-label">
                Confirm Password
              </label>
              <input
                type="password"
                name="password1"
                className="form-control"
                id="pass"
                onChange={onChange}
              />
            </div>
            <button
              type="submit"
              onClick={onSubmit}
              className="btn btn-success form-control"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default Register;
