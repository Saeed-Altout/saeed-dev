import Link from "next/link";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { Button } from "@/components/ui/button";

interface FormContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string;
  description: string;
  message: string;
  label: string;
  href: string;
}

export const FormContainer = ({
  title,
  description,
  message,
  label,
  href,
  children,
}: FormContainerProps) => {
  return (
    <Card className="w-full max-w-sm">
      <CardHeader className="text-center">
        <CardTitle className="text-3xl">{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>{children}</CardContent>
      <CardFooter>
        {message}
        <Button variant="link" asChild>
          <Link href={href}>{label}</Link>
        </Button>
      </CardFooter>
    </Card>
  );
};
