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
<<<<<<< HEAD:frontend/src/components/Nav/SideNav.js
      truncate={true}
      heading="Recent Sunny Times Articles"
      toggleOpenOnMobile={() => toggleOpenOnMobile()}
      isOpenOnMobile={isSideNavOpenOnMobile}
      style={{ width: 330, borderLeft: "1px solid grey", padding: 30, height: "100%" }}
=======
      truncate={false}
      heading="Recent Sunny Times Articles"
      toggleOpenOnMobile={() => toggleOpenOnMobile()}
      isOpenOnMobile={isSideNavOpenOnMobile}
      style={{ width: 392, borderLeft: "1px solid grey", padding: 40, height: "100%" }}
>>>>>>> main:src/components/Nav/SideNav.js
      items={sideNav}
    />
  );
};


export default SideNav;