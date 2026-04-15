'use client';

import dynamic from 'next/dynamic';

const Map = dynamic(() => import('./MapView'), {
  ssr: false,
  loading: () => <div style={{ height: '250px', width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#111', borderRadius: '12px', color: '#888' }}>Chargement de la carte...</div>
});

export default function ServiceMap() {
  return <Map />;
}
