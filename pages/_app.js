// import "../styles/globals.css";
// import Head from "next/head";
// import { ApolloProvider } from "@apollo/client";
// import { CssBaseline } from "@material-ui/core";
// import PropTypes from "prop-types";
// import client from "./api/apollo-client";
// import React from "react";

import { Divider } from "@material-ui/core";

// //Base aplication function to wrap React functionality over ApolloClient to serve to Page rendering
// export default function MyApp({ Component, pageProps }) {
//   React.useEffect(() => {
//     const jssStyles = document.querySelector("#jss-server-side");
//     if (jssStyles) {
//       jssStyles.parentElement.removeChild(jssStyles);
//     }
//   }, []);

//   return (
//     <React.Fragment>
//       <ApolloProvider client={client}>
//         <CssBaseline />
//         <div style={{ paddingTop: "15px" }}>
//           <Head>
//             <title>Full Stack Inkwell</title>
//             <meta
//               name="viewport"
//               content="minimum-scale=1, initial-scale=1, width=device-width"
//             />
//           </Head>
//           <Component {...pageProps} />
//         </div>
//       </ApolloProvider>
//     </React.Fragment>
//   );
// }

// MyApp.propTypes = {
//   Component: PropTypes.elementType.isRequired,
//   pageProps: PropTypes.object.isRequired,
// };

export default function app() {
  return <title>Full Stack Inkwell</title>;
}
