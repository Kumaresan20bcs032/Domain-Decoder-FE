import { FaFacebook, FaTwitter, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const DashBoard = () => {
  return (
    <>
      <main
        className="min-h-screen bg-gradient-to-b from-cyan-50 to-white dark:from-gray-900 dark:to-gray-800 px-6 pt-32 pb-20"
        style={{ fontFamily: "'Inter', sans-serif" }}
      >
        <div className="max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center gap-12">
          {/* Left Content */}
          <div className="flex-1 space-y-8">
            <h1
              className="text-5xl font-extrabold text-teal-700 dark:text-teal-400 leading-tight"
              style={{ fontFamily: "'Poppins', sans-serif" }}
            >
              Welcome to <br />
              <span className="text-cyan-600">Domain Decoder</span> <br />
              by XYZ Company
            </h1>
            <p className="text-gray-700 dark:text-gray-300 text-lg max-w-xl">
              Effortlessly analyze and decode domain information using our intuitive tools.
              Empower your business with real-time DNS lookups and SSL certificate insights,
              all wrapped in a seamless experience.
            </p>
            <div className="flex flex-wrap gap-6">
              <div className="bg-white/40 dark:bg-gray-900/40 backdrop-blur-md rounded-lg p-6 shadow-lg w-full sm:w-64">
                <h3
                  className="text-xl font-semibold text-teal-700 dark:text-teal-300 mb-2"
                  style={{ fontFamily: "'Poppins', sans-serif" }}
                >
                  Fast & Reliable
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Quickly retrieve domain and SSL data with minimal latency.
                </p>
              </div>
              <div className="bg-white/40 dark:bg-gray-900/40 backdrop-blur-md rounded-lg p-6 shadow-lg w-full sm:w-64">
                <h3
                  className="text-xl font-semibold text-teal-700 dark:text-teal-300 mb-2"
                  style={{ fontFamily: "'Poppins', sans-serif" }}
                >
                  Secure & Accurate
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  We prioritize data accuracy and security for your peace of mind.
                </p>
              </div>
              <div className="bg-white/40 dark:bg-gray-900/40 backdrop-blur-md rounded-lg p-6 shadow-lg w-full sm:w-64">
                <h3
                  className="text-xl font-semibold text-teal-700 dark:text-teal-300 mb-2"
                  style={{ fontFamily: "'Poppins', sans-serif" }}
                >
                  User-Friendly
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Clean, modern UI to simplify complex technical details.
                </p>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="flex-1 flex justify-center">
            <img
              src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=600&q=80"
              alt="Domain and network concept"
              className="rounded-xl shadow-2xl max-w-full h-auto"
              loading="lazy"
            />
          </div>
        </div>

        {/* Additional Info Section */}
        <section className="mt-24 max-w-5xl mx-auto text-center space-y-8">
          <h2
            className="text-3xl font-bold text-teal-700 dark:text-teal-400"
            style={{ fontFamily: "'Poppins', sans-serif" }}
          >
            Why Choose Domain Decoder?
          </h2>
          <p className="text-gray-700 dark:text-gray-300 text-lg max-w-3xl mx-auto">
            Understanding your domain's DNS settings and SSL certifications has never
            been easier. Our tools help you gain valuable insights, improve security,
            and troubleshoot with confidence.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-12 mt-8">
            <div>
              <img
                src="https://cdn-icons-png.flaticon.com/512/831/831276.png"
                alt="Speed icon"
                className="mx-auto w-20 h-20 mb-4"
                loading="lazy"
              />
              <h3
                className="text-xl font-semibold text-teal-700 dark:text-teal-300"
                style={{ fontFamily: "'Poppins', sans-serif" }}
              >
                Lightning Fast
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mt-2">
                Instantaneous DNS and SSL data retrieval.
              </p>
            </div>
            <div>
              <img
                src="https://cdn-icons-png.flaticon.com/512/565/565547.png"
                alt="Shield icon"
                className="mx-auto w-20 h-20 mb-4"
                loading="lazy"
              />
              <h3
                className="text-xl font-semibold text-teal-700 dark:text-teal-300"
                style={{ fontFamily: "'Poppins', sans-serif" }}
              >
                Security Focused
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mt-2">
                Built with strong emphasis on data security and privacy.
              </p>
            </div>
            <div>
              <img
                src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
                alt="User friendly icon"
                className="mx-auto w-20 h-20 mb-4"
                loading="lazy"
              />
              <h3
                className="text-xl font-semibold text-teal-700 dark:text-teal-300"
                style={{ fontFamily: "'Poppins', sans-serif" }}
              >
                Easy to Use
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mt-2">
                Intuitive interfaces designed for all technical levels.
              </p>
            </div>
          </div>
        </section>
      </main>

      {/* Footer full width */}
      <footer className="mt-32 bg-teal-900 dark:bg-gray-900 text-white py-12 w-full">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <p>1234 Domain St, Tech City, TX 75001</p>
            <p>Phone: (123) 456-7890</p>
            <p>Email: support@xyzcompany.com</p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Follow Us</h3>
            <div className="flex gap-6 text-2xl">
              <a
                href="https://facebook.com"
                aria-label="Facebook"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-cyan-400"
              >
                <FaFacebook />
              </a>
              <a
                href="https://twitter.com"
                aria-label="Twitter"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-cyan-400"
              >
                <FaTwitter />
              </a>
              <a
                href="https://linkedin.com"
                aria-label="LinkedIn"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-cyan-400"
              >
                <FaLinkedin />
              </a>
              <a
                href="mailto:support@xyzcompany.com"
                aria-label="Email"
                className="hover:text-cyan-400"
              >
                <FaEnvelope />
              </a>
            </div>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">About Domain Decoder</h3>
            <p>
              Domain Decoder is your trusted tool for analyzing domain and SSL certificate data with speed, accuracy, and security.
            </p>
          </div>
        </div>
        <p className="text-center mt-8 text-sm text-gray-300">
          © {new Date().getFullYear()} XYZ Company. All rights reserved.
        </p>
      </footer>
    </>
  );
};

export default DashBoard;
