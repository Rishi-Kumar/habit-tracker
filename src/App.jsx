import { useState } from "react";

function MyButton() {
  return <button>I'm a button</button>;
}

function Habit({ habitName }) {
  const [isChecked, setIsChecked] = useState(false);

  function handleClick() {
    setIsChecked(!isChecked);
  }

  return (
    <div class="card" onClick={handleClick}>
      <input type="checkbox" checked={isChecked} />
      <span
        style={{
          margin: 8,
          textDecoration: isChecked ? "line-through" : "none"
        }}
      >
        {habitName}
      </span>
    </div>
  );
}

function DateBar({ initialDate }) {
  const [date, setDate] = useState();

  function getFormattedDate(date) {
    const formatter = new Intl.DateTimeFormat("en-US", {
      month: "short",
      day: "2-digit",
      year: "numeric"
    });
    return formatter.format(date);
  }

  return (
    <div class="dateBar">
      <span>{"<<"}</span>
      <span>{getFormattedDate(initialDate)}</span>
      <span>{">>"}</span>
    </div>
  );
}

export default function MyApp() {
  const date = new Date("2023-01-19");

  return (
    <div style={{ margin: 8 }}>
      <h1>Habits</h1>
      <DateBar currentDate={date} />
      <Habit habitName="Sleep early" />
      <Habit habitName="Exercise" />
      <Habit habitName="Meditate" />
    </div>
  );
}
