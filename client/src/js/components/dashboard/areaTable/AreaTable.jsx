import AreaTableAction from "./AreaTableAction";
import "./AreaTable.scss";

const TABLE_HEADS = [
  "Activity",
  "Course ID",
  "Due Date",
  "Course",
  "Status",
  "Credits",
  "Action",
];

const TABLE_DATA = [
  {
    id: 100,
    activity: "Video Watch",
    course_id: 17432,
    due_date: "Aug 29,2025",
    course: "Python Basics",
    status: "Done",
    credits: 40,
  },
  {
    id: 101,
    activity: "Article Read",
    course_id: 18332,
    due_date: "Jun 29,2025",
    course: "Intermidiate Python",
    status: "pending",
    credits: 28,
  },
  {
    id: 102,
    activity: "Video Watch",
    course_id: 13632,
    due_date: "Nov 15,2025",
    course: "Error Handling",
    status: "pending",
    credits: 50,
  },
  {
    id: 103,
    activity: "Code Submit",
    course_id: 59232,
    due_date: "Aug 28,2025",
    course: "OOP in Python",
    status: "Done",
    credits: 10,
  },
  {
    id: 104,
    activity: "Exam",
    course_id: 59232,
    due_date: "Jun 13,2025",
    course: "OOP in Python",
    status: "Done",
    credits: 60,
  },
  {
    id: 105,
    activity: "Video Watch",
    course_id: 17432,
    due_date: "Mar 29,2025",
    course: "Python Basics",
    status: "pending",
    credits: 80,
  },
];

const AreaTable = () => {
  return (
    <section className="content-area-table">
      <div className="data-table-info">
        <h4 className="data-table-title">Latest Orders</h4>
      </div>
      <div className="data-table-diagram">
        <table>
          <thead>
            <tr>
              {TABLE_HEADS?.map((th, index) => (
                <th key={index}>{th}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {TABLE_DATA?.map((dataItem) => {
              return (
                <tr key={dataItem.id}>
                  <td>{dataItem.activity}</td>
                  <td>{dataItem.course_id}</td>
                  <td>{dataItem.due_date}</td>
                  <td>{dataItem.course}</td>
                  <td>
                    <div className="dt-status">
                      <span
                        className={`dt-status-dot dot-${dataItem.status}`}
                      ></span>
                      <span className="dt-status-text">{dataItem.status}</span>
                    </div>
                  </td>
                  <td>{dataItem.credits}</td>
                  <td className="dt-cell-action">
                    <AreaTableAction />
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default AreaTable;
