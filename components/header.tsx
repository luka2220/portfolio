'use client';

import { DynamicIcon } from 'lucide-react/dynamic';
import React, { useState } from 'react';

type Theme = 'sun' | 'moon';

export default function Header() {
  const [theme, setTheme] = useState<Theme>('sun');

  function updateTheme() {
    setTheme((prevTheme) => (prevTheme === 'sun' ? 'moon' : 'sun'));
  }

  return (
    <header>
      <div>
        <h1></h1>
      </div>
      <div>
        <DynamicIcon name={theme} onClick={updateTheme} />
      </div>
    </header>
  );
}
