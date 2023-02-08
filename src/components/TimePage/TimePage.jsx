import React, { useState, useEffect } from 'react';
import css from './TimePage.module.css';

export default function TimePage() {
  const [time, setTime] = useState(getTime());
  const [date, setDate] = useState(getDate());
  // console.log(setDate);

  useEffect(() => {
    setDate(getDate());
    setInterval(() => {
      setTime(getTime());
    }, 1000);
  }, []);

  function getDayName(day) {
    let dayName = null;

    switch (day) {
      case 1:
        dayName = 'Sunday';
        break;
      case 2:
        dayName = 'Monday';
        break;
      case 3:
        dayName = 'Tuesday';
        break;
      case 4:
        dayName = 'Wednesday';
        break;
      case 5:
        dayName = 'Thursday';
        break;
      case 6:
        dayName = 'Friday';
        break;
      case 7:
        dayName = 'Saturday';
        break;

      default:
        return;
    }

    return dayName;
  }
  function getDate() {
    let date = new Date(),
      day = date.getDay() + 1,
      month = date.getMonth() + 1,
      year = date.getFullYear();

    return { year, month, day };
  }
  console.log(date.day);
  function getTime() {
    let date = new Date(),
      hours = date.getHours() < 10 ? '0' + date.getHours() : date.getHours(),
      minutes =
        date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes(),
      seconds =
        date.getSeconds() < 10 ? '0' + date.getSeconds() : date.getSeconds();
    return { hours, minutes, seconds };
  }

  return (
    <div className={css.time_container}>
      <b>{getDayName(date.day)}</b>
      <ul className={css.time_list}>
        <li> {date.day < 10 ? '0' + date.day : date.day}.</li>
        <li>{date.month < 10 ? '0' + date.month : date.month}.</li>
        <li>{date.year}</li>
      </ul>
      <p>{time.hours + ':' + time.minutes + ':' + time.seconds}</p>
    </div>
  );
}
