'use client'
import { useEffect } from 'react';
import ComingSoon from '../components/ComingSoon';

export default function Page() {

  useEffect(() => {
    (async () => {
      const { default: LocomotiveScroll } = await import('locomotive-scroll');
      const locomotiveScroll = new LocomotiveScroll();
    })();
  }, []);

  return (
    <div className="site-body">
      <ComingSoon />
    </div>
  );
}