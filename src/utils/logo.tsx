import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

function Logo() {
  return (
    <>
      <Link href={"/"}>
        <Image src="/Images/Logo/first.png" alt="logo" width={130} height={130} />
      </Link>
    </>
  )
}

export default Logo
