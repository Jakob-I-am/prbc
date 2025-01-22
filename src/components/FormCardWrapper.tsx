'use client';

import { Card, CardHeader, CardContent } from '@/components/ui/card';

interface FormCardWrapperProps {
  children: React.ReactNode;
}

export default function FormCardWrapper({ children }: FormCardWrapperProps) {
  return (
    <Card className='md:w-[550px] md:h-[500px] shadow-lg shadow-primary'>
      <CardContent className='mt-5'>{children}</CardContent>
    </Card>
  );
}
