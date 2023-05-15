import React, { useContext } from "react";
import { BiEdit } from "react-icons/bi";
import { Button } from "react-bootstrap";
import "../styles/UserProfile.scss";
import PetContext from "../context/petsContextProvider";

const UserProfile = ({ isShelter }) => {
  const { user } = useContext(PetContext);

  const handleSettings = () => {
    window.location.href = "/userprofilesettings"; // Navigate to settings page
  };

  return (
    <div>
      <div className="profile-settings">
        <div className="user-info">
          <img
            className="user-avatar-image"
            src={user?.user.photoURL}
            alt="User Avatar"
          />
          <h1>{user?.user.name}</h1>
          <Button className="btn_lgr" onClick={handleSettings}>
            <BiEdit />
          </Button>
          <h4>City, Country</h4>
          <div className="checkboxes-userprofile">
            {isShelter ? <p></p> : <p>Shelter</p>}
          </div>
        </div>

        <h3>Here is a list with your favorite pets</h3>

        <div className="favorite-pets">
          {/* <PetCard />
          <PetCard />
          <PetCard /> */}
        </div>

        <div className="filters-list-short">
          <h4>Adoption preferences</h4>

          <div>
            <select
              className="form-select form-select-sm  "
              aria-label=".form-select-sm example"
            >
              <option selected>Age</option>
              <option value="1">puppy</option>
              <option value="2">adult</option>
              <option value="3">senior</option>
            </select>

            <select
              class="form-select form-select-sm "
              aria-label=".form-select-sm example"
            >
              <option selected>Gender</option>
              <option value="1">Female</option>
              <option value="2">Male</option>
            </select>

            <select
              class="form-select form-select-sm "
              aria-label=".form-select-sm example"
            >
              <option selected>Color</option>
              <option value="1">Black</option>
              <option value="2">White</option>
              <option value="3">Brown</option>
              <option value="3">Golden</option>
            </select>
          </div>

          <div>
            <select
              class="form-select form-select-sm  "
              aria-label=".form-select-sm example"
            >
              <option selected>Size</option>
              <option value="1">Small</option>
              <option value="2">Medium</option>
              <option value="3">Large</option>
            </select>
          </div>

          <div>
            <select
              class="form-select form-select-sm  "
              aria-label=".form-select-sm example"
            >
              <option selected>Breed</option>
              <option value="1"></option>
              <option value="2"></option>
              <option value="3">Large</option>
            </select>

            <select
              class="form-select form-select-sm  "
              aria-label=".form-select-sm example"
            >
              <option selected>Vaccinated</option>
              <option value="1">yes</option>
              <option value="2">no</option>
            </select>

            <select
              class="form-select form-select-sm  "
              aria-label=".form-select-sm example"
            >
              <option selected>Sterilized</option>
              <option value="1">yes</option>
              <option value="2">no</option>
            </select>
          </div>

          <Button type="submit" className="btn_lgr">
            Search
          </Button>
        </div>
      </div>

      <div className="give-for-adoption">
        <h4>Give a pet for adoption</h4>
        <a href="/giveforadoption">
          <Button type="submit" className="btn_lgr">
            Give for adoption
          </Button>
        </a>
      </div>
    </div>
  );
};

export default UserProfile;
