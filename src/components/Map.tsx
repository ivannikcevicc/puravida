


const Map = () => {
    const mapUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3137.2811836828436!2d18.900477015812814!3d42.23433537919319!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x134df9c9df8f9f3f%3A0x1071dbf9bdfbdfcd!2sDrobni%20pijesak!5e0!3m2!1sen!2s!4v1659176743765!5m2!1sen!2s&t=k&z=18&output=embed&hl=en";

    return (
      <div className="relative w-full h-[40rem] mt-0">
        <iframe
          src={mapUrl}
          width="100%"
          height="100%"
          allowFullScreen={true}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="absolute inset-0 border-0"
        ></iframe>
      </div>
    );
  };
  
  export default Map;