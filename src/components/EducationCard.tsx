import { Typography } from "@material-tailwind/react";

export const EducationCard = ({ icon: Icon, degree, institution, duration }) => {
  return (
    <div className="flex flex-col items-center p-6 border rounded-lg shadow-md">
      <Icon className="h-12 w-12 text-blue-500 mb-4" />
      <Typography variant="h6" className="mb-2 font-semibold text-gray-800">
        {degree}
      </Typography>
      <Typography className="mb-2 text-gray-600">
        {institution}
      </Typography>
      <Typography className="text-gray-500">
        {duration}
      </Typography>
    </div>
  );
};
