import React from "react";
import error404 from "../../images/error404.png";

export default function ErrorPage({ err }) {
  if (err) {
    return (
      <main className="error-display">
        <p className="error-status-code">
          {err.response.status !== 404 ? (
            err.response.status
          ) : (
            <img className="error-404" src={error404} alt="404 error" />
          )}
        </p>
        <p className="error-message">{err.response.data.msg}</p>
      </main>
    );
  } else
    return (
      <main className="error-display">
        <p>
          <img className="error-404" src={error404} alt="404 error" />
        </p>
        <p className="error-message">Page Not Found</p>
      </main>
    );
}
