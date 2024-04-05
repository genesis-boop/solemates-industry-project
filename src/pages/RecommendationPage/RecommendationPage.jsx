import "./RecommendationPage.scss";
import React, { useState, useEffect } from "react";
import FootDataCard from "../../components/FootDataCard/FootDataCard";
import RecommendationList from "../../components/RecommendationList/RecommendationList";
import usersFootData from "../../data/users-foot-data.json"; // make sure the path matches your JSON file location

const RecommendationPage = () => {
  const [selectedUser, setSelectedUser] = useState(null);

  useEffect(() => {
    // Function to get a random user from the users foot data
    const getRandomUser = () => {
      const randomIndex = Math.floor(Math.random() * usersFootData.length);
      return usersFootData[randomIndex];
    };

    // Set a random user when the component is mounted
    setSelectedUser(getRandomUser());
  }, []); // The empty array ensures this effect only runs once after the initial render

  return (
    <>
      {selectedUser && <FootDataCard userData={selectedUser} />}
      {selectedUser && (
        <RecommendationList category={selectedUser.type_category} />
      )}
    </>
  );
};

export default RecommendationPage;
