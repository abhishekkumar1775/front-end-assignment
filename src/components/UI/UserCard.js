import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import LoadingLayout from "./LoadingLayout";

function UserCard({ header, title, content, isLoading, imgSource }) {
  return (
    <div
      style={{
        justifyContent: "center",
        display: "flex",
        flexDirection: "row",
        minHeight: "300px",
      }}
      className={"my-5"}
    >
      <Card border="dark" style={{ width: "18rem", padding: 4 }}>
        {isLoading ? (
          <LoadingLayout />
        ) : (
          <>
            <Card.Header>{header || "Selecte User ID"}</Card.Header>
            {imgSource && <Card.Img variant="top" src={imgSource} />}
            <Card.Body>
              <Card.Title>{title || "Selected User Name"}</Card.Title>
              <Card.Text>
                {content ||
                  "Please click on the USER ID below to check details"}
              </Card.Text>
            </Card.Body>
          </>
        )}
      </Card>
    </div>
  );
}

export default UserCard;
