import { Helmet } from 'react-helmet';
import { BrowserRouter as Router, Routes, Route, } from 'react-router-dom';
import HomePage from "./Pages/HomePage/HomePage.jsx"
import Error from "./Pages/Error/Errorpage.jsx"
import Footer from "./Component/Footer/Footer.jsx"
import Header from "./Component/Header/Header.jsx"
import Stars from "./Component/Background/stars.jsx";

function App() {
  return(
    <Router>
      <Helmet>
        <title>adriendev</title>
        <meta name="description" content="adrien, developpeur frontend. Services : website" />
        <meta name="keywords" content="website, frontend, react, javascript, htnml, css, developpeur" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta charset="UTF-8" />
        <meta property="og:type" content="Website" />
        <meta property="og:title" content="adriendev" />
        <meta property="og:description" content="adrien, developpeur frontend. Services : website" />
        <meta property="og:url" content="" />
        <meta property="og:image" content="" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="adriendev" />
        <meta name="twitter:description" content="adrien, developpeur frontend. Services : website" />
        <meta name="twitter:image" content="" />
        <script type="application/ld+json">
        {`
          {
            "@context": "http://schema.org",
            "@type": "Devlopper",
            "name": "adriendev",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": ",
              "addressLocality": "",
              "postalCode": "",
              "addressCountry": "FR",
              "addressRegion": " Nouvelle-Aquitaine"
            },
            "telephone": "",
            "openingHours": "Mo-Fr 10:00-19:00",
            "priceRange": "$$",
            "image": ""
          }
        `}
        </script>
      </Helmet>
      <Stars />
      <Header />      
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App