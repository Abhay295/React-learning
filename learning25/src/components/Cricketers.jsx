import React from "react";

const Cricketers = () => {
  const arr = [
    {
      name: "Sachin Tendulkar",
      age: 50,
      total_score: 34357,
      retired: true,
    },
    {
      name: "Virat Kohli",
      age: 35,
      total_score: 26000,
      retired: false,
    },
    {
      name: "MS Dhoni",
      age: 42,
      total_score: 17266,
      retired: true,
    },
    {
      name: "Yuvraj Singh",
      age: 42,
      total_score: 11778,
      retired: true,
    },
    {
      name: "Kapil Dev",
      age: 65,
      total_score: 9031,
      retired: true,
    },
    {
      name: "Anil Kumble",
      age: 53,
      total_score: 6196,
      retired: true,
    },
    {
      name: "Jasprit Bumrah",
      age: 30,
      total_score: 500,
      retired: false,
    },
    {
      name: "Rishabh Pant",
      age: 26,
      total_score: 4000,
      retired: false,
    },
    {
      name: "Mohammed Shami",
      age: 33,
      total_score: 500,
      retired: false,
    },
    {
      name: "Rohit Sharma",
      age: 36,
      total_score: 18000,
      retired: false,
    },
    {
      name: "Rahul Dravid",
      age: 51,
      total_score: 24208,
      retired: true,
    },
    {
      name: "Sourav Ganguly",
      age: 51,
      total_score: 18575,
      retired: true,
    },
    {
      name: "Shubman Gill",
      age: 24,
      total_score: 4000,
      retired: false,
    },
    {
      name: "Ravindra Jadeja",
      age: 35,
      total_score: 5000,
      retired: false,
    },
    {
      name: "Zaheer Khan",
      age: 45,
      total_score: 2263,
      retired: true,
    },
  ];

  return (
    <div>
      <table className="table table-dark">
        <thead>
          <tr>
            <th>Name</th>
            <th>Age</th>
            <th>Score</th>
            <th>isActive</th>
          </tr>
        </thead>
        <tbody>
          {arr.map((a) => {
            return (
              <tr>
                <td>{a.name}</td>
                <td>
                  {a.age}{" "}
                  {a.age > 40 && a.total_score < 9999 ? "(Pls retire..)" : ""}
                </td>
                <td style={{ color: a.total_score > 10000 ? "green" : "" }}>
                  {a.total_score}
                </td>
                <td style={{ color: a.retired == true ? "yellow" : "" }}>
                  {a.retired == true ? "retired" : "Active"}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Cricketers;
