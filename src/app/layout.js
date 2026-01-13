import "../../public/css/style.css"
import Footer from "./component/comman/Footer";
import Header from "./component/comman/Header";




export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className="bg-">
      <Header/>
        {children}
      <Footer/>
      </div>

     </body>
    </html>
  );
}
