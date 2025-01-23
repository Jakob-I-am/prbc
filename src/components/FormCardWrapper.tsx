'use client';

import { Card, CardHeader, CardContent } from '@/components/ui/card';

interface FormCardWrapperProps {
  children: React.ReactNode;
}

export default function FormCardWrapper({ children }: FormCardWrapperProps) {
  return (
    <Card className=' shadow-md'>
      <CardContent className='mt-5'>{children}</CardContent>
    </Card>
  );
}
