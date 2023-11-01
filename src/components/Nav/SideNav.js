import React, { useState } from 'react';
import { EuiSideNav, htmlIdGenerator } from '@elastic/eui';

const SideNav = () => {
  const [isSideNavOpenOnMobile, setisSideNavOpenOnMobile] = useState(false);
  const toggleOpenOnMobile = () => {
    setisSideNavOpenOnMobile(!isSideNavOpenOnMobile);
  };
  const sideNav = [
    {
      name: '10/20/2023',
      id: htmlIdGenerator('basicExample')(),
      items: [
        {
          name: 'Bol Bol may be on the chopping block',
          id: htmlIdGenerator('basicExample')(),
          onClick: () => {},
        },
        {
          name: 'Injury Conerns?',
          id: htmlIdGenerator('basicExample')(),
          href: '#/navigation/side-nav',
        },
      ],
    },
    {
      name: '10/15/2023',
      id: htmlIdGenerator('basicExample')(),
      items: [
        {
          name: 'Booker ranked top SG in the league by executive poll',
          id: htmlIdGenerator('basicExample')(),
          onClick: () => {},
          isSelected: true,
        },
        {
          name: 'Summer League begins next week',
          id: htmlIdGenerator('basicExample')(),
          disabled: true,
        },
      ],
    },
  ];
  return (
    <EuiSideNav
      truncate={false}
      heading="Recent Sunny Times Articles"
      toggleOpenOnMobile={() => toggleOpenOnMobile()}
      isOpenOnMobile={isSideNavOpenOnMobile}
      style={{ width: 392, borderLeft: "1px solid grey", padding: 40, height: "100%" }}
      items={sideNav}
    />
  );
};


export default SideNav;