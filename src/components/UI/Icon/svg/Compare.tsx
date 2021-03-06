import React from 'react';

interface IconProps {
  color: string;
}

function Compare({ color }: IconProps) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
      <path
        fill={color}
        d="M14 20l-4-4v3h-3c-1.103 0-2-.897-2-2v-10.184c1.163-.413 2-1.511 2-2.816 0-1.657-1.343-3-3-3s-3 1.343-3 3c0 1.305.837 2.403 2 2.816v10.184c0 2.206 1.794 4 4 4h3v3l4-4zm-11.8-16c0-.993.807-1.8 1.8-1.8s1.8.807 1.8 1.8-.807 1.8-1.8 1.8-1.8-.807-1.8-1.8zm7.8 0l4 4v-3h3c1.103 0 2 .897 2 2v10.184c-1.163.413-2 1.512-2 2.816 0 1.657 1.343 3 3 3s3-1.343 3-3c0-1.305-.837-2.403-2-2.816v-10.184c0-2.206-1.794-4-4-4h-3v-3l-4 4zm11.8 16c0 .993-.807 1.8-1.8 1.8s-1.8-.807-1.8-1.8.807-1.8 1.8-1.8 1.8.807 1.8 1.8z"
      />
    </svg>
  );
}

export default Compare;
