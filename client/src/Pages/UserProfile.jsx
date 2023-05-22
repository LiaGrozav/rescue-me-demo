import React, { useContext } from "react";
import { BiEdit } from "react-icons/bi";
import { Button } from "react-bootstrap";
import "../styles/UserProfile.scss";
import PetContext from "../context/petsContextProvider";
import PetCard from "../components/PetCard";

const UserProfile = () => {
  const { user, loading } = useContext(PetContext);
  
  console.log("user:", user);
  console.log("loading:", loading);

  const handleSettings = () => {
    window.location.href = "/userprofilesettings"; // Navigate to settings page
  };

  if (!user || loading) {
    return <p>Loading user data...</p>;
  }

  const addedPets = user.user?.pets || [];
  const favorites = user.user?.favorites || [];

  

  return (
    <div className="user-profile">
      <div className="user-data">
        <div className="user-personal-info">
          <div className="user-avatar-image">
            <img src={user.user.photoURL} alt="User Avatar" />
          </div>
          <div className="user-details">
            <div className="go-to-settings">
              <h1>{user.user.name}</h1>
              
              <Button
                className="settings-button"
                size="xs"
                
                onClick={handleSettings}
              > Settings
                {/* <BiEdit /> */}
              </Button>
            </div>
            <h4 className="city-name capitalize">{user.user.city}</h4>
            <div className="checkboxes-userprofile">
              {user.user.shelter ? <p>Shelter</p> : <p></p>}
            </div>
          </div>
        </div>

        <div className="pet-groups-container">
          <div className="favorite-pets">
            <h4>Here is a list with your favorite pets</h4>
            {favorites.length > 0 ? (
              <div className="pet-card-container">
                {favorites.map((pet) => (
                  <PetCard key={pet._id} pet={pet} />
                ))}
              </div>
            ) : (
              <p>No favorite pets found.</p>
            )}
          </div>

          <div className="added-pets">
            <h4>Here is a list with your pets</h4>
            {addedPets.length > 0 ? (
              <div className="pet-card-container">
                {addedPets.map((pet) => (
                  <PetCard key={pet._id} pet={pet} />
                ))}
              </div>
            ) : (
              <p>No pets found.</p>
            )}
          </div>
        </div>
      </div>

      <div className="give-for-adoption">
        <h4>Give for adoption</h4>
      
          <Button type="submit" className="btn_adoption" href={"/giveforadoption"}>
          Click here   
          </Button>
        
      </div>
    </div>
  );
};

export default UserProfile;
