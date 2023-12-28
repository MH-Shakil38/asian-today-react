import React, { useState, useEffect } from 'react';
import axios from 'axios';
import axiosClient from '../../api/axiox';

const FbUser = () => {
  const [followerCount, setFollowerCount] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Replace 'YOUR_ACCESS_TOKEN' with the actual access token.
        const accessToken = 'EAAMjU7UZBoMABO4ieM4Pq40k8FX4aNfc5hjIoGUorNU3UuFZB0MTZB4v1wCFh0CcakXIXSzaIFjHroFIfHtDXy8wJJ8z5OqlQGpAyoghlwzwcOI98Gn7XsXRf1JpvuN7pc3CoZCXrLHmxPKt4rsW2FzcjHZAWftGBEzV9n2kZAGTgD4DajaZBP61GqzDnp3V8RVZAlA3eB7hfwZDZD';
        const userId = '883267360170176'; // Replace with the user ID or 'me' for the authenticated user.

        const response = await axiosClient.get(
          `https://graph.facebook.com/v12.0/${userId}?fields=followers_count&access_token=${accessToken}`
        );

        setFollowerCount(response.data.followers_count);
      } catch (error) {
        console.error('Error fetching data from Facebook Graph API:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      {followerCount !== null ? (
        <p>Follower Count: {followerCount}</p>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default FbUser;
