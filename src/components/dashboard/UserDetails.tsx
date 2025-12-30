import { useNavigate, useParams } from "react-router-dom";
import styles from "../../scss/dashboard/users/users.details.module.scss"

const UserDetails = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  return (
    <div className={styles.container}>
        <button onClick={() => navigate(-1)}>← Back to Users</button>
      <h1>User Details</h1>
      <p>User ID from URL:</p>
      <strong>{id}</strong>
    </div>
  );
};

export default UserDetails;
