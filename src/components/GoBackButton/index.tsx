import Image from 'next/image';
import { useRouter } from 'next/router'

import { GoBackBtn } from './styles';
import arrowLeftIcon from '../../../public/images/arrow-left.svg';

export default function GoBackToPreviousPage() {
  const router = useRouter();

  return (
    <GoBackBtn type="button" onClick={() => router.back()}>
      <Image src={arrowLeftIcon} alt="Arrow Left white Icon to go back to the previous page" />
      back
    </GoBackBtn>
  )
}