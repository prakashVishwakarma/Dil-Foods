import React from 'react';

type RouteProps = {
  dashboard: string;
  create: string;
  edit: () => string;
  details: () => string;
}

const Header: React.FC<{ route: RouteProps }> = ({ route }) => {
  console.log(route);
  return (
    <div>
      Header
    </div>
  );
}

export default Header;


// import React from 'react'

// type routeProps = {
//   dashboard: string;
//   create: string;
//   edit: () => string;
//   details: () => string;
// }

// const Header = ({ route }: routeProps) => {
//   console.log(route)
//   return (
//     <div>
//       Header
//     </div>
//   )
// }

// export default Header
