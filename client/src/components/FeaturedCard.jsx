import {
  Card,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";
import { Link } from "react-router-dom";

export function FeaturedCard({ languageTitle, body, link }) {
  return (
    <Card className="mt-6 w-auto bg-blue-100">
      <CardBody>
        <Typography variant="h5" color="blue-gray" className="mb-2">
          {languageTitle}
        </Typography>
        <Typography>{body}</Typography>
      </CardBody>
      <CardFooter className="pt-0 from-blue-gray-900 to-blue-gray-800">
        <Link to={`quiz/${link}`}>
          <Button className="bg-blue-800">Get Started</Button>
        </Link>
      </CardFooter>
    </Card>
  );
}