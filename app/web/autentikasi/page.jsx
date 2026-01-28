import FormAutentikasi from '@/components/web/autentikasi/FormAutentikasi';
import { Suspense } from 'react';

export default function AuthPage() {
  return (
    <Suspense fallback={<div>loading ...</div>}>
      <FormAutentikasi />
    </Suspense>
  );
}
