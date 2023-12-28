import React, { useState, useEffect } from 'react';

const TopDate = ({ date }) => {
  const [formattedDate, setFormattedDate] = useState('');

  useEffect(() => {
    const dateObject = date ? new Date(date) : new Date();

    // Define options for formatting the date
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };

    // Format the date using toLocaleDateString()
    const formattedDateResult = dateObject.toLocaleDateString(undefined, options);

    setFormattedDate(formattedDateResult);
  }, [date]);

  return (
    <div>
      <p>{formattedDate}</p>
    </div>
  );
};

export default TopDate;
