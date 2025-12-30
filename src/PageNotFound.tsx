import { Link } from "react-router-dom"


const PageNotFound = () => {
  return (
   <div className="not-found-container">
      <div className="content">
        <h1 className="error-code">404</h1>
        <div className="divider"></div>
        <h2 className="error-message">Oops! Page Not Found</h2>
        <Link title="Back to Home" to="/" className="home-button">
          Go Back Home
        </Link>
      </div>
    </div>
  )
}

export default PageNotFound