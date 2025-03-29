import Image1 from "../assets/images/Image 18.png"

export default function About() {
  return (
    <section className="container mx-auto px-6 py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* Left Section: Text Content */}
        <div>
          <h2 className="text-4xl font-bold text-gray-900">About us</h2>
          <p className="text-gray-600 mt-4">
            Aliqua consectetur laborum anim anim quis elit sit cupidatat ipsum cupidatat nostrud adipiscing.
          </p>
          <div className="mt-6 space-y-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-900">Innovation</h3>
              <p className="text-gray-600">
                We are pioneers in our field, constantly exploring new ideas and pushing boundaries.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900">Customer-Centric</h3>
              <p className="text-gray-600">
                Our clients are at the heart of everything we do. We are committed to delivering value and exceeding expectations.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900">Expertise</h3>
              <p className="text-gray-600">
                Our team consists of industry experts who bring a wealth of knowledge and experience to each project.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900">Integrity</h3>
              <p className="text-gray-600">
                We operate with the highest level of integrity, ensuring transparency, honesty, and ethical conduct in all our endeavors.
              </p>
            </div>
          </div>
        </div>

        {/* Right Section: Image */}
        <div className="flex justify-center">
          <img
            src={Image1} // Replace with your image path
            alt="Team working together"
            width={500}
            height={350}
            className="rounded-lg shadow-lg"
          />
        </div>
      </div>
      <p className="text-gray-500 text-sm mt-8">Made with <span className="font-bold">Visily</span></p>
    </section>
  );
}
