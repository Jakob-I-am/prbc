'use client';

import { Card, CardHeader, CardContent } from '@/components/ui/card';

interface FormCardWrapperProps {
  children: React.ReactNode;
  headerLabel: string;
}

export default function FormCardWrapper({
  children,
  headerLabel,
}: FormCardWrapperProps) {
  return (
    <Card className='w-[550px] h-[500px] shadow-xl shadow-primary'>
      <CardHeader>
        <p className='text-center text-2xl text-primary'>{headerLabel}</p>
      </CardHeader>
      <CardContent>{children}</CardContent>
    </Card>
  );
}
