import React, { ReactNode, FC } from 'react';

type Props = {
  children?: ReactNode;
  title?: string;
};

const Layout: FC<Props> = ({ children, title = 'This is the default title' }: Props) => (
  <React.Fragment>
    <title>{title}</title>
    {children}
  </React.Fragment>
);

export default Layout;
