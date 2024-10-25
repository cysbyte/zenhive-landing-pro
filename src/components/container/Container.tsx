import { ReactNode } from 'react';

const Container = ({children}: {children: ReactNode}) => {
    return (
        <section className="max-w-[1920px] mx-auto px-0">
          {children}
        </section>
      );
}

export default Container