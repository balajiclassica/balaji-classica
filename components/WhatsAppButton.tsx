"use client";

export default function WhatsAppButton() {
  const phoneNumber = "918451006431";
  const message = encodeURIComponent(
    "Hi I need to know details about the Balaji Classica project"
  );
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

  return (
    <>
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with us on WhatsApp"
        className="whatsapp-float"
      >
        {/* WhatsApp SVG Icon */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 48 48"
          width="28"
          height="28"
          fill="white"
          aria-hidden="true"
        >
          <path d="M4.868 43.303l2.694-9.835a18.863 18.863 0 01-2.527-9.457C5.038 13.366 13.908 4.5 24.563 4.5c5.17.002 10.027 2.014 13.678 5.671a19.212 19.212 0 015.657 13.694c-.003 10.655-8.873 19.52-19.528 19.52a19.525 19.525 0 01-9.33-2.373L4.868 43.303zm10.718-6.19l.594.352a16.208 16.208 0 008.39 2.326c8.935 0 16.208-7.268 16.21-16.202a16.077 16.077 0 00-4.727-11.444 16.074 16.074 0 00-11.44-4.736c-8.942 0-16.215 7.267-16.217 16.2a16.17 16.17 0 002.524 8.71l.393.624-1.668 6.092 6.94-1.922z" />
          <path d="M19.938 14.935c-.372-.826-.763-.843-1.117-.857-.29-.012-.62-.011-.95-.011s-.868.124-1.322.62c-.455.496-1.735 1.695-1.735 4.133 0 2.438 1.776 4.794 2.024 5.124.249.33 3.43 5.49 8.468 7.479 4.188 1.651 5.04 1.323 5.95 1.24.908-.083 2.93-1.198 3.344-2.354.414-1.157.414-2.148.29-2.354-.124-.207-.454-.33-.95-.579-.495-.248-2.932-1.447-3.387-1.612-.455-.165-.786-.248-1.116.248-.33.496-1.28 1.612-1.569 1.942-.289.33-.579.372-1.074.124-.496-.248-2.094-.77-3.99-2.462-1.475-1.316-2.47-2.94-2.759-3.437-.29-.496-.031-.765.218-1.012.223-.222.496-.579.744-.868.248-.29.33-.496.496-.827.165-.33.083-.62-.041-.868-.124-.249-1.1-2.699-1.528-3.69z" />
        </svg>

        {/* Tooltip label */}
        <span className="whatsapp-tooltip">Chat with us</span>
      </a>

      <style jsx>{`
        .whatsapp-float {
          position: fixed;
          bottom: 28px;
          right: 28px;
          z-index: 9999;
          width: 58px;
          height: 58px;
          background: linear-gradient(135deg, #25d366 0%, #128c7e 100%);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 6px 20px rgba(37, 211, 102, 0.45),
            0 2px 8px rgba(0, 0, 0, 0.2);
          transition: transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1),
            box-shadow 0.3s ease;
          text-decoration: none;
          cursor: pointer;
        }

        .whatsapp-float::before {
          content: "";
          position: absolute;
          inset: -3px;
          border-radius: 50%;
          border: 2px solid rgba(37, 211, 102, 0.35);
          animation: whatsapp-pulse 2.2s ease-in-out infinite;
          pointer-events: none;
        }

        .whatsapp-float:hover {
          transform: scale(1.12) translateY(-3px);
          box-shadow: 0 10px 28px rgba(37, 211, 102, 0.55),
            0 4px 12px rgba(0, 0, 0, 0.25);
        }

        .whatsapp-float:hover .whatsapp-tooltip {
          opacity: 1;
          transform: translateY(0) scale(1);
          pointer-events: auto;
        }

        .whatsapp-tooltip {
          position: absolute;
          right: calc(100% + 14px);
          top: 50%;
          transform: translateY(-50%) translateY(4px) scale(0.95);
          background: #1a1a1a;
          color: #fff;
          font-size: 12px;
          font-weight: 500;
          white-space: nowrap;
          padding: 6px 12px;
          border-radius: 6px;
          opacity: 0;
          transition: opacity 0.25s ease, transform 0.25s ease;
          pointer-events: none;
          letter-spacing: 0.02em;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);
        }

        .whatsapp-tooltip::after {
          content: "";
          position: absolute;
          top: 50%;
          right: -5px;
          transform: translateY(-50%);
          border-width: 5px 0 5px 6px;
          border-style: solid;
          border-color: transparent transparent transparent #1a1a1a;
        }

        @keyframes whatsapp-pulse {
          0%,
          100% {
            opacity: 0.6;
            transform: scale(1);
          }
          50% {
            opacity: 0;
            transform: scale(1.4);
          }
        }

        /* Mobile adjustments */
        @media (max-width: 640px) {
          .whatsapp-float {
            bottom: 20px;
            right: 20px;
            width: 52px;
            height: 52px;
          }

          .whatsapp-tooltip {
            display: none;
          }
        }
      `}</style>
    </>
  );
}
