import { Link } from "react-router-dom";

const ShowData = (props) => {
  return (
    <div>
      <table style={{ marginTop: "2rem" }}>
        <tbody>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Action</th>
          </tr>
          {props.toggleprop &&
            props.postsprop.map((post) => (
              <tr key={post.id}>
                <td>{post.id}</td>
                <td>{post.title}</td>
                <td>
                  <Link to={`/showpost/${post.id}`}>
                    <button>Show Details</button>
                  </Link>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default ShowData;
