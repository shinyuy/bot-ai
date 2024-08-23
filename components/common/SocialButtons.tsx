'use client';

import { ImGoogle, ImFacebook } from 'react-icons/im';
import { SocialButton } from '../../components/common';
import { continueWithGoogle, continueWithFacebook } from '../../utils';

export default function SocialButtons() {
  return (
    <div className="mt-5 flex items-center justify-between gap-2">
      <SocialButton provider="google" onClick={continueWithGoogle}>
        <ImGoogle className="mr-3" /> Google Signin
      </SocialButton>
      <SocialButton provider="facebook" onClick={continueWithFacebook}>
        <ImFacebook className="mr-3" /> Facebook Signin
      </SocialButton>
    </div>
  );
}
