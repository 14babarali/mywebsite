import { Typography } from "@material-tailwind/react";


export const CertificationCard = ({ icon: Icon, title, provider, description }) => {
  return (
    <div className="flex flex-col items-center p-6 border rounded-lg shadow-md">
      <Icon className="h-12 w-12 text-blue-500 mb-4" />
      <Typography variant="h6" className="mb-2 font-semibold text-gray-800">
        {title}
      </Typography>
      <Typography className="mb-2 text-gray-600">
        {provider}
      </Typography>
      <Typography className="text-gray-500 text-center">
        {description}
      </Typography>
    </div>
  );
};
