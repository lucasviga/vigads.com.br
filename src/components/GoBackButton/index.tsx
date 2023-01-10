import Image from 'next/image';
import { useRouter } from 'next/router'

import { GoBackBtn } from './styles';

export default function GoBackToPreviousPage() {
  const router = useRouter();

  return (
    <GoBackBtn type="button" onClick={() => router.back()}>
      <Image 
        src="/images/arrow-left.svg"
        width={16}
        height={16}      
        alt="Arrow Left" 
      />
      back
    </GoBackBtn>
  )
}