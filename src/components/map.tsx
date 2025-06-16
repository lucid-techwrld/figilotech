import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import markerIcon2x from "leaflet/dist/images/marker-icon-2x.png";
import markerIcon from "leaflet/dist/images/marker-icon.png";
import markerShadow from "leaflet/dist/images/marker-shadow.png";

delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: markerIcon2x as string,
  iconUrl: markerIcon as string,
  shadowUrl: markerShadow as string,
});

type companyLocationType = {
  lat: number;
  lng: number;
  name: string;
  address: string;
  phone: string;
};

const companyLocation: companyLocationType = {
  lat: 6.6197,
  lng: 3.5079,
  name: "Figilotech",
  address:
    "3B Ojokoro Road, Eyita, Opp Ile-Epo Oba, Sabo Ikorodu, Lagos, Nigeria",
  phone: "+234 703 860 5421",
};

const CompanyMap = () => {
  return (
    <div className="rounded-xl overflow-hidden shadow-md">
      <MapContainer
        center={[companyLocation.lat, companyLocation.lng]}
        zoom={15}
        style={{ height: "400px", width: "100%" }}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a>'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[companyLocation.lat, companyLocation.lng]}>
          <Popup>
            <strong>{companyLocation.name}</strong>
            <br />
            {companyLocation.address}
          </Popup>
        </Marker>
      </MapContainer>
      <a
        href="https://www.google.com/maps?q=6.6197,3.5079"
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-500 underline mt-2 block"
      >
        View on Google Maps
      </a>
    </div>
  );
};

export default CompanyMap;
