import React from "react";
import "./styles.scss";

export default function CardHeader(props) {
  const { title, showEditButtons } = props;
  return (
    <div className="card-header">
      <div>
        <span>{title}</span>
      </div>
      {showEditButtons ? (
        <div className="edit-buttons-container">
          <i>
            <svg
              width="19"
              height="24"
              viewBox="0 0 19 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1.80087 20.75C1.80087 22.125 2.971 23.25 4.40115 23.25H14.8023C16.2324 23.25 17.4025 22.125 17.4025 20.75V5.75H1.80087V20.75ZM4.99921 11.85L6.83241 10.0875L9.6017 12.7375L12.358 10.0875L14.1912 11.85L11.4349 14.5L14.1912 17.15L12.358 18.9125L9.6017 16.2625L6.84541 18.9125L5.01221 17.15L7.76851 14.5L4.99921 11.85ZM14.1522 2L12.852 0.75H6.35136L5.05122 2H0.500732V4.5H18.7027V2H14.1522Z"
                fill="white"
              />
            </svg>
          </i>
          <i>
            <svg
              width="25"
              height="24"
              viewBox="0 0 25 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M3.50067 23.25H21.7026C23.1367 23.25 24.3029 22.1287 24.3029 20.75V9.915L21.7026 12.415V20.75H7.6065C7.5727 20.75 7.5376 20.7625 7.50379 20.7625C7.46089 20.7625 7.41798 20.7512 7.37378 20.75H3.50067V3.25H12.4027L15.003 0.75H3.50067C2.06661 0.75 0.900391 1.87125 0.900391 3.25V20.75C0.900391 22.1287 2.06661 23.25 3.50067 23.25Z"
                fill="white"
              />
            </svg>
          </i>
        </div>
      ) : null}
    </div>
  );
}
